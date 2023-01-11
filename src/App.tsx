import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/app-header/Header";

const App = () => {
  const [theme, setTheme] = useState('')
  const toggleTheme = () => {
    setTheme((corr) => (corr === "dark" ? "light" : "dark"))
    
  }

  return (
    <div className="app" id={theme}>
      
      <Header />
      <button className='switch-mode moon' onClick={toggleTheme}>
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="20" height="20" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
      </svg>
      </button>
      <div className="app-container" >
        <Outlet />
      </div>
    </div>
  )
}

export default App;

