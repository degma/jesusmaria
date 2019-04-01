import React, { Component } from 'react'
import Recaudacion from '../components/recaudacion/Recaudacion'
import Deudores from '../components/deudores/Deudores'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deudores: [],
            recaudacion: [],

        }
    }

    componentWillMount() {

        fetch("http://127.0.0.1:8080/recaudacion/")
            .then(response => response.json())
            .then(data => this.setState({ recaudacion: data }));

        fetch("http://127.0.0.1:8080/deudores/")
            .then(response => response.json())
            .then(data => this.setState({ deudores: data }));

    }

    render() {
        return (
            <React.Fragment>
                <div className="card mt-2 border-info">
                    <div className="card-header text-center p-1"> Recaudación
                    </div>
                        <Recaudacion recaudacion={this.state.recaudacion} />
                </div>
                <div className="card mt-2 border-danger">
                    <div className="card-header text-center p-1"> Deudores
                    </div>
                        <Deudores deudores={this.state.deudores} />
                </div>

            </React.Fragment>
        )
    }

}

export default Home;