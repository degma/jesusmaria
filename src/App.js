import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navigation from './components/navbar/Navigation';
import './App.css';
import PlantelPage from './pages/Equipo';
import CobrarPage from './pages/Cobrar';
import HomePage from './pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navigation />
          <main className="main-content">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Switch>
                    <Redirect from="/" to="/home" exact />
                    <Route path="/plantel" component={PlantelPage} />
                    <Route path="/cobrar" component={CobrarPage} />
                    <Route path="/home" component={HomePage} />
                  </Switch>
                </div>
              </div>
            </div>
          </main>
        </React.Fragment>
      </BrowserRouter>

    );
  }
}

export default App;
