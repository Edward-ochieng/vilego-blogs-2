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
      <p className='font-light text-center mt-2'>Our story begins with a passion for creativity and self-expression. We started our blog with the goal of sharing our unique perspectives and experiences with the worldAs we delved deeper into the blogging world, we realized the power of storytelling and the impact it can have on people's lives. We began to focus on crafting compelling and relatable content that would resonate with our readers.We are a team of writers, photographers, and designers who come from different backgrounds and bring our own unique perspectives to the table.</p>
    </div>
    </div>
    <div className='grid lg:grid-cols-2 lg:mx-48 lg:h-80'>
    <div className='px-8 py-12 max-w-md mx-auto sm:px-2 sm:max-w-x1  '>
      <img className='w-full h-48 mt-6 rounded-lg shadow-xl object-cover object-center lg:hidden ' src='https://i.pinimg.com/564x/4b/01/a0/4b01a07654e1207a18a35120d91bfa2c.jpg'></img>
      <h2 className='mt-2 text-2xl font-normal text-center sm:mt-4' >WHAT WE DO</h2>
      <p className='font-light text-center '>we are passionate about storytelling and self-expression. We believe that everyone has a story to tell, and we are here to help you share yours. Our blog covers a wide range of topics, including personal development, travel, food, fashion, and more. We strive to create content that is not only informative and entertaining, but also thought-provoking and inspiring.</p>
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
      <p className='font-light text-center'>We've covered a wide range of topics, from personal development to travel, and from food to fashion. We strive to create content that is not only informative and entertaining, but also thought-provoking and inspiring.We offer a variety of content for our readers, including in-depth blog posts, personal articles, product reviews, photo essays, and more. Our team of writers, editors, photographers, and designers work together to create high-quality content that provides value to our readers.</p>
    </div> 
    </div>
</div>
  )
}

export default About