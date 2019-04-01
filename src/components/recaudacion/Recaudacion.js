import React  from 'react';

const recaudacion = props => {
    return (
        <React.Fragment>
            <table className="table table-sm">
                <thead>
                    <tr className="table-info">
                        <th scope="col">Fecha</th>
                        <th scope="col">Total Recaudado</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {props.recaudacion.map(recaudado =>
                        <tr key={recaudado.nro}>
                            <th scope="row">Fecha {recaudado.nro}: vs {recaudado.equipo}</th>
                            <td>$ {recaudado.recaudacion}</td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
        </React.Fragment>
    );


}

export default recaudacion;