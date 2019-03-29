import React, { Component } from 'react';
import Plantel from '../components/plantel/Plantel';
import FormJugador from '../components/formJugador/formJugador';

class PlantelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formJugadorVisible: false,
            plantel: []

        }
    }

    agregarHandler = () => {
        this.setState({ formJugadorVisible: true });

    }
    cancelarHandler = () => {
        this.setState({ formJugadorVisible: false });

    }
    eliminarJugador = (args) => {

        fetch('http://localhost:8080/desjugador', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: args.id
            })
        })
        .then("SI")
        
    }

    guardarJugador = (args) => {
        fetch('http://localhost:8080/jugador', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombre: args.nombre,
                apellido: args.apellido,
                apodo: args.apodo,
                dni: +args.dni,
                fecha_nac: args.fecha_nac,
                nrosocio: +args.nrosocio,
                celular: +args.celular,
                camiseta: +args.camiseta,
                posicion: args.posicion,

            })
        })
        .then(this.setState({formJugadorVisible: false}))
        .then(fetch("http://localhost:8080/jugadores")
        .then(response => response.json())
        .then(data => this.setState({ plantel: data })))

        
    }

    componentWillMount() {
        fetch("http://localhost:8080/jugadores")
            .then(response => response.json())
            .then(data => this.setState({ plantel: data }))
    }

    render() {


        return (
            <React.Fragment>
                {this.state.formJugadorVisible ? (
                    <div>
                        <FormJugador cancelar={this.cancelarHandler} gJugador={this.guardarJugador} />
                    </div>
                ) : (
                        <div className="row">
                            <div className="col-sd-10 ml-3">
                                <h2 className="pt-2">Plantel</h2> <span>{this.state.plantel.length} Jugadores</span>
                            </div>
                            <div className="col-sd-2 text-right">
                                <button type="buttton" onClick={this.agregarHandler} className="btn btn-success m-3">+ Agregar</button>
                            </div>
                            <Plantel jugadores={this.state.plantel} eJugador={this.eliminarJugador} />
                        </div>

                    )}
            </React.Fragment>

        );
    }
}

export default PlantelPage;
