import createClient from 'openapi-fetch';
import type { paths } from '../openapi-types/query-example';
import { DEFAULT_HEADERS } from './shared';

const client = createClient<paths>({
  baseUrl: 'https://api.github.com',
});

export const queryExampleGet = () =>
  client
    .GET('/repos/TanStack/query', {
      headers: DEFAULT_HEADERS,
    })
    .then((response) => response.data);
