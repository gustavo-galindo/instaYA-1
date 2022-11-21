import React from 'react'

import Navbar from './Navbar'

const Base = () => {
  return (
    <div >
    <div className="row justify-content-center  ">
        <div className="col-xl-10 col-lg-12 col-md-9  ">
            <div className="card o-hidden border-0 shadow-lg ">
                <div className="card-body-instaya p-0 ">
                        {/*  <!-- Nested Row within Card Body --> */}
                        <Navbar/>
                    <div className="row">
                        <div className="col-lg-1 d-none d-lg-block bg-instaya"></div>
                            <div className="col-lg-11 " >
                                
                                
                            </div>
                        </div>
                    </div>


            </div>
        </div>
        </div>
        </div>
  )
}

export default Base