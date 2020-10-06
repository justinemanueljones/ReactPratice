import React, { useState } from 'react'; /* STEP 0 study the component*/

const initialMood = 'Not sure how I feel';
const happyMood = 'Quite happy!';
const sadMood = 'Rather sad';

export default function Moods() {
  // STEP 1  Create a 'mood', 'setMood' pair using the state hook.
  const [mood, setMood] = useState(initialMood);

  const makeHappy = () => {
   setMood(happyMood);
  };
  const makeSad = () => {
    /* STEP 5 Inside these click handlers set the correct mood, using 'setMood' and the variables below the imports.*/
    setMood(sadMood);
  };
  const reset = () => {
    /* STEP 6 Inside these click handlers set the correct mood, using 'setMood' and the variables below the imports. */
    setMood(initialMood);
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: mood === happyMood ? 'green' : 'crimson',
    
     /* STEP 2    Make the color of the text be green if the state of the mood is happy, 
     crimson otherwise.*/
  };

  return (
    <div className='widget-moods container'>
      <h2>Moods</h2>
      <div style={style}>{mood}</div> {/* STEP 3 Remove the hard-coded mood 
      \and interpolate the 'mood' slice of state instead, using curly brackets.*/}
      <div>
        <button onClick={makeHappy}>Make Happy</button>
        <button onClick={makeSad}>Make Sad</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}