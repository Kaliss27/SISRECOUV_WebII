import React from 'react';
import Table from 'react-bootstrap/Table';

export default function ActTC1(props) {
    return (
        <React.Fragment>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Descripcion</th>
                        <th>Fecha y hora de inicio</th>
                        <th>Fecha y hora de fin</th>
                        <th>Estado</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>

        );

}