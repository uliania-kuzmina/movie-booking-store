'use client'
import React, { useState } from 'react';
import MovieSelector from './MovieSelector';
import Header from './Header';
import SeatGrid from './SeatGrid';
import Summary from './Summary';

export default function MianPage() {
    const [selectedMovie, setSelectedMovie] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedSeats, setSelectedSeats] = useState([]);

    return (
        <div className='app-container'>
            <Header />

            <MovieSelector
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            />

            <SeatGrid
            selectedMovie={selectedMovie}
            selectedTime={selectedTime}
            selectedSeats={selectedSeats}
            />

            <Summary
            selectedMovie={selectedMovie}
            selectedTime={selectedTime}
            selectedSeats={selectedSeats}/>

        </div>
    )
}