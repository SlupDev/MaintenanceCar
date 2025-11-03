import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login, Home } from './pages'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Ajouter d'autres routes ici quand nécessaire */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

