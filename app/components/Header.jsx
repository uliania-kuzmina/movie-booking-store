import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='container'>

                <div className='logo'>🎥 CineTime</div>

                <div className='location-date'>
                    <select className='city-select'>
                        <option>Москва</option>
                        <option>Санкт-Петербург</option>
                        <option>Казань</option>
                    </select>

                    <input type='date' className='date-picker'/>
                </div>

                <nav className='nav'>
                    <a href='#'>Афиша</a>
                    <a href='#'>Сеансы</a>
                    <a href='#'>Контакты</a>
                </nav>

                <div className='user-actions'>
                    <button className="login-btn">Войти</button>
                    <div className="cart-icon">🛒</div>
                </div>
            </div>
        </header>
    )
}

export default Header;