import React, { Component } from 'react'
import Partidos from '../components/partido/ListaPartidos';
import ListaJugadoresCobrar from '../components/cobros/ListaJugadoresCobrar';
import FormCobrar from '../components/cobros/formCobrar';

class Cobrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partidos: [{
                id: "1",
                NroFecha: "1",
                fecha: "01/01/2019",
                vs: "Tucuman"
            },
            {
                id: "2",
                NroFecha: "2",
                fecha: "01/01/2019",
                vs: "Tucuman"
            }],
            partidoFlag: null,
            partidoSeleccionado: null,
            jugadorSeleccionado: null,
            database: [{
                id: "1",
                nombre: "gonzalo",
                apellido: "martinez",
                apodo: "pity",
                fecha_nac: "",
                dni: "30033456",
                socio: "254689",
                cel: "1153862223",
                camiseta: "10",
                email: "aldskalsd@gmail.com",
                celular: "1321321312",
                posicion: "Arquero"
            },
            {
                id: "2",
                nombre: "nacho",
                apellido: "scocco",
                apodo: "nacho",
                fecha_nac: "",
                dni: "30033456",
                socio: "254689",
                cel: "1153862223",
                camiseta: "2",
                email: "aldskalsd@gmail.com",
                celular: "1321321312",
                posicion: "Arquero"
            },
            {
                id: "3",
                nombre: "juan",
                apellido: "perez",
                apodo: "jua",
                fecha_nac: "",
                dni: "30033456",
                socio: "254689",
                cel: "1153862223",
                camiseta: "4",
                email: "aldskalsd@gmail.com",
                celular: "1321321312",
                posicion: "Arquero"
            }]
        }
    }

    eligePartidoHandler = (args) => {

        this.setState({ partidoFlag: 1, partidoSeleccionado: args.vs });
    }
    cobrarJugadorHandler = (args) => {
        this.setState({ partidoFlag: 2, jugadorSeleccionado: args.id });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.partidoFlag === null ? (
                    <Partidos partidos={this.state.partidos} cobraPartido={this.eligePartidoHandler} />
                ) : (
                        this.state.partidoFlag === 1 ? (
                            <ListaJugadoresCobrar jugadores={this.state.database} cobrarJugador={this.cobrarJugadorHandler} />
                        ) : (
                                this.state.partidoFlag === 2 ? (
                                    <FormCobrar />
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