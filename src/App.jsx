import { useState, useEffect } from 'react'

import StyledButton from './StyledButton';

function App() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(true);

  const [C, setC] = useState(["1", "2", "3"]);

  useEffect(() => {
    const id = setInterval(() => {

      if (!B) {return;}
      setA(A+1)

    }, 1000)

    return () => {

      clearInterval(id)
    
    }
  })

  function click() {
    setB((prev) => {return !prev})
    // setB(!B)
  }

  return (
    <>
      <h1>{A}</h1>
      {C.map((el, i) => 
        <StyledButton key={i} text={el} onClick={click} />
      )}
    </>
  )
}

export default App
