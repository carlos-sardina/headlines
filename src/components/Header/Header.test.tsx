import { render, fireEvent } from '@test-utils';
import { Header } from './Header';
import { useRouter } from 'next/navigation';
import { CATEGORIES_MAP, COUNTRIES_MAP } from '@constants';
import { getCategoryParam, getCountryParam } from '@utils';

const mockedGetCategoryParam = getCategoryParam as jest.MockedFunction<typeof getCategoryParam>;
const mockedGetCountryParam = getCountryParam as jest.MockedFunction<typeof getCountryParam>;
const mockedUseRouter = useRouter as jest.MockedFunction<typeof useRouter> & jest.MockedFunction<() => unknown>;

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn()
}));

jest.mock('@utils', () => ({
  getCategoryParam: jest.fn(),
  getCountryParam: jest.fn()
}));

describe('Header component', () => {
  beforeEach(() => {
    mockedUseRouter.mockReturnValue({
      push: jest.fn()
    });
  });

  it('renders with default props', () => {
    mockedGetCategoryParam.mockReturnValue(CATEGORIES_MAP.all.key);
    mockedGetCountryParam.mockReturnValue('us');

    const { getByText } = render(<Header />);

    expect(getByText('World Headlines')).toBeInTheDocument();
  });

  it('renders with custom category and country', () => {
    mockedGetCategoryParam.mockReturnValue(CATEGORIES_MAP.technology.key);
    mockedGetCountryParam.mockReturnValue(COUNTRIES_MAP.mx.key);

    const { getByText } = render(<Header />);

    expect(getByText('Headlines for México')).toBeInTheDocument();
  });

  it('changes country on dropdown change', () => {
    mockedGetCategoryParam.mockReturnValue(CATEGORIES_MAP.technology.key);
    mockedGetCountryParam.mockReturnValue(COUNTRIES_MAP.mx.key);

    const { getByRole, getByText } = render(<Header />);

    const button = getByRole('button');
    fireEvent.click(button);
    fireEvent.click(getByText(COUNTRIES_MAP.fr.key.toUpperCase()));

    expect(useRouter().push).toHaveBeenCalledWith(expect.stringMatching(/country=fr/));
  });
});
