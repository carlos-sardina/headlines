import { render, screen } from '@test-utils';
import { Headline } from './Headline';
import moment from 'moment';
import { Headline as THeadline } from '@types';

describe('Headline', () => {
  const headline: THeadline = {
    title: 'Test Title',
    author: 'Test Author',
    publishedAt: new Date().toISOString(),
    source: { name: 'Test Source' },
    url: 'https://test.com',
    country: 'us'
  };

  test('renders Headline component with correct author, title, published date, and source name', () => {
    render(<Headline headline={headline} />);
    expect(screen.getByText(headline.author || '')).toBeInTheDocument();
    expect(screen.getByText(headline.title || '')).toBeInTheDocument();
    expect(screen.getByText(moment(headline.publishedAt).fromNow())).toBeInTheDocument();
    expect(screen.getByText(headline.source.name || '')).toBeInTheDocument();
  });

  test('does not render when title is [Removed]', () => {
    const removedHeadline = { ...headline, title: '[Removed]' };
    const { container } = render(<Headline headline={removedHeadline} />);
    expect(container.firstChild).toBeNull();
  });
});
