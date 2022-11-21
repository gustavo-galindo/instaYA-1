import React from 'react'
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="container">
        
       {/*  <!-- Outer Row --> */}
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                       {/*  <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        
                                        <h1 className="h4 text-gray-900 mb-4">Bienvenido ! </h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Usuario"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Contraseña"/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                <label className="custom-control-label" htmlFor="customCheck">Recordar</label>
                                            </div>
                                        </div>
                                        
                                        <Link to="/Home" relative='/' className="btn btn-primary btn-user btn-block bg-instaya">
                                            Ingresar
                                        </Link>
                                        
                                    </form>
                                    <hr></hr>
                                    
                                    <div className="text-center">

                                    <Link to="/Registro" relative="/" className="small">
                                    Si no cuentas con un usuario, Registrate!
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

export default Login