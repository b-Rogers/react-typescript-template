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

  test('renders no data as 3rd priority', () => {
    // @ts-ignore - isPending type is false and not boolean...
    vi.mocked(useQuery, { partial: true }).mockReturnValue({
      data: undefined,
      isPending: false,
      error: null,
    });

    render(<QueryExample />);
    const loadingElement = screen.getByText(/No data found./i);

    expect(loadingElement).toBeInTheDocument();
  });
});
