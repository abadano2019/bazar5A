import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const useCounterContext = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
  
  const [counter, setCounter] = useState(1)

  const setCont = (count) =>{
    setCounter(count)
  }

  const getContador = () => {
    return counter;
  }
  
  const value = {
    counter,
    setCont,
    getContador,
  };

  return  <CounterContext.Provider value={counter}>
            {children}
          </CounterContext.Provider>;

};

