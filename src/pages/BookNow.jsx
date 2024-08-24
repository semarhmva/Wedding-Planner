import React from 'react'
import Footer from '../components/Footer';
import Book from '../components/booknow/Book';
import AboutsSeenIn from '../components/about/AboutsSeenIn';



const BookNow= () =>  {
  return (
    <section>
        <Book/>
        <AboutsSeenIn/>
        <Footer/>
    </section>
  )
}

export default BookNow