import { useState, useEffect } from 'react';
import { getMovies } from './services/MoviesService'
import { MovieCard } from '../components/MovieCard'
import { Grid, Container } from '@mui/material';

const ASSET_URL = "https://image.tmdb.org/t/p/original";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function loadMovies() {
            const response = await getMovies();
            const page = response.data.results;
            setMovies(page);
        };

        loadMovies();
    }, []);

    return (
        <>
            <Container>
                <Grid container spacing={10}>
                    {movies ? (
                        movies.map((movie) => (
                                <MovieCard
                                    urlImage={`${ASSET_URL}/${movie.poster_path}`}
                                    altImage={movie.title}
                                    title={movie.title}
                                    description={movie.overview}
                                />
                        ))
                    ) : (
                        <h1>{('notFound')}</h1>
                    )}
                </Grid>
            </Container>
        </>
    )
}