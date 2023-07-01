import React from 'react';
import './style.css'; //import the general page styles
import Main from './Components/Main';
import FlexCard from './Components/FlexCard';

function App() {
  return (
    <>
      <header></header>
      <section>
        <h1>This is Your Title Which is an h1 Element</h1>
        <p>This is a paragraph, and below is an unordered list</p>
        <h2>info on the file below</h2>
        <p>
          Try resizing the app window while looking at the flex cards section to
          see how flex adjusts to different screen sizes
        </p>
        <ol>
          <li>
            In this app there is a style.css file in the src directory, and a
            FlexCardStyle.css in the components directory.
          </li>
          <li>the style.css file sets the base styles for the whole page.</li>
          <li>
            the FlexCardStyle.css file sets the styles for everything to do with
            the flex cards
          </li>
        </ol>
      </section>
      <section>
        <h2>This is an h2 which describes this section</h2>
        <p>
          this section contains information which is grouped into topics by h3
          headings
        </p>
        <h3>this is an h3 heading</h3>
        <p>
          and this is a paragraph describing the topic of the above h3 heading
        </p>
        <p>
          sections like this which are just information text wouldnt necessarily
          be something youd put in a card
        </p>
      </section>
      <section>
        <h2>
          You could put a standalone card in a section like this to bring
          emphasis to some information
        </h2>
        <FlexCard />
      </section>
      <Main />
      <footer></footer>
    </>
  );
}

export default App;
