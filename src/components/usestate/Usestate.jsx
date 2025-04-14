import React, { useState } from 'react'

const Usestate = () => {

    const [isOn, setIsOn] = useState(false);
    const toggle = () => {
        setIsOn(!isOn);
    }

    const [text, setText] = useState('');
    const handleChange = () => {
        setText(event.target.value);
    }

    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    const [bgColor, setBgColor] = useState(true);
    const changeBg = () => {
        setBgColor(!bgColor);
    }

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
        setIsChecked(!isChecked);
    }

  return (
    <>
    <div>
        <h2>toggle switch</h2>
        <p>status: { isOn ? 'On' : 'Off' }</p>
        <button className='btn btn-primary rounded-0 text-white' onClick={toggle}>toggle</button>
    </div>

    <div>
        <h2>simple text input</h2>
        <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder='type something ... '
         />
        <p>you typed: {text}</p>
    </div>

    <div>
        <h2>toggle visibility</h2>
        {isVisible && 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis possimus architecto sint odio aliquid, incidunt aliquam dolorum corporis! Dignissimos odit fugit, pariatur quas inventore ullam saepe beatae provident quia quaerat.</p>
        }
        <button className='btn btn-primary rounded-0 text-white' onClick={toggleVisibility}>
            {isVisible ? 'Hide' : 'Show'}
        </button>
    </div>

    <div className={`my-3 py-3 ${bgColor ? 'bg-light' : 'bg-secondary'}`}>
        <h2 className={` ${bgColor ? '' : 'text-white'}`}>toggle background color</h2>
        <p className={` ${bgColor ? '' : 'text-white'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis possimus architecto sint odio aliquid, incidunt aliquam dolorum corporis! Dignissimos odit fugit, pariatur quas inventore ullam saepe beatae provident quia quaerat.</p>
        <button className='btn-primary btn rounded-0 text-white' onClick={changeBg}>
            {bgColor ? 'change BG' : 'reset BG'}
        </button>
    </div>

    <div>
        <h2>counter app</h2>
        <p>count: {count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
    
    <div>
        <h2>checkbox state checker</h2>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <p>{isChecked ? 'you have agreed to terms' : 'you have NOT agreed to terms'}</p>
    </div>
    
    </>
  )
}

export default Usestate