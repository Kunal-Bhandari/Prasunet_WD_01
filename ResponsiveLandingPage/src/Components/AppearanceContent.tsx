import './../output.css'
import appearance from './../assets/appearance.jpg'
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const AppearanceContent = () => {
  return (
    <>
          <div className='flex justify-end'>
            <div className='flex flex-col h-screen overflow-y-scroll w-5/6'>
                    <div className='bg-gray-950 flex justify-center text-white h-40 p-16 text-5xl font-montserrat'>
                            Appearance Management      
                    </div>
                    <div className='bg-slate-400 flex flex-col items-center justify-center h-5/6 rounded-md'>
                            <img className='rounded-2xl mt-10 h-5/6 w-5/6' src={appearance} alt='About Image' />
                    </div>
                  {/* {} */}
                    <div className='flex flex-col h-5/6 bg-cyan-200 p-5'>
                      <div className='p-10 flex grow h-1/3  rounded-md justify-between'>
                        <span className='text-3xl font-roboto font-bold items-center flex'> ALL FEATURES </span>
                        <div className='flex justify-end w-2/3'>
                          <span className='bg-cyan-700 flex items-center p-2 rounded-sm'> <SearchIcon /> <input className='bg-cyan-700 outline-0 ms-1' type="text" placeholder='Search a feature' /></span>
                          <span className='flex items-center ms-2 hover:bg-white'> <Button color="primary" startIcon={<AddIcon/>} className=' hover:text-black hover:border-black' variant='outlined' size='large'> Add Feature </Button></span>
                        </div>
                        
                          
                        
                      </div>
                      <div className='bg-cyan-300 opacity-85 mx-3 rounded-lg p-5'>
                        <div className='bg-slate-300 rounded-sm flex grow justify-between py-3 mb-5'>
                          <span className='mx-5 grow text-xl font-roboto font-light'>Feature Name</span>
                          
                          <div className='flex justify-end w-3/4'>
                            <span className='me-10 text-xl font-roboto font-light'>Activate Feature </span>
                            <span className='mx-7 text-xl font-roboto font-light'>Delete Feature</span>
                          </div>
                          
                        </div>
                        <ul>
                          <li className='flex justify-between items-center p-5 text-xl font-montserrat bg-cyan-100 my-5 rounded-lg'>
                            Feature 1
                            <div className='flex justify-end w-2/3 items-center'>
                              <span className='flex justify-around w-1/5 '><Switch/></span>
                              <span className='flex justify-around w-1/5 '><DeleteIcon/></span>
                            </div>
                            
                          </li>
                          <li className='flex justify-between items-center p-5 text-xl font-montserrat bg-cyan-100 my-5 rounded-lg'>
                            Feature 2
                            <div className='flex justify-end w-2/3 items-center'>
                              <span className='flex justify-around w-1/5 '><Switch/></span>
                              <span className='flex justify-around w-1/5 '><DeleteIcon/></span>
                            </div>
                            
                          </li>
                          <li className='flex justify-between items-center p-5 text-xl font-montserrat bg-cyan-100 my-5 rounded-lg'>
                            Feature 3
                            <div className='flex justify-end w-2/3 items-center'>
                              <span className='flex justify-around w-1/5 '><Switch/></span>
                              <span className='flex justify-around w-1/5 '><DeleteIcon/></span>
                            </div>
                            
                          </li>
                          <li className='flex justify-between items-center p-5 text-xl font-montserrat bg-cyan-100 my-5 rounded-lg'>
                            Feature 4
                            <div className='flex justify-end w-2/3 items-center'>
                              <span className='flex justify-around w-1/5 '><Switch/></span>
                              <span className='flex justify-around w-1/5 '><DeleteIcon/></span>
                            </div>
                            
                          </li>
                          
                        </ul>

                        
                      </div>
                    </div>
                      
                   
                  {/* {} */}
                    <div className='h-3/4 flex grow bg-orange-300'>
                        <div className='bg-gray-300 m-8 h-5/6 grow flex rounded-md p-2 '>
                            <div className='bg-gray-400 w-1/2 p-5 flex flex-col justify-around items-center font-montserrat '>
                                
                                <span className='flex'>Contact Us at:</span>

                                <ul className='flex'>
                                  <li>
                                    Email us at: sales@company.com
                                  </li>
                                  <li>
                                    For inquires: info@company.com                                      
                                  </li>
                                  <li>
                                    For careers : jobs@company.com
                                  </li>
                                </ul>
                              
                                <ul className='flex justify-around w-2/3'>
                                  <li className='hover:cursor-pointer'>
                                    <GoogleIcon fontSize='large' />
                                  </li>
                                  <li className='hover:cursor-pointer'>
                                    <InstagramIcon fontSize='large'/>                         
                                  </li>
                                  <li className='hover:cursor-pointer'>
                                    <LinkedInIcon fontSize='large'/>
                                  </li>
                                  <li className='hover:cursor-pointer'>
                                    <FacebookIcon fontSize='large'/>
                                  </li>
                                </ul>
                                    
                
                            </div>
                            <div className='bg-blue-200 w-1/2 p-5'>
                                Aenean hendrerit sapien tincidunt augue feugiat, nec elementum ex dignissim. Aenean iaculis risus nec mattis malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ultrices, diam ac porttitor molestie, leo tellus sodales orci, vel tempor risus sem in diam. Maecenas accumsan, nibh sed bibendum cursus, velit dolor sollicitudin enim, ac molestie arcu velit sed mauris. Proin ultrices dui quis metus sagittis sagittis. Vestibulum imperdiet sit amet libero non fringilla. Nullam mattis ipsum ut mauris luctus finibus.
                                Aenean at rhoncus nunc. Aliquam lacinia ipsum vel turpis iaculis, at placerat purus luctus. Morbi id felis vitae ipsum consectetur semper vel ac felis. Aenean quis fermentum mi, non ornare dui. Proin ullamcorper elit in ante placerat porta. Sed feugiat orci lobortis ligula tristique sagittis. Sed ac ligula a lacus commodo rutrum eget et ante. In egestas vel nisl sit amet egestas. Aenean maximus dui ut faucibus blandit. Nam id finibus odio.
                                
                            </div>
                        </div>
                    </div>
            </div>    
        </div>

    </>
  )
}

export default AppearanceContent