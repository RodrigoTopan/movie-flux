import { movieApi } from '../../../core/movieApi';
export const getMovies = () => movieApi.get('/3/discover/movie', {
    params: {
        language: 'pt-BR'
    }
});
