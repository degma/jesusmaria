import React from 'react';

const formCobrar = () => {
    return (
        <div>
            <h5>HOLA</h5>
            <form>
                <div className="form-group col-md-12">
                    <label htmlFor="inputName">A pagar</label>
                    <input type="number" id="name" className="form-control" placeholder="Tiene que pagar"/>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputName">A pagar</label>
                    <input type="number"  id="name" className="form-control" placeholder="Pagó"/>
                </div>
                <div className="form-group col-md-12 text-right pt-4">
                    <button type="button" className="btn btn-danger m-2">Cancelar</button>
                    <button type="button" className="btn btn-success m-2">Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default formCobrar;
