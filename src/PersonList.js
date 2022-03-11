import React from 'react';
import Person from './Person';
const PersonList = () => {
  const lineStyle = {
    color: 'blue',
    fontSize: '25px',
  };
  const personList = [
    {
      name: 'John',
      age: 30,
      skill: 'React',
    },
    {
      name: 'Ala',
      age: 20,
      skill: 'Angular',
    },
    {
      name: 'Farah',
      age: 33,
      skill: 'Vue',
    },
  ];
  let personListArr = personList.map((person) => (
    <h1 className="header">I am {person.name}</h1>
  ));
  let personListComp = personList.map((person) => <Person person={person} />);
  return (
    <div>
      {personListArr}
      <div style={lineStyle}> ------------Seperater -------------</div>
      {personListComp}
    </div>
  );
};

export default PersonList;
