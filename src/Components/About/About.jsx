import React from 'react'

function About() {
  return (
    <div className='' >
    <h1 className='text-center m-8 font-bold'>ABOUT US</h1>
    <div className='flex justify-center mt-4'>
      <hr className='w-24 border-black	' />
    </div>
    <div className='grid lg:grid-cols-2  lg:mx-48 lg:h-80'>
    <div className='flex justify-center place-items-center'>
      <h1 className='hidden lg:block text-center text-7xl'>THIS IS US</h1>
      {/* <img className='hidden lg:block lg:w-full  lg:h-80' src='https://i.postimg.cc/tgdngvjS/THIS-IS-US.png'></img> */}
    </div>
    <div className='px-8 max-w-md mx-auto sm:px-2 sm:max-w-x1 '>
      <img className='w-full mt-6 h-48 rounded-lg shadow-xl object-cover object-center lg:hidden' src='https://i.postimg.cc/tgdngvjS/THIS-IS-US.png'></img>
      <h2 className='mt-2 text-2xl font-normal text-center sm:mt-4' >OUR STORY</h2>
      <p className='font-light text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare aenean euismod elementum nisi quis eleifend. Non arcu risus quis varius quam quisque id diam vel. Egestas purus viverra accumsan in nisl. Ultrices eros in cursus turpis massa tincidunt. Vitae tortor condimentum lacinia quis. Sodales ut eu sem integer vitae justo eget magna. Ridiculus mus mauris vitae ultricies leo integer malesuada.</p>
    </div>
    </div>
    <div className='grid lg:grid-cols-2 lg:mx-48 lg:h-80'>
    <div className='px-8 py-12 max-w-md mx-auto sm:px-2 sm:max-w-x1  '>
      <img className='w-full h-48 mt-6 rounded-lg shadow-xl object-cover object-center lg:hidden ' src='https://i.pinimg.com/564x/4b/01/a0/4b01a07654e1207a18a35120d91bfa2c.jpg'></img>
      <h2 className='mt-2 text-2xl font-normal text-center sm:mt-4' >WHAT WE DO</h2>
      <p className='font-light text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare aenean euismod elementum nisi quis eleifend. Non arcu risus quis varius quam quisque id diam vel. Egestas purus viverra accumsan in nisl. Ultrices eros in cursus turpis massa tincidunt. Vitae tortor condimentum lacinia quis. Sodales ut eu sem integer vitae justo eget magna. Ridiculus mus mauris vitae ultricies leo integer malesuada.</p>
    </div>
    <div className='flex justify-center place-items-center'>
      <img className='hidden lg:block lg:w-full lg:h-80 lg:object-cover lg:object-center' src='https://i.pinimg.com/564x/4b/01/a0/4b01a07654e1207a18a35120d91bfa2c.jpg'></img>
      {/* <h1 className='hidden lg:block text-center text-7xl'>WHAT YOU'LL DO</h1> */}
    </div>
    </div>
    <div className='grid lg:grid-cols-2 lg:mx-48 lg:h-80'>
    <div className='flex justify-center place-items-center'>
    {/* <img className='hidden lg:block  lg:w-full lg:object-cover lg:object-center lg:h-80' src='https://i.pinimg.com/236x/38/0f/aa/380faafa249127174db47655e5e5efb5.jpg'></img> */}
    <h1 className='hidden lg:block text-center text-7xl'>HOW YOU'LL DO IT</h1>
    </div>
    <div className='px-8 py-12 max-w-md mx-auto  sm:px-2 sm:max-w-x1 '>
      <img className='w-full mt-6 h-48 rounded-lg shadow-xl object-cover object-center lg:hidden' src='https://i.pinimg.com/236x/3a/75/9a/3a759aa77bd8c1b7190e5215b912fc67.jpg'></img>
      <h2 className='mt-2 text-2xl font-normal text-center sm:mt-4' >OUR MODEL</h2>
      <p className='font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare aenean euismod elementum nisi quis eleifend. Non arcu risus quis varius quam quisque id diam vel. Egestas purus viverra accumsan in nisl. Ultrices eros in cursus turpis massa tincidunt. Vitae tortor condimentum lacinia quis. Sodales ut eu sem integer vitae justo eget magna. Ridiculus mus mauris vitae ultricies leo integer malesuada.</p>
    </div> 
    </div>
</div>
  )
}

export default About