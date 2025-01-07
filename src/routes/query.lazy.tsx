import { createLazyFileRoute } from '@tanstack/react-router';

import { QueryExample } from '../components/QueryExample';

export const Route = createLazyFileRoute('/query')({
  component: QueryExample,
});
