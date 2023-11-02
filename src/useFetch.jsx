import { useEffect, useState } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(url);
        !res.ok && setErrorMessage("Something went wrong!");

        let data = await res.json();

        setLoading(false);
        setData(data);
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, data, errorMessage };
}

export default useFetch;
