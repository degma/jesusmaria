import React from 'react';

const listaJugadorCobrar = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Jugador</th>
                    <th scope="col">Pagó?</th>

                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {props.jugadores.map(jugador =>
                    <tr key={jugador.id}>
                        <td>{jugador.camiseta}</td>
                        <td>{jugador.apellido}</td>
                        <td>SI</td>
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