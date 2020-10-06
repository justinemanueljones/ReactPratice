import React, { useState } from 'react'; /* STEP 0 */

export default function Spinner() {
  /* STEP 1 Create a 'spinnerOn', 'setSpinnerOn' pair of variables using the state hook.
  The 'spinnerOn' should be initialized to true if you want the spinner to be visible on page load, false otherwise.*/
  const [spinnerOn, setSpinnerOn] = useState(true);

  const toggleSpinner = () => {
    /* STEP 4 This click handler needs to toggle the spinner by setting "whether on" to be the opposite of what it currently is.
  Do you remember the operator we use to do "not"?*/
    setSpinnerOn(!spinnerOn);
  };

  return (
    <div className='widget-spinner container'>
      <h2>Spinner</h2>
      {
        spinnerOn && <div className='spinner'>--+--</div> /* STEP 2   This is called a logical expression. If the expressions on both sides of the '&&' are truthy,
  the one on the right becomes the value of the whole line. If an expression on either side of the '&&'
  is falsy, the one on the left becomes the value of the whole line. It's a neat little trick to render
  a React element (in this case the spinner) conditionally: only if the variable on the left is truthy.*/
      }
      <button onClick={toggleSpinner}>{spinnerOn === true ? 'Hide' : 'Show'} Spinner</button> {/* STEP 3 Use a ternary expression inside the text of the button, to render "Hide" or "Show" depending on the value of 'spinnerOn'.*/}
    </div>
  );
}
