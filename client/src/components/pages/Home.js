import React from 'react'
import Contacts from '../contacts/Contacts'

const Home = props => {
  return (
    <div className='grid-2' >
      <div>Contact Form here</div>
      <div>
        <Contacts />
      </div>
    </div>
  )
}

export default Home