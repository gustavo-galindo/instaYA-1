import React from 'react'

import { Link } from 'react-router-dom'

const Registro = () => {
  return (
    <div className="container">
        
       {/*  <!-- Outer Row --> */}
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                       {/*  <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-registro-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    
                                    <form className="">

                                        <div className="form-group col-lg-8">
                                            <input type="user" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Nombre completo"/>
                                        </div>
                                        
                                        <div className="form-group col-lg-8">
                                            <input type="user" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Usuario"/>
                                        </div>
                                        <div className="form-group col-lg-8">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword1" placeholder="Ingrese una Contraseña"/>
                                        </div>
                                        <div className="form-group col-lg-8">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword2" placeholder="Confirmar Contraseña "/>
                                        </div>
                                        <div className="form-group col-lg-8">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputPassword2" placeholder="Correo@correo.corr"/>
                                        </div>
                                       <div className="form-group col-lg-6">
                                       <Link to="/Home" relative='/' className="  btn btn-primary  btn-block bg-instaya">
                                            Registrarse
                                        </Link>
                                       </div>
                                        
                                        
                                        
                                    </form>
                                    
                                    
                                    <div className="text-center">

                                    <Link to="/"  className="small">
                                    Cancelar registro
                                    </Link>
                                       
                                    </div>
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

export default Registro