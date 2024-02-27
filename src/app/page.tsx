import Header from "./components/Header";
import Featured from "./components/Featured";
import Destinations from "./components/Destinations";
import WhyTravelRide from "./components/WhyTravelRide";
import FindInsipiration from "./components/FindInsipiration";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <Featured />

      {/* <div className="home2-banner-area mobile-view">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <img src="assets/img/home2/banner1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/home2/banner2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/home2/banner3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/home2/banner4.png" alt="" />
          </SwiperSlide>
        </div>
        <div className="slider-btn-grp">
          <div className="slider-btn home1-banner-prev">
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className="slider-btn home1-banner-next">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </Swiper>
    </div> */}

      <Destinations />
      <WhyTravelRide />
      <FindInsipiration />
      <Footer />
    </>
  );
}
