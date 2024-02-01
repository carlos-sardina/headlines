import { render, fireEvent } from '@test-utils';
import { Navigation } from './Navigation';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { CATEGORIES_MAP } from '@constants';
import { getCategoryParam } from '@utils';

const mockedGetCategoryParam = getCategoryParam as jest.MockedFunction<typeof getCategoryParam>;
const mockedUseRouter = useRouter as jest.MockedFunction<typeof useRouter> & jest.MockedFunction<() => unknown>;
const mockedUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;
const mockedUseSearchParams = useSearchParams as jest.MockedFunction<typeof useSearchParams> &
  jest.MockedFunction<() => unknown>;

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn()
}));

jest.mock('@utils', () => ({
  getCategoryParam: jest.fn()
}));

describe('Navigation component', () => {
  beforeEach(() => {
    mockedUseRouter.mockReturnValue({
      push: jest.fn()
    });
    mockedUsePathname.mockReturnValue('/');
    mockedUseSearchParams.mockReturnValue('');
  });

  it('renders with default category', () => {
    mockedGetCategoryParam.mockReturnValue(CATEGORIES_MAP.all.key);

    const { getByText } = render(<Navigation />);

    expect(getByText('Business')).toBeInTheDocument();
  });

  it('changes category on button click', () => {
    mockedGetCategoryParam.mockReturnValue(CATEGORIES_MAP.all.key);

    const { getByText } = render(<Navigation />);

    const technologyButton = getByText('Technology');
    fireEvent.click(technologyButton);

    expect(useRouter().push).toHaveBeenCalledWith('/?category=technology');
  });

  it('constructs correct URL when changing category', () => {
    mockedGetCategoryParam.mockReturnValue(CATEGORIES_MAP.all.key);

    const { getByText } = render(<Navigation />);

    const scienceButton = getByText('Science');
    fireEvent.click(scienceButton);

    expect(useRouter().push).toHaveBeenCalledWith('/?category=science');
  });
});
