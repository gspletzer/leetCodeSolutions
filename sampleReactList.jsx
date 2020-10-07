/* Sample code for react list on codeSandBox.io */

import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  /* 
    set state with useState for functional components
    breeds initialized as empty array;
    slices initialized as 0, 10; will display 10 at a time with exception of last 'view'
  */
  const [breeds, setBreeds] = useState([]);
  const [slices, setSlices] = useState([0, 10]);
  /*
  utilize useEffect to make fetch request to dog.ceo api
  convert returned data to json object
  then set breeds state with key values (breed names) from data object
  */
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((data) => data.json())
      .then((newData) => {
        // console.log(newData.message);
        setBreeds(Object.keys(newData.message));
      });
  }, []);
  /*
  utilize useEffect to monitor for changes to slices state
  re-renders list when slices values change to create a new list/'view'
  */
  useEffect(() => console.log("slices value changed"), [slices]);
  /*
  write a function for next page that will be called on next 10 button
  if the value of slices at 1 position is greater than or equal breeds array length-1, return nothing;
  else update slices state to add 10 to each value
   */
  const nextPage = () => {
    if (slices[1] >= breeds.length - 1) {
      return;
    }
    setSlices([slices[0] + 10, slices[1] + 10]);
    //console.log(slices);
  };
  /*
  write a function for previous page that will be called on previous 10 button
  if the value of slices at 0 position is less than or equal to zero, return nothing;
  else update slices state to subtract 10 to each value
   */
  const previousPage = () => {
    if (slices[0] <= 0) {
      return;
    }
    setSlices([slices[0] - 10, slices[1] - 10]);
    //console.log(slices);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        <h3>BREEDS</h3>
        {/* use jsx to map the breeds slice into list items */}
        {breeds.slice(slices[0], slices[1]).map((el) => {
          return <li key={el}> {el} </li>;
        })}
      </ul>
      <button onClick={previousPage}>Previous 10</button>
      <button onClick={nextPage}>Next 10</button>
    </div>
  );
}

/* forked codeSandBox: https://codesandbox.io/s/delicate-architecture-u4orh */

