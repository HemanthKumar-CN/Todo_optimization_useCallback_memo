
const memoFunc = (func) => {
    const cache = {};
    return input => {
        return cache[input] || (cache[input] = func(input))
    }
}




const fib =memoFunc((n) =>{
    if(n <= 1)
    {
        return n;
    }

    return fib(n-1) + fib(n-2);
});
console.time("f1")
console.log(fib(45))
console.timeEnd("f1")