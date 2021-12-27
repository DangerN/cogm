import { render, screen } from '@testing-library/react';
import App from './App';

const DOC_BUCKET = 'uwuwhatsthis'

test('renders under construction message', () => {
  render(<App />);
  const linkElement = screen.getByText(/under construction/i);
  expect(linkElement).toBeInTheDocument();
});


test("renders markdown links", () => {
  render(<App/>)

})