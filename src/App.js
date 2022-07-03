import logo from './logo.svg';
import './App.css';
import GetPrime from './Components/GetPrime';
import { useCallback, useState } from 'react';
import PrimeNum from './Components/PrimeNum';
import Todo from './Components/Todo';

function App() {

  return <div>
    {/* <PrimeNum/> */}
    <Todo/>
  </div>
}

export default App;
