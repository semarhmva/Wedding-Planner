import React from 'react'
import Footer from '../components/Footer'
import Albums from '../components/album/Albums'
import AlbumsStory from '../components/album/AlbumsStory'
import Memories from '../components/home/Memories'

const Album= () =>  {
    return (
      <section>
        <Albums/>
        <AlbumsStory/>
        <Memories/>
        <Footer/>
      </section>
    )
  }
  
export default Album