
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[count, setcount] = useState(0);

  const incremnmet = () => {
    setcount(count + 1);
  }

  return (
    <div>
       <p>Button clicked {count} times</p>
       <button> onClick = {incremnmet} Clicked me</button>
    </div>
  )
}

export default App
