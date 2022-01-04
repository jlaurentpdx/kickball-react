import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Teams from './views/Teams';
import TeamById from './views/TeamById';
import Players from './views/Players';
import PlayerById from './views/PlayerById';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/players">Players</NavLink>
        </header>
        <Switch>
          <Route exact path="/teams" component={Teams} />
          <Route path="/teams/:id" component={TeamById} />
          <Route exact path="/players" />
          <Route path="/players/:id" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
