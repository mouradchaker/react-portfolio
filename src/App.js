import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './component/About/About'
import Home from './component/Home/Home'
import Layout from './component/Layout/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
