import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from './Teams';

test('should render a list of all Teams to the page', async () => {
  const container = render(
    <MemoryRouter>
      <Teams />
    </MemoryRouter>
  );
  await screen.findByText('Bridge City Sneakers', 'Mt. Hoodies');

  expect(container).toMatchSnapshot();
});
