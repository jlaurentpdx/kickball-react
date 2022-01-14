import { useEffect, useState } from 'react';
import { fetchPlayers } from '../../services/players';
import PlayerList from '../../components/Players/PlayerList';

export default function Players() {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Please wait...</h1>;

  return <PlayerList players={players} />;
}
