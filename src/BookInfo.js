import React from 'react';
import './App.css';

function BookInfo() {
  const bookInfo = {
    title: "1984",
    author: "Джордж Орвелл",
    genre: "Антиутопія, політична фантастика",
    pages: 328,
    description: "Класичний роман-антиутопія, що описує тоталітарне суспільство майбутнього, де панує постійний нагляд і контроль над думками людей.",
    reviews: [
      {
        reviewer: "The Guardian",
        rating: 5,
        text: "Одна з найвпливовіших книг XX століття. Пророча і тривожна."
      },
      {
        reviewer: "Amazon читач",
        rating: 5,
        text: "Книга, яка змушує замислитися над свободою та владою. Актуальна і сьогодні."
      },
      {
        reviewer: "The New York Times",
        rating: 4,
        text: "Майстерний твір, що попереджає про небезпеки тоталітаризму."
      }
    ]
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Інформація про книгу "{bookInfo.title}"</h1>

        <div className="city-info">
          <h2>Основна інформація</h2>
          <p><strong>Автор:</strong> {bookInfo.author}</p>
          <p><strong>Жанр:</strong> {bookInfo.genre}</p>
          <p><strong>Кількість сторінок:</strong> {bookInfo.pages}</p>
          <p className="description">{bookInfo.description}</p>
        </div>

        <div className="landmarks">
          <h2>Рецензії</h2>
          <div className="landmarks-grid">
            {bookInfo.reviews.map((review, index) => (
              <div key={index} className="landmark-card">
                <h3>{review.reviewer}</h3>
                <div className="rating">
                  {renderStars(review.rating)}
                </div>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default BookInfo;