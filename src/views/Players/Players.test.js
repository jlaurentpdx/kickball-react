import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Players from './Players';

test('should render a list of players to the page', async () => {
  const container = render(
    <MemoryRouter>
      <Players />
    </MemoryRouter>
  );
  await screen.findByText('Hans Olo', 'Bud E. Guy', 'Buster Rimes');

  expect(container).toMatchSnapshot();
});
