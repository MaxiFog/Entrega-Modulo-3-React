const API_URL = 'https://api.potterdb.com/'

export const fetchApi = async()=>{
    const response = await fetch('${API_URL}')


if (!response.ok){
    throw new Error("Error al cargar las tareas")
}
    const data = await response.json()
    return data;
}