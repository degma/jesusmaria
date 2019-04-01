import React from 'react';

const pagos = props => {
    return (
        <React.Fragment>
            <div className="card mt-1">
                <div className="card-header text-center">
                    Pagos/Cobros anteriores
                </div>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Importe</th>
                            <th scope="col">Comentarios</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.movimientos.map(movimiento => 
                                <tr key={movimiento.id}>
                                    <th scope="row">{movimiento.nro} (vs {movimiento.nombre})</th>
                                    <td>{(movimiento.id_operacion === 1) ? (<p className="text-success">${movimiento.importe}</p> ) : (<p className="text-danger">$-{movimiento.importe}</p>)}</td>
                                    <td>{movimiento.comentarios}</td>
                                    <td></td>
                                </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </React.Fragment>
    );


}

export default pagos;