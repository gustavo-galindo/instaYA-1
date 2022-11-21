import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className="w-75 " >
        <div className='table-responsive bg-light'>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ORDEN</th>
                <th scope="col">Fecha</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Dirección</th>
                <th scope="col">Estado</th>
                <th scope="col">Accion</th>
                



                </tr>
            </thead>
            <tbody className="table-group-divider">
                <tr>
                <th scope="row">2125320495</th>
                <td>10/9/2022</td>
                <td>Cartagena</td>
                <td>Kr 6 # 25 -64</td>
                <td>Entregado</td>
                <td>Ver detalle</td>

                </tr>
                <tr>
                <th scope="row">2125963486</th>
                <td>12/11/2022</td>
                <td>Barranquilla</td>
                <td>Calle 19D # 45 -164</td>
                <td>Entregado</td>
                <td>Ver detalle</td>
                </tr>
                <tr>
                <th scope="row">2178582243</th>
                <td>19/11/2022</td>
                <td>Cienaga</td>
                <td>Kr 21 #16-23</td>
                <td>En Procesamiento</td>
                <td>
                  <Link to="/Edit" relative="/">Editar</Link>
                </td>
                </tr>
            </tbody>
        </table>

            
        </div>
        

        


    </div>
  )
}

export default Main