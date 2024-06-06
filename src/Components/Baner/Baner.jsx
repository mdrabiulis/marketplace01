import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import baner1 from "../../assets/Images/Big_Banner1.jpg"
import baner2 from "../../assets/Images/Big_Banner2.jpg"
import baner3 from "../../assets/Images/Big_Banner3.jpg"
import baner4 from "../../assets/Images/Big_Banner4.jpg"
import baner5 from "../../assets/Images/Big_Banner5.jpg"
import baner6 from "../../assets/Images/Big_Banner6.jpg"
import baner7 from "../../assets/Images/Big_Banner7.jpg"







const Baner = () => {
  return (
    <>
      <Swiper
        spaceBetween={100}
        centeredSlides={true}
        autoplay={{
        //   delay: 1000,
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={baner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={baner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={baner3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={baner4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={baner5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={baner6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={baner7} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Baner;
