import React from 'react';
import style from './PersonList.module.css'
const Person = ({ person }) => {
  return <h1 className={style.header} >I am {person.name}</h1>;
};

export default Person;
