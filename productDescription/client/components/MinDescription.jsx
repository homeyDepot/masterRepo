import React from 'react';

const MinDescription = ({ descriptions }) => {
  let minDescription = descriptions.split('|').filter((description, i) => {
    if (i < 3) {
      return description;
    }
  });
  return (
    <div className="product-minDescription">
      <li key="0">{minDescription[0]}</li>
      <li key="1">{minDescription[1]}</li>
      <li key="2">{minDescription[2]}</li>
    </div>
  );
};

export default MinDescription;
