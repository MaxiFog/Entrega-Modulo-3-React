import { useState, useEffect } from "react";
import { fetchApi } from "../services/api";

export const useFetchPotter = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
    try {
        setLoading(true);

        const result = await fetchApi(endpoint);

        setData(result.data);
    } catch (err) {
        setError("Error: No pudimos invocar los datos mágicos.");
    } finally {
        setLoading(false);
    }
    };

    getData();
}, [endpoint]);

return { data, loading, error };
};

