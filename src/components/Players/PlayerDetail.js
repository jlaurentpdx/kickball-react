import { Link } from 'react-router-dom';

export default function PlayerDetail({ player }) {
  return (
    <>
      <h1>{player.name}</h1>
      <div>
        <p>Jersey #{player.id}</p>
        <p>{player.position}</p>
        <Link to={`/teams/${player.team_id}`}>team name here</Link>
      </div>
    </>
  );
}
