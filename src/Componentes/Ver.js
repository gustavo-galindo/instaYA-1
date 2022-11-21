import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Ver = () => {
  return (
    <div>
             <div className="row justify-content-center  ">
        <div className="col-xl-10 col-lg-12 col-lg-9  ">
            <div className="card o-hidden border-0 shadow-lg ">
                <div className="card-body-instaya p-0 bg-fondo">
                    <Navbar/>                    
                    <div className="container justify-content-center col-lg-6" >
                      
                            <div className="card mb-3  ">
                                <h3 className="text-center mt-5">ORDEN 2178582243 </h3>
                                <div className="card-body ">
                                
                                <h5>Fecha Solicitud de recogida: </h5><h6>19/11/2022</h6>
                                <h5>Fecha de recogida: </h5><h6>20/11/2022</h6>
                                <h5>Fecha de Entrega: </h5><h6>20/11/2022</h6>
                                <h5>Entregado a: </h5><h6>Juan Carlos Garcia CC 1.256.369.963</h6>
                                <h5>Dimensiones: </h5><h6>10cm x 20cm x 40cm  - 5.00 Kg</h6>
                                
                                
                                
                                </div>
                            </div>
                       
                    </div>

                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Ver