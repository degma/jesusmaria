import React, { Component } from 'react';


class formCobrar extends Component {
    constructor(props) {
        super(props);
        this.impPartidoElRef = React.createRef();
        this.impPagadoElRef = React.createRef();
        this.comentariosElRef = React.createRef();

    }
    
    newCobro = () => {
        
        const importe_partido = this.impPartidoElRef.current.value;
        const importe_pagado = this.impPagadoElRef.current.value;
        const comentarios = this.comentariosElRef.current.value;

        this.props.gCobro ({
            importe_partido: importe_partido,
            importe_pagado: importe_pagado,
            comentarios: comentarios
        });
        
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">DEBE</label>
                        <input type="number" id="name" ref={this.impPartidoElRef} className="form-control" placeholder="Ingresar importe a pagar según tiempo jugado..." />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">PAGA</label>
                        <input type="number" id="name" ref={this.impPagadoElRef} className="form-control" placeholder="Ingresar lo que pagó el jugador..." />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Comentarios</label>
                        <textarea id="name" ref={this.comentariosElRef} className="form-control" placeholder="Ingresar comentarios" />
                    </div>
                    <div className="form-group col-md-12 text-right pt-4">
                        <button type="button" onClick={this.props.cancelarC} className="btn btn-danger m-2">Cancelar</button>
                        <button type="button" onClick={this.newCobro} className="btn btn-success m-2">Guardar</button>
                    </div>
                </form>
            </div>
        )

    }
}

export default formCobrar;
