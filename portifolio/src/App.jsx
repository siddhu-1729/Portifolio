import './App.css'
import Hero from './components/Hero'
import {useContext} from "react";
import {theme} from "./context/ThemeContext"
function App() {
  const {darkMode} = useContext(theme)
  return (
    <>
    <div className={darkMode?"dark":""}>
      <Hero />
    </div>
    </>
  )
}

export default App


