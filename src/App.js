import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './component/Home/Home'
import Layout from './component/Layout/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
