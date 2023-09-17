import React from 'react'
import useCounter from './useCounter'


const CounterComponent = () => {
const {count, increment, decrement} = useCounter(10, 10)



  return (
    <div>
        <h2>Contador:{count}</h2>
        <button onClick={increment}>sumar</button>
        <button onClick={decrement}>restar</button>
    </div>
  )
}

export default CounterComponent