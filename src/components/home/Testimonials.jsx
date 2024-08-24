import React from 'react';
import '../../styles/Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TitleSection from '../TitleSection';
const comments = [
  {
    text: "Our special day on 26th Sept 2021 was just amazing in every way! From start to finish the day was full of love, laughter and special memories created all day. The team were amazing, food delicious, venue beautifully decorated, nothing too much trouble. Citation is second to none and thank you to you all for making our day special - wish we could do it all again!",
    author: "Maddie & Gabe",
    imgSrc: ""
  },
  {
    text: "Our special day on 26th Sept 2021 was just amazing in every way! From start to finish the day was full of love, laughter and special memories created all day. The team were amazing, food delicious, venue beautifully decorated, nothing too much trouble. Citation is second to none and thank you to you all for making our day special - wish we could do it all again!",
    author: "Maddie & Gabe",
    imgSrc: ""
  },
  {
    text: "Our special day on 26th Sept 2021 was just amazing in every way! From start to finish the day was full of love, laughter and special memories created all day. The team were amazing, food delicious, venue beautifully decorated, nothing too much trouble. Citation is second to none and thank you to you all for making our day special - wish we could do it all again!",
    imgSrc: "",
    author: "Maddie & Gabe",
  },
  {
    text: "Our special day on 26th Sept 2021 was just amazing in every way! From start to finish the day was full of love, laughter and special memories created all day. The team were amazing, food delicious, venue beautifully decorated, nothing too much trouble. Citation is second to none and thank you to you all for making our day special - wish we could do it all again!",
    author: "Maddie & Gabe",
     imgSrc: ""
  },
  {
    text: "Our special day on 26th Sept 2021 was just amazing in every way! From start to finish the day was full of love, laughter and special memories created all day. The team were amazing, food delicious, venue beautifully decorated, nothing too much trouble. Citation is second to none and thank you to you all for making our day special - wish we could do it all again!",
    author: "Maddie & Gabe",
    imgSrc: ""
  },
];

export default function Testimonials() {
  return (



    //
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
            <Swiper
  slidesPerView={1}
  spaceBetween={30}
  pagination={{
    clickable: true,
    renderBullet: (index, className) => (
      `<span class="${className}"></span>`
    ),
  }}
  modules={[Pagination]}
  className="mySwiper"
  breakpoints={{
    560: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
  }}
>
  {comments.map((comment, index) => (
    <SwiperSlide key={index}>
      <div className="comment-list">
        <div className="comment-card">
          <div className="img">
            <img src={comment.imgSrc} alt="" />
          </div>
          <div className="comment-main">{comment.text}</div>
          <div className="comment-author">{comment.author}</div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

            </div>
        </div>
    </div>
    ////////////////////
    
  );
}