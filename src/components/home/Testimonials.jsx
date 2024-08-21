import React from 'react';
import '../../styles/Testimonials.css';
import TitleSection from '../TitleSection';

function Testimonials() {
  const testimonials = [
    {
      text: 'Our special day on 26th Sept 2021 was just amazing in every way! From start to finish the day was full of love, laughter and special memories created all day. The team were amazing, food delicious, venue beautifully decorated, nothing too much trouble. Citation is second to none and thank you to you all for making our day special - wish we could do it all again!',
      author: 'Maddie & Gabe',
      date: '26th Sept 2021'
    },
    {
      text: 'Our special day on 26th Sept 2021 was just amazing in every way! From start to finish the day was full of love, laughter and special memories created all day. The team were amazing, food delicious, venue beautifully decorated, nothing too much trouble. Citation is second to none and thank you to you all for making our day special - wish we could do it all again!',
      author: 'Maddie & Gabe',
      date: '26th Sept 2021'
    }
  ];
  return (
    <div className="testimonials">
        <div className="container">
            <div className="title">
            <TitleSection 
             subtitle="TESTIMONIALS" 
             mainTitle="What our clients have to say...;"
             vectorLeft="/Vector 3.svg" 
             vectorRight="/Vector 1.svg" 
            />
            </div>
            <div className="content">
           
            </div>
        </div>
    </div>
  )
}

export default Testimonials