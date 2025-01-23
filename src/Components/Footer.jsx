import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
<div className='p-5 bg-success mt-5'>
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-4 mt-4 mt-md-0">
                <h3 className='text-light'><FontAwesomeIcon icon={faStackOverflow} />Project Fair</h3>
                <p className='mt-3' style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, asperiores accusamus. Ea ex enim illo distinctio, deleniti animi facilis ullam sequi officia nulla nostrum doloribus autem necessitatibus dolor. Harum, earum.</p>
            </div>
            <div className="col-md-2 mt-4 mt-md-0">
                <h3 className='text-light'>Guides</h3>
                <div className='p-3'>
                    <p>Home</p>
                    <p>Project</p>
                    <p>Dashboard</p>
                </div>
               
            </div>
            <div className="col-md-2 mt-4 mt-md-0">
                <h3 className='text-light'>Links</h3>
                <div className='p-3'>
                    <p>React</p>
                    <p>React bootstrap</p>
                    <p>Bootswatch</p>
                </div>
            </div>
            <div className="col-md-4 px-md-5 mt-4 mt-md-0">
                <h3 className='text-light'>Contact Us</h3>
               <div className='d-flex mt-3'>
                <input type="text" placeholder='E-mail Id' className='form-control rounded' /> 
                <button className='btn btn-warning ms-3'>Subscribe</button>
                </div>
                <div className='d-flex justify-content-between  mt-3 text-light'>
                <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
                <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
                <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
                <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer