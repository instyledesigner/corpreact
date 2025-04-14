import React, { useState } from 'react'
import HomeBanner from '../components/homebanner/HomeBanner'
import Component1 from '../components/component1/Component1'
import Component2 from '../components/component2/Component2'
import Component3 from '../components/component3/Component3'
import Usestate from '../components/usestate/Usestate'
import ToDo from '../components/todolist/ToDo'
import Incdec from '../components/incdec/Incdec'
import Stopwatch from '../components/stopwatch/Stopwatch'

const Home = () => {

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className=''>
      <HomeBanner />
      <Component1 />
      <Component2 />
      <Component3 />

      <p>{count}</p>
      <button className='btn btn-primary rounded-0 text-white' onClick={increment}>increment</button>

      <Usestate />
      <br />
      <br />
      <br />
      <br />

      <ToDo />
      <br />
      <br />
      <br />
      <br />

      <Incdec />
      <br />
      <br />
      <br />
      <br />

      <Stopwatch />

    </div>
  )
}

export default Home