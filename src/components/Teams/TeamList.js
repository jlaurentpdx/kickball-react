import { Link } from 'react-router-dom';

import './Teams.css';

export default function TeamList({ teams }) {
  return (
    <>
      <h1>Teams</h1>
      <div className="team-list">
        {teams.map((team) => (
          <div key={team.id}>
            <Link key={team.id} to={`./teams/${team.id}`}>
              {team.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
