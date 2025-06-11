import React, { useState, useEffect } from 'react';
import '../styles/SeatGrid.css'

function SeatGrid({ selectedMovie, selectedTime }) {
    const [seats, setSeats] = useState([]);
    const [message, setMessage] = useState("")
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        if (selectedMovie && selectedTime) {
            const rows = 5;
            const cols = 8;
            const generateSeats = [];

            for (let row = 0; row < rows; row++) {
                const rowSeats = [];
                for (let col = 0; col < cols; col++) {
                    rowSeats.push({ row, col, isBooked: false});
                }

                generateSeats.push(rowSeats);
            }

            setSeats(generateSeats);
            selectedSeats([]);
        }
    }, [selectedMovie, selectedTime]);

    const toggleSeat = (row, col) => {
        const isSelected = selectedSeats.some(seat => seat.row === row && seat.col === col);

        if (isSelected) {
            selectedSeats(prev => prev.filter(seat => !(seat.row === row && seat.col === col)));
        } else {
            setSelectedSeats(prev => [...prev, {row, col }]);
        }
    };

    const handleBuy = () => {
        if (selectedSeats.length === 0) {
            setMessage('Вы не выбрали места.');
            return
        }

        setMessage(`Вы купили ${selectedSeats.length} мест(а):` + 
            selectedSeats.map(seat => `Ряд ${seat.row + 1}, Место ${seat.col + 1}`).join('; ')
        );

        const updatedSeats = seats.map(row =>
            row.map(seat => {
              const isSelected = selectedSeats.some(s => s.row === seat.row && s.col === seat.col);
              return isSelected ? { ...seat, isBooked: true } : seat;
            })
          );
          setSeats(updatedSeats);
          setSelectedSeats([]);
    }

    return (
        <div className='seat-grid'>
            {seats.map((rowSeats, rowIndex) => (
                <div key={rowIndex} className='seat-row'>
                    {rowSeats.map((seat, colIndex) => {
                        const isSelected = selectedSeats.some(
                            s => s.row === seats.row && s.col === seat.col
                        );
                        retun (
                            <button
                                key={colIndex}
                                className={`seat ${seat.isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
                                disabled={seat.isBooked}
                                onClick={() => toggleSeat(seat.row, seat.col)}
                                >
                                {seat.row + 1}-(seat.col + 1)
                            </button>
                        )
                    })}
                </div>
            ))}

            {selectedSeats.length > 0 && (
                    <div className="summary">
                    Вы выбрали:&nbsp;
                    {selectedSeats.map(seat => `Ряд ${seat.row + 1}, Место ${seat.col + 1}`).join('; ')}
                    </div>
                )}

                <button className="buy-button" onClick={handleBuy}>Купить</button>

                {message && <div className="message">{message}</div>}
        </div>
    );
}

export default SeatGrid;