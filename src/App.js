import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import DefaultLayout from "./layouts/default";

// Pages
import Home from "./pages/home";


function App() {
  useEffect(() => {
  }, [])

  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          {/*<Route path="url" element={<Home />} />*/}
        </Route>
      </Routes>
    </div>
  )
}

export default App