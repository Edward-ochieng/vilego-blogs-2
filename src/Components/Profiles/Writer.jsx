import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard';


function Writer() {
  const [profilePhoto, setProfilePhoto] = useState()
  const [firstName, setFirstName] = useState()
  const [secondName, setSecondName] = useState()
  const [occupation, setOccupation] = useState()
  const [description, setDescription] = useState()
  const [articles, setArticles] = useState([])
  const [emailAddress, setEmailAddress] = useState()
  const [username, setUsename] = useState()
  const id = useParams()
  const token = localStorage.getItem("jwt");


  useEffect(() => {
    fetch(`http://app-production-e04b.up.railway.app/writer/${id.writer}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            console.log(data)
            setFirstName(data.firstname)
            setSecondName(data.secondname)
            setDescription(data.description)
            setProfilePhoto(data.profile_photo)
            setOccupation(data.occupation)
            setEmailAddress(data.email_address)
            setUsename(data.username)
            setArticles(data.articles)
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (

    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img src={profilePhoto} className='object-cover object-center w-48 h-48 rounded-full'></img>
            </div>
          </div>

          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
          </div>
        </div>

        <div className="mt-36 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">{firstName} {secondName}</h1>
          <p className="font-light text-gray-600 mt-3">@{username}</p>

          <p className="mt-8 text-gray-500">{occupation}</p>
        </div>

        <div className="mt-12 flex flex-col justify-center">
          <p className="text-gray-600 text-center font-light lg:px-16">{description}</p>
          <h2
            className="text-red-800 py-2 px-4 text-center font-medium mt-4"
          >
            BLOGS </h2>
        </div>
        {articles.map((item) => {
          return (
            <Link
              to={`/${username}/${item.title}`}
            >
              <div>
                <div className='mt-4 mx-10 md:mx-36 lg:mx-105'>
                  <div className='md:flex mt-2 md:mt-4 '>
                    <div className='ml-4 md:mx-0'>
                      <img src='https://i.pinimg.com/236x/9b/2b/8f/9b2b8fa4714c82cab53215271b0896aa.jpg' className='w-full mt-6 h-48 md:hidden rounded-lg shadow-xl object-cover object-center' />
                      <h2 className=' mt-2 text-center md:text-left md:font-extrabold	md:text-lg'>{item.title}</h2>
                      <p className='mt-1 text-xs md:text-base md:font-light	'>{item.description}...</p>
                    </div>
                    <div className='w-64'>
                      <img src={item.cover_url} className=' h-24 w-full mt-2 hidden md:block rounded-lg shadow-xl object-cover object-center' />
                    </div>
                  </div>
                </div>
                <div className='space-x-4 mx-12 mt-4 flex w-16 bg-gray-200 rounded-full justify-center md:mx-36 lg:mx-100'>
                  <p className='bg'>Safari</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Writer