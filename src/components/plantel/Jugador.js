import React, {Component} from 'react';

const jugadorRow = props => (

                <tr key={props.jugador.apellido}>
                <th scope="row">{props.jugador.camiseta}</th>
                <td>{props.jugador.nombre}</td>
                <td>{props.jugador.apellido}</td>
                <td>{props.jugador.apodo}</td>
                </tr>
)

export default jugadorRow;