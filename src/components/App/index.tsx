import { useQuery } from '@tanstack/react-query';

import './App.css';

export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Hello World</h1>
      </header>
      <QueryExample />
    </main>
  );
}

function QueryExample() {
  const { isPending, error, data } = useQuery({
    queryKey: ['queryExample'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json()
      ),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

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
