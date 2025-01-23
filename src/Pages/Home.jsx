import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import photo from '../assets/homelogo.png'
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import { homeProjectApi } from '../service/allApi'


function Home() {
    const [isLogin, setIsLogin] = useState(false)
    const [homeProject, setHomeProject] = useState([])

    const getHomeProject = async () => {
        const result = await homeProjectApi()
        // console.log(result);
        setHomeProject(result.data)
    }
    console.log(homeProject);


    useEffect(() => {
        getHomeProject()
        if (sessionStorage.getItem("token")) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    }, [])

    return (
        <>
            <div style={{ height: "100vh" }} className='bg-success'>

                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 mt-5">
                            <h1 className='text-light' style={{ fontSize: "70px" }}>Project fair</h1>
                            <p>One stop destinatio for all software development Projects</p>


                            {isLogin == false ?
                                <Link to={'/login'}><button className='btn text-light p-1 mt-3'>Get started <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                                :
                                <Link to={'/dashboard'}><button className='btn text-light p-1 mt-3'>Mange Projects <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                            }

                        </div>
                        <div className="col-md-6 mt-5">
                            <img src={photo} alt="no image" className='w-75' />
                        </div>
                    </div>
                </div>
            </div>
            {/* explore our projects */}
            <div>
                <h2 className='text-center mt-5'>Explore Our Projects</h2>
                <div className="container">
                <div className="row mt-5">
                    {
                        homeProject?.map((item) => (
                            
                                <div className="col-md-4"><ProductCard project={item} /></div>
                           
                        ))
                        }
                         </div>
                </div>
                <Link to={'/projects'} className='text-danger'> <p className='text-center mt-5'>See more Projects...</p></Link>
            </div>
        </>



    )
}

export default Home