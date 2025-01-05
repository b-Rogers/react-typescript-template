export const queryFetch = (url: string) => () =>
  fetch(url).then((res) => res?.json());
