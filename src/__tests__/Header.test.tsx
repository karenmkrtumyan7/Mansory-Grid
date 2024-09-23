import { render, screen, fireEvent } from '@testing-library/react';
import Header from 'components/Header';

describe('Header Component', () => {
  const mockSearchCallback = jest.fn();

  beforeEach(() => {
    render(<Header searchCallback={mockSearchCallback} />);
  });

  it('renders the search input and button', () => {
    const input = screen.getByPlaceholderText(/search photos/i);
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('calls searchCallback with the input value when the form is submitted', () => {
    const inputValue = 'nature';
    const input = screen.getByPlaceholderText(/search photos/i);
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.click(button);

    expect(mockSearchCallback).toHaveBeenCalledWith(inputValue);
    expect(mockSearchCallback).toHaveBeenCalledTimes(1);
  });
});
