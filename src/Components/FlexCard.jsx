import React from 'react';

function FlexCard() {
  return (
    <div className="flex-card">
      <h3 className="card-heading">Card heading h3</h3>
      <img
        className="card-image"
        src="https://placehold.co/400"
        alt="placeholder image"
      ></img>
      <p className="card-paragraph">
        These will work as basic card templates, add more elements and pass in
        parameters to the FlexCard component to customise them
      </p>
    </div>
  );
}

export default FlexCard;
