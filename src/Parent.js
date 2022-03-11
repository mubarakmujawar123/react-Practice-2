import React, { useState, useEffect } from 'react';
import Child from './Child';
const Parent = () => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    setInterval(() => {
      setUserName('abc');
    }, 1000);
  });

  console.log('In parent ');
  return <Child name={userName} />;
};

export default Parent;
