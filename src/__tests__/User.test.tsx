import { render, screen } from '@testing-library/react';
import { IImage } from 'types';
import User from 'components/User';

jest.mock('helpers', () => ({
  getUserLink: jest.fn((image: IImage) => `https://portfolio.com/${image.user.username}`),
}));

describe('User component', () => {
  const mockImage: IImage = {
    id: '12345',
    urls: {
      raw: 'https://example.com/raw-image.jpg',
      full: 'https://example.com/full-image.jpg',
    },
    description: 'A beautiful landscape',
    alt_description: 'Landscape view with mountains and a river',
    blur_hash: 'L6H|K{M|t6M{5n?^9Fj]0nD%9Fj]',
    width: 1920,
    height: 1080,
    user: {
      profile_image: { small: 'https://profile-image.com/small.jpg' },
      first_name: 'John',
      last_name: 'Doe',
      username: 'johndoe',
    },
    created_at: '2023-09-23T12:34:56Z',
  };

  it('renders user information correctly when image prop is provided', () => {
    render(<User image={mockImage} />);

    const avatar = screen.getByAltText('Photographer profile picture');
    expect(avatar).toHaveAttribute('src', 'https://profile-image.com/small.jpg');

    const userName = screen.getByText('John Doe');
    expect(userName).toBeInTheDocument();
  });

  it('renders nothing when image prop is undefined', () => {
    const { container } = render(<User image={undefined} />);
    expect(container.firstChild).toBeNull();
  });
});
