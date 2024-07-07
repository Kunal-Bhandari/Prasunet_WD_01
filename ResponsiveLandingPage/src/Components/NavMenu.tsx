import './../output.css'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Link } from 'react-router-dom';



const NavMenu = () => {
 

  
  
  

  return (
    <div className='bg-gray-600 w-1/6 h-screen flex flex-col fixed'>

      <div className='flex text-white p-5 justify-start items-center'>
        <span className='flex items-center'><AutoAwesomeIcon/></span>
        <span className='ps-4 font-bold text-2xl'>
          UNTITLED UI
        </span>
      </div>


      <nav className='flex text-white p-2 flex-col justify-between h-full'>
      
        <div className='justify-evenly mt-10'>
          <span className=' font-normal text-sm p-2'>GENERAL</span>
          <ul className='flex rounded-lg hover:bg-yellow-50 hover:text-black m-3 h-10'>
            <Link className='grow text-left text-xl flex items-center' to="/">
              <button className='grow text-xl flex items-center'>
                  <span className='ps-1 flex items-center'><HomeIcon /></span>
                  <span className='ps-1 font-medium'>Home</span>
                </button>
            </Link>  
            </ul>
          <ul className=' flex rounded-lg hover:bg-yellow-50 hover:text-black m-3 justify-center h-10'>
            <Link className='grow text-left text-xl flex items-center' to="/about">
              <button className='grow text-left text-xl flex items-center' >
                <span className='ps-1 flex items-center'><AccountCircleIcon /></span>
                <span className='ps-1 font-medium '>About</span>
              </button>
            </Link>
            </ul>
          <ul className='flex rounded-lg hover:bg-yellow-50 hover:text-black m-3 justify-center h-10 '>
            <Link className='grow text-left text-xl flex items-center' to="/featured">
            
              <button className='grow text-left text-xl flex items-center' >
                <span className='ps-1 flex items-center'><HomeIcon /></span>
                <span className='ps-1  font-medium'>Featured</span>
              </button>
            
            </Link>
            </ul>
            <ul className='flex rounded-lg hover:bg-yellow-50 hover:text-black m-3 justify-center h-10'>
            <Link className='grow text-left text-xl flex items-center' to="/careers">
            
            <button className='grow text-left text-xl flex items-center' >
                <span className='ps-1 flex items-center'><HomeIcon /></span>
                <span className='ps-1 font-medium'>Careers</span>
              </button>
            
            </Link>  
            </ul>
            <ul className='flex rounded-lg hover:bg-yellow-50 hover:text-black m-3 justify-center h-10'>
            <Link className='grow text-left text-xl flex items-center' to="/network">
            
            <button className='grow text-left text-xl flex items-center' >
                <span className='ps-1 flex items-center'><HomeIcon /></span>
                <span className='ps-1 font-medium'>Network</span>
              </button>
            
            </Link>  
            </ul>
            <ul className='flex rounded-lg hover:bg-yellow-50 hover:text-black m-3 justify-center h-10 '>
            <Link className='grow text-left text-xl flex items-center' to="/privacy">
            
            
            <button className='grow text-left text-xl flex items-center' >
                <span className='ps-1 flex items-center'><HomeIcon /></span>
                <span className='ps-1 font-medium'>Privacy Policy</span>
              </button>
            
            </Link>  
            </ul>
        </div>

        <div className='justify-evenly mb-10'>
          <span className=' font-normal text-sm p-2'>SETTINGS</span>
          <ul className=' flex rounded-lg hover:bg-yellow-50 hover:text-black m-3 justify-center h-10'>
            <Link className='grow text-left text-xl flex items-center' to="/appearance">
            
            <button className='grow text-left text-xl flex items-center' >
              <span className='ps-1 flex items-center'><HomeIcon /></span>
              <span className='ps-1  font-medium '>Appearance</span>
            </button>
            
            </Link>
          </ul>
          <ul className='flex rounded-lg hover:bg-yellow-50 hover:text-black m-3 justify-center h-10 '>
            <Link className='grow text-left text-xl flex items-center' to="/database">
            
            
            <button className='grow text-left text-xl flex items-center' >
              <span className='ps-1 flex items-center'><SettingsApplicationsIcon /></span>
              <span className='ps-1  font-medium'>Database</span>
            </button>
            
            </Link>
          </ul>
          <ul className='flex rounded-lg hover:bg-yellow-50 hover:text-black m-3 justify-center h-10'>
            <Link className='grow text-left text-xl flex items-center'  to="/timezones">
            
            <button className='grow text-left text-xl flex items-center' >
              <span className='ps-1 flex items-center'><HomeIcon /></span>
              <span className='ps-1 font-medium'>Timezones</span>
            </button>
            
            </Link>
          </ul>
          <ul className='flex rounded-lg hover:bg-yellow-50 hover:text-black m-3 justify-center h-10'>
            <Link className='grow text-left text-xl flex items-center' to="/notification">
            <button className='grow text-left text-xl flex items-center' >
              <span className='ps-1 flex items-center'><HomeIcon /></span>
              <span className='ps-1 font-medium '>Notifications</span>
            </button>
            
            </Link>
            
          </ul>
        </div>
        
      </nav>
    </div>
  )
}

export default NavMenu