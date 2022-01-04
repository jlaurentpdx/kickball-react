import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Teams from './views/Teams';
import TeamId from './views/TeamId';
import Players from './views/Players';
import PlayerId from './views/PlayerId';

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
          <Route path="/teams/:id" component={TeamId} />
          <Route exact path="/players" component={Players} />
          <Route path="/players/:id" component={PlayerId} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
