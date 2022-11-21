import React from 'react'
import { Link } from 'react-router-dom'
import Main from './Main'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="row justify-content-center  ">
      
        <div className="col-xl-10 col-lg-10 col-md-9 ">
            <div className="card o-hidden border-0 shadow-lg ">
                <div className="card-body-instaya p-0  bg-fondo">
                  {/*  <!-- Nested Row within Card Body --> */}
                      <Navbar/>
                      <br></br>
                      <br></br>
                      <div className="row justify-content-center mt-3  ">
                        <Main/>
                        <div className=' container text-right   ' >
                          
                          <Link to="/Add" relative="/"> 
                          <button className='btn-primary bg-instaya mr-5 mt-5'>
                            + Agregar Pedido
                          </button>

                          </Link>
                       </div>
                      </div>

                      

                    
                    
                </div>
            </div>
        </div>
    </div>
   
    
        


    

  )
}

export default Home