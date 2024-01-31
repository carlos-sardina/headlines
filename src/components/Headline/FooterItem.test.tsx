import { render, screen } from '@test-utils';
import { FooterItem } from './FooterItem';
import { IconClock } from '@tabler/icons-react';

describe('FooterItem', () => {
  test('renders FooterItem component with correct label', () => {
    render(<FooterItem icon={<IconClock />} label="10 minutes ago" />);
    expect(screen.getByText('10 minutes ago')).toBeInTheDocument();
  });
});
