import React from 'react';

function Card({ title, description, image, link }) {
  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imgStyle} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} style={buttonStyle}>Ver la clase</a>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#1e293b',
  color: 'white',
  borderRadius: '10px',
  padding: '20px',
  width: '300px',
  margin: '20px',
  textAlign: 'center',
};

const imgStyle = {
  width: '100%',
  borderRadius: '10px',
};

const buttonStyle = {
  backgroundColor: '#9f7aea',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  textDecoration: 'none',
};

export default Card;
