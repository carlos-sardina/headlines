import { render, screen } from '@test-utils';
import { Headline } from './Headline';
import { Headline as THeadline } from '@types';

describe('Headline', () => {
  const headline: THeadline = {
    title: 'Test Title',
    author: 'Test Author',
    publishedAt: new Date().toISOString(),
    source: { name: 'Test Source' },
    url: 'https://test.com',
    country: 'us',
    urlToImage: 'https://test.com'
  };

  test('renders author when author exists', () => {
    render(<Headline headline={headline} />);
    expect(screen.getByText(headline.author || '')).toBeInTheDocument();
  });

  test('does not render author when author is null', () => {
    const headlineWithoutAuthor = {
      ...headline,
      author: undefined,
      publishedAt: undefined,
      source: { name: undefined },
      country: undefined,
      urlToImage: undefined
    };
    render(<Headline headline={headlineWithoutAuthor} />);
  });

  test('does not render when title is [Removed]', () => {
    const removedHeadline = { ...headline, title: '[Removed]' };
    const { container } = render(<Headline headline={removedHeadline} />);
    expect(container.firstChild).toBeNull();
  });
});
