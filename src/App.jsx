import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Profile from "./Components/Profile/Profile"
import About from "./Components/About/About"


function App() {

  return (
      <div className="App">
        {/* hacer modo oscuro con un boton */}
          <Profile/>
          <About/>
          <Navbar/>
      </div>
  )
}

export default App
