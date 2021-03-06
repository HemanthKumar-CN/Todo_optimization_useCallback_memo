import React, { useMemo } from 'react'
import { useCallback } from 'react';

const isPrime =(n)=> {
    let count = 0;

    if( n === 1 || n === 0)
    {
        return false;
    }

    for(let i = 1; i<=n; i++)
    {
        if(n % i === 0)
        {
            count++;
        }

        if(count > 2)
        {
            return false
        }
    }

    return true;
}

const getNthPrimeNo = (n) => {
    console.log(`getting ${n}th prime no.`)
    let count = 1;

    let i=0;

    while(count <= n)
    {
        i++;

        let res = isPrime(i);

        if(res){
            count++;
        }
    }

    return i;
}

const GetPrime = ({ value, label, next }) => {

    // const val = getNthPrimeNo(value);

    const val = useMemo(()=> getNthPrimeNo(value), [value]);

  return (
    <div>
        <h1>{label}</h1>
        <h3>The {value}th Prime number is</h3>
        <h5> {val} </h5>
        <button onClick={next}>NEXT</button>
    </div>
  )
}

export default React.memo(GetPrime);

// [1ST METHOD:]

// export default React.memo(GetPrime, (prevProps, nextProps) => {
//     return prevProps.value === nextProps.value;
// }) 

// [2ND METHOD]:

// using useMemo

// [3RD METHOD]:

    // USING useCallback