import React from "react";
import { Card } from "react-bootstrap";
import './tiles.css'


const MooreDeets = () => {
  const cardInfo = [
    {
        image:'https://reactimg194502-dev.s3.us-east-2.amazonaws.com/Trucks/Services/Technico/Colores-FH.png',
        title:'FH',
    },
    {
        image:'https://reactimg194502-dev.s3.us-east-2.amazonaws.com/Trucks/Services/Technico/Modelos-FM.png',
        title :'FM',
        
    },
    {
        image:'https://reactimg194502-dev.s3.us-east-2.amazonaws.com/Trucks/Services/Technico/Tecnico-FMX.png',
        title:'FMX',
        
    },
    {
        image:'https://reactimg194502-dev.s3.us-east-2.amazonaws.com/Trucks/Services/Technico/Tecnico-VM.png',
        title: 'VM',
        
    },
  ];

  const renderCard = (card, index) => {
    return (
        <div class="card" key={index}>
            <img class="card-img" src={card.image} alt="Card image"/>
            <div class="card-img-overlay">
                <h5 class="card-title">{card.title}</h5>
            </div>
        </div>
    );
  };

  return <div>{cardInfo.map(renderCard)}</div>;
};

export default MooreDeets;