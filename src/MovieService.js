// services/MovieService.js

class MovieService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getAllMovies(token) {
        const response = await fetch(`${this.baseUrl}/api/movie`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching movies: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }

    async saveMovie(movie, token) {
        const response = await fetch(`${this.baseUrl}/api/movie`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(movie),
        });

        if (!response.ok) {
            throw new Error(`Error saving movie: ${response.status}`);
        }

        const savedMovie = await response.json();
        return savedMovie;
    }
}

export default MovieService;
