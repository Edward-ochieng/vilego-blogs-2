import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function UserProfile({user}) {
  const [pfp, setPfp] = useState('https://i.pinimg.com/236x/57/7a/13/577a138292edc227be302f5a36a9f238.jpg')
  const [fName, setFName] = useState()
  const [sName, setSName] = useState()
  const [occ, setOcc] = useState('where you work')
  const [des, setDes] = useState('help your readers understand you well')
  const [emailAddress, setEmailAddress] = useState()
  const [username, setUsename] = useState()
  const token = localStorage.getItem("jwt");
  const id = localStorage.getItem("user");
  const [showModal, setShowModal] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState()
  const [firstName, setFirstName] = useState()
  const [secondName, setSecondName] = useState()
  const [occupation, setOccupation] = useState()
  const [description, setDescription] = useState()
  const [articles, setArticles] = useState([])
  const navigate = useNavigate()
  console.log(user)
  const formData = new FormData();
  console.log(token)




  function onImageChange(e) {
    setProfilePhoto([...e.target.files]);
  }


  useEffect(() => {
    fetch(`http://localhost:3000/users/${parseInt(id)}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            console.log(data)
            setFName(data.firstname)
            setSName(data.secondname)
            setDes(data.description)
            setPfp(data.profile_photo)
            setOcc(data.occupation)
            setEmailAddress(data.email_address)
            setUsename(data.username)
            setArticles(data.articles)
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, []);


  function handleSubmit() {
    const token = localStorage.getItem("jwt");
    formData.append('firstname', firstName);
    formData.append('secondname', secondName);
    formData.append('occupation', occupation);
    formData.append('description', description);
    formData.append('profile_photo', profilePhoto[0]);
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData
    }).then((res) => res.json()
      .then((res) => {
        console.log(res)
        setFName(res.firstname)
        setSName(res.secondname)
        setDes(res.description)
        setPfp(res.profile_photo)
        setOcc(res.occupation)
        setEmailAddress(res.email_address)
        setUsename(res.username)
        setArticles(res.articles)
        navigate(0)
      }))
    setShowModal(false)
  }

  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img src={pfp} className='object-cover object-center w-48 h-48 rounded-full'></img>
            </div>
          </div>

          <div claclassNamess="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button
              onClick={() => setShowModal(true)}
              class="text-white py-2 px-4 uppercase rounded bg-gray-400 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              EDIT
            </button>
          </div>
        </div>

        <div class="mt-20 text-center border-b pb-12">
          <h1 class="text-4xl font-medium text-gray-700">{fName} {sName} </h1>
          <p class="font-light text-gray-600 mt-3">@{username}</p>
          <p class="mt-2 text-gray-500">{emailAddress}</p>
          <p class="mt-8 text-gray-500">{occ}</p>


        </div>

        <div class="mt-12 flex flex-col justify-center">
          <p class="text-gray-600 text-center font-light lg:px-16">{des}.</p>
          <h2
            class="text-red-800 py-2 px-4 text-center font-medium mt-4"
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
                    <div className='mx-4 md:mx-0'>
                      <img src={item.cover_url}  className='w-full mt-6 h-48 md:hidden rounded-lg shadow-xl object-cover object-center' />
                    <h2 className=' mt-2 text-center md:text-left md:font-extrabold	md:text-lg'>{item.title} </h2>
                      <p className='mt-1 text-xs md:text-base md:font-light	'>{item.description}.</p>
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
      {showModal ? (
        <>
          <div className="justify-center  bg-theme items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-4 ">
            <div className="relative sm:w-3/4 mx-auto">
              {/*content*/}
              <div className="border-0 sm:rounded-lg shadow-lg relative flex flex-col sm:h-3/4 bg-gray-300 w-screen sm:w-full  outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h1 className="text-center">Update Details</h1>
                </div>
                {/*body*/}
                <div className="relative flex-row flex-auto p-5  p-auto m-auto justify-around">

                  <div className="flex flex-row justify-around m-2">
                    <label className="text-black font-bold pr-1">First Name:</label>
                    <input className="border bg-gray-200 rounded-md" autoComplete="off" onChange={(e) => setFirstName(e.target.value)} required />
                  </div>
                  <div className="flex flex-row justify-around pr-1 m-2">
                    <label className="text-black pr-1 font-bold">Second Name:</label>
                    <input className="text-black border bg-gray-200 rounded-md" onChange={(e) => setSecondName(e.target.value)} autoComplete="off" required />
                  </div>
                  <div className="flex flex-row justify-around pr-1 m-2">
                    <label className="text-black pr-1 font-bold">Occupation:</label>
                    <input className="text-black border bg-gray-200 rounded-md" autoComplete="off" onChange={(e) => setOccupation(e.target.value)} />
                  </div>
                  <div className=" flex flex-row justify-around pr-1 m-2">
                    <label className="text-black pr-1 font-bold ">Description:</label>
                    <input className="text-black border bg-gray-200 rounded-md" autoComplete="off" onChange={(e) => setDescription(e.target.value)} required />
                  </div>
                  <div className="flex flex-row justify-around pr-1">
                    <label className="text-black pr-1 font-bold">Profile Photo:</label>
                    <input className="text-black border bg-gray-200 rounded-md" name="seats" type='file' onChange={onImageChange} />
                  </div>
                </div>
                <div className="flex items-center justify-around p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 bg-red-200 background-transparent px-6 py-2 text-xs rounded p-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 uppercase text-xs p-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    complete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}
export default UserProfile