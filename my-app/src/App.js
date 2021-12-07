import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registro from './components/Registro'
import './App.css';
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import LogginComic from './components/LogginComic';
import Facturas from './components/Facturas'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar/>
        <Router>
          <Switch>
            <Route path='/logginComic'>
              <LogginComic/>
            </Route>
            <Route exact path='/'>
              <Inicio/>
            </Route>
            <Route exact path='/RegistroComic'>
              <Registro/>
            </Route>
            <Route exact path='/compras'>
              <Facturas/>
            </Route>
          </Switch>
        </Router>
        
        
      </header>


  </div>
  );
}

export default App;
