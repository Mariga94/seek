export const BASE_URL = 'http://localhost:3004/api/v1'
// import axios from 'axios'


// const fetchApi = axios.create({
//     withCredentials: true,
//     baseURL: BASE_URL
// })

async function fetchApi(endpoint: string, method: string, data: unknown) {
    const url = `${BASE_URL}${endpoint}`;

    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'seek/1.0',
            },
            'credentials': 'include',
            body: data ? JSON.stringify(data) : undefined,
        });
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const resData = await response.json()
        return resData
    } catch (error) {
        console.error('Error fetching api', error);
        throw error;
    }
}


export default fetchApi
