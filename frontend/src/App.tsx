import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Login, Home, Dashboard } from './pages'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        {/* Ajouter d'autres routes ici quand nécessaire */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

