import React from 'react';

const partido = props => (

                <tr key={props.partido.id}>
                <th scope="row">{props.partido.NroFecha}</th>
                <td>{props.partido.fecha}</td>
                <td>{props.partido.vs}</td>
                <td><button type="button" onClick={() => props.cobraPartido(props.partido)} className="btn btn-primary">Cobrar</button></td>
                </tr>
)

export default partido;