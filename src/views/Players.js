import { useEffect, useState } from 'react';
import { fetchPlayers } from '../services/players';
import PlayerList from '../components/PlayerList';

export default function Players() {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      console.log(data);
      setPlayers(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Please wait...</h1>;

  return <div></div>;
}
