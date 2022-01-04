import { useEffect, useState } from 'react';
import { fetchTeamById } from '../services/teams';
import TeamDetail from '../components/TeamDetail';

export default function TeamId(props) {
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
