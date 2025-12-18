import React, { useState } from 'react';
import Card from './components/cards'; 
import Button from './components/button';


function App() {
const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
  {
  title: 'Card title',
  text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
  title: 'Card title',
  text: 'This card has supporting text below as a natural lead-in to additional content.'
  },
  {
  title: 'Card title',
  text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
  }
  ];

return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Esercizio 1</h1>
        <div className="row">
            {cards.map((card, index) => (
    <Card
        key={index}
        title={card.title}
        text={card.text}
        active={activeIndex === index}
        onClick={() => setActiveIndex(index)}
    />
    ))}
    </div>
    <div className="row mt-4">
      <div className="col-12 text-center">
        <Button onClick={() => setActiveIndex(null)} />
        
      </div>
    </div>
    </div>
    );
}

export default App;