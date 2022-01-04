import { useEffect, useState } from 'react';
import TeamDetail from '../components/TeamDetail';
import { fetchTeamById } from '../services/teams';

export default function TeamById(props) {
  const id = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(id);
      setTeam(data[0]);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h1>Please wait...</h1>;

  return <TeamDetail team={team} />;
}
