import React, {Component} from 'react';
import Partido from './Partido';

const partidos = props => {
        return(
            <React.Fragment>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Fecha #</th>
                        <th scope="col">Vs</th>
                        <th scope="col">Recaudación</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.partidos.map(partido => 
                        <Partido partido={partido} key={partido.id_partido} cobraPartido={props.cobraPartido}/>
                    )}
                </tbody>
            </table>
            </React.Fragment>
        );
    

}

export default partidos;