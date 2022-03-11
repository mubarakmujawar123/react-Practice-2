import React, { useState } from 'react';

const UserGreeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInHandler = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };
  // {if(isLoggedIn){
  //   return <div>Hello John</div>
  // }
  // else{
  //   return <div>Hello Guest</div>
  // }}

  let message = 'Hello Guest';
  if (isLoggedIn) {
    message = 'Hello John';
  }

  return (
    <div>
      <div>{message}</div>
      {isLoggedIn && (
        <div>
          Good to see you <br />
        </div>
      )}

      <button onClick={logInHandler}>
        {isLoggedIn ? 'Log Off' : 'Log In'}
      </button>
    </div>
  );
};

export default UserGreeting;
