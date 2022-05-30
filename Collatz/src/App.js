import React, { useState } from 'react';
import React from 'react';
import Header from './Header';
import Finnish from './Finnish';
import Positive from './Positive';
import HistoryList from './HistoryList';
import './style.css';

export default function App() {
  const [ini, setIni] = useState(0);
  const [num, setNum] = useState(0);
  const [inp, setInp] = useState(0);
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const pole = [];
  const [history, setHistory] = useState(pole);

  function addOne(history, num) {
    setHistory([num, ...history]);
  }

  function handleClick() {
    setNum(inp);
    setCount(0);
    setMax(inp);
    setMin(inp);
    setIni(inp);
    setHistory(pole);
  }

  function handleChange(e) {
    setInp(e.target.value);
  }

  function handleCount() {
    if (num == 0) {
    } else if (num % 2 == 0) {
      addOne(history, num);
      setNum(num / 2);
      setCount(count + 1);
    } else if (num == 1) {
      if (history[0] !== 1) {
        addOne(history, num);
      }
    } else {
      addOne(history, num);
      setNum(num * 3 + 1);
      setCount(count + 1);
    }
    if (num > max) {
      setMax(num);
    }
    if (num < min) {
      setMin(num);
    }
  }

  return (
    <div>
      <Header />
      <h3>Initial value: {ini}</h3>
      <Finnish count={num} />
      <h3 style={{ textAlign: 'right', marginRight: 100 }}>
        ( Max: {max} ) ( Rounds: {count} )
      </h3>
      <button onClick={handleCount}> N E X T </button>
      <p></p>
      <input type="number" value={inp} onChange={handleChange}></input>
      <button onClick={handleClick}>Submit</button>
      <Positive data={inp} />
      <HistoryList seznam={history} id={count} />
    </div>
  );
}
