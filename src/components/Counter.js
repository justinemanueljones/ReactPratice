import React, {useState} from 'react'; /* STEP 0 */

export default function Counter() {
  // STEP 1:
  // Using the state hook, create a 'count', 'setCount' pair.
  // The 'count' state should be initialized to the number zero.step 2 line 51 return
  let [count, setCount] = useState(0); //set state

  const increment = () => {  //step 4 set count to +1
    setCount(count + 1);
  };
  const decrement = () => {
    /* STEP 5 This click handler needs to use 'setCount' to set the 'count' to be the current 'count' minus one.
  Do NOT do count--. That amounts to trying to mutate 'count' in place. This is the road to perdition.*/
    setCount(count - 1);
  };
  const reset = () => {
    /* STEP 6 This click handler needs to use 'setCount' to set the 'count' to be zero again.*/
    setCount(0);
  };
  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: count % 2 === 0 ? 'royalblue' : 'crimson',  //The 'style' object has the 'color' property hard-coded to "royalblue".
    // What the value of 'color' should be instead is a ternary expression that goes like this:
    // If count is even, then "royalblue", else "crimson".
  };
  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div style={style}>Number {count} is even</div> {/* STEP 3  We need to replace some hard-coded info in the JSX with expressions, interpolated inside curly brackets.
  Start by replacing the character "0" with {count}. The 'count' slice of state is the source of truth here.
  Then, replace the word "even" with a ternary: {if count is even number, then string "even", else string "odd"}.*/}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

