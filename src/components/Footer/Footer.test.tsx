import { render, screen } from '@test-utils';
import { Footer } from './Footer';

describe('Footer', () => {
  test('renders Footer component', () => {
    render(<Footer />);
    expect(screen.getByText('Powered by newsapi.org')).toBeInTheDocument();
  });

  test('has correct class', () => {
    render(<Footer />);
    const footerElement = screen.getByText('Powered by newsapi.org');
    expect(footerElement).toHaveClass('bg-main text-white text-sm font-bold p-1 flex justify-center');
  });
});
