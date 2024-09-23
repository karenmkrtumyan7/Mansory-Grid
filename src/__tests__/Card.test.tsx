import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Card from 'components/Card';
import { useImageLazyLoad } from 'hooks';
import { createRef } from 'react';

jest.mock('hooks', () => ({
  useImageLazyLoad: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

const useNavigateMock = jest.mocked(useNavigate);

describe('Card Component', () => {
  const mockImage = {
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

  beforeEach(() => {
    (useImageLazyLoad as jest.Mock).mockReturnValue([true, createRef()]);
  });

  it('renders the image when visible', () => {
    render(<Card image={mockImage} imageWidth={400} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/raw-image.jpg&w=416');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'A beautiful landscape');
  });

  it('renders the blur hash when the image is not loaded', () => {
    (useImageLazyLoad as jest.Mock).mockReturnValue([false, createRef()]);

    render(<Card image={mockImage} imageWidth={400} />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.getByTestId('blurhash')).toBeInTheDocument();
  });

  it('navigates to the correct path on click', () => {
    const navigateMock = jest.fn();
    useNavigateMock.mockReturnValue(navigateMock);

    render(<Card image={mockImage} imageWidth={400} />);

    fireEvent.click(screen.getByRole('img'));
    expect(navigateMock).toHaveBeenCalledWith('photos/12345');
  });
});
