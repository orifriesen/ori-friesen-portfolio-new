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

const NightSky = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 600 });

    return (
          <Swiper style={{height: "calc((100vw / 3 * 2) / 3 * 2 - 90px)", overflow: "hidden"}}
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
              <img className="swiper-image" src={require("./../assets/nightsky/26.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/25.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/24.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/22.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/21.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/20.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/19.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/18.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/17.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/16.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/15.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/14.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/13.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/12.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/11.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/10.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/9.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/8.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/7.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/6.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/5.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/4.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/3.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/2.jpg")}/>
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper-image" src={require("./../assets/nightsky/1.jpg")}/>
            </SwiperSlide>
          </Swiper>
      );
};

export default NightSky;