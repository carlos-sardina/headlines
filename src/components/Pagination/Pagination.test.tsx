import { render, fireEvent } from '@test-utils';
import { Pagination } from './Pagination';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { RESULTS_PER_PAGE } from '@constants';

const mockedUseRouter = useRouter as jest.MockedFunction<typeof useRouter> & jest.MockedFunction<() => unknown>;
const mockedUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;
const mockedUseSearchParams = useSearchParams as jest.MockedFunction<typeof useSearchParams> &
  jest.MockedFunction<() => unknown>;

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn()
}));

describe('Pagination component', () => {
  beforeEach(() => {
    mockedUseRouter.mockReturnValue({
      push: jest.fn()
    });
    mockedUsePathname.mockReturnValue('/');
    mockedUseSearchParams.mockReturnValue('');
  });

  it('renders the correct number of page buttons', () => {
    const total = 50;
    const currentPage = 1;
    const expectedPages = Math.ceil(total / RESULTS_PER_PAGE);

    const { getAllByRole } = render(<Pagination total={total} currentPage={currentPage} />);

    const pageButtons = getAllByRole('button');

    expect(pageButtons).toHaveLength(expectedPages);
  });

  it('constructs correct URL when a page button is clicked', () => {
    const total = 50;
    const currentPage = 1;

    const { getByText } = render(<Pagination total={total} currentPage={currentPage} />);

    const nextPageButton = getByText('2');
    fireEvent.click(nextPageButton);

    expect(useRouter().push).toHaveBeenCalledWith('/?page=2');
  });
});
