import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useAxios } from './useAxios'; // Adjust the path according to your file structure
import PlayingCard from './PlayingCard'; // Adjust the path according to your file structure

function CardTable() {
  const [cards, setCards] = useState([]);
  const [url, setUrl] = useState(null);
  const [data, fetchData] = useAxios(url);

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url, fetchData]);

  useEffect(() => {
    if (data && data.cards) {
      setCards(cards => [...cards, { ...data, id: uuid() }]);
    }
  }, [data]);

  const addCard = () => {
    setUrl("https://deckofcardsapi.com/api/deck/new/draw/");
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default CardTable;

