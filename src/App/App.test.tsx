import { render, screen } from '@testing-library/react';
import App from '.';

test('renders Header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Hello World/i);
  expect(headerElement).toBeInTheDocument();
});
