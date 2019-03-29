import React from 'react';

const partido = props => (

                <tr key={props.partido.id_partido}>
                <th scope="row">{props.partido.nro}</th>
                <td>{props.partido.fecha}</td>
                <td>{props.partido.nombre}</td>
                <td>{props.partido.recaudacion !== null ? ("$ "+props.partido.recaudacion) : ("")}</td>
                <td><button type="button" onClick={() => props.cobraPartido(props.partido)} className="btn btn-primary">Cobrar</button></td>
                </tr>
)

export default partido;