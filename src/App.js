import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Teams from './views/Teams/Teams';
import TeamId from './views/Teams/TeamId';
import Players from './views/Players/Players';
import PlayerId from './views/Players/PlayerId';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/players">Players</NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
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
