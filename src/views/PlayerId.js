import { useEffect, useState } from 'react';
import { fetchPlayerById } from '../services/players';
import PlayerDetail from '../components/PlayerDetail';

export default function PlayerId(props) {
  const id = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(id);
      console.log(data[0]);
      setPlayer(data[0]);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h1>Please wait...</h1>;

  return <PlayerDetail player={player} />;
}
