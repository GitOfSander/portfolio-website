import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layouts
import DefaultLayout from "./layouts/default";

// Pages
import Home from "./pages/dashboard/home";


function App() {
  const [loginPanelHeight, setLoginPanelHeight] = useState(AppContext)


  useEffect(() => {
  }, [])

  const location = useLocation()

  return(
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          {/*<Route path="url" element={<Home />} />*/}
        </Route>
      </Routes>
    </div>
  )
}

export default App