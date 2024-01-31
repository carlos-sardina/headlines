import { render, screen } from '@test-utils';
import { CountryItem } from './CountryItem';
import { COUNTRIES_MAP } from '@constants';

describe('CountryItem', () => {
  const country = COUNTRIES_MAP.us;

  test('renders CountryItem component with correct country key', () => {
    render(<CountryItem country={country} />);
    expect(screen.getByText(country.key.toUpperCase())).toBeInTheDocument();
  });

  test('has correct image source and alt text', () => {
    render(<CountryItem country={country} />);
    const image = screen.getByAltText(`${country.label} flag`);
    expect(image).toHaveAttribute('src', `https://flagcdn.com/${country.key}.svg`);
    expect(image).toHaveAttribute('alt', `${country.label} flag`);
  });
});
