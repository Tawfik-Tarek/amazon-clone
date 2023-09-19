import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { createSearchParams, useNavigate } from "react-router-dom";
const CarouselCat = () => {
  const navigation = useNavigate();
  const searchCat = (cat) =>{
    navigation({
      pathname: "search",
      search: `${createSearchParams({
        category: `${cat}`,
        searchTerm:'',
      })}`,
    });
  }
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3 text-center mb-4">
        Shop by Category
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide className="cursor-pointer" onClick={() => searchCat("Deals")}>
          <img src={"../images/category_0.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer" onClick={() => searchCat("Amazon")}>
          <img src={"../images/category_1.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer" onClick={() => searchCat("Fashion")}>
          <img src={"../images/category_2.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer" onClick={() => searchCat("Computers")}>
          <img src={"../images/category_3.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer" onClick={() => searchCat("Home")}>
          <img src={"../images/category_4.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer" onClick={() => searchCat("Mobiles")}>
          <img src={"../images/category_5.jpg"} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCat;
