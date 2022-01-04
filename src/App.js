import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Teams from './views/Teams';
import Players from './views/Players';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/players">Players</NavLink>
        </header>
        <Switch>
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/players" component={Players} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
