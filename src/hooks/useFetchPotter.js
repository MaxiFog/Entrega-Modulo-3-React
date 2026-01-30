import { useState, useEffect } from 'react';
import { fetchApi } from '../services/api';

export const useFetchPotter = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchApi(endpoint);
        
        const filteredData = result.data.filter(
          (char) => 
            char.attributes.image && 
            char.attributes.image !== null && 
            char.attributes.image.trim() !== ""
        );

        setData(filteredData);
        setError(null);
      } catch (err) {
        setError("No se pudo conectar con el mundo mágico.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [endpoint]);

  return { data, loading, error };
};

