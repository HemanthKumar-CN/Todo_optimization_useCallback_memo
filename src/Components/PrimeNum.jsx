import React from 'react'
// import GetPrime from './Components/GetPrime';
import { useCallback, useState } from 'react';
import GetPrime from './GetPrime';
// import PrimeNum from './Components/PrimeNum';

const PrimeNum = () => {
    const [prime, setPrime] = useState(1);
    const [prime2, setPrime2] = useState(1)
  
  
    const addBoth =()=> {
      setPrime(prev=> prev + 15)
      setPrime2(prev=> prev + 15)
    }
  
    // const next1 = useCallback(()=>setPrime(prev=> prev + 1),[]);
    // const next2 = useCallback(()=>setPrime2(prev=> prev + 1),[])
  
    const next1 = ()=>setPrime(prev=> prev + 1);
    const next2 = ()=>setPrime2(prev=> prev + 1);
  
    return (
      <div className="App">
        
        <h1 style={{textDecoration: 'underline', color: 'red'}}>Prime Numbers</h1>
        <button onClick={addBoth}>ADD BOTH BY 15</button>
        <GetPrime label='FIRST' value={prime} next={next1} />
        <hr/>
        <GetPrime label='SECOND' value={prime2} next={next2} />
         
      </div>
    );
}

export default PrimeNum