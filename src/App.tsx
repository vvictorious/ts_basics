import React, { useState } from 'react';
import './App.css';
import TextField from './TextField'
import Counter from './Counter'

const App: React.FC = () => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>yo</h1>
      <TextField text='hi' />
      <button onClick={increment}>Add</button>      
      <button onClick={decrement}>Subtract</button>          
      <Counter count={count} />
    </div>
  );
}

export default App;
