import React, {useState, UseState} from 'react';
import '../styles/MovieSelector.css';

function MovieSelector({ onMovieChange}) {
    const [selectedMovie, setSelectedMovie] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const movies = [
        {id: 1, title: 'Аватар: Путь воды', price: 450},
        {id: 2, title: 'Оппенгеймер', price: 400},
        {id: 3, title: 'Барби', price: 500}
    ]

    const availableTimes = [
        '10:00', '13:30', '16:45',
        '19:00', '21:15'
    ]

    const handleMovieChange = (e) => {
        const movieId = e.target.value;
        const movie = movies.find(m => m.id === Number(movieId));
        setSelectedMovie(movie);
    }

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    }

    return (
        <div className='movie-selector'>
            <h2>Выберите фильм</h2>

            <select
            className='movie-dropdown'
            value={selectedMovie ? selectedMovie.id : ''}
            onChange={handleMovieChange}
            >
                <option value=''>-- Выберите фильм --</option>
                {movies.map(movie => (
                    <option key={movie.id} value={movie.id}>
                        {movie.title} ({movie.price} ₽)
                    </option>
                ))}
            </select>

            <h2>Выберите время</h2>
            <select
            className="time-dropdown"
            value={selectedTime}
            onChange={handleTimeChange}
            disabled={!selectedMovie} 
          >
            <option value="">-- Выберите время --</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
    )
}

export default MovieSelector;