import React from 'react';
import '../styles/Summary.css';

function Summary({ selectedMovie, selectedTime, selectedSeats, pricePerSeat = 300 }) {
    if (!selectedMovie || !selectedTime || selectedSeats.length === 0) {
        return null;
    }

    const totalPrice = selectedSeats.length * pricePerSeat;

    return (
        <div className='summary-card'>
            <h2>Ваш заказ</h2>
            <div className='summary-detail'>
                <strong>Фильм:</strong> {selectedMovie}
            </div>
            <div className='summary-detail'>
                <strong>Время:</strong> {selectedTime}
            </div>
            <div className='summaty-detail'>
                <strong>Места:</strong>&nbsp;
                {selectedSeats.map(seat => `Ряд ${seat.row + 1}, Место ${seat.col + 1}`).join('; ')}
            </div>
            <div className='summary-total'>
                <strong>Итого:</strong> {totalPrice} ₽
            </div>
        </div>
    )
}

export default Summary;