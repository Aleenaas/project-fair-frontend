import React, {useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import { addProjectApi } from '../service/allApi';
import 'react-toastify/dist/ReactToastify.css';
import { addResponseContext } from '../context/ContextShare';



function Addproject() {
  const [show, setShow] = useState(false);
  //useContext used for accessig context (hook)
  const {setAddResponse} = useContext(addResponseContext)

  const [preview, setPreview] = useState("")
  const [token, setToken] = useState("")
  console.log(token);
  const [key, setKey] = useState(1)



  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    projectImage: ""
  }

  )

  console.log(projectDetails);

  const handleFile = (e) => {
    // console.log(e.target.files);
    setProjectDetails({ ...projectDetails, projectImage: e.target.files[0]})

  }

  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }

  }, [projectDetails.projectImage])

  const handleCancel = () => {
    setProjectDetails({
      title: "",
      language: "",
      github: "",
      website: "",
      overview: "",
      projectImage: ""
    })
    setPreview("")
    if(key==1){
      setKey(0)
    }else{
      setKey(1)
    }
  }


  const handleClose = () => {
    setShow(false)
    handleCancel()
  }

  const handleAdd = async() => {
    const { title, language, github, website, overview, projectImage } = projectDetails
    if (!title || !language || !github || !website || !overview || !projectImage) {
      toast.info(`Fill the form completly`)
    } else {
      //append()
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("projectImage", projectImage)

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await addProjectApi(reqBody, reqHeader)
        console.log(result);
        
        if(result.status == 200){
          toast.success(`project Added successfuly`)
          setTimeout(()=>{
            handleClose()
          },2000)
            
          setAddResponse(result)

        }else if(result.status == 406){
          toast.warning(result.response.data)
          handleCancel()
        }else{
          toast.error(`something went wrong`)
          handleClose()
        }

      } else {
        toast.warning(`please Login`)
      }
    }
  }

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setToken(sessionStorage.getItem("token"))
    }
  },[])

  const handleShow = () => setShow(true);
  return (
    <>
      <button className='btn btn-success' onClick={handleShow}>Addproject</button>

      <Modal centered show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="projectfile">
                  <input type="file" id='projectfile' className='d-none' key={key} onChange={(e) => handleFile(e)} />
                  <img src={preview ? preview : "https://icons.iconarchive.com/icons/graphicloads/long-shadow-documents/256/document-add-icon.png"} alt="" className='w-100' />
                </label>
              </div>
              <div className="col-md-6">
                <div className='mt-3'>
                  <input type="text" placeholder='Title' value={projectDetails.title} className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} />
                </div>
                <div className='mt-3'>
                  <input type="text" placeholder='Language' value={projectDetails.language} className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} />
                </div>
                <div className='mt-3'>
                  <input type="text" placeholder='Github' value={projectDetails.github} className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} />
                </div>
                <div className='mt-3'>
                  <input type="text" placeholder='Website' value={projectDetails.website} className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} />
                </div>
                <div className='mt-3'>
                  <textarea rows={5} placeholder='Overview' value={projectDetails.overview} className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} ></textarea>
                </div>

              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Project
          </Button>
        </Modal.Footer>
         <ToastContainer position='top-center' autoClose={2000} theme="colored"/>
      </Modal>
      
    </>
  )
}

export default Addproject