import Home from './Pages/Home'
import About from './Pages/About'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NavMenu from './Components/NavMenu'
import './output.css'
import Appearance from './Pages/Appearance';
import Featured from './Pages/Featured';
import Careers from './Pages/Careers';
import Database from './Pages/Database';
import Network from './Pages/Network';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Timezones from './Pages/Timezones';
import Notifications from './Pages/Notifications';




function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/appearance' element={<Appearance/>}/>
          <Route path='/featured' element={<Featured/>}/>
          <Route path='/careers' element={<Careers/>}/>
          <Route path='/database' element={<Database/>} />
          <Route path='/network' element={<Network/> }/>
          <Route path='/privacy' element={<PrivacyPolicy/> } />
          <Route path='/timezones' element={ <Timezones/>} />
          <Route path='/notification' element={<Notifications/> } />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
