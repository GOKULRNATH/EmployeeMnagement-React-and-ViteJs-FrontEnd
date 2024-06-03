
import './App.css'
import EmpRegister from './Component/EmpRegister'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './Component/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from './Component/Update';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<EmpRegister />} />
      <Route path='/updateemp/:id' element={<Update/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
