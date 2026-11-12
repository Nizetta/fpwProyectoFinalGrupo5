import alumnos from '../data/alumno.json';
import {Table} from 'react-bootstrap';

const Alumno = () => {
  return (
    <div>
        <h1 className='titulo' >GRUPO 5</h1>
        <Table className="table-alumno">
            <thead>
                <tr>
                    <th scope="col">Alumno</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {alumnos.map((alumno) => (
                    <tr key={alumno.email}>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.email}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default Alumno;