import React, {createContext, useState} from 'react';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import {ButtonTwo2, ComponentObj} from './componentObj'

//export const ComponentContext = createContext(myObj.componentOne.component) as any
export const ComponentContext = createContext(ComponentObj) as any


/*     <ComponentContext.Provider value={component}>
      <TopNav/>
    </ComponentContext.Provider> */

function App() {
  const [component, setComponent] = useState(ComponentObj)
  return (
    <ComponentContext.Provider value={component}>
      <TopNav/>
    </ComponentContext.Provider>
  );
}

export default App;
