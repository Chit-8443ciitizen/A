import './App.css';

import { Outlet } from "react-router";

function App() { 
  
  return (
    <>    
      <div className='  justify-center h-full '>
      <Outlet/>
      </div> 
    </>
  );
}

export default App;
