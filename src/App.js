import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, json } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import DisplayArticle from './Components/Blog/DisplayArticle';
import TextEditor from './Components/Blog/TextEditor';
import Login from './Components/Signup/Login';
import Navbar from './Components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Writer from './Components/Profiles/Writer';
import UserProfile from './Components/Profiles/UserProfile';

function App() {


  const [user, setUser] = useState()
  const token = localStorage.getItem("jwt");
  const id = localStorage.getItem("user");

  console.log(id)
  console.log(token)

  useEffect(() => {
    fetch(`http://localhost:3000/users/${parseInt(id)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            console.log(data)
            setUser(data)
          })
        } else {
          res.json().then((res) => console.log(res))
        }
      })
      .catch(error => {
        console.log(error)
      });
  }, [])

  return (
    <div className="">
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='create' element={<TextEditor user={user} />} />
          <Route path='create/login' element={<Login setUser={setUser} />} />
          <Route path='profile' element={<UserProfile user={user} />} />
          <Route path='blogs' element={<Blog user={user} />} />
          <Route path=':writer' >
            <Route index element={<Writer />} />
            <Route path=':id' element={<DisplayArticle user={user} />} />
          </Route>
          <Route path='about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
