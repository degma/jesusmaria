import React, { Component } from 'react';
import './formJugador.css';
import Select from 'react-select';

class formJugador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ddPosicion: null
        }
        this.nombreElRef = React.createRef();
        this.apellidoElRef = React.createRef();
        this.apodoElRef = React.createRef();
        this.dniElRef = React.createRef();
        this.nrosocioElRef = React.createRef();
        this.fechanacElRef = React.createRef();
        this.emailElRef = React.createRef();
        this.celularElRef = React.createRef();
        this.posicionElRef = React.createRef();
        this.camisetaElRef = React.createRef();
    }
    
    newJugador = () => {
        
        const nombre = this.nombreElRef.current.value;
        const apellido = this.apellidoElRef.current.value;
        const apodo = this.apodoElRef.current.value;
        const dni = this.dniElRef.current.value;
        const nrosocio = this.nrosocioElRef.current.value;
        const fechanac = this.fechanacElRef.current.value;
        const email = this.emailElRef.current.value;
        const celular = this.celularElRef.current.value;
        const camiseta = this.camisetaElRef.current.value;

        this.props.gJugador ({
            nombre: nombre,
            apellido: apellido,
            apodo: apodo,
            fecha_nac: fechanac,
            dni: dni,
            nrosocio: nrosocio,
            celular: celular,
            camiseta: camiseta,
            posicion: this.state.ddPosicion,
            email: email

        });
        
    }

    changeSelectGender = (args) => {
        console.log(args.value)
        this.setState({ddPosicion:args.value})
    }
    render() {
        const roles = [
            { value: 'Arquero', label: 'Arquero' },
            { value: 'Defensor', label: 'Defensor' },
            { value: 'Volante', label: 'Volante' },
            { value: 'Delantero', label: 'Delantero' }
          ]
        
        return (
            <div>
                <div className="form-group col-md-12">
                    <h5 className="pt-2">Nuevo Jugador</h5>
                </div>
                <form>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Nombre</label>
                        <input type="text" ref={this.nombreElRef} id="name" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Apellido</label>
                        <input type="text"  ref={this.apellidoElRef} id="name" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Apódo</label>
                        <input type="text"  ref={this.apodoElRef} id="name" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">DNI</label>
                        <input type="text"  ref={this.dniElRef} id="name" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Número de Socio</label>
                        <input type="text"  ref={this.nrosocioElRef} id="name" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Fecha de Nacimiento</label>
                        <input type="date"  ref={this.fechanacElRef} id="name" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Email</label>
                        <input type="email"  ref={this.emailElRef}  id="name" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Celular</label>
                        <input type="text"  ref={this.celularElRef} id="name" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Posición</label>
                        <Select
                            options={roles}
                            onChange={this.changeSelectGender}
                            ref={this.posicionElRef} 
                            id="roles"
                            isSearchable={true}
                            isClearable={true}
                            className="basic-single"
                          />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Número Camiseta</label>
                        <input type="text" ref={this.camisetaElRef} id="name" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="form-group col-md-12 text-right pt-4">
                        <button type="button" className="btn btn-danger m-2" onClick={this.props.cancelar}>Cancelar</button>
                        <button type="button" className="btn btn-success m-2" onClick={this.newJugador}>Guardar Jugador</button>
                    </div>
                </form>

            </div>


        )
    }

}

export default formJugador;