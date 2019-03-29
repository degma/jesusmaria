import React from 'react';
import './Jugador.css';

const jugadorRow = props => (

                <tr key={props.jugador.apellido}>
                <th scope="row">{props.jugador.camiseta}</th>
                <td>{props.jugador.nombre}</td>
                <td>{props.jugador.apellido}</td>
                <td>{props.jugador.apodo}</td>
                <td><button type="button" onClick={() => props.eliminarJugador(props.jugador.camiseta)} className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
                </tr>
)

export default jugadorRow;