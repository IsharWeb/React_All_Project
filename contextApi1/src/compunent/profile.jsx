import React, { useContext } from 'react';
import userContext from '../context/userContext';

function Profile() {
  const { conUser } = useContext(userContext);

  if (!conUser) return <div>Please log in</div>;

  return <div>Welcome {conUser}</div>;
}

export default Profile;
