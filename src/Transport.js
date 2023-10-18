import React from 'react';
import './App.css';

function Transport() {
  // Sample review data
  const reviews = [
    {
      id: 1,
      stars: 4,
      category: 'Transport',
      description: 'I recently bought a new car, and it has been a great experience. The car is fuel-efficient and has a comfortable interior.',
    },
    {
        id: 2,
        stars: 1,
        category: 'Transport',
        description: 'It consumes so much gas and it has not much features according to its price. It needed repair in so early stage',
      },
    {
      id: 3,
      stars: 3,
      category: 'Transport',
      description: 'I love my new bicycle! It helps me stay active and is a great way to commute in the city.',
    },
    {
      id: 4,
      stars: 5,
      category: 'Transport',
      description: 'Using public transportation has its pros and cons. It\'s cost-effective but can be crowded during rush hours.',
    },
    {
      id: 5,
      stars: 1,
      category: 'Transport',
      description: 'My motorcycle has been a thrill to ride. It provides a sense of freedom and adventure.',
    },
    {
        id: 6,
        stars: 2,
        category: 'Transport',
        description: 'Sailing on the Titanic was a once-in-a-lifetime experience. The grandeur of the ship and the luxurious amenities were incredible. Although it has a tragic history, the journey was unforgettable.',
      },
      {
        id: 7,
        stars: 4,
        category: 'Transport',
        description: 'Using the Jiff-scooter for short commutes is convenient, but the scooter quality varies. Some are well-maintained, while others are in poor condition. Overall, it is a quick way to get around the city.',
      },
      {
        id: 8,
        stars: 1,
        category: 'Transport',
        description: 'The Raw Pickup Truck is a beast on wheels. It is powerful, reliable, and handles tough terrain with ease. I have used it for both work and off-road adventures, and it has never let me down.',
      }
      
  ];

  return (
    <div className="transport">
      <header>
        <h1>Transport Reviews</h1>
      </header>
      <main>
        <div className="review-cards">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="star-rating">
                {Array.from({ length: review.stars }, (_, i) => (
                  <span key={i} role="img" aria-label="star">
                    ⭐
                  </span>
                ))}
              </div>
              <h3>{review.category}</h3>
              <p>{review.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Transport;
