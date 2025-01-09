import { useQuery } from '@tanstack/react-query';

import { queryExampleGet } from '../../fetch-utils/queryExampleFetch';

export function QueryExample() {
  const { isPending, error, data } = useQuery({
    queryKey: ['queryExample'],
    queryFn: queryExampleGet,
  });

  if (error) return <p>An error has occurred: {error.message}</p>;
  if (isPending) return <p>Loading...</p>;
  if (!data) return <p>No data found.</p>;

  return (
    <div className="query-example">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
