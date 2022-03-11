import React, { useState } from 'react';

const Form = () => {
  const [inputValues, setInputValues] = useState({
    userName: '',
    userInfo: '',
    userSubject: 'Angular',
  });

  const userNameChangeHandler = (event) => {
    setInputValues({ ...inputValues, userName: event.target.value });
  };
  const userinfoChangeHandler = (event) => {
    setInputValues({ ...inputValues, userInfo: event.target.value });
  };
  const subjectChangeHandler = (event) => {
    setInputValues({ ...inputValues, userSubject: event.target.value });
  };
  const formSubmitHandler = (event) => {
    alert(
      `${inputValues.userName}, ${inputValues.userInfo}, ${inputValues.userSubject}`
    );
    event.preventDefault();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <lable>user name</lable>
        <input value={inputValues.userName} onChange={userNameChangeHandler} />
      </div>
      <div>
        <lable>user info</lable>
        <textarea
          value={inputValues.userInfo}
          onChange={userinfoChangeHandler}
        ></textarea>
      </div>
      <div>
        <lable>Select subject</lable>
        <select value={inputValues.userSubject} onChange={subjectChangeHandler}>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>
      </div>
      <input type="Submit" />
    </form>
  );
};
export default Form;
