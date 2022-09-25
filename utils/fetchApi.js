import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';
export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key':'5ccd93182dmsh73c15c3b69ac2a3p175653jsn4536d573f722'
        }
    })
    return data;
}