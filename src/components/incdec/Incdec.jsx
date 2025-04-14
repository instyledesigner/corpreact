import React, { useEffect, useState } from 'react'

const Incdec = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {}, [count]);
    const incCount = () => {
        setCount(count + 1);
    }
    const decCount = () => {
        setCount(count - 1);
    }
    const resetCount = () => {
        setCount(0);
    }

  return (
    <div>
        <h2>Increase / Decrease</h2>
        <p>{count}</p>
        <button onClick={incCount} className='me-4 mb-4 btn btn-primary rounded-0 text-white'>increase</button>
        <button onClick={decCount} className='me-4 mb-4 btn btn-primary rounded-0 text-white'>increase</button>
        <button onClick={resetCount} className='me-4 mb-4 btn btn-secondary rounded-0 text-white'>reset</button>
    </div>
  )
}

export default Incdec