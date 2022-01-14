import { useEffect, useState } from 'react';
import { fetchTeams } from '../../services/teams';
import TeamList from '../../components/Teams/TeamList';

export default function Teams() {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Please wait...</h1>;

  return <TeamList teams={teams} />;
}
