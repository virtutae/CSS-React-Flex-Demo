import React from 'react';
import FlexCardContainer from './FlexCardContainer';

function Main() {
  return (
    <main>
      <section className="flex-card-section">
        <h2>This is the section where your flex cards will appear</h2>
        <p>
          its good to not skip heading levels, h1 for your big page title, then
          h2 for section headings, then h3 for sub headings within topics, and
          so on
        </p>
        <FlexCardContainer />
      </section>
    </main>
  );
}

export default Main;
