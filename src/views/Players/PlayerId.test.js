import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PlayerId from './PlayerId';

test('should render a Team to page that matches the teams id', async () => {
  const container = render(
    <MemoryRouter>
      <PlayerId match={{ params: { id: 15 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Frito P.', 'Outfield');

  expect(container).toMatchSnapshot();
});
