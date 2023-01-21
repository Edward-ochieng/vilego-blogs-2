import React from 'react'
import Header from './Header'
import Card from './Card'
import "./Card.css";


export default function Home() {
  return (
    <div >
    <div className='Carda'>
      <Header />
      <div className='main'>
        <Card />
      </div>
    </div>
    </div>
  )
}