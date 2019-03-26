import React, { Component } from 'react';
import Plantel from '../components/plantel/Plantel';
import FormJugador from '../components/formJugador/formJugador';

class PlantelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formJugadorVisible: false,

        }
    }

    agregarHandler = () => {
        this.setState({ formJugadorVisible: true });
        
    }
    cancelarHandler = () => {
        this.setState({ formJugadorVisible: false });
        
    }

    render() {
        const database = [{
            nombre: "gonzalo",
            apellido: "martinez",
            apodo: "pity",
            fecha_nac: "",
            dni: "30033456",
            socio: "254689",
            cel: "1153862223",
            camiseta: "10"
        },
        {
            nombre: "nacho",
            apellido: "scocco",
            apodo: "nacho",
            fecha_nac: "",
            dni: "30033456",
            socio: "254689",
            cel: "1153862223",
            camiseta: "2"
        },
        {
            nombre: "juan",
            apellido: "perez",
            apodo: "jua",
            fecha_nac: "",
            dni: "30033456",
            socio: "254689",
            cel: "1153862223",
            camiseta: "4"
        }];

        return (
            <React.Fragment>
                {this.state.formJugadorVisible ? (
                    <div>
                        <FormJugador cancelar={this.cancelarHandler}/>
                    </div>
                ) : (
                        <div className="row">
                            <div className="col-sd-10 ml-3">
                                <h2 className="pt-2">Plantel</h2> <span>{database.length} Jugadores</span>
                            </div>
                            <div className="col-sd-2 text-right">
                                <button type="buttton" onClick={this.agregarHandler} className="btn btn-success m-3">+ Agregar</button>
                            </div>
                        <Plantel jugadores={database}/>
                        </div>
                        
                    )}
            </React.Fragment>

        );
    }
}

export default PlantelPage;
