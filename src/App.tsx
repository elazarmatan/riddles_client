import { BrowserRouter, Route, Routes } from 'react-router'
import Welcome from './pages/welcome'
import './App.css'
import Login from './pages/login'
import MainPage from './pages/mainPage'
import Crud from './pages/Crud'
import GamePage from './pages/gamePage'
import RiddlesPage from './pages/riddlesPage'
import FinishGame from './pages/finishGame'
import CreateRiddle from './pages/createRiddle'
import ReadRiddles from './pages/readRiddles'
import UpdateRiddle from './pages/updateRiddles'
import DeleteRiddle from './pages/deleteRiddles'
import Leaderboard from './pages/leaderboard'
import { useState } from 'react'

function App() {
  const [stalogin,setLogin] = useState('')
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Welcome setLogin={setLogin}/>}/>
      <Route path='/login' element={<Login login={stalogin}/>}/>
      <Route path='/mainPage' element={<MainPage/>}/>
      <Route path='/crud' element={<Crud/>}/>
      <Route path='/create' element={<CreateRiddle/>}/>
      <Route path='/read' element={<ReadRiddles/>}/>
      <Route path='/update' element={<UpdateRiddle/>}/>
      <Route path='/delete' element={<DeleteRiddle/>}/>
      <Route path='/leaderboard' element={<Leaderboard/>}/>
      <Route path='/gamePage' element={<GamePage/>}/>
      <Route path='/riddles' element={<RiddlesPage/>}/>
      <Route path='/finish' element={<FinishGame/>}/>
      
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
