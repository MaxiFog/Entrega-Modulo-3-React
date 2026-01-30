const API_URL = "https://api.potterdb.com/v1";

export const fetchApi = async (endpoint) => {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Error al cargar los datos mágicos");
  }

  const data = await response.json();
  return data;
};