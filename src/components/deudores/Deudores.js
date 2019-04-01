import React  from 'react';

const deudores = props => {
    return (
        <React.Fragment>
            <table className="table table-sm">
                <thead>
                    <tr className="table-danger">
                        <th scope="col">Jugador</th>
                        <th scope="col">Deuda del Torneo</th>
                        
                    </tr>
                </thead>
                <tbody className="text-danger">
                    {props.deudores.map(deudor =>
                        <tr key={deudor.apellido}>
                            <th scope="row">{deudor.apellido}, {deudor.nombre}</th>
                            <td>$ {deudor.deuda}</td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
        </React.Fragment>
    );


}

export default deudores;