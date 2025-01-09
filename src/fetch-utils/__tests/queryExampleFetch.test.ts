import { describe, test, expect, vi } from 'vitest';
import createClient from 'openapi-fetch';

import { queryExampleGet } from '../queryExampleFetch';
import { DEFAULT_HEADERS } from '../shared';

vi.mock('openapi-fetch', () => {
  const mockGet = vi.fn(() => Promise.resolve({ data: 'stick' }));
  return {
    __esModule: true,
    default: vi.fn(() => ({
      GET: mockGet,
    })),
  };
});

describe('queryExampleGet', () => {
  test('returns data', async () => {
    const fetchRequest = await queryExampleGet();
    expect(fetchRequest).toEqual('stick');
  });

  test('To be called with correct baseUrl', async () => {
    await queryExampleGet();
    expect(createClient).toHaveBeenCalledWith({
      baseUrl: 'https://api.github.com',
    });
  });

  test('To be called with correct media (path etc)', async () => {
    const mockGet = createClient().GET;
    await queryExampleGet();
    expect(mockGet).toHaveBeenCalledWith('/repos/TanStack/query', {
      headers: DEFAULT_HEADERS,
    });
  });
});
