import React, { useState } from 'react';
import './App.css';
import BookInfo from './BookInfo';

function CityInfo() {
  const cityInfo = {
    name: "Миколаїв",
    country: "Україна",
    foundingYear: 1789,
    description: "Миколаїв - місто на півдні України, розташоване на річці Південний Буг. Місто є важливим центром суднобудування, портом та промисловим центром. Миколаїв відомий своєю корабельною історією та внеском у військово-морський флот України.",
    landmarks: [
      {
        name: "Адміралтейство",
        image: "/images/admiralty.jpg",
        description: "Символ міста Миколаїв, будівля Адміралтейства - пам'ятка архітектури XIX століття, де розташовувався центр кораблебудування"
      },
      {
        name: "Сіра площа",
        image: "/images/grey_square.jpg",
        description: "Історична площа в центрі Миколаєва, місце проведення міських заходів та парадів"
      },
      {
        name: "Пам'ятник засновникам Миколаєва",
        image: "/images/monument.jpg",
        description: "Монумент на честь засновників міста - імператриці Катерини II та адмірала Потьомкіна"
      }
    ]
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Інформація про місто {cityInfo.name}</h1>

        <div className="city-info">
          <h2>Основна інформація</h2>
          <p><strong>Країна:</strong> {cityInfo.country}</p>
          <p><strong>Рік заснування:</strong> {cityInfo.foundingYear} рік</p>
          <p className="description">{cityInfo.description}</p>
        </div>

        <div className="landmarks">
          <h2>Пам'ятки міста</h2>
          <div className="landmarks-grid">
            {cityInfo.landmarks.map((landmark, index) => (
              <div key={index} className="landmark-card">
                <img src={landmark.image} alt={landmark.name} className="landmark-image" />
                <h3>{landmark.name}</h3>
                <p>{landmark.description}</p>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('city');

  return (
    <div>
      <nav className="navigation">
        <button
          className={`nav-button ${currentPage === 'city' ? 'active' : ''}`}
          onClick={() => setCurrentPage('city')}
        >
          Місто Миколаїв
        </button>
        <button
          className={`nav-button ${currentPage === 'book' ? 'active' : ''}`}
          onClick={() => setCurrentPage('book')}
        >
          Книга "1984"
        </button>
      </nav>

      {currentPage === 'city' ? <CityInfo /> : <BookInfo />}
    </div>
  );
}

export default App;