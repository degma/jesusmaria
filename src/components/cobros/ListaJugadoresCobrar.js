import React from 'react';

const listaJugadorCobrar = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Jugador</th>
                    <th scope="col">Pagó</th>
                    <th scope="col">Deuda</th>
                    <th scope="col"></th>
                
                </tr>
            </thead>
            <tbody>
                {props.jugadores.map(jugador =>
                    <tr key={jugador.id_jugador}>
                        <td>{(jugador.Deuda && jugador.Pago >0 ) ? (<i class="fa fa-check-circle text-success"></i>):("") } {jugador.apellido}, {jugador.nombre} ({jugador.apodo})</td>
                        <td>${jugador.Pago}</td>
                        <td>
                            {(jugador.Deuda < 0) ? (<p className="text-danger">${jugador.Deuda}</p>):
                            (jugador.Deuda  > 0) ? (<p className="text-success">${jugador.Deuda} (a favor)</p>): 
                            (<p className="text-success">${jugador.Deuda}</p>)
                            }
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