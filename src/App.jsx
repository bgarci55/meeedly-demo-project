import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/about'
import Settings from './Pages/settings'

function App() {

  return (
      <Routes>
        <Route path="*" element={<h1>Something should render!</h1>} />
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
  )
}

export default App;
