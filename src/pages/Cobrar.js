import React, { Component } from 'react'
import Partidos from '../components/partido/ListaPartidos';
import ListaJugadoresCobrar from '../components/cobros/ListaJugadoresCobrar';
import FormCobrar from '../components/cobros/formCobrar';

class Cobrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partidos: [],
            partidoFlag: null,
            partidoSeleccionado: null,
            jugadorSeleccionado: null,
            plantel: []
        }
    }

    eligePartidoHandler = (args) => {
        console.log(args)
        this.setState({ partidoFlag: 1, partidoSeleccionado: args });
        console.log(this.state.partidoSeleccionado);
        fetch("http://127.0.0.1:8080/cobrosfecha/" + args.id_partido)
            .then(response => response.json())
            .then(data => this.setState({ plantel: data }));
    }

    cobrarJugadorHandler = (args) => {
        this.setState({ partidoFlag: 2, jugadorSeleccionado: args });
    }

    componentWillMount() {

        fetch("http://127.0.0.1:8080/partidos")
            .then(response => response.json())
            .then(data => this.setState({ partidos: data }));

    }
    onCancelar = () => {
        this.setState({ partidoFlag: 1 })
    }
    onVolver = () => {
        this.setState({ partidoFlag: null })
        fetch("http://127.0.0.1:8080/partidos")
            .then(response => response.json())
            .then(data => this.setState({ partidos: data }));

    }

    onSubmitCobro = (args) => {
        console.log(this.state.jugadorSeleccionado)
        fetch('http://localhost:8080/cobrar', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id_jugador: this.state.jugadorSeleccionado.id,
                id_partido: this.state.partidoSeleccionado.id_partido,
                importe_pagado: args.importe_pagado,
                importe_partido: args.importe_partido,
                comentarios: args.comentarios
            })
        })
            .then(response => response.json())
            .then(user => {
                this.setState({ partidoFlag: 1 });
                this.eligePartidoHandler(this.state.partidoSeleccionado);
            })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.partidoFlag === null ? (
                    <Partidos partidos={this.state.partidos} cobraPartido={this.eligePartidoHandler} />
                ) : (
                        this.state.partidoFlag === 1 ? (
                            <div>
                                <ListaJugadoresCobrar jugadores={this.state.plantel} cobrarJugador={this.cobrarJugadorHandler} />
                                <button type="button" onClick={this.onVolver} className="btn btn-primary">Volver</button>
                            </div>
                        ) : (
                                this.state.partidoFlag === 2 ? (
                                    <FormCobrar gCobro={this.onSubmitCobro} cancelarC={this.onCancelar} />
                                ) : (
                                    <p>ok</p>
                                    )

                            )
                    )}
            </React.Fragment>
        )
    }

}

export default Cobrar;