import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

const RenderGallery = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    return (
          <Swiper style={{height: "calc((100vw / 3 * 2) / 3.5 * 2 - 90px)", overflow: "hidden"}}
            slidesPerView={3}
            grid={{
              rows: 2
            }}
            spaceBetween={8}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Grid, Pagination]}
            className="mySwiper"
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/1.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/2.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/3.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/4.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/5.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/6.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/7.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/8.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/9.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/10.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/11.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/12.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/13.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/14.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/15.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/renders/16.png")}/>
            </SwiperSlide>
          </Swiper>
      );
};

export default RenderGallery;