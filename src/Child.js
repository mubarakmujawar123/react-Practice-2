import React from 'react';

const Child = (props) => {
  console.log('In Child');
  return <h1>{props.name}</h1>;
};

export default React.memo(Child);
