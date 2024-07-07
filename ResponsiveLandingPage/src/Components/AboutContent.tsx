import './../output.css'
import about from './../assets/about.jpg'
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const  AboutContent = () => {
  return (
      <>
        <div className='flex justify-end'>
            <div className='flex flex-col h-screen overflow-y-scroll w-5/6'>
                    <div className='bg-gray-950 flex justify-center text-white h-40 p-16 text-5xl font-montserrat'>
                            ABOUT THE COMPANY       
                    </div>
                    <div className='bg-slate-400 flex flex-col items-center justify-center h-5/6 rounded-md'>
                            <img className='rounded-2xl mt-10 h-5/6 w-5/6' src={about} alt='About Image' />
                            <div className='flex p-5 mb-5 font-black text-cyan-600 text-2xl text-center ' >
                            Education is not just about going to school and getting a degree. <br/>
                            It's about widening your knowledge and absorbing the truth about life
                            </div>
                    </div>
                    <div className='bg-slate-500 flex flex-col justify-center h-full p-10 rounded-md font-montserrat'>
                        <div className='bg-gray-300 m-10 h-3/4 grow flex rounded-md p-5 '>
                            <div className='bg-gray-400 w-1/2 p-5 flex flex-col justify-evenly '>
                                Our Testimonials

                                <span className='bg-white h-16 rounded-md flex justify-start p-5'>Testimonial 1</span>
                                <span className='bg-white h-16 rounded-md flex justify-start p-5'>Testimonial 2</span>
                                <span className='bg-white h-16 rounded-md flex justify-start p-5'>testimonial 3</span>
                                
            
                            </div>
                            <div className='bg-blue-200 w-1/2 p-5'>
                                Aenean hendrerit sapien tincidunt augue feugiat, nec elementum ex dignissim. Aenean iaculis risus nec mattis malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ultrices, diam ac porttitor molestie, leo tellus sodales orci, vel tempor risus sem in diam. Maecenas accumsan, nibh sed bibendum cursus, velit dolor sollicitudin enim, ac molestie arcu velit sed mauris. Proin ultrices dui quis metus sagittis sagittis. Vestibulum imperdiet sit amet libero non fringilla. Nullam mattis ipsum ut mauris luctus finibus.
                                Aenean at rhoncus nunc. Aliquam lacinia ipsum vel turpis iaculis, at placerat purus luctus. Morbi id felis vitae ipsum consectetur semper vel ac felis. Aenean quis fermentum mi, non ornare dui. Proin ullamcorper elit in ante placerat porta. Sed feugiat orci lobortis ligula tristique sagittis. Sed ac ligula a lacus commodo rutrum eget et ante. In egestas vel nisl sit amet egestas. Aenean maximus dui ut faucibus blandit. Nam id finibus odio.
                                Suspendisse quis metus non turpis pharetra euismod in sit amet nulla. Vestibulum ipsum enim, eleifend sed venenatis ut, consequat vitae nisi. Duis viverra mattis odio fermentum aliquam. Nulla porta maximus purus, nec interdum eros viverra vel. Vestibulum pharetra arcu volutpat, efficitur metus sed, vestibulum turpis. Proin sit amet purus ac elit facilisis auctor eget vitae purus. Vestibulum sed nisl tincidunt, auctor lectus vel, mollis nunc. Nam ex leo, malesuada eget convallis id, pulvinar ut justo. Curabitur gravida finibus erat non auctor. Nam tortor dui, pretium vitae magna vel, pharetra tempor sapien. 
                            </div>
                        </div>   
                    </div>
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

export default AboutContent