import { useState, useEffect } from 'react';

function useFetch(url, initialState) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log("data", data);
      });
  }, []);

  return [data];
}

export default useFetch;