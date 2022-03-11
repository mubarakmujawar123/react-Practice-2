import React from 'react';

const Child = (props) => {
  const parentGreetHandler = () => {
    props.greetHandlerFunction('Child 1');
  };
  return <button onClick={parentGreetHandler}>Greet parent</button>;
};

export default Child;
