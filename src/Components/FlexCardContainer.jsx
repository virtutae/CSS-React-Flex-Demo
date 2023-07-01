import React from 'react';
import FlexCard from './FlexCard';
import './FlexCardStyle.css'; //import the styles for the relevant elements

function FlexCardContainer() {
  return (
    <div className="flex-card-container">
      <FlexCard />
      <FlexCard />
      <FlexCard />
      <FlexCard />
      <FlexCard />
      <FlexCard />
      <FlexCard />
      <FlexCard />
      <FlexCard />
      <FlexCard />
    </div>
  );
}

export default FlexCardContainer;
