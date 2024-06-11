import { Route, Routes } from 'react-router-dom'
import './App.css'
import ChannelPage from './Pages/ChannelPage/ChannelPage'
import HomePage from './Pages/HomePage/HomePage'
import VidioPlayerPage from './Pages/VidioPlayerPage/VidioPlayerPage'
import Lib from './Libruary/Lib'
import His from './Components/History/His'
import Watch from './Components/Watch/Watch'
import Ho from './Components/Favouritesme/Ho'
import Like from './Components/Like/Like'
import Music from './Components/Music/Music'
import Game from './Components/Game/Game'
import One from './Components/One/One'
import Two from './Components/Two/Two'
import Three from './Components/Three/Three'
import Four from './Components/Four/Four'
import Five from './Components/Five/Five'
import Settings from './Components/Settings/Settings'


function App() {


  return (
    <>
    
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/channel' element={<ChannelPage/>}></Route>
      <Route path='/sub' element={<VidioPlayerPage/>}></Route>
      <Route path='/lib' element={<Lib/>}></Route>
      <Route path='/his' element={<His/>}></Route>
      <Route path='/watch' element={<Watch/>}></Route>
      <Route path='/ho' element={<Ho/>}></Route>
      <Route path='/like' element={<Like/>}></Route>
      <Route path='/music' element={<Music/>}></Route>
      <Route path='/game' element={<Game/>}></Route>
      <Route path='/one' element={<One/>}></Route>
      <Route path='/two' element={<Two/>}></Route>
      <Route path='/three' element={<Three/>}></Route>
      <Route path='/four' element={<Four/>}></Route>
      <Route path='/five' element={<Five/>}></Route>
      <Route path='/settings' element={<Settings/>}></Route>
    </Routes>

    
    

    </>
  )
}

export default App
