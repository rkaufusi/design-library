import React, {createContext, useState} from 'react';
import TopNav from './components/TopNav';
import {BasicButton} from './componentObj'

export const ComponentContext = createContext(BasicButton) as any

function App() {
  const [context, setContext] = useState(BasicButton)
  return (
    <ComponentContext.Provider value={[context, setContext]}>
      <TopNav/>
    </ComponentContext.Provider>
  );
}

export default App;
