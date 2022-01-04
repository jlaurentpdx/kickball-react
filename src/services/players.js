import { checkError, client } from './client';

export async function fetchPlayers() {
  const response = await client.from('players').select().order('name');
  return checkError(response);
}

export async function fetchPlayersById(id) {
  const response = await client.from('players').select('*, teams(*)').match({ id });
  return checkError(response);
}
