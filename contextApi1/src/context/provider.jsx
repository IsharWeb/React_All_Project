import React, { useState } from 'react';
import userContext from './userContext';

function ContextProvider({ children }) {
  const [conUser, setContUser] = useState(null);

  return (
    <userContext.Provider value={{ conUser, setContUser }}>
      {children}
    </userContext.Provider>
  );
}

export default ContextProvider;
