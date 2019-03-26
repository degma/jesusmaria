import React, { Component } from 'react';
import Jugador from './Jugador';

const plantel = props => {   
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {props.jugadores.map(jugador => 
                        <Jugador jugador={jugador}/>
                    )}
                </tbody>
            </table>
        )
    

}

export default plantel;