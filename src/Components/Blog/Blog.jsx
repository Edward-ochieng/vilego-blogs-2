import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';


function Blog({user}) {
    const [showOption, setShowOption] = useState(true)
    const [articles, setArticles] = useState([])
    const token = localStorage.getItem("jwt");
    const id = localStorage.getItem("user");
    console.log(user)
    useEffect(() => {
      fetch(`https://blog-app-production-e04b.up.railway.app/articles`,{
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          if (res.ok) {
            res.json().then((data) => {
              console.log(data)
              setArticles(data)
            })
          } else {
            console.log(res)
          }
        })
    }, []); 

    const renderToBlog = articles.map((item) => {
        return <BlogCard key={item.id} id={item.id}/> 
      })
  return (
    <div className=''>
        <div className=' mt-8 mx-8  flex justify-center space-x-4 md:mx-36 lg:mx-100 '>  
            <button 
            className=''
            onClick={() => setShowOption(true)}
            >For You</button>

        </div>
        <div className='flex justify-center mt-2 mx-8 md:mx-36 lg:mx-100'> 
        <hr className='w-full border-black '></hr>
        </div>
        {
               articles.map((item) => {
            return (
               <div>
                <Link
               to={`/${item.user.username}`}
          >
                <div className='flex mx-8 md:mx-36 space-x-4  lg:mx-100'>
                 <div className='rounded'>
                 <img src={item.user.profile_photo} className='h-10 w-10 rounded-full border mt-4'></img>
                 </div>
                 <div className='mt-4'>
                 <p className=''>{item.user.firstname} {item.user.secondname}</p>
                 <p className='text-xs'>{item.user.occupation}</p>
                 </div>
                 </div>
                </Link>
                <Link
                   to={`/${item.user.username}/${item.title}`}
                >
                <BlogCard key={item.id} article={item} />
                </Link>
                 {/* <div className='space-x-4 mx-4 mt-4 flex w-16 bg-gray-200 rounded-full justify-center  md:mx-36 lg:mx-100'>
                       <p className='bg'>Safari</p>
                   </div> */}
               </div> 
             )
        }) 
        } 
    </div>
  )
}

export default Blog