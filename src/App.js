import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navigation from './components/navbar/Navigation';
import './App.css';
import PlantelPage from './pages/Equipo';

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
                    <Redirect from="/" to="/plantel" exact />
                    <Route path="/plantel" component={PlantelPage} />
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
