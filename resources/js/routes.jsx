import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CadastroOng from '../js/Pages/Ong/CadastroOng'
import Home from '../js/Pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/CadastroOng" element={<CadastroOng />} />
      </Routes>
    </BrowserRouter>
  )
}
