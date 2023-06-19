import React from 'react';
import './testimonials.css';

import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination,Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination]}
      navigation
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar one" />
          </div>
           <h5 className="client__name">Earnest Acheiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia nesciunt esse autem exercitationem sequi beatae amet, architecto eaque fugiat libero, enim inventore deserunt voluptatem aliquid? Ratione quae accusamus nam!
            </small>
        </SwiperSlide>
         <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="avatar one" />
          </div>
           <h5 className="client__name">Earnest Acheiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia nesciunt esse autem exercitationem sequi beatae amet, architecto eaque fugiat libero, enim inventore deserunt voluptatem aliquid? Ratione quae accusamus nam!
            </small>
        </SwiperSlide>
         <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="avatar one" />
          </div>
           <h5 className="client__name">Earnest Acheiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia nesciunt esse autem exercitationem sequi beatae amet, architecto eaque fugiat libero, enim inventore deserunt voluptatem aliquid? Ratione quae accusamus nam!
            </small>
        </SwiperSlide>
         <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="avatar one" />
          </div>
           <h5 className="client__name">Earnest Acheiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia nesciunt esse autem exercitationem sequi beatae amet, architecto eaque fugiat libero, enim inventore deserunt voluptatem aliquid? Ratione quae accusamus nam!
            </small>
        </SwiperSlide>
      </Swiper>
     
    </section>
  )
}

export default Testimonial;
