import { queryFetch } from '../queryFetch';

const fetchMock = vi.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ data: 'stick' }) })
);

vi.stubGlobal('fetch', fetchMock);

describe('queryFetch', () => {
  test('calls fetch', () => {
    vi.spyOn(globalThis, 'fetch');
    queryFetch('test')();
    expect(fetch).toBeCalled();
  });

  test('returns data', async () => {
    const fetchRequest = await queryFetch('test')();
    expect(fetchRequest).toEqual({ data: 'stick' });
  });
});
