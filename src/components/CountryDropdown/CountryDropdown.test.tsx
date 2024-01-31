import { render, fireEvent } from '@test-utils';
import { Dropdown } from './CountryDropdown';
import { COUNTRIES_MAP } from '@constants';

describe('Dropdown', () => {
  const mockOnChange = jest.fn();

  test('renders Dropdown component with correct country', () => {
    const { getByText } = render(<Dropdown currentCountry="us" onChange={mockOnChange} />);
    expect(getByText(COUNTRIES_MAP.us.key.toUpperCase())).toBeInTheDocument();
  });

  test('opens and closes the dropdown on click', () => {
    const { getByRole } = render(<Dropdown currentCountry="us" onChange={mockOnChange} />);
    const button = getByRole('button');

    fireEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toBe('true');

    fireEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  test('calls onChange with correct country when a country is selected', () => {
    const { getByRole, getByText } = render(<Dropdown currentCountry="us" onChange={mockOnChange} />);
    const button = getByRole('button');

    fireEvent.click(button);

    fireEvent.click(getByText(COUNTRIES_MAP.gb.key.toUpperCase()));
    expect(mockOnChange).toHaveBeenCalledWith('gb');
  });
});
