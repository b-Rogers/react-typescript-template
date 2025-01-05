import { useQuery } from '@tanstack/react-query';
import { queryFetch } from '../../utils/queryFetch';

export function QueryExample() {
  const { isPending, error, data } = useQuery({
    queryKey: ['queryExample'],
    queryFn: queryFetch('https://api.github.com/repos/TanStack/query'),
  });

  if (error) return <p>An error has occurred: {error.message}</p>;

  if (isPending) return <p>Loading...</p>;

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
