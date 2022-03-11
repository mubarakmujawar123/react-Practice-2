import React from 'react';
import Child from './Child';
const Parent = () => {
  const greetHandler = (childName) => {
    alert(`Hello Parent from ${childName}`);
  };
  return <Child greetHandlerFunction={greetHandler} />;
};

export default Parent;
