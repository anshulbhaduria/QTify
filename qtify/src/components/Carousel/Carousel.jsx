import React, { useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftavigation";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, 1);
  }, [data, swiper]);
  return null;
};

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
