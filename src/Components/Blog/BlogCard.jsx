import React from 'react'

function BlogCard({article}) {
  return (
    <div className='mt-4 mx-10 md:mx-36 lg:mx-100'>
        <div className='md:flex mt-2 md:mt-4 '>
          <div className='mx-4 md:mx-0'>
            { article.cover_url?
                        <img src={article.cover_url} className='w-full mt-6 h-48 md:hidden rounded-lg shadow-xl object-cover object-center' />
              :
              <img src='https://i.pinimg.com/564x/c2/a2/37/c2a237797a15a483ed0be27e00a064fa.jpg'></img>
                      }
            <img src={article.cover_url} className='w-full mt-6 h-48 md:hidden rounded-lg shadow-xl object-cover object-center' />
          <h2 className=' mt-2 text-center md:text-left md:font-extrabold	md:text-lg'>{article.title}</h2>
          <p className='mt-1 text-xs md:text-base md:font-light	'>{article.description} . . .</p>
          </div>
          <div className='w-64'>
            <img src={article.cover_url} className=' h-24 w-full mt-2 hidden md:block rounded-lg shadow-xl object-cover object-center' />
            </div>
          </div>
          <div className='mt-4'> 
          <hr className='w-full border'/>
          </div>
    </div>
  )
}

export default BlogCard