import { useState, useEffect } from 'react';

function useFetch(url, initialState) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, [url]);

  return [data];
}

export default useFetch;