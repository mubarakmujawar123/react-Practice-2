import React, { useState } from 'react';
import Parent from './Parent';
import './style.css';
import UserGreeting from './UserGreeting';
import PersonList from './PersonList';
import Form from './Form';
import FragmentsExample from './FragmentsExample'
export default function App() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((counter) => counter + 1);
  };
  const incrementHandlerByFive = () => {
    incrementHandler();
    incrementHandler();
    incrementHandler();
    incrementHandler();
    incrementHandler();
  };

  return (
    <div>
      {/*count: {counter}
      <br />
      <button onClick={() => alert('a')}>Increment</button>
      <br />
      <Parent />
      <UserGreeting />
      <PersonList />
       <Form />
      */}

      <FragmentsExample />
    </div>
  );
}
