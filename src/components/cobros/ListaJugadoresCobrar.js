import React from 'react';

const listaJugadorCobrar = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Jugador</th>
                    <th scope="col">Pagó</th>
                    <th scope="col">Debe</th>
                    <th scope="col"></th>
                
                </tr>
            </thead>
            <tbody>
                {props.jugadores.map(jugador =>
                    <tr key={jugador.id_jugador}>
                        <td>{(+jugador.Pago >= jugador.Debe && jugador.Pago >0 ) ? (<i class="fa fa-check-circle text-success"></i>):("") } {jugador.apellido}, {jugador.nombre} ({jugador.apodo})</td>
                        <td>${jugador.Pago}</td>
                        <td>{(jugador.Pago - jugador.Debe) < 0 ? 
                            (<p className="text-danger">${jugador.Pago - jugador.Debe}</p>):(<p className="text-success">${jugador.Pago - jugador.Debe}</p>)}
                        </td>
                        <td>
                            <button type="button" onClick={() => props.cobrarJugador(jugador)} className="btn btn-primary">
                                <i className="fa fa-pencil">Cobrar</i>
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )

}

export default listaJugadorCobrar;