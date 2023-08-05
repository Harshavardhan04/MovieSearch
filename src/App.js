import React, { useEffect, useState } from 'react';
//6fc3361
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=6fc3361';

const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcwNzg0MDYzN15BMl5BanBnXkFtZTYwMzU5Nzg3._V1_SX300.jpg"
}
const App = () => {
    const [movies, setMovies] = useState([]);

    const [searchTerm,setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };
    useEffect(() => {
        searchMovies('batman');
    }, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder="Search for a movie" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                ></img>
            </div>
            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }


        </div>
    );
};

export default App;