import React, { useState } from "react";
import { randomNumber } from "../utils";

function NumberList() {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [filterBy, setFilterBy] = useState("All");
  
  let numbersToDisplay = numbers;
  if (filterBy === "Even") {
    numbersToDisplay = numbers.filter((num) => num % 2 === 0);
  } else if (filterBy === "Odd") {
    numbersToDisplay = numbers.filter((num) => num % 2 !== 0);
  }

  function handleFilterChange(event){
    setFilterBy(event.target.value)
  }
  
   <select name="filter">
     <option value="All">All</option>
     <option value="Even">Even</option>
     <option value="Odd">Odd</option>
    </select>
  
  function handleAddNumber() {
    const newNumber = randomNumber();
    console.log(newNumber);
  }
  
  function handleAddNumber() {
    const newNumber = randomNumber()
    const newNumberArray = [...numbers,newNumber]
    setNumbers(newNumberArray)
  }
  
  const numberList = numbersToDisplay.map((num) => <li key={num}>{num}</li>)
    
  function handleClick(numberToRemove) {
    const newNumberArray = numbers.filter((number) => number !== numberToRemove)
    setNumbers(newNumberArray)
  }
    
  function handleClick(numberToUpdate) {
    const newNumberArray = numbers.filter((number) =>
    number === numberToUpdate ? numberToUpdate + 100 : number
    )
    setNumbers(newNumberArray)
  }
    
  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <ul>{numberList}</ul>
   </div>
  );
}

export default NumberList;
