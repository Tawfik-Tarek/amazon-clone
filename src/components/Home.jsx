import React from "react";
import Caurasoel from "./Caurasoel";
import HomeCard from "./HomeCard";
import CarouselCat from "./CarouselCat";
import CarouselProducts from "./CarouselProducts";

const Home = () => {
  return (
    <>
      <div className="bg-amazon-background">
        <div className=" max-w-[100%] m-auto">
          <Caurasoel />
          <div className="grid grid-cols-3 xl:grid-cols-4  -mt-80 pv:flex pv:flex-wrap pv:justify-center pv:text-center">
            <HomeCard
              title={"We have a surprise for you"}
              img={"../images/home_grid_1.jpg"}
              link={"see terms and conditions"}
            />
            <HomeCard
              title={"Watch The Rings of Power"}
              img={"../images/home_grid_2.jpg"}
              link={"see terms and conditions"}
            />
            <HomeCard
              title={"Shop Pet Supplies"}
              img={"../images/home_grid_5.jpg"}
              link={"see terms and conditions"}
            />
            <HomeCard
              title={"Unlimited Streaming"}
              img={"../images/home_grid_7.jpg"}
              link={"see terms and conditions"}
            />
            <HomeCard
              title={"Spring Sale"}
              img={"../images/home_grid_6.jpg"}
              link={"see terms and conditions"}
            />
            <HomeCard
              title={"Family Plan: 3 months free"}
              img={"../images/home_grid_8.jpg"}
              link={"see terms and conditions"}
            />
            <HomeCard
              title={"Echo Buds"}
              img={"../images/home_grid_7.jpg"}
              link={"see terms and conditions"}
            />
            <HomeCard
              title={"More titles to explore"}
              img={"../images/home_grid_1.jpg"}
              link={"see terms and conditions"}
            />
            <div className="xl:hidden pv:hidden">
              <HomeCard
                title={"More titles to explore"}
                img={"../images/banner_image.jpg"}
                link={"see terms and conditions"}
              />
            </div>
          </div>
          <CarouselProducts />
          <CarouselCat />
          <div className="h-[200px]">
            <img
              className="m-auto h-[100%]"
              src={"../images/banner_image.jpg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
