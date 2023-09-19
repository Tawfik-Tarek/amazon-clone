import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation , Autoplay}  from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
const Caurasoel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img className="min-h-[100%] w-[100%]" src={"../images/carousel_1.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="min-h-[100%] w-[100%]" src={"../images/carousel_2.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="min-h-[100%] w-[100%]" src={"../images/carousel_3.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="min-h-[100%] w-[100%]" src={"../images/carousel_4.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="min-h-[100%] w-[100%]" src={"../images/carousel_5.jpg"} alt="Carousel POR" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Caurasoel;
