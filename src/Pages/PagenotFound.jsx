import React from 'react'

function PagenotFound() {
  return (
    <div>
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
                    <img className='w-50' src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="Page Not Found" />
                    <h1>Look like your're  lost</h1>
                    <h4 className='mt-3'>The page you are looking is unavilable</h4>
                   <Link to={'/'}><button className='btn btn-success rounded mt-4'>Go Home</button></Link>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </div>
  )
}

export default PagenotFound
