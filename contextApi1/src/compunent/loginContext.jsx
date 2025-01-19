import React, { useState } from 'react';
import userContext from '../context/userContext';

function LoginContext() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { setContUser } = React.useContext(userContext);

  const clickHandler = (e) => {
    e.preventDefault();
    setContUser(user);  // Only pass the username
  };

  return (
    <>
      <div>LoginContext</div>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      /> <br />
      <div>LoginContext</div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> <br />
      <button type="submit" onClick={clickHandler}>Click Me</button>
    </>
  );
}

export default LoginContext;
