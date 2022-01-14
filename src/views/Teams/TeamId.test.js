import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TeamId from './TeamId';

test('should render a Team with associated players', async () => {
  const container = render(
    <MemoryRouter>
      <TeamId match={{ params: { id: 1 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Bridge City Sneakers', 'Hans Olo', 'Bennie Jetts');

  expect(container).toMatchSnapshot();
});
