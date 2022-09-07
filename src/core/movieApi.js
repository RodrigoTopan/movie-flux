import axios from 'axios';

/** OMDB API configs */
const API_KEY = 'c18edd81cb1cba569e1408b107f66257';
const movieApiBaseUrl = 'https://api.themoviedb.org';
export const movieApi = axios.create({
    baseURL: movieApiBaseUrl,
    params: {
        api_key: API_KEY,
    },
});
