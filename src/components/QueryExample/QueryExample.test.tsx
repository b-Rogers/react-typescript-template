import { render, screen } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import { QueryExample } from '.';

vi.mock('@tanstack/react-query');

describe('QueryExample', () => {
  test('renders data when data is provided', () => {
    vi.mocked(useQuery, { partial: true }).mockReturnValue({
      data: { name: 'Query Example' },
      isPending: false,
      error: null,
    });

    render(<QueryExample />);
    const headerElement = screen.getByText(/Query Example/i);

    expect(headerElement).toBeInTheDocument();
  });

  test('renders error message when error is provided', () => {
    vi.mocked(useQuery, { partial: true }).mockReturnValue({
      data: {},
      isPending: false,
      error: { message: 'oops' },
    });

    render(<QueryExample />);
    const errorElement = screen.getByText(/An error has occurred: oops/i);

    expect(errorElement).toBeInTheDocument();
  });

  test('renders loading when isPending is provided', () => {
    // @ts-ignore - isPending type is false and not boolean...
    vi.mocked(useQuery, { partial: true }).mockReturnValue({
      data: {},
      isPending: true,
      error: null,
    });

    render(<QueryExample />);
    const loadingElement = screen.getByText(/Loading.../i);

    expect(loadingElement).toBeInTheDocument();
  });

  test('renders error as 1st priority', () => {
    // @ts-ignore - isPending type is false and not boolean...
    vi.mocked(useQuery, { partial: true }).mockReturnValue({
      data: { name: 'Query Example' },
      isPending: true,
      error: { message: 'oops' },
    });

    render(<QueryExample />);
    const loadingElement = screen.getByText(/An error has occurred: oops/i);

    expect(loadingElement).toBeInTheDocument();
  });

  test('renders loading as 2nd priority', () => {
    // @ts-ignore - isPending type is false and not boolean...
    vi.mocked(useQuery, { partial: true }).mockReturnValue({
      data: { name: 'Query Example' },
      isPending: true,
      error: null,
    });

    render(<QueryExample />);
    const loadingElement = screen.getByText(/Loading.../i);

    expect(loadingElement).toBeInTheDocument();
  });
});
