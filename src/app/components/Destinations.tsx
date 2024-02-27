"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import {
  alleppey,
  andaman,
  auli,
  card,
  destination,
  gujrat,
  img1,
  img2,
  img3,
  img4,
  jaipur,
  ladakh,
  manali,
  mussoorie,
  mysore,
  rajasthan,
  tamil,
  vector1,
  vector2,
  delhi,
  mumbai,
  chennai,
  banglore,
  ahmedabad,
  pune,
  kolkata,
  adventure,
  pilgrimage,
  wildlife,
  historical,
  honeymoon,
  luxury,
  group,
} from "../imagesImports";

const Destinations = () => {
  return (
    <>
      <div className="home4-destination-card-slider-section pt-50 mb-50">
        <div className="container">
          <div className="row marginbottom10">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title3">
                <h2>Most Popular Destinations</h2>
              </div>
              <div className="slider-btn-grp5">
                <div className="slider-btn home4-destination-card-prev">
                  <i className="bi bi-arrow-left"></i>
                </div>
                <div className="slider-btn home4-destination-card-next">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="swiper home4-destination-card-slider">
                {/* */}

                <Swiper
                  spaceBetween={30}
                  // centeredSlides={true}
                  slidesPerView={5}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  className="mySwiper"
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  <div className="swiper-wrapper">
                    {/*  */}

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="destination-card2 style-2">
                          <Link href="#" className="destination-card-img">
                            <Image src={destination} alt="" />
                          </Link>
                          <div className="destination-card2-content-wrap">
                            <div className="eg-batch">
                              <div className="location">
                                <ul className="location-list">
                                  <li>Trending</li>
                                </ul>
                              </div>
                            </div>
                            <div className="destination-card2-content">
                              <h4>
                                <Link href="#">Uttarakhand</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* swiper-slide */}
                      <div className="swiper-slide">
                        <div className="destination-card2 style-2">
                          <Link href="#" className="destination-card-img">
                            <Image src={andaman} alt="" />
                          </Link>
                          <div className="destination-card2-content-wrap">
                            <div className="eg-batch">
                              <div className="location">
                                <ul className="location-list">
                                  <li>Trending</li>
                                </ul>
                              </div>
                            </div>
                            <div className="destination-card2-content">
                              <h4>
                                <Link href="#">Andaman</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* swiper-slide */}
                      <div className="swiper-slide">
                        <div className="destination-card2 style-2">
                          <Link href="#" className="destination-card-img">
                            <Image src={ladakh} alt="" />
                          </Link>
                          <div className="destination-card2-content-wrap">
                            <div className="eg-batch">
                              <div className="location">
                                <ul className="location-list">
                                  <li>Trending</li>
                                </ul>
                              </div>
                            </div>
                            <div className="destination-card2-content">
                              <h4>
                                <Link href="#">Ladakh</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* swiper-slide */}
                      <div className="swiper-slide">
                        <div className="destination-card2 style-2">
                          <Link href="#" className="destination-card-img">
                            <Image src={gujrat} alt="" />
                          </Link>
                          <div className="destination-card2-content-wrap">
                            <div className="eg-batch">
                              <div className="location">
                                <ul className="location-list">
                                  <li>Trending</li>
                                </ul>
                              </div>
                            </div>
                            <div className="destination-card2-content">
                              <h4>
                                <Link href="#">Gujrat</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* swiper-slide */}
                      <div className="swiper-slide">
                        <div className="destination-card2 style-2">
                          <Link href="#" className="destination-card-img">
                            <Image src={tamil} alt="" />
                          </Link>
                          <div className="destination-card2-content-wrap">
                            <div className="eg-batch">
                              <div className="location">
                                <ul className="location-list">
                                  <li>Trending</li>
                                </ul>
                              </div>
                            </div>
                            <div className="destination-card2-content">
                              <h4>
                                <Link href="#">Tamil Nadu</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="destination-card2 style-2">
                          <Link href="#" className="destination-card-img">
                            <Image src={rajasthan} alt="" />
                          </Link>
                          <div className="destination-card2-content-wrap">
                            <div className="eg-batch">
                              <div className="location">
                                <ul className="location-list">
                                  <li>Trending</li>
                                </ul>
                              </div>
                            </div>
                            <div className="destination-card2-content">
                              <h4>
                                <Link href="#">Rajasthan</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home4-destination-card-slider-section mb-50">
        <div className="container">
          <div className="row marginbottom10">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title3">
                <h2>Explore the Montage of India's cities</h2>
              </div>
              <div className="slider-btn-grp5 marginbottom10">
                <div className="slider-btn home44-destination-card-prev">
                  <i className="bi bi-arrow-left"></i>
                </div>
                <div className="slider-btn home44-destination-card-next">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="swiper home44-destination-card-slider">
                <Swiper
                  spaceBetween={30}
                  // centeredSlides={true}
                  slidesPerView={5}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  className="mySwiper"
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="activity-card">
                          <Image
                            //  style={{ width: "100vw"}}
                            src={auli}
                            alt=""
                          />
                          <div className="activity-card-content-wrapper">
                            <div className="activity-card-content">
                              <div className="content">
                                <h6>
                                  <Link href="#">Auli</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="activity-card">
                          <Image
                            //  style={{ width: "100vw"}}
                            src={mussoorie}
                            alt=""
                          />
                          <div className="activity-card-content-wrapper">
                            <div className="activity-card-content">
                              <div className="content">
                                <h6>
                                  <Link href="#">Mussoorie</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="activity-card">
                          <Image
                            //  style={{ width: "100vw"}}
                            src={jaipur}
                            alt=""
                          />
                          <div className="activity-card-content-wrapper">
                            <div className="activity-card-content">
                              <div className="content">
                                <h6>
                                  <Link href="#">Jaipur</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="activity-card">
                          <Image
                            //  style={{ width: "100vw"}}
                            src={manali}
                            alt=""
                          />
                          <div className="activity-card-content-wrapper">
                            <div className="activity-card-content">
                              <div className="content">
                                <h6>
                                  <Link href="#">Manali</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="activity-card">
                          <Image
                            //  style={{ width: "100vw"}}
                            src={alleppey}
                            alt=""
                          />
                          <div className="activity-card-content-wrapper">
                            <div className="activity-card-content">
                              <div className="content">
                                <h6>
                                  <Link href="#">Alleppey</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="activity-card">
                          <Image
                            //  style={{ width: "100vw"}}
                            src={mysore}
                            alt=""
                          />
                          <div className="activity-card-content-wrapper">
                            <div className="activity-card-content">
                              <div className="content">
                                <h6>
                                  <Link href="#">Mysore</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home4-destination-card-slider-section  mb-50">
        <div className="container">
          <div className="row marginbottom10">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title3">
                <h2>Vacations suited to every wallet size.</h2>
              </div>
              <div className="slider-btn-grp5 1.5 ">
                <div className="slider-btn home4-destination-card-prev desktop-view">
                  <i className="bi bi-arrow-left"></i>
                </div>
                <div className="slider-btn home4-destination-card-next desktop-view">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="swiper home4-destination-card-slider">
                <Swiper
                  spaceBetween={0}
                  // centeredSlides={true}
                  slidesPerView={5}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  className="mySwiper"
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="swiper-slide" style={{ width: "35vh" }}>
                        <div className="teams-card " id="logo">
                          <Image
                            style={{ height: "33vh", width: "33vw" }}
                            src={card}
                            alt=""
                          />
                          <div className="teams-img">
                            <div className="teams-content">
                              <h4>
                                <Link href={"#"}>BELOW</Link>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                20,000/-
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" style={{ width: "35vh" }}>
                        <div className="teams-card" id="logo">
                          <Image
                            style={{ height: "33vh", width: "33vw" }}
                            src={card}
                            alt=""
                          />
                          <div className="teams-img">
                            <div className="teams-content">
                              <h4>
                                <Link href={"#"}>BELOW</Link>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                50,000/-
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" style={{ width: "35vh" }}>
                        <div className="teams-card" id="logo">
                          <Image
                            style={{ height: "33vh", width: "33vw" }}
                            src={card}
                            alt=""
                          />
                          <div className="teams-img">
                            <div className="teams-content">
                              <h4>
                                <Link href="#">BELOW</Link>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                75,000/-
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" style={{ width: "35vh" }}>
                        <div className="teams-card" id="logo">
                          <Image
                            style={{ height: "33vh", width: "33vw" }}
                            src={card}
                            alt=""
                          />
                          <div className="teams-img">
                            <div className="teams-content">
                              <h4>
                                <Link href="#">BELOW</Link>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                1,00,000/-
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" style={{ width: "35vh" }}>
                        <div className="teams-card" id="logo">
                          <Image
                            style={{ height: "33vh", width: "33vw" }}
                            src={card}
                            alt=""
                          />
                          <div className="teams-img">
                            <div className="teams-content">
                              <h4>
                                <Link href={"#"}>BELOW</Link>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                2,00,000/-
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" style={{ width: "35vh" }}>
                        <div className="teams-card" id="logo">
                          <Image
                            style={{ height: "33vh", width: "33vw" }}
                            src={card}
                            alt=""
                          />
                          <div className="teams-img">
                            <div className="teams-content">
                              <h4>
                                <Link href={"#"}>BELOW</Link>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                3,00,000/-
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="destination-dropdown-section mb-50  ">
        <Image src={vector1} alt="" className="vector1" />

        <Image
          //  style={{ width: "100vw"}}
          src={vector2}
          alt=""
          className="vector2"
        />

        <div className="container">
          <div className="row marginbottom10">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title2 two">
                <h2> Let's discover the heart and soul of India.</h2>
              </div>
              {/* <div className="section-btn">
                <Link href="#" className="primary-btn4 two">
                  <span>
                    All Destination
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                    >
                      <path d="M7.70294 9.65818L7.27464 11.6673L5.29549 17.0003L6.47016 16.8046L11.9577 9.62856C12.7321 9.6016 13.4832 9.56006 14.1359 9.49563C17.1552 9.19702 16.9986 8.50013 16.9986 8.50013C16.9986 8.50013 17.1552 7.80325 14.1358 7.50464C13.4832 7.43995 12.7321 7.39845 11.9576 7.3717L6.47019 0.195477L5.29549 -5.1162e-07L7.27464 5.33303L7.70294 7.34212C6.69752 7.35717 6.01715 7.38006 6.01715 7.38006C6.01715 7.38006 4.63017 7.41207 2.48417 7.8956L0.734503 5.46859L-8.41624e-05 5.46859L0.523018 8.41949C0.428867 8.44835 0.428867 8.55195 0.523018 8.58081L-8.44274e-05 11.5317L0.734502 11.5317L2.48417 9.10495C4.63017 9.58848 6.01715 9.62001 6.01715 9.62001C6.01715 9.62001 6.69752 9.64317 7.70294 9.65818Z"></path>
                      <path d="M11.4004 11.2692L11.4004 12.0613L8.47265 12.0613L8.47265 11.2692L11.4004 11.2692ZM11.4004 4.94234L11.4004 5.73425L8.47282 5.73425L8.47282 4.94234L11.4004 4.94234ZM9.42515 13.9276L9.42515 14.7195L6.71923 14.7195L6.71923 13.9276L9.42515 13.9276ZM9.42515 2.28418L9.42515 3.07634L6.71924 3.07634L6.71924 2.28418L9.42515 2.28418Z"></path>
                    </svg>
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="destination-dropdown-card-wrap">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-6 destination-column">
                <div className="destination-dropdown-card">
                  <div className="destination-dropdown-card-img">
                    <Image style={{ width: "100vw" }} src={img1} alt="" />
                    {/* <img
                      src="assets/img/home3/destination-dropdown-card-img1.png"
                      alt=""
                    /> */}
                  </div>
                  <div className="eg-batch">
                    <span>5 Destinations</span>
                  </div>
                  <div className="destination-dropdown-content">
                    <div className="title">
                      <h4>
                        <Link href="#">Western India</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="destination-dropdown-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="8"
                      viewBox="0 0 16 8"
                    >
                      <path d="M0.1104 2.08367e-06L0 1.39876e-06L8 8L16 0L15.8896 1.44772e-08L12.5714 9.94292e-07L8 4.57143L3.42857 1.09903e-06L0.1104 2.08367e-06Z" />
                    </svg>
                  </div>
                  <div className="destination-wrap">
                    <div className="row g-4">
                      <div className="col-sm-6 col-6">
                        <ul className="destination-list">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Gujarat</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Maharashtra</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Goa</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-6">
                        <ul className="destination-list">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Daman and Diu</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Dadra and Nagar Haveli</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 destination-column">
                <div className="destination-dropdown-card">
                  <div className="destination-dropdown-card-img">
                    <Image style={{ width: "100vw" }} src={img2} alt="" />
                  </div>
                  <div className="eg-batch">
                    <span>12 Destinations</span>
                  </div>
                  <div className="destination-dropdown-content">
                    <div className="title">
                      <h4>
                        <Link href="#">Eastern India</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="destination-dropdown-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="8"
                      viewBox="0 0 16 8"
                    >
                      <path d="M0.1104 2.08367e-06L0 1.39876e-06L8 8L16 0L15.8896 1.44772e-08L12.5714 9.94292e-07L8 4.57143L3.42857 1.09903e-06L0.1104 2.08367e-06Z" />
                    </svg>
                  </div>
                  <div className="destination-wrap">
                    <div className="row g-4">
                      <div className="col-sm-4 col-6">
                        <ul className="destination-list">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Odisha</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">West Bengal</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Bihar </Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Mizoram </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4 col-6">
                        <ul className="destination-list">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Jharkhand</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Arunachal Pradesh</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Nagaland</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Meghalaya</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4 col-6">
                        <ul className="destination-list">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Tripura</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Assam</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Manipur</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Sikkim</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6  destination-column">
                <div className="destination-dropdown-card">
                  <div className="destination-dropdown-card-img">
                    <Image style={{ width: "100vw" }} src={img3} alt="" />
                  </div>
                  <div className="eg-batch">
                    <span>10 Destinations</span>
                  </div>
                  <div className="destination-dropdown-content">
                    <div className="title">
                      <h4>
                        <Link href="#">Northern India</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="destination-dropdown-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="8"
                      viewBox="0 0 16 8"
                    >
                      <path d="M0.1104 2.08367e-06L0 1.39876e-06L8 8L16 0L15.8896 1.44772e-08L12.5714 9.94292e-07L8 4.57143L3.42857 1.09903e-06L0.1104 2.08367e-06Z" />
                    </svg>
                  </div>
                  <div className="destination-wrap">
                    <div className="row g-4">
                      <div className="col-sm-4 col-6">
                        <ul className="destination-list">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Jammu & Kashmir</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Rajasthan</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Delhi</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Chandigarh</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4 col-6">
                        <ul className="destination-list">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Himachal Pradesh</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Uttarakhand</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Punjab</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4 col-6">
                        <ul className="destination-list">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Uttar Pradesh</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Haryana</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Ladakh</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 destination-column">
                <div className="destination-dropdown-card">
                  <div className="destination-dropdown-card-img">
                    <Image style={{ width: "100vw" }} src={img4} alt="" />
                  </div>
                  <div className="eg-batch">
                    <span>5 Destinations</span>
                  </div>
                  <div className="destination-dropdown-content">
                    <div className="title">
                      <h4>
                        <Link href="#">Southern India</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="destination-dropdown-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="8"
                      viewBox="0 0 16 8"
                    >
                      <path d="M0.1104 2.08367e-06L0 1.39876e-06L8 8L16 0L15.8896 1.44772e-08L12.5714 9.94292e-07L8 4.57143L3.42857 1.09903e-06L0.1104 2.08367e-06Z" />
                    </svg>
                  </div>
                  <div className="destination-wrap">
                    <div className="row g-4">
                      <div className="col-sm-6 col-6">
                        <ul className="destination-list">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Andhra Pradesh</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Telangana</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Karnataka</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-6">
                        <ul className="destination-list">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Kerala</Link>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="13"
                              viewBox="0 0 9 13"
                            >
                              <path d="M4.5 0C3.30653 0 2.16193 0.50213 1.31802 1.39593C0.474106 2.28973 0 3.50198 0 4.766C0 7.28331 4.00909 12.6082 4.18091 12.8379C4.21924 12.8885 4.26781 12.9293 4.32304 12.9574C4.37827 12.9854 4.43874 13 4.5 13C4.56126 13 4.62173 12.9854 4.67696 12.9574C4.73219 12.9293 4.78076 12.8885 4.81909 12.8379C4.99091 12.6082 9 7.28331 9 4.766C9 3.50198 8.52589 2.28973 7.68198 1.39593C6.83807 0.50213 5.69347 0 4.5 0ZM4.5 6.06581C4.17636 6.06581 3.85998 5.96417 3.59089 5.77373C3.32179 5.5833 3.11205 5.31263 2.9882 4.99595C2.86434 4.67927 2.83194 4.3308 2.89508 3.99461C2.95822 3.65843 3.11407 3.34962 3.34292 3.10724C3.57177 2.86487 3.86334 2.69981 4.18076 2.63294C4.49818 2.56606 4.8272 2.60038 5.12621 2.73156C5.42522 2.86273 5.68078 3.08487 5.86059 3.36987C6.04039 3.65488 6.13636 3.98995 6.13636 4.33272C6.13636 4.79237 5.96396 5.23319 5.65708 5.5582C5.35021 5.88322 4.93399 6.06581 4.5 6.06581Z" />
                            </svg>
                            <Link href="#">Tamil Nadu</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home4-destination-card-slider-section   mb-50">
        <div className="container">
          <div className="row marginbottom10">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title3">
                <h2>Weekend Getaway Packages By Departure city</h2>
              </div>
              <div className="slider-btn-grp5">
                <div className="slider-btn home45-destination-card-prev desktop-view">
                  <i className="bi bi-arrow-left"></i>
                </div>
                <div className="slider-btn home45-destination-card-next desktop-view">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="swiper home45-destination-card-slider">
                <Swiper
                  spaceBetween={0}
                  // centeredSlides={true}
                  slidesPerView={5}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  className="mySwiper"
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="destination-card">
                          <Image src={delhi} alt="" />
                          <div className="overlay"></div>
                          <div className="card-title">
                            <h4>Delhi</h4>
                          </div>
                          <div className="content">
                            <h4>
                              <Link href="#">Delhi</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="destination-card">
                          <Image src={mumbai} alt="" />
                          <div className="overlay"></div>
                          <div className="card-title">
                            <h4>Mumbai</h4>
                          </div>
                          <div className="content">
                            <h4>
                              <Link href="#">Mumbai</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="destination-card">
                          <Image src={chennai} alt="" />
                          <div className="overlay"></div>
                          <div className="card-title">
                            <h4>Chennai</h4>
                          </div>
                          <div className="content">
                            <h4>
                              <Link href="#">Chennai</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="destination-card">
                          <Image src={banglore} alt="" />
                          <div className="overlay"></div>
                          <div className="card-title">
                            <h4>Bengaluru</h4>
                          </div>
                          <div className="content">
                            <h4>
                              <Link href="#">Bengaluru</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="destination-card">
                          <Image src={ahmedabad} alt="" />
                          <div className="overlay"></div>
                          <div className="card-title">
                            <h4>Ahmedabad</h4>
                          </div>
                          <div className="content">
                            <h4>
                              <Link href="#">Ahmedabad</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="destination-card">
                          <Image
                            src={pune}
                            alt=""
                            style={{ marginRight: "1rem" }}
                          />
                          <div className="overlay"></div>
                          <div className="card-title">
                            <h4>Pune</h4>
                          </div>
                          <div className="content">
                            <h4>
                              <Link href="#">Pune</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="destination-card">
                          <Image
                            src={kolkata}
                            alt=""
                            style={{ marginRight: "1rem" }}
                          />
                          <div className="overlay"></div>
                          <div className="card-title">
                            <h4>Kolkata</h4>
                          </div>
                          <div className="content">
                            <h4>
                              <Link href="#">Kolkata</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home4-destination-card-slider-section   mb-50">
        <div className="container">
          <div className="row marginbottom10">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title3">
                <h2>Special Interest Tours</h2>
              </div>
              <div className="slider-btn-grp5">
                <div className="slider-btn home46-destination-card-prev desktop-view">
                  <i className="bi bi-arrow-left"></i>
                </div>
                <div className="slider-btn home46-destination-card-next desktop-view">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="swiper home46-destination-card-slider">
                <Swiper
                  spaceBetween={0}
                  // centeredSlides={true}
                  slidesPerView={5}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  className="mySwiper"
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="category-card">
                          <Link href="#" className="card-img">
                            <Image src={adventure} alt="" />
                          </Link>
                          <div className="card-content">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="51"
                                height="51"
                                viewBox="0 0 51 51"
                              >
                                <path d="M4.46323 18.5007C4.54289 19.8917 4.88158 21.193 5.41733 22.1647C5.70003 22.6907 6.12301 23.1281 6.63928 23.4282C7.15555 23.7283 7.74491 23.8795 8.34189 23.8649C8.31354 25.3894 8.24997 27.8407 8.1136 30.0205C7.62343 30.2056 7.1986 30.5309 6.89212 30.9558C6.58563 31.3808 6.41108 31.8866 6.39022 32.4101C6.32347 34.0062 6.32952 36.2988 6.72636 38.2229C6.42456 38.6071 6.26282 39.0828 6.26786 39.5713C6.2729 40.0598 6.44442 40.5321 6.75408 40.9099L8.57018 43.1093L7.37298 44.2767C7.31176 44.3365 7.26541 44.4097 7.23769 44.4906C7.20996 44.5715 7.20163 44.6578 7.21336 44.7425C7.2251 44.8272 7.25657 44.908 7.30524 44.9783C7.35391 45.0486 7.41843 45.1065 7.49358 45.1474L13.1546 48.2185C13.1546 48.2185 13.2619 51 15.6696 51H30.7233C31.7077 51 32.5085 50.105 32.5085 49.0048V48.1564C32.5116 47.6693 32.3469 47.1961 32.0421 46.8163C32.2767 46.6351 32.4862 46.4234 32.6649 46.1868C32.9326 45.8188 33.0935 45.384 33.1299 44.9303C33.1662 44.4767 33.0766 44.0218 32.8709 43.6158L32.6452 43.1646C32.4451 42.7639 32.3407 42.3222 32.3403 41.8742V36.8387C32.9417 36.4533 34.1957 35.4092 34.503 33.2621C34.5749 32.7307 34.5806 32.1924 34.5198 31.6596C34.3259 29.801 33.6276 25.4807 31.2231 22.5431L36.6363 21.772L37.9097 28.3151L35.4453 29.4398C35.3796 29.4693 35.3204 29.5114 35.271 29.5639C35.2216 29.6163 35.1831 29.678 35.1577 29.7454C35.1323 29.8128 35.1204 29.8845 35.1229 29.9565C35.1253 30.0285 35.1419 30.0993 35.1718 30.1648C35.2018 30.2303 35.2443 30.2892 35.2971 30.3382C35.3499 30.3872 35.4119 30.4253 35.4794 30.4502C35.547 30.4752 35.6188 30.4865 35.6908 30.4836C35.7628 30.4806 35.8334 30.4635 35.8987 30.4331L38.7543 29.1298C38.8659 29.0789 38.957 28.992 39.0131 28.883C39.0692 28.774 39.087 28.6492 39.0635 28.5289L38.9214 27.7983L46.3012 23.3767C46.4118 23.3105 46.4953 23.2073 46.5371 23.0853C46.5788 22.9634 46.5761 22.8306 46.5293 22.7105C44.6871 17.9777 41.683 13.8792 40.4078 12.2555L41.5647 11.4187C41.6251 11.3749 41.676 11.3192 41.714 11.255C41.7521 11.1907 41.7766 11.1194 41.7861 11.0454C41.7955 10.9713 41.7897 10.8961 41.7689 10.8244C41.7481 10.7527 41.7129 10.686 41.6653 10.6285C40.0315 8.65212 37.9973 7.49491 36.5787 6.87218C35.8062 6.53412 34.9842 6.32334 34.1444 6.24801C34.3125 5.64768 34.4006 5.02775 34.4062 4.40435C34.4076 4.3262 34.3923 4.24865 34.3612 4.17693C34.3301 4.10522 34.284 4.04102 34.226 3.98867C34.1679 3.93632 34.0993 3.89705 34.0248 3.8735C33.9503 3.84995 33.8715 3.84269 33.794 3.85219L33.057 3.94236C33.5171 2.78568 33.5081 1.49516 33.0318 0.345035C32.9957 0.254073 32.9358 0.174472 32.8585 0.114537C32.7811 0.0546025 32.689 0.0165301 32.5919 0.00429229C32.4948 -0.00794556 32.3962 0.00609967 32.3064 0.0449625C32.2166 0.0838253 32.1388 0.146082 32.0812 0.225236C32.0704 0.240052 30.9833 1.70106 28.6012 2.30914C27.8114 2.50165 26.994 2.5538 26.1862 2.46319C24.8564 2.32159 23.5119 2.42921 22.2215 2.78053C19.0489 3.68444 17.0189 6.75859 17.4995 9.9312C17.7004 11.2696 18.3397 12.5035 19.3172 13.4395C19.2857 13.9462 19.3428 14.4546 19.4861 14.9417C19.8315 16.357 20.8966 16.8166 21.7299 16.8905V22.4262L19.795 22.7607C19.5512 22.5149 19.2218 22.3729 18.8758 22.3643C18.6497 22.3591 18.4235 22.3706 18.199 22.3988C18.5977 19.8817 18.3454 17.3045 17.4662 14.9126C17.616 14.9285 17.7649 14.9444 17.9174 14.9604C17.9364 14.9624 17.9556 14.9634 17.9747 14.9634C18.1144 14.963 18.2487 14.9091 18.3498 14.8128C18.451 14.7164 18.5113 14.585 18.5185 14.4455C18.5257 14.3059 18.4791 14.169 18.3883 14.0628C18.2976 13.9566 18.1696 13.8892 18.0307 13.8745C17.676 13.8374 17.3216 13.7988 16.9673 13.7587C16.8188 13.467 16.6035 13.2145 16.3389 13.0219C16.0743 12.8293 15.7678 12.702 15.4446 12.6504L13.9312 12.4102C13.6828 12.3693 13.428 12.3957 13.1934 12.4868C12.9587 12.5779 12.7528 12.7302 12.597 12.9279C12.5383 13.0029 12.4871 13.0836 12.4442 13.1686C12.1817 13.1298 11.9194 13.0898 11.6572 13.0488C11.1528 12.9656 10.6537 12.8525 10.1626 12.7102C8.51124 12.2509 7.28919 12.7219 6.92342 12.894C6.12688 12.9974 5.44489 13.6509 4.99293 14.7517C4.68595 15.5438 4.50844 16.3801 4.46722 17.2286V17.2313C4.42856 17.5485 4.42322 17.8688 4.45129 18.1871C4.45638 18.2913 4.45718 18.3949 4.46323 18.5007ZM13.8743 23.4812C14.0107 23.7162 14.199 23.9168 14.425 24.0677C14.6509 24.2185 14.9083 24.3156 15.1776 24.3515L15.9832 24.4596L15.995 24.6826L13.001 28.053C13.0129 26.5261 12.9302 24.9999 12.7534 23.4832C13.1282 23.4678 13.5019 23.4671 13.8743 23.4812ZM24.618 49.9083H18.066V48.0938C18.0655 47.812 18.0418 47.5308 17.9953 47.2529H24.618V49.9083ZM11.6 31.2741L16.0699 26.2424C16.1836 28.8378 16.3122 32.9651 16.1403 35.691L15.4712 36.2418L11.6 31.2741ZM15.7551 37.4211L16.2432 37.0198C16.3489 37.4805 16.6064 37.8923 16.9743 38.189V44.9196C15.935 43.4499 14.4803 41.5921 12.9801 40.3059L15.7551 37.4211ZM11.6639 23.5685C11.9188 25.5204 11.9317 27.7228 11.893 29.3003L11.4092 29.8449H9.21808C9.34553 27.6956 9.4067 25.3357 9.43394 23.8591C9.8909 23.8304 10.3459 23.7758 10.7967 23.6957C11.0852 23.6444 11.3743 23.602 11.6639 23.5685ZM7.481 32.455C7.4974 32.0461 7.6717 31.6594 7.96726 31.3762C8.26283 31.0931 8.65664 30.9355 9.06594 30.9367H10.4463C10.3783 31.032 10.3428 31.1467 10.3452 31.2638C10.3475 31.3809 10.3876 31.4941 10.4594 31.5866L11.23 32.5758L7.63903 37.0775C7.45615 35.5439 7.40328 33.9976 7.481 32.455ZM7.59586 40.2141C7.44398 40.0285 7.36009 39.7967 7.35809 39.5569C7.35609 39.3171 7.43611 39.0839 7.58486 38.8958L11.9201 33.4615L14.6627 36.9822L9.35397 42.3437L7.59586 40.2141ZM14.2455 48.485V47.8937C14.2455 47.7954 14.219 47.6989 14.1687 47.6145C14.1185 47.53 14.0464 47.4607 13.96 47.4138L8.66513 44.5402L12.2108 41.0833C13.8128 42.4399 15.4061 44.5775 16.2478 45.7848C16.7216 46.4618 16.9753 47.2684 16.9743 48.0947V49.9092H15.668C15.2906 49.9086 14.9289 49.7583 14.6622 49.4913C14.3955 49.2243 14.2457 48.8624 14.2455 48.485ZM25.7097 47.2529H28.5709V49.9083H25.7097V47.2529ZM31.416 49.0053C31.416 49.495 31.0983 49.9087 30.7225 49.9087H29.6626V47.2529H30.7225C31.0983 47.2529 31.416 47.6671 31.416 48.1564V49.0053ZM33.4215 33.108C33.3174 33.9998 32.923 34.8326 32.299 35.4782C31.9092 29.2077 28.9964 23.9617 28.1623 22.5761C28.4102 22.3626 28.7211 22.236 29.0476 22.2155C29.1476 22.207 29.2483 22.2196 29.3432 22.2524C29.4381 22.2852 29.5251 22.3375 29.5986 22.4059C32.5299 25.0926 33.2748 30.255 33.4331 31.7732C33.4844 32.2168 33.4805 32.665 33.4215 33.1076V33.108ZM26.921 25.1634L26.883 25.1911C26.3761 25.5619 26.0247 26.1076 25.8969 26.7225L25.5587 28.2769L25.1335 26.0324C25.1188 25.9546 25.0873 25.8809 25.0412 25.8165C24.9951 25.752 24.9356 25.6984 24.8667 25.6593C23.3071 24.7742 22.8977 23.7879 22.8217 23.5631V18.8817C24.0232 19.5783 25.3247 20.0859 26.6806 20.3869C26.5936 21.3156 26.6933 22.0894 26.9732 22.7019C26.9851 22.7362 27.0004 22.7692 27.0188 22.8005C27.0822 22.9299 27.156 23.0539 27.2394 23.1714C27.2573 23.1958 27.2724 23.2213 27.2882 23.2463L27.3412 23.3371C27.4999 23.6416 27.5448 23.9928 27.4677 24.3275C27.3907 24.6621 27.1968 24.9584 26.921 25.1629V25.1634ZM37.7846 20.506L36.9954 20.6185L33.2568 21.1509C33.7028 17.6085 32.0797 15.444 31.4114 14.7211L31.6118 10.9103C35.5043 13.6246 37.3975 19.4661 37.7846 20.5055V20.506ZM30.8547 17.9539C31.0444 17.4321 31.1836 16.8933 31.2705 16.3449C31.8746 17.3355 32.5012 18.9912 32.1319 21.3113L30.3016 21.5721C30.1174 21.4104 29.9023 21.2877 29.6694 21.2115C29.4364 21.1353 29.1904 21.1071 28.9462 21.1286C28.5291 21.1632 28.1259 21.2954 27.7691 21.5144C27.7339 21.1997 27.7307 20.8821 27.7596 20.5667C27.7979 20.5683 27.8365 20.5718 27.8747 20.5718C28.3396 20.5737 28.7973 20.4577 29.2051 20.2345C29.6129 20.0114 29.9574 19.6885 30.2064 19.2959C30.4693 18.8726 30.6865 18.4226 30.8544 17.9534L30.8547 17.9539ZM45.341 22.6795L38.699 26.6591L37.7182 21.6183L38.6042 21.4921L40.4285 21.2323C40.5001 21.2229 40.5691 21.1994 40.6316 21.1632C40.694 21.1269 40.7487 21.0787 40.7923 21.0212C40.836 20.9636 40.8678 20.898 40.886 20.8281C40.9041 20.7582 40.9082 20.6854 40.898 20.614C40.8879 20.5425 40.8636 20.4737 40.8266 20.4117C40.7897 20.3496 40.7408 20.2955 40.6828 20.2525C40.6248 20.2095 40.5588 20.1784 40.4887 20.161C40.4186 20.1437 40.3458 20.1404 40.2744 20.1514L38.8905 20.3486C38.2218 18.5294 37.4594 16.7459 36.6064 15.0055L39.5217 12.8964C40.7095 14.4042 43.5256 18.2255 45.3407 22.679L45.341 22.6795ZM40.4395 10.8845L36.0185 14.0824C35.0796 12.8713 34.0774 11.7104 33.0162 10.6047C32.6791 10.2643 32.278 9.99378 31.8361 9.80875C31.3941 9.62372 30.92 9.52782 30.4409 9.52656H30.1197C29.7162 9.52614 29.3294 9.36566 29.044 9.08035C28.7587 8.79503 28.5982 8.40819 28.5978 8.00469C28.598 7.81864 28.672 7.64027 28.8036 7.50871C28.9352 7.37716 29.1135 7.30315 29.2996 7.30294H33.3815C34.3302 7.29838 35.2694 7.49193 36.139 7.87119C37.7628 8.57214 39.2262 9.59755 40.4395 10.8845ZM20.5428 14.6671C20.5385 14.6494 20.5335 14.6319 20.5276 14.6147C20.4115 14.2124 20.3737 13.7915 20.4161 13.3749C20.4293 13.1837 20.5101 13.0034 20.644 12.8663C20.7779 12.7291 20.9562 12.644 21.147 12.6262C21.3302 12.5965 21.5179 12.6328 21.6767 12.7288C21.8355 12.8248 21.9549 12.9742 22.0137 13.1502C22.061 13.2809 22.0983 13.4151 22.1252 13.5516C22.1418 13.6346 22.1775 13.7127 22.2294 13.7795C22.2814 13.8463 22.3482 13.9002 22.4246 13.9368C22.5009 13.9733 22.5847 13.9917 22.6694 13.9903C22.754 13.9889 22.8372 13.9678 22.9123 13.9287C23.0549 13.8505 23.1905 13.7602 23.3176 13.6588C23.735 13.3261 24.0718 12.9034 24.3028 12.4222C24.5338 11.941 24.653 11.4138 24.6515 10.88V10.4822C24.6515 10.267 24.6953 10.0539 24.78 9.85604C24.8648 9.65815 24.9889 9.47952 25.1447 9.33097C25.3005 9.18241 25.4848 9.06701 25.6865 8.99176C25.8882 8.9165 26.1031 8.88296 26.3181 8.89315C26.3901 8.89718 26.4622 8.88693 26.5301 8.86297C26.5981 8.83901 26.6607 8.80183 26.7142 8.75357C26.7678 8.70531 26.8112 8.64692 26.8421 8.58178C26.8729 8.51664 26.8906 8.44603 26.894 8.37403C26.8975 8.30203 26.8866 8.23006 26.8621 8.16228C26.8375 8.0945 26.7998 8.03225 26.7511 7.97912C26.7024 7.92599 26.6437 7.88303 26.5783 7.85272C26.5129 7.82241 26.4421 7.80536 26.3701 7.80253C26.0075 7.78535 25.6452 7.84193 25.3051 7.96885C24.9651 8.09577 24.6543 8.29038 24.3916 8.54091C24.129 8.79144 23.9199 9.09267 23.777 9.42636C23.6342 9.76005 23.5605 10.1193 23.5605 10.4822V10.8796C23.5621 11.4891 23.3384 12.0777 22.9324 12.5324C22.7541 12.1885 22.4732 11.9085 22.1287 11.7313C21.7842 11.5542 21.3932 11.4885 21.0097 11.5434C20.7578 11.5729 20.5144 11.6521 20.2934 11.7765C20.0725 11.9009 19.8784 12.068 19.7227 12.2681C19.1145 11.5587 18.7181 10.6925 18.579 9.76855C18.1807 7.13742 19.8753 4.585 22.5214 3.83116C23.6793 3.52128 24.8842 3.42599 26.0765 3.54998C27.0117 3.65384 27.958 3.59209 28.8718 3.36757C30.1233 3.06163 31.2836 2.46135 32.2563 1.61663C32.3339 2.07695 32.3198 2.54806 32.2148 3.00292C32.1098 3.45777 31.916 3.88742 31.6446 4.26718C31.5752 4.35143 31.5326 4.45456 31.5224 4.56325C31.5121 4.67194 31.5347 4.7812 31.5872 4.87691C31.6397 4.97263 31.7197 5.05041 31.8169 5.10021C31.914 5.15001 32.0239 5.16954 32.1322 5.15628L33.2762 5.01625C33.2354 5.42439 33.145 5.82605 33.007 6.21233H29.2996C28.8241 6.21287 28.3682 6.40203 28.0319 6.73829C27.6957 7.07455 27.5066 7.53045 27.5061 8.00597C27.507 8.69881 27.7827 9.363 28.2727 9.85287C28.7626 10.3427 29.4269 10.6183 30.1197 10.6191C30.1197 10.6191 30.502 10.6226 30.5339 10.6237L30.2909 15.2422C30.2541 16.0395 30.0984 16.8268 29.829 17.5781C29.6875 17.9742 29.5046 18.3542 29.2832 18.7117C29.1034 18.9919 28.8442 19.2121 28.5386 19.3441C28.233 19.4761 27.8949 19.5139 27.5677 19.4527C26.0304 19.1906 24.5549 18.6461 23.2159 17.8467C23.096 17.773 22.9969 17.67 22.9279 17.5473C22.8588 17.4247 22.8222 17.2865 22.8213 17.1458V16.3333C22.8209 16.2549 22.8036 16.1774 22.7707 16.1063C22.7378 16.0351 22.69 15.9718 22.6305 15.9206C22.5711 15.8695 22.5013 15.8317 22.426 15.8097C22.3507 15.7878 22.2716 15.7823 22.194 15.7935C21.971 15.8272 20.8404 15.9235 20.5428 14.6671ZM21.7441 23.7635C21.7588 23.8261 22.1137 25.261 24.107 26.4773L24.9851 31.1146C25.0085 31.2383 25.074 31.3501 25.1704 31.4311C25.2668 31.512 25.3882 31.5572 25.5141 31.5589H25.5216C25.6463 31.5589 25.7671 31.5162 25.8642 31.438C25.9612 31.3597 26.0285 31.2506 26.055 31.1288L26.963 26.953C27.0337 26.6022 27.2319 26.2901 27.5193 26.0768L27.5714 26.0386C27.8804 25.8082 28.1325 25.51 28.3084 25.167C29.5224 27.6682 31.1732 31.8973 31.247 36.5269V41.8742C31.2477 42.4916 31.3915 43.1005 31.6672 43.6529L31.8931 44.1039C32.0089 44.3284 32.0605 44.5804 32.0423 44.8323C32.024 45.0842 31.9366 45.3262 31.7897 45.5316C31.5908 45.789 31.3414 46.0031 31.0569 46.1607H18.066V38.1026C18.8079 37.3015 21.1566 33.9095 20.2062 23.7968L21.7299 23.5338C21.7299 23.5338 21.7347 23.7237 21.7441 23.7635ZM19.0996 23.6936C19.9847 32.762 18.1685 36.1693 17.4556 37.1286C17.2367 36.7874 17.2027 36.2191 17.2131 36.0011C17.4648 32.5066 17.1949 26.6497 17.067 24.2947C17.0584 24.1733 17.088 24.0523 17.1517 23.9486C17.2154 23.8449 17.3099 23.7638 17.4221 23.7167C17.8752 23.5334 18.3609 23.4442 18.8496 23.4545C18.9135 23.4569 18.9743 23.4826 19.0205 23.5268C19.0667 23.5711 19.0951 23.6307 19.1002 23.6944L19.0996 23.6936ZM13.4509 13.609C13.4869 13.5628 13.5348 13.5271 13.5894 13.5059C13.6441 13.4847 13.7034 13.4786 13.7612 13.4884L15.2738 13.7286C15.4308 13.7534 15.5795 13.8158 15.7071 13.9105C15.8347 14.0052 15.9375 14.1294 16.0066 14.2725C17.6356 17.6508 17.3724 20.9449 17.0412 22.6951C17.0332 22.6982 17.0253 22.7008 17.0173 22.704C16.6826 22.8385 16.4013 23.0792 16.2166 23.389L15.3229 23.269C15.1425 23.2449 14.9788 23.1505 14.8675 23.0065C14.7561 22.8624 14.706 22.6803 14.728 22.4996C15.1478 18.9677 14.0781 15.6154 13.4031 13.9316C13.3813 13.8785 13.3742 13.8205 13.3826 13.7637C13.391 13.7069 13.4146 13.6534 13.4509 13.609ZM9.87061 13.7619C10.4024 13.916 10.943 14.0384 11.4893 14.1283C11.7394 14.1675 12.0334 14.2124 12.3641 14.2613C12.3727 14.2871 12.3792 14.3134 12.3894 14.3389C13.0257 15.9263 14.0347 19.0805 13.6435 22.372C13.6435 22.3757 13.6435 22.3792 13.6427 22.3828C12.625 22.3633 11.6079 22.4434 10.6058 22.6218C10.1645 22.7008 9.71878 22.7525 9.27113 22.7768C9.9783 21.7714 10.3672 20.1054 10.2564 18.1706C10.1417 16.1649 9.52666 14.5065 8.66162 13.6079C9.07002 13.599 9.47747 13.6509 9.87061 13.7619ZM6.00342 15.1664C6.30148 14.4406 6.7152 13.9939 7.11029 13.9716C7.1216 13.9716 7.13275 13.9706 7.14406 13.9706C7.99078 13.9706 9.02564 15.7674 9.16726 18.2321C9.30984 20.7297 8.46281 22.6505 7.61003 22.6992C7.21415 22.7231 6.75296 22.325 6.37397 21.6379C6.29512 21.4921 6.22329 21.3426 6.15874 21.1899C6.36423 21.2779 6.58537 21.3234 6.80888 21.3237C6.98281 21.3233 7.15567 21.2965 7.32153 21.2441C7.60866 21.1565 7.86706 20.9936 8.06983 20.7723C8.2726 20.5509 8.41232 20.2792 8.47444 19.9856C8.57169 19.5103 8.60385 19.024 8.57002 18.54C8.55151 18.1002 8.4304 17.6708 8.21636 17.2861C7.88866 16.7153 7.42269 16.3828 6.86846 16.3247C6.79666 16.3162 6.72388 16.322 6.65436 16.3419C6.58484 16.3618 6.51995 16.3952 6.46347 16.4404C6.40699 16.4855 6.36004 16.5414 6.32534 16.6049C6.29064 16.6683 6.26889 16.738 6.26135 16.8099C6.25381 16.8818 6.26062 16.9545 6.2814 17.0237C6.30218 17.093 6.33651 17.1574 6.38239 17.2133C6.42827 17.2692 6.4848 17.3154 6.54869 17.3492C6.61258 17.3831 6.68255 17.4039 6.75455 17.4105C6.94811 17.4308 7.12096 17.5719 7.26943 17.8295C7.39868 18.0676 7.47078 18.3325 7.48004 18.6033C7.50811 18.9877 7.48388 19.3741 7.40803 19.752C7.38529 19.8565 7.33525 19.9532 7.26301 20.0321C7.19078 20.111 7.09892 20.1693 6.9968 20.2012C6.89469 20.233 6.78595 20.2373 6.68166 20.2134C6.57738 20.1896 6.48127 20.1386 6.40312 20.0655C5.76892 19.4739 5.58524 18.6531 5.54159 18.0766C5.50009 17.0854 5.65711 16.096 6.00342 15.1664Z" />
                                <path d="M26.3612 14.0052C26.4789 14.0052 26.5938 13.9704 26.6916 13.905C26.7894 13.8397 26.8657 13.7468 26.9107 13.6381C26.9557 13.5295 26.9675 13.4099 26.9445 13.2945C26.9216 13.1792 26.8649 13.0732 26.7818 12.99C26.6986 12.9069 26.5926 12.8502 26.4773 12.8273C26.3619 12.8043 26.2423 12.8161 26.1337 12.8611C26.025 12.9061 25.9321 12.9824 25.8668 13.0802C25.8014 13.178 25.7665 13.2929 25.7665 13.4106C25.7665 13.4887 25.7819 13.566 25.8118 13.6382C25.8416 13.7103 25.8855 13.7759 25.9407 13.8311C25.9959 13.8863 26.0615 13.9301 26.1336 13.96C26.2058 13.9899 26.2831 14.0053 26.3612 14.0052ZM28.7951 14.0052C28.9128 14.0053 29.0278 13.9704 29.1256 13.9051C29.2234 13.8398 29.2996 13.7469 29.3447 13.6382C29.3897 13.5296 29.4015 13.41 29.3786 13.2946C29.3557 13.1793 29.299 13.0733 29.2159 12.9901C29.1327 12.9069 29.0267 12.8503 28.9114 12.8273C28.796 12.8043 28.6764 12.8161 28.5678 12.8611C28.4591 12.9061 28.3662 12.9823 28.3008 13.0801C28.2355 13.1779 28.2006 13.2929 28.2006 13.4106C28.2006 13.5682 28.2632 13.7195 28.3747 13.831C28.4862 13.9425 28.6374 14.0052 28.7951 14.0052ZM22.5439 28.4165C22.6615 28.4165 22.7765 28.3816 22.8743 28.3163C22.9721 28.2509 23.0483 28.158 23.0934 28.0494C23.1384 27.9407 23.1501 27.8211 23.1272 27.7057C23.1042 27.5904 23.0476 27.4844 22.9644 27.4012C22.8812 27.3181 22.7752 27.2615 22.6598 27.2385C22.5445 27.2156 22.4249 27.2274 22.3162 27.2724C22.2076 27.3175 22.1147 27.3937 22.0494 27.4915C21.984 27.5894 21.9492 27.7043 21.9492 27.822C21.9492 27.9001 21.9646 27.9774 21.9945 28.0495C22.0244 28.1217 22.0682 28.1872 22.1234 28.2424C22.1786 28.2976 22.2442 28.3414 22.3163 28.3713C22.3885 28.4012 22.4658 28.4165 22.5439 28.4165ZM22.3911 29.9366C22.3911 30.0542 22.426 30.1692 22.4914 30.267C22.5567 30.3648 22.6496 30.441 22.7583 30.486C22.8669 30.5311 22.9865 30.5428 23.1019 30.5199C23.2172 30.4969 23.3232 30.4403 23.4063 30.3571C23.4895 30.274 23.5462 30.168 23.5691 30.0526C23.592 29.9373 23.5803 29.8177 23.5353 29.709C23.4902 29.6004 23.414 29.5075 23.3162 29.4422C23.2184 29.3768 23.1035 29.3419 22.9858 29.3419C22.8281 29.3419 22.6768 29.4046 22.5653 29.5161C22.4538 29.6276 22.3911 29.7789 22.3911 29.9366Z" />
                              </svg>
                            </div>
                            <h4>
                              <Link href="#">Adventure Tour</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="category-card">
                          <Link href="#" className="card-img">
                            <Image src={pilgrimage} alt="" />
                          </Link>
                          <div className="card-content">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="51"
                                height="51"
                                viewBox="0 0 51 51"
                              >
                                <g>
                                  <path d="M15.944 6.69113C16.1658 6.69113 16.3786 6.60301 16.5354 6.44615C16.6923 6.28929 16.7804 6.07655 16.7804 5.85473C16.7804 5.6329 16.6923 5.42016 16.5354 5.2633C16.3786 5.10645 16.1658 5.01833 15.944 5.01833C15.7222 5.01833 15.5094 5.10645 15.3526 5.2633C15.1957 5.42016 15.1076 5.6329 15.1076 5.85473C15.1076 6.07655 15.1957 6.28929 15.3526 6.44615C15.5094 6.60301 15.7222 6.69113 15.944 6.69113ZM44.2694 10.4396C44.4912 10.4396 44.704 10.3515 44.8608 10.1946C45.0177 10.0378 45.1058 9.82505 45.1058 9.60323C45.1058 9.14127 44.7314 8.76683 44.2694 8.76683C43.8075 8.76683 43.433 9.14127 43.433 9.60323C43.433 9.82505 43.5211 10.0378 43.678 10.1946C43.8348 10.3515 44.0476 10.4396 44.2694 10.4396ZM3.96921 28.3865C3.50725 28.3865 3.13281 28.761 3.13281 29.2229C3.13281 29.6849 3.50725 30.0593 3.96921 30.0593C4.43117 30.0593 4.80561 29.6849 4.80561 29.2229C4.80561 28.761 4.43117 28.3865 3.96921 28.3865ZM44.2694 15.9578C44.7314 15.9578 45.1058 15.5834 45.1058 15.1214C45.1058 14.6595 44.7314 14.285 44.2694 14.285C43.8075 14.285 43.433 14.6595 43.433 15.1214C43.433 15.5834 43.8075 15.9578 44.2694 15.9578ZM41.5103 13.1987C41.7321 13.1987 41.9449 13.1106 42.1017 12.9538C42.2586 12.7969 42.3467 12.5842 42.3467 12.3623C42.3467 11.9004 41.9723 11.5259 41.5103 11.5259C41.0484 11.5259 40.6739 11.9004 40.6739 12.3623C40.6739 12.5842 40.762 12.7969 40.9189 12.9538C41.0757 13.1106 41.2885 13.1987 41.5103 13.1987ZM6.72831 31.1456C6.26635 31.1456 5.89191 31.5201 5.89191 31.982C5.89191 32.444 6.26635 32.8184 6.72831 32.8184C7.19027 32.8184 7.56471 32.444 7.56471 31.982C7.56471 31.5201 7.19027 31.1456 6.72831 31.1456ZM6.72831 25.6274C6.50649 25.6274 6.29374 25.7155 6.13689 25.8724C5.98003 26.0293 5.89191 26.242 5.89191 26.4638C5.89191 26.9258 6.26635 27.3002 6.72831 27.3002C7.19027 27.3002 7.56471 26.9258 7.56471 26.4638C7.56471 26.354 7.54308 26.2452 7.50105 26.1437C7.45901 26.0423 7.3974 25.9501 7.31974 25.8724C7.24207 25.7947 7.14987 25.7331 7.04839 25.6911C6.94691 25.6491 6.83815 25.6274 6.72831 25.6274ZM44.7896 21.9197L36.5072 21.5423L33.5186 18.5435C33.0698 18.0947 32.5496 17.7173 31.9784 17.4215L28.8062 15.8201L29.0204 15.0959C29.4488 14.9123 29.8772 14.6573 30.2546 14.3105C30.4484 14.1371 30.632 13.9433 30.7952 13.7189V14.9735C30.7952 15.3203 31.0706 15.5957 31.4174 15.5957C31.7642 15.5957 32.0396 15.3203 32.0396 14.9735V10.8833L32.8964 9.65933C32.9678 9.55733 33.0086 9.42473 33.0086 9.30233C33.0086 9.21053 32.9882 8.70053 32.6108 7.91513C32.3762 7.43573 32.0192 6.85433 31.448 6.19133L31.9172 5.11013C31.958 5.01833 31.9784 4.91633 31.9682 4.81433L31.6214 0.550726C31.601 0.285526 31.4174 0.0713257 31.1624 -7.43177e-05C30.9074 -0.0714743 30.6422 0.0305257 30.4892 0.244726L28.0922 3.66173C28.031 3.75353 27.9902 3.86573 27.98 3.97793L27.8984 5.08973C26.9906 5.34473 26.3174 5.67113 25.8278 5.98733C25.0628 6.47693 24.7466 6.91553 24.7058 6.98693C24.6344 7.09913 24.5936 7.22153 24.6038 7.35413L24.6956 9.23093L24.3386 10.5569C24.2672 10.8323 24.2468 11.1077 24.2468 11.4545C24.2468 11.5565 24.2468 11.6585 24.257 11.7503L24.2571 11.7508C24.208 11.7386 24.1577 11.7324 24.1071 11.7322C23.9396 11.7322 23.779 11.7987 23.6605 11.9171C23.5421 12.0356 23.4756 12.1962 23.4756 12.3637C23.4756 12.5311 23.5421 12.6918 23.6605 12.8102C23.779 12.9286 23.9396 12.9951 24.1071 12.9951C24.2431 12.9952 24.3755 12.951 24.4843 12.8693C24.6206 13.2593 24.812 13.6279 25.0527 13.9637C25.0731 13.9943 25.0935 14.0147 25.1139 14.0453L24.9609 14.8103L21.3705 14.9327C20.7177 14.9531 20.0649 15.0755 19.4325 15.2999L15.2301 16.8605L11.3439 15.1367C11.2725 14.8715 11.1603 14.3717 11.1603 13.7291C11.1603 12.9029 11.3337 11.8523 11.9661 10.6793C12.0477 10.5365 12.0681 10.3631 12.0171 10.1999C11.9661 10.0367 11.8641 9.90413 11.7213 9.83273L11.2113 9.55733C11.0481 9.46553 10.8543 9.45533 10.6911 9.52673C10.1709 9.73073 9.70171 10.0265 9.29371 10.3835C8.68171 10.9139 8.22271 11.5769 7.89631 12.2909C7.66171 12.8315 7.49851 13.3925 7.43731 13.9637C7.21291 14.0147 7.00891 14.0963 6.82531 14.1881C6.60091 14.3105 6.40711 14.4635 6.26431 14.6267C6.03991 14.8613 5.88691 15.1061 5.78491 15.2897C5.68291 15.4733 5.64211 15.6059 5.63191 15.6365C5.54011 15.9221 5.66251 16.2281 5.91751 16.3811L9.34471 18.2783L9.11012 19.0433C9.00811 19.3697 9.19171 19.7165 9.51812 19.8185C9.84451 19.9205 10.1913 19.7369 10.2933 19.4105L10.4565 18.8903L14.8629 21.3281C15.0159 21.4097 15.1995 21.4301 15.3627 21.3791L16.3623 21.0425L14.4854 43.2581C14.465 43.5437 14.6384 43.8191 14.924 43.9007C14.9546 43.9109 16.658 44.4413 19.0958 44.7269C19.4528 45.3899 19.8812 46.0223 20.3708 46.6241C20.432 46.6955 20.5034 46.7567 20.585 46.7873C20.6054 46.7975 21.0746 47.0117 21.8294 47.2259C22.064 47.2871 22.319 47.3585 22.5944 47.4197L22.6964 47.6543L21.2276 48.7355C21.0644 48.8579 20.9318 49.0211 20.84 49.1945C20.7584 49.3679 20.7176 49.5617 20.7176 49.7351C20.7176 50.0513 20.84 50.3573 21.0542 50.6021C21.1664 50.7245 21.299 50.8265 21.4622 50.8979C21.6152 50.9693 21.7988 51.0101 21.9824 51.0101H25.2566C25.736 51.0101 26.1848 50.8163 26.501 50.4899C26.8172 50.1737 27.0212 49.7249 27.0212 49.2455V48.9293C27.0212 48.8681 27.011 48.7967 26.9906 48.7355L26.5928 47.5217C27.2864 47.3993 28.0106 47.1851 28.7348 46.8587H28.796L28.7144 48.3581L28.2962 48.7865C28.1738 48.9089 28.082 49.0619 28.0208 49.2149C27.9596 49.3679 27.929 49.5311 27.929 49.6943C27.929 50.0309 28.0616 50.3573 28.286 50.6021C28.3982 50.7245 28.541 50.8265 28.7042 50.8979C28.8674 50.9693 29.051 51.0101 29.2448 51.0101H30.6626C31.4378 51.0101 31.8623 50.5463 32.0192 50.1635L33.335 46.4405C33.4064 46.2467 33.3554 46.0427 33.2738 45.8795C33.1718 45.6755 32.7842 44.9309 32.2538 43.8803L33.8552 24.9695L34.61 25.4999C34.712 25.5713 34.8446 25.6121 34.9772 25.6121L39.1184 25.5917V26.0711C39.1184 26.4179 39.3938 26.6933 39.7406 26.6933C40.0874 26.6933 40.3628 26.4179 40.3628 26.0711V25.5917H40.5872C40.7504 25.7651 41.036 26.0813 41.3114 26.5403C41.5256 26.8973 41.7398 27.3461 41.903 27.8867C42.0662 28.4273 42.1682 29.0495 42.1682 29.7737C42.1682 30.1377 42.3466 30.4469 42.7904 30.4469H43.3616C43.5452 30.4469 43.7186 30.3653 43.841 30.2225C44.249 29.7431 44.5346 29.2025 44.7284 28.6313C44.9222 28.0601 45.0038 27.4787 45.0038 26.8871C45.0038 26.1527 44.861 25.4285 44.606 24.7655C44.6774 24.7043 44.7386 24.6431 44.7998 24.5819C45.0752 24.2759 45.2384 23.9393 45.3302 23.6333C45.422 23.3273 45.4424 23.0417 45.4424 22.8275C45.4424 22.4746 45.3383 21.9473 44.7896 21.9197ZM9.91581 13.7291C9.91581 14.6165 10.079 15.2693 10.181 15.5957L9.73221 17.0543L7.08021 15.5855C7.21281 15.3509 7.55961 15.1265 7.99821 15.1571C8.17161 15.1673 8.33481 15.1061 8.45721 14.9837C8.57961 14.8715 8.65101 14.7083 8.65101 14.5349C8.66121 13.7699 8.89581 12.9437 9.33441 12.2501C9.54861 11.9033 9.81381 11.5871 10.1198 11.3117C10.2116 11.2301 10.3136 11.1485 10.4258 11.0771C10.0382 12.0767 9.91581 12.9845 9.91581 13.7291ZM29.204 4.26353L30.5096 2.39693L30.7034 4.78373L30.4994 5.24273C30.377 5.13053 30.2546 5.01833 30.122 4.89593C29.9588 4.76333 29.816 4.74293 29.6324 4.76333C29.4692 4.78373 29.3162 4.81433 29.1632 4.83473L29.204 4.26353ZM26.5826 6.99713C27.164 6.65033 28.0922 6.24233 29.5304 6.02813C30.6626 7.04813 31.2134 7.89473 31.499 8.46593C31.6418 8.77193 31.7132 8.99633 31.7438 9.14933V9.15953L31.142 10.0265C30.989 9.91433 30.8156 9.77153 30.632 9.59813C30.1934 9.20033 29.7242 8.62913 29.459 7.95593C29.306 7.55813 28.8674 7.44593 28.5206 7.72133C28.235 7.95593 27.9009 8.14554 27.5516 8.28233C27.1052 8.45726 26.4841 8.6178 25.9808 8.66993L25.9196 7.57853C25.9808 7.42553 26.2154 7.22153 26.5826 6.99713ZM25.5524 10.8629L25.8176 9.90413C26.0522 9.88373 26.3582 9.84293 26.705 9.78173C27.0926 9.70013 27.521 9.58793 27.9596 9.41453C28.184 9.32273 28.4084 9.22073 28.6226 9.09833C28.7552 9.31253 28.8878 9.51653 29.0408 9.71033C29.4692 10.2611 29.9384 10.6691 30.2954 10.9547C30.377 11.0159 30.4586 11.0771 30.53 11.1281L30.2444 12.1787C29.9894 12.8621 29.5508 13.3517 29.0612 13.6883C28.8164 13.8515 28.5512 13.9739 28.2962 14.0555C28.0412 14.1371 27.7964 14.1779 27.5822 14.1779C27.2528 14.1779 26.8172 13.9841 26.6234 13.8413C26.3276 13.6271 26.042 13.2905 25.838 12.8927C25.634 12.4847 25.5014 12.0155 25.5014 11.4851C25.4912 11.2709 25.5116 11.0669 25.5524 10.8629ZM27.623 15.4019L27.47 15.9017C27.3578 16.1057 27.2252 16.2383 27.113 16.3097C26.9906 16.3913 26.8682 16.4219 26.756 16.4219C26.5928 16.4219 26.4296 16.3505 26.3072 16.2281C26.246 16.1669 26.1929 16.0861 26.1542 15.9833C26.0995 15.8377 26.0743 15.6319 26.1032 15.5039L26.195 15.0245C26.399 15.1469 26.6234 15.2387 26.8478 15.3101C27.1204 15.3846 27.4833 15.4019 27.623 15.4019ZM24.8792 16.0649C24.8996 16.1975 24.9404 16.3301 24.9914 16.4423C25.1342 16.8197 25.3892 17.1257 25.6952 17.3399C26.0012 17.5541 26.3684 17.6663 26.756 17.6663C27.113 17.6663 27.4802 17.5643 27.7964 17.3501C27.9596 17.2379 28.1126 17.1053 28.2554 16.9421L30.9482 18.2987C30.4586 18.7985 29.9078 19.1759 29.3264 19.4615C28.541 19.8389 27.7046 20.0225 26.8784 20.0225C25.634 20.0225 24.4202 19.6145 23.4308 18.8597C22.931 18.4823 22.5026 18.0029 22.1456 17.4521C21.9008 17.0747 21.6968 16.6463 21.5438 16.1873L24.8792 16.0649ZM25.8176 22.1951L24.8282 22.7459L24.1448 21.8891L25.1342 21.3383L25.8176 22.1951ZM20.2892 16.3301C20.483 16.9727 20.7584 17.5643 21.095 18.0947C21.7478 19.1147 22.625 19.9103 23.6348 20.4407C23.7266 20.4917 23.8184 20.5325 23.9102 20.5733L22.8902 21.1343C22.727 21.2261 22.6148 21.3791 22.5842 21.5525C22.5536 21.7361 22.5944 21.9197 22.7066 22.0625L24.1754 23.9087C24.3692 24.1433 24.6956 24.2147 24.9608 24.0617L27.062 22.8989C27.2252 22.8071 27.3374 22.6541 27.368 22.4705C27.4088 22.2869 27.3578 22.1033 27.2456 21.9605L26.654 21.2261H26.8886C27.8984 21.2261 28.9286 21.0017 29.8772 20.5427C30.6728 20.1653 31.4174 19.6145 32.0702 18.9005C32.2742 19.0433 32.4578 19.2065 32.6312 19.3799L33.7226 20.4713C32.3966 21.5219 31.0298 22.4195 29.969 23.0621C29.3672 23.4293 28.847 23.7251 28.49 23.9189C28.3064 24.0209 28.1738 24.0923 28.0718 24.1433C27.9392 24.2147 27.8066 24.2657 27.7046 24.3983L27.0314 25.3061C26.8172 25.4081 26.246 25.6529 25.3586 25.7957C25.3178 25.7447 25.2668 25.6937 25.226 25.6427C24.8588 25.2653 24.3284 25.0409 23.7674 25.0409C23.4213 25.0406 23.0808 25.1284 22.778 25.2959C22.3292 25.0409 22.013 24.7553 21.7988 24.5207C21.6764 24.3779 21.5846 24.2555 21.5336 24.1739V23.2355C21.5336 23.1029 21.4928 22.9805 21.4214 22.8785L21.4112 22.8683C21.3398 22.7663 20.7176 21.8891 19.9526 20.6753C19.4443 19.8842 18.5372 18.4229 17.9432 17.1563L20.2892 16.3301ZM25.8176 27.0299C26.4194 26.9177 26.8886 26.7545 27.215 26.6321C27.3272 26.8259 27.4292 27.0299 27.521 27.2543C27.5924 27.4175 27.6536 27.6011 27.7046 27.7847C27.317 27.9683 26.8886 28.1315 26.4602 28.2539C26.1236 28.3559 25.7972 28.4273 25.4912 28.4681V28.2743C25.7054 27.9989 25.8584 27.5501 25.8176 27.0299ZM23.7623 27.9989C23.5418 27.9989 23.3304 27.9113 23.1745 27.7554C23.0186 27.5995 22.931 27.3881 22.931 27.1676C22.931 26.9472 23.0186 26.7357 23.1745 26.5798C23.3304 26.4239 23.5418 26.3363 23.7623 26.3363C23.9828 26.3363 24.1942 26.4239 24.3501 26.5798C24.506 26.7357 24.5936 26.9472 24.5936 27.1676C24.5936 27.3881 24.506 27.5995 24.3501 27.7554C24.1942 27.9113 23.9828 27.9989 23.7623 27.9989ZM24.2366 29.1719L24.0836 36.1793H22.4924L23.0738 29.1107C23.288 29.1923 23.5226 29.2331 23.7674 29.2331C23.9204 29.2229 24.0836 29.2025 24.2366 29.1719ZM21.7478 27.6317C21.6254 27.5603 21.503 27.4889 21.3908 27.4073C21.2072 27.2747 21.044 27.1421 20.9114 27.0095C20.8502 26.9381 20.789 26.8769 20.738 26.8055L21.1154 25.6529C21.3296 25.8569 21.5846 26.0609 21.8906 26.2649C21.758 26.5301 21.6866 26.8361 21.6866 27.1523C21.6968 27.3257 21.7172 27.4787 21.7478 27.6317ZM15.2402 20.1143L10.844 17.6765L11.2316 16.4423L14.9648 18.0947C15.1076 18.1559 15.281 18.1661 15.434 18.1049L16.76 17.6153C17.0354 18.1763 17.3414 18.7475 17.6474 19.2983L15.2402 20.1143ZM16.4744 43.0235C16.1888 42.9623 15.9542 42.9011 15.7706 42.8501L17.6576 20.6141L18.29 20.4101C18.5246 20.7977 18.749 21.1547 18.9632 21.5015C19.5548 22.4399 20.0648 23.1641 20.279 23.4803V24.2861C20.1464 24.6635 19.6568 26.0915 19.1162 27.8357C18.8 28.8557 18.4634 29.9777 18.1778 31.0691C17.882 32.1605 17.6372 33.2009 17.4944 34.0781C17.3516 34.9349 17.27 35.9039 17.27 36.9239C17.27 38.4947 17.4638 40.2083 17.9534 41.8811C18.0962 42.3911 18.2798 42.8909 18.4736 43.3907C17.678 43.2785 17.0048 43.1357 16.4744 43.0235ZM25.7666 49.2455C25.7666 49.5069 25.6575 49.7657 25.2566 49.7657H21.9314L23.8286 48.3581C24.053 48.1949 24.1448 47.8889 24.0326 47.6237C24.2978 47.6441 24.5732 47.6543 24.869 47.6543C25.0118 47.6543 25.1648 47.6543 25.3178 47.6441L25.7666 49.0211V49.2455ZM28.3268 45.6653C27.1436 46.2263 25.9502 46.4201 24.8792 46.4201C23.4171 46.4201 21.9574 46.0714 21.2378 45.7163C20.8263 45.2137 19.7351 43.5887 19.1264 41.5343C18.6776 39.9941 18.494 38.3927 18.494 36.9137C18.494 35.9651 18.5756 35.0573 18.698 34.2719C18.8306 33.4661 19.0652 32.4461 19.3508 31.3751C19.6364 30.2939 19.973 29.1617 20.2994 28.1417C20.534 28.3355 20.789 28.5089 21.0542 28.6619C21.299 28.8047 21.554 28.9271 21.809 29.0393L21.1766 36.7301C21.1664 36.9035 21.2174 37.0769 21.3398 37.1993C21.4622 37.3217 21.6254 37.4033 21.7988 37.4033H24.6854C25.022 37.4033 25.2974 37.1279 25.3076 36.7913L25.4606 29.7023C25.8992 29.6513 26.348 29.5493 26.807 29.4167C27.2048 29.3045 27.6026 29.1515 27.9902 28.9883C28.0004 29.0597 28.0106 29.1413 28.0208 29.2127C28.1228 29.9369 28.1636 30.7019 28.1636 31.4567C28.1636 32.8439 28.0208 34.2005 27.878 35.2001C27.8066 35.6999 27.7352 36.1079 27.6842 36.3935C27.6536 36.5363 27.6332 36.6485 27.623 36.7199C27.5822 36.9239 27.5822 37.0871 27.6434 37.2095C29.0918 40.3715 30.8768 43.9211 31.7132 45.5531H28.8062C28.5716 45.5531 28.4798 45.5939 28.3268 45.6653ZM30.8666 49.6637C30.8156 49.7249 30.7442 49.7555 30.6626 49.7555H29.0612L29.765 49.0313C29.867 48.9191 29.9282 48.7865 29.9384 48.6335L30.0404 46.8383H31.8662L30.8666 49.6637ZM28.1942 25.8569L28.6022 25.3061C28.8878 25.1531 29.6222 24.7655 30.5912 24.1739C30.938 23.9597 31.3154 23.7251 31.7132 23.4701L32.6516 24.1331L31.1726 41.7383C30.4382 40.2491 29.612 38.5355 28.8674 36.9239C28.9184 36.6485 29.0204 36.1079 29.1224 35.4041C29.2754 34.3637 29.4182 32.9561 29.4182 31.4873C29.4182 30.4163 29.3407 29.3139 29.1224 28.2743C28.9477 27.4423 28.5019 26.3745 28.1942 25.8569ZM35.1506 24.3677L32.825 22.7255C33.4064 22.3175 34.0082 21.8789 34.5998 21.3995L35.783 22.5929C35.8952 22.7051 36.038 22.7663 36.191 22.7765L39.0878 22.9091V24.3473H39.098L35.1506 24.3677ZM44.0348 23.4701C43.994 23.5721 43.9328 23.6741 43.8512 23.7557C43.7696 23.8475 43.6676 23.9291 43.5248 24.0005C43.3718 24.0719 43.2596 24.2045 43.2086 24.3677C43.1576 24.5309 43.1678 24.7043 43.2494 24.8573C43.5656 25.4489 43.739 26.1833 43.739 26.9075C43.739 27.3665 43.6676 27.8255 43.5248 28.2539C43.4636 28.4171 43.4024 28.5803 43.3208 28.7435C43.2596 28.2947 43.1678 27.8765 43.0556 27.4991C42.7598 26.5097 42.311 25.7753 41.9234 25.2755C41.546 24.7757 41.24 24.5207 41.2094 24.5003C41.0972 24.4085 40.9544 24.3575 40.8116 24.3575H40.3526V22.9805L44.1368 23.1539C44.1164 23.2457 44.0858 23.3579 44.0348 23.4701ZM9.48741 28.3865C9.02545 28.3865 8.65101 28.761 8.65101 29.2229C8.65101 29.6849 9.02545 30.0593 9.48741 30.0593C9.94937 30.0593 10.3238 29.6849 10.3238 29.2229C10.3238 28.761 9.94937 28.3865 9.48741 28.3865ZM47.0285 11.5259C46.9187 11.5259 46.8099 11.5476 46.7084 11.5896C46.607 11.6316 46.5148 11.6932 46.4371 11.7709C46.3594 11.8486 46.2978 11.9408 46.2558 12.0422C46.2137 12.1437 46.1921 12.2525 46.1921 12.3623C46.1921 12.8243 46.5666 13.1987 47.0285 13.1987C47.4905 13.1987 47.8649 12.8243 47.8649 12.3623C47.8649 12.2525 47.8433 12.1437 47.8012 12.0422C47.7592 11.9408 47.6976 11.8486 47.6199 11.7709C47.5423 11.6932 47.4501 11.6316 47.3486 11.5896C47.2471 11.5476 47.1384 11.5259 47.0285 11.5259ZM41.5154 33.0785C41.2936 33.0785 41.0808 33.1666 40.924 33.3235C40.7671 33.4804 40.679 33.6931 40.679 33.9149C40.679 34.3769 41.0535 34.7513 41.5154 34.7513C41.9774 34.7513 42.3518 34.3769 42.3518 33.9149C42.3518 33.6931 42.2637 33.4804 42.1068 33.3235C41.95 33.1666 41.7372 33.0785 41.5154 33.0785Z" />
                                </g>
                              </svg>
                            </div>
                            <h4>
                              <Link href="#">Pilgrimage Tours</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="category-card">
                          <Link href="#" className="card-img">
                            <Image src={wildlife} alt="" />
                          </Link>
                          <div className="card-content">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="51"
                                height="51"
                                viewBox="0 0 51 51"
                              >
                                <path d="M6.48213 24.4379C6.42228 24.3482 6.32924 24.2859 6.22347 24.2648C6.11771 24.2436 6.00788 24.2654 5.91815 24.3252L5.90992 24.3308C5.33034 24.7158 4.78596 25.1513 4.28315 25.6322C4.24403 25.6695 4.21267 25.7141 4.1909 25.7635C4.16913 25.8129 4.15738 25.8662 4.15633 25.9202C4.15527 25.9742 4.16494 26.0278 4.18477 26.0781C4.2046 26.1283 4.23419 26.1741 4.27183 26.2128C4.30948 26.2516 4.35443 26.2824 4.40409 26.3037C4.45375 26.3249 4.50712 26.3361 4.56113 26.3365C4.61513 26.337 4.66869 26.3268 4.71871 26.3064C4.76873 26.286 4.81421 26.2559 4.85252 26.2179L4.87286 26.2219C5.33434 25.7714 5.83521 25.3631 6.36948 25.0019C6.4592 24.942 6.52147 24.849 6.5426 24.7432C6.56372 24.6374 6.54197 24.5276 6.48213 24.4379ZM8.42733 23.3954C8.38074 23.2986 8.29768 23.2241 8.19633 23.1882C8.09497 23.1524 7.98355 23.1582 7.88643 23.2043C7.67089 23.306 7.47974 23.4117 7.26013 23.5174C7.16521 23.5687 7.09453 23.6555 7.06364 23.7589C7.03275 23.8622 7.04418 23.9736 7.09542 24.0685C7.14665 24.1634 7.23349 24.2341 7.33684 24.265C7.44018 24.2959 7.55157 24.2845 7.64648 24.2332C7.8417 24.1315 8.05318 24.0299 8.24025 23.9363C8.33643 23.889 8.41005 23.8057 8.44508 23.7044C8.48012 23.6031 8.47374 23.4921 8.42733 23.3954Z" />
                                <path d="M46.323 10.0112H46.1197C45.8879 8.94973 44.7573 8.14449 43.403 8.14449C42.8504 8.1386 42.306 8.2789 41.825 8.55118C41.5436 8.30718 41.2006 8.14515 40.8334 8.08275C40.4663 8.02036 40.089 8.06 39.7428 8.19736C39.4556 7.87486 39.1017 7.6187 38.7056 7.44665C38.3095 7.27459 37.8808 7.19076 37.449 7.20096C36.7782 7.19067 36.1224 7.40068 35.5823 7.7988C34.769 7.05049 33.313 6.57873 31.6781 6.57873C30.4348 6.53795 29.2062 6.85711 28.1399 7.49785C27.8166 7.30088 27.4448 7.19806 27.0662 7.20096C25.9864 7.20086 25.0848 8.02472 24.988 9.10021C24.787 9.07572 24.5846 9.0635 24.3821 9.06361C22.8204 9.06361 21.5352 9.73871 21.1286 10.6904C19.2537 10.6904 17.7937 11.699 17.7937 12.9638C17.7937 14.2286 19.2781 15.2331 21.1733 15.2331C21.8917 15.2411 22.602 15.0809 23.2474 14.7654C23.754 15.0753 24.3372 15.2373 24.9311 15.2331C25.6047 15.2261 26.2634 15.0333 26.8344 14.6759C32.2637 16.3149 34.9032 20.2151 34.9032 26.6123C34.9012 26.6394 34.9012 26.6666 34.9032 26.6936H33.7644C33.7099 26.6938 33.656 26.7048 33.6058 26.7262C33.3237 25.6861 32.8567 24.7052 32.2271 23.8305C32.0523 23.5703 31.8896 23.3222 31.7391 23.0578L31.6618 22.9196C30.5312 20.939 29.848 19.7474 27.9244 19.6254C26.9646 19.5603 25.834 20.3371 25.411 20.6543C22.5642 20.0524 18.7576 19.971 15.3861 19.971C7.0774 19.971 1.28613 24.282 1.2902 28.1455C1.37153 29.1135 1.33087 31.7732 0.196199 32.4605C0.104135 32.5162 0.0378917 32.6061 0.0119751 32.7105C-0.0139416 32.815 0.00258105 32.9254 0.0579247 33.0177C0.113614 33.1097 0.203517 33.176 0.307946 33.2019C0.412375 33.2278 0.522818 33.2113 0.615091 33.156C2.38419 32.0904 2.13611 28.4831 2.09951 28.1089C2.09951 25.0506 7.15467 20.7885 15.3861 20.7885C18.786 20.7885 22.6374 20.8698 25.4232 21.4961C25.4832 21.5096 25.5455 21.5093 25.6054 21.4952C25.6653 21.4811 25.7212 21.4536 25.7689 21.4148C26.1186 21.1301 27.1801 20.3981 27.8715 20.4387C29.36 20.5323 29.8602 21.4107 30.9542 23.3262L31.0355 23.4645C31.1982 23.7492 31.3772 24.0217 31.548 24.2779C32.3003 25.4166 33.0771 26.592 33.1747 29.6299C33.2231 31.4448 33.1797 33.261 33.0446 35.0715C31.7757 33.8839 30.9135 31.8179 30.8322 29.4307H31.308C31.3632 29.4307 31.4178 29.4196 31.4685 29.3979C31.5192 29.3762 31.565 29.3444 31.603 29.3045C31.6411 29.2645 31.6706 29.2172 31.6898 29.1655C31.709 29.1138 31.7175 29.0587 31.7147 29.0036C31.7094 28.8959 31.6616 28.7947 31.5817 28.7222C31.5018 28.6498 31.3964 28.612 31.2887 28.6173H31.2877C30.7248 28.6485 30.1637 28.5307 29.6609 28.2757C29.5652 28.2283 29.4546 28.2204 29.3531 28.2537C29.2516 28.287 29.1672 28.3589 29.1181 28.4538C29.0691 28.5487 29.0593 28.6591 29.0908 28.7612C29.1223 28.8633 29.1927 28.9489 29.2868 28.9996C29.5322 29.1234 29.7898 29.2215 30.0554 29.2924C30.0618 31.1363 30.5891 32.9408 31.5764 34.498C31.5764 36.3119 31.1494 38.5324 30.9176 38.8171C30.8385 38.89 30.7916 38.9913 30.787 39.0988C30.7824 39.2062 30.8206 39.3111 30.8932 39.3905C30.9316 39.4319 30.9782 39.4649 31.03 39.4873C31.0818 39.5097 31.1377 39.5211 31.1941 39.5207C31.2969 39.5203 31.3957 39.4811 31.4707 39.4109C31.9425 38.9757 32.2434 36.9707 32.3491 35.4619C32.5484 35.6704 32.7632 35.8634 32.9917 36.0394C32.9274 37.0022 32.7373 37.9524 32.4264 38.8659C32.0726 39.6793 31.4666 40.1836 30.9176 40.1307C30.4621 40.0941 30.1042 39.6549 29.9009 38.9106C29.8876 38.8584 29.8642 38.8093 29.8319 38.7662C29.7996 38.723 29.7591 38.6868 29.7127 38.6594C29.6663 38.632 29.6149 38.6141 29.5615 38.6067C29.5081 38.5993 29.4538 38.6025 29.4017 38.6162C29.3496 38.6299 29.3007 38.6538 29.2579 38.6865C29.2151 38.7192 29.1792 38.7601 29.1522 38.8067C29.1253 38.8534 29.1078 38.9049 29.1009 38.9583C29.094 39.0118 29.0977 39.0661 29.1119 39.118C29.4006 40.2039 30.0351 40.8627 30.8525 40.9278H30.9827C31.8449 40.9278 32.6908 40.2527 33.1707 39.175C33.4823 38.3095 33.6805 37.4072 33.7604 36.4908C34.3166 36.7728 34.9303 36.9231 35.5539 36.93C35.6617 36.93 35.7652 36.8872 35.8414 36.8109C35.9177 36.7347 35.9606 36.6312 35.9606 36.5234C35.9606 36.4155 35.9177 36.312 35.8414 36.2358C35.7652 36.1595 35.6617 36.1167 35.5539 36.1167C34.9397 36.1308 34.3333 35.9761 33.801 35.6693C33.9744 33.6571 34.0328 31.6366 33.9759 29.6177C33.9589 28.9142 33.8909 28.2129 33.7726 27.5192H45.8147C45.9225 27.5192 46.026 27.4764 46.1022 27.4001C46.1785 27.3238 46.2214 27.2204 46.2214 27.1125C46.2214 27.0047 46.1785 26.9012 46.1022 26.825C46.026 26.7487 45.9225 26.7058 45.8147 26.7058H38.7789C38.7828 26.6789 38.7828 26.6515 38.7789 26.6245C38.7789 21.6507 41.2638 16.8192 44.8183 14.8833C45.2941 14.9281 45.7903 14.9525 46.3027 14.9525C50.1825 14.9525 51 13.6145 51 12.492C51 11.3695 50.2029 10.0112 46.323 10.0112ZM46.323 14.1147V14.1228C44.1432 14.1228 42.1097 13.6633 41.2557 12.9841C41.1719 12.9171 41.0651 12.886 40.9584 12.8974C40.8518 12.9088 40.754 12.9619 40.6863 13.0451C40.2796 13.5535 39.2832 13.891 38.2218 13.891C36.8959 13.891 35.9606 13.3989 35.6759 12.9353C35.6263 12.8554 35.5507 12.7951 35.4617 12.7647C35.3727 12.7343 35.2759 12.7356 35.1878 12.7686C32.5444 13.7487 29.1363 13.102 29.0875 13.0939C28.9858 13.07 28.8788 13.0861 28.7887 13.1389C28.6985 13.1918 28.6322 13.2773 28.6034 13.3777C28.5747 13.4781 28.5857 13.5858 28.6341 13.6783C28.6826 13.7709 28.7649 13.8412 28.8638 13.8748C32.4834 15.2819 35.5051 18.3484 36.5625 21.7198C36.5856 21.7953 36.6303 21.8624 36.6909 21.913C36.7516 21.9635 36.8256 21.9953 36.9041 22.0045H36.9488C37.0205 22.0048 37.091 21.9862 37.1531 21.9504C37.2152 21.9147 37.2668 21.8632 37.3026 21.8012C38.0577 20.5147 38.903 19.2834 39.8322 18.1165C39.9109 18.0605 39.9672 17.9784 39.9909 17.8847C40.1318 17.3196 40.1344 16.7288 39.9984 16.1624C39.8625 15.5961 39.5921 15.0708 39.21 14.6312C39.8764 14.5347 40.5059 14.2655 41.0361 13.8504C41.822 14.2876 42.6803 14.5796 43.5697 14.7125C40.2308 17.0469 37.9655 21.7768 37.9655 26.6286C37.9618 26.6556 37.9618 26.6829 37.9655 26.7099H35.7003C35.7022 26.6828 35.7022 26.6556 35.7003 26.6286C35.7003 19.9914 33.008 15.8919 27.4933 14.0944C27.603 13.9479 27.6792 13.779 27.7164 13.5998C27.7537 13.4206 27.7511 13.2354 27.7088 13.0573C27.6961 13.0051 27.6732 12.9559 27.6414 12.9126C27.6096 12.8693 27.5695 12.8328 27.5235 12.805C27.4774 12.7773 27.4264 12.7589 27.3732 12.751C27.3201 12.7432 27.2659 12.7459 27.2138 12.759C27.1617 12.7722 27.1127 12.7955 27.0697 12.8277C27.0267 12.8599 26.9905 12.9003 26.9631 12.9465C26.9358 12.9928 26.9179 13.044 26.9105 13.0972C26.903 13.1504 26.9062 13.2046 26.9198 13.2566C26.9345 13.3333 26.9308 13.4124 26.9088 13.4874C26.8869 13.5623 26.8475 13.631 26.7938 13.6877C26.5486 13.9368 26.2561 14.1342 25.9334 14.2683C25.6106 14.4025 25.2643 14.4705 24.9148 14.4685C24.4081 14.4781 23.9127 14.3177 23.5077 14.013C23.4462 13.9647 23.372 13.9352 23.2941 13.928C23.2162 13.9207 23.1378 13.9362 23.0685 13.9724C22.4964 14.3012 21.8452 14.4671 21.1855 14.4523C19.7946 14.4523 18.6193 13.7853 18.6193 12.9963C18.6193 12.2073 19.7946 11.5363 21.1855 11.5363H21.4173C21.5136 11.5379 21.6073 11.5052 21.6818 11.4441C21.7563 11.3831 21.8067 11.2975 21.824 11.2028C21.9379 10.5562 22.9261 9.88512 24.378 9.88512C24.6957 9.885 25.0124 9.92185 25.3215 9.99493C25.3874 10.0104 25.4562 10.0093 25.5215 9.99152C25.5868 9.97377 25.6467 9.93999 25.6957 9.89326C25.7447 9.84631 25.7811 9.78785 25.8017 9.72321C25.8223 9.65857 25.8264 9.5898 25.8136 9.52317C25.7996 9.4467 25.7928 9.36909 25.7933 9.29135C25.7888 8.59063 26.3532 8.01882 27.054 8.01435H27.0662C27.3656 8.01279 27.6551 8.12134 27.8796 8.31936C27.9533 8.38237 28.047 8.417 28.144 8.417C28.2409 8.417 28.3347 8.38237 28.4083 8.31936C29.0875 7.75 30.3401 7.39618 31.6618 7.39618C33.2317 7.39618 34.6876 7.89234 35.2082 8.61625C35.2435 8.66486 35.2892 8.70502 35.342 8.73385C35.3947 8.76268 35.4532 8.77947 35.5132 8.78299C35.573 8.78632 35.6329 8.77637 35.6884 8.75388C35.7439 8.73138 35.7938 8.69688 35.8345 8.65285C36.0457 8.44169 36.2979 8.27608 36.5756 8.16626C36.8533 8.05643 37.1506 8.00473 37.449 8.01435C37.7998 7.99588 38.1494 8.06859 38.4637 8.22539C38.778 8.38219 39.0463 8.61773 39.2425 8.90907C39.2701 8.95658 39.3071 8.99801 39.3511 9.03087C39.3951 9.06372 39.4454 9.08731 39.4988 9.10021C39.5531 9.114 39.6096 9.11643 39.6649 9.10733C39.7202 9.09823 39.773 9.07781 39.82 9.04734C40.0761 8.88093 40.3853 8.8166 40.6865 8.86704C40.9876 8.91749 41.259 9.07906 41.4468 9.31982C41.5127 9.40486 41.6097 9.46031 41.7164 9.47403C41.8231 9.48775 41.9309 9.45862 42.0162 9.39303C42.4181 9.09518 42.9069 8.93797 43.4071 8.94567C44.4807 8.94567 45.3551 9.60044 45.3551 10.3732V10.4138C45.3548 10.4683 45.3654 10.5223 45.3864 10.5726C45.4074 10.6229 45.4382 10.6685 45.4771 10.7066C45.5164 10.7446 45.563 10.7742 45.614 10.7938C45.665 10.8133 45.7194 10.8224 45.774 10.8205H46.3271C47.7749 10.8205 50.211 11.0361 50.211 12.4717C50.211 13.9073 47.7708 14.1147 46.323 14.1147ZM39.2344 17.5797C38.4504 18.5617 37.7239 19.5883 37.0586 20.6543C35.866 17.9094 33.8267 15.6179 31.2389 14.1147C32.5734 14.172 33.9082 14.0057 35.1878 13.6226C35.8932 14.2849 36.8193 14.6617 37.7866 14.68C39.1165 15.0216 39.4296 16.5548 39.2344 17.5797Z" />
                                <path d="M10.9853 41.4933V37.6298C11.0404 37.331 11.1705 37.0511 11.3635 36.8164C11.4893 36.6355 11.6008 36.4452 11.697 36.247C11.7419 36.149 11.7461 36.0371 11.7086 35.9359C11.6711 35.8348 11.5949 35.7527 11.4969 35.7077C11.3988 35.6628 11.2869 35.6586 11.1858 35.6961C11.0847 35.7336 11.0026 35.8098 10.9576 35.9078L10.9568 35.9095C10.8788 36.0686 10.7876 36.221 10.6843 36.365C10.3958 36.7241 10.2178 37.1592 10.1719 37.6176V41.9C10.1719 42.0079 10.2147 42.1113 10.291 42.1876C10.3673 42.2639 10.4707 42.3067 10.5786 42.3067H10.8673C11.0079 42.309 11.1455 42.3476 11.2666 42.4189C11.3878 42.4902 11.4884 42.5916 11.5587 42.7134H10.5786C10.4707 42.7134 10.3673 42.7562 10.291 42.8325C10.2147 42.9088 10.1719 43.0122 10.1719 43.1201C10.1719 43.2279 10.2147 43.3314 10.291 43.4077C10.3673 43.4839 10.4707 43.5268 10.5786 43.5268H12.0589C12.1668 43.5268 12.2702 43.4839 12.3465 43.4077C12.4228 43.3314 12.4656 43.2279 12.4656 43.1201C12.4691 42.2759 11.8261 41.5693 10.9853 41.4933ZM26.1304 40.7653L25.7237 36.2917C25.7134 36.1852 25.6615 36.087 25.5793 36.0185C25.4971 35.95 25.3911 35.9167 25.2845 35.9257C25.1772 35.935 25.078 35.9865 25.0087 36.0688C24.9393 36.1512 24.9054 36.2577 24.9144 36.365L25.3211 41.1842C25.3303 41.2856 25.3771 41.3799 25.4524 41.4484C25.5277 41.5169 25.626 41.5547 25.7278 41.5543H26.0125C26.1682 41.5537 26.3211 41.5958 26.4545 41.6761C26.5879 41.7565 26.6966 41.8719 26.7689 42.0098H25.7603C25.7052 42.0097 25.6506 42.0209 25.5998 42.0426C25.5491 42.0643 25.5034 42.0961 25.4653 42.136C25.4273 42.176 25.3977 42.2232 25.3785 42.275C25.3593 42.3267 25.3509 42.3817 25.3536 42.4368C25.3536 42.5447 25.3965 42.6481 25.4727 42.7244C25.549 42.8007 25.6525 42.8435 25.7603 42.8435H27.3139C27.4217 42.8435 27.5252 42.8007 27.6014 42.7244C27.6777 42.6481 27.7206 42.5447 27.7206 42.4368C27.7175 41.5462 27.0198 40.8128 26.1304 40.7653ZM30.3478 24.6889C30.3272 24.6396 30.2983 24.5942 30.2624 24.5547C30.2052 24.4982 30.1326 24.46 30.0537 24.4448C29.9748 24.4296 29.8932 24.4381 29.8191 24.4693C29.7688 24.4879 29.723 24.517 29.6849 24.5547C29.649 24.5942 29.6201 24.6396 29.5995 24.6889C29.5767 24.7371 29.5655 24.7901 29.5669 24.8434C29.5666 24.8969 29.5769 24.95 29.5971 24.9995C29.6174 25.0491 29.6472 25.0942 29.6849 25.1322C29.7248 25.1626 29.7705 25.1846 29.8191 25.1972C29.8909 25.2241 29.9689 25.2301 30.0439 25.2146C30.119 25.1991 30.1882 25.1626 30.2435 25.1095C30.2987 25.0563 30.3379 24.9886 30.3563 24.9142C30.3748 24.8398 30.3718 24.7617 30.3478 24.6889ZM29.3443 30.2625L29.3393 30.2605C29.2986 30.2605 28.3388 29.8782 27.2367 29.5488C27.2185 28.954 27.1394 28.3625 27.0008 27.7838C26.9766 27.6759 26.9104 27.5821 26.817 27.523C26.7236 27.4639 26.6105 27.4443 26.5026 27.4686C26.3948 27.4929 26.301 27.559 26.2419 27.6524C26.1828 27.7458 26.1632 27.8589 26.1874 27.9668C26.6348 29.8782 26.3501 31.5131 25.5164 31.8588C25.0202 32.0622 24.3248 31.8181 23.609 31.1878C22.7018 30.3281 21.9962 29.278 21.543 28.1132C20.4938 25.5795 20.7012 23.5054 21.4292 22.8262C21.5474 22.7317 21.697 22.6852 21.8481 22.6961L24.6949 23.1028C24.8016 23.1166 24.9095 23.0876 24.9949 23.022C25.0803 22.9565 25.1362 22.8597 25.1504 22.753C25.1655 22.6462 25.1375 22.5378 25.0727 22.4517C25.0079 22.3655 24.9115 22.3086 24.8047 22.2935L21.9253 21.8868H21.8684C21.5156 21.883 21.1744 22.0122 20.9127 22.2487C19.7821 23.2817 19.7455 25.8235 20.8273 28.4345C21.3272 29.7132 22.1051 30.8648 23.1047 31.806C23.6571 32.3599 24.3905 32.6963 25.1707 32.7535C25.4064 32.7546 25.64 32.709 25.858 32.6193C26.6145 32.3062 27.0781 31.505 27.2082 30.3988C28.2006 30.7038 29.0505 31.0251 29.0587 31.0292C29.105 31.0484 29.1549 31.058 29.2051 31.0576C29.2866 31.0551 29.3654 31.0282 29.4314 30.9804C29.4974 30.9325 29.5475 30.8659 29.5752 30.7892C29.6144 30.6888 29.6121 30.5768 29.5688 30.478C29.5255 30.3793 29.4447 30.3017 29.3443 30.2625Z" />
                                <path d="M23.0569 27.2793C22.516 26.0999 22.5323 25.0343 22.8535 24.7171C22.892 24.6801 22.9228 24.6358 22.9441 24.5868C22.9654 24.5379 22.9769 24.4852 22.9779 24.4318C22.9789 24.3784 22.9693 24.3253 22.9498 24.2756C22.9302 24.2259 22.9011 24.1805 22.864 24.1421L22.8576 24.1356C22.7814 24.0598 22.6783 24.0173 22.5709 24.0173C22.4635 24.0173 22.3604 24.0598 22.2842 24.1356C21.6497 24.7578 21.6619 26.1894 22.3167 27.6168C22.3488 27.6882 22.4008 27.7488 22.4664 27.7913C22.532 27.8339 22.6086 27.8566 22.6868 27.8568C22.7449 27.8573 22.8022 27.8433 22.8535 27.8161C22.9516 27.7717 23.028 27.6903 23.0661 27.5897C23.1042 27.4891 23.1009 27.3775 23.0569 27.2793ZM9.08301 6.33065C7.00309 6.33065 5.31706 8.01669 5.31706 10.0966C5.31706 12.1765 7.00309 13.8626 9.08301 13.8626C11.162 13.8603 12.8467 12.1755 12.849 10.0966C12.849 8.01679 11.1629 6.33065 9.08301 6.33065ZM9.08301 13.0492C7.45238 13.0492 6.13044 11.7272 6.13044 10.0966C6.13044 8.46598 7.45238 7.14403 9.08301 7.14403C10.7136 7.14403 12.0356 8.46598 12.0356 10.0966C12.0356 11.7273 10.7137 13.0492 9.08301 13.0492ZM5.69762 6.13371L5.69528 6.13137L4.8819 5.31799C4.80535 5.24383 4.70277 5.20266 4.5962 5.20331C4.48962 5.20397 4.38756 5.2464 4.31193 5.3215C4.2363 5.39659 4.19315 5.49836 4.19174 5.60492C4.19033 5.71149 4.23078 5.81436 4.3044 5.89143L5.11778 6.70887C5.15539 6.7468 5.2001 6.77694 5.24936 6.79758C5.29862 6.81822 5.35146 6.82895 5.40487 6.82917C5.45828 6.82939 5.51121 6.81908 5.56064 6.79884C5.61006 6.7786 5.65502 6.74883 5.69294 6.71121L5.69528 6.70887C5.7332 6.67126 5.76334 6.62655 5.78398 6.57729C5.80462 6.52803 5.81536 6.47519 5.81557 6.42178C5.81579 6.36837 5.80548 6.31544 5.78525 6.26601C5.76501 6.21659 5.73523 6.17163 5.69762 6.13371ZM13.8884 14.3041L13.886 14.3018L13.0726 13.4884C13.0347 13.4505 12.9897 13.4204 12.9402 13.3999C12.8906 13.3794 12.8375 13.3688 12.7839 13.3688C12.7303 13.3688 12.6772 13.3794 12.6276 13.3999C12.5781 13.4204 12.5331 13.4505 12.4951 13.4884C12.4572 13.5263 12.4271 13.5713 12.4066 13.6209C12.3861 13.6704 12.3755 13.7235 12.3755 13.7772C12.3755 13.8308 12.3861 13.8839 12.4066 13.9334C12.4271 13.983 12.4572 14.028 12.4951 14.0659L13.3085 14.8793C13.3461 14.9172 13.3908 14.9473 13.4401 14.968C13.4894 14.9886 13.5422 14.9994 13.5956 14.9996C13.649 14.9998 13.702 14.9895 13.7514 14.9693C13.8008 14.949 13.8458 14.9192 13.8837 14.8816L13.886 14.8793C13.9239 14.8417 13.9541 14.797 13.9747 14.7477C13.9954 14.6984 14.0061 14.6456 14.0063 14.5922C14.0065 14.5388 13.9962 14.4859 13.976 14.4364C13.9558 14.387 13.926 14.342 13.8884 14.3041ZM5.69121 13.4884C5.61462 13.4118 5.51076 13.3688 5.40246 13.3688C5.29416 13.3688 5.1903 13.4118 5.11371 13.4884L4.30033 14.3018C4.26241 14.3394 4.23227 14.3841 4.21163 14.4334C4.19099 14.4826 4.18025 14.5355 4.18004 14.5889C4.17982 14.6423 4.19012 14.6952 4.21036 14.7446C4.2306 14.7941 4.26038 14.839 4.29799 14.8769L4.30033 14.8793C4.33833 14.917 4.3834 14.9468 4.43295 14.967C4.4825 14.9873 4.53556 14.9975 4.58908 14.9972C4.6426 14.9975 4.69566 14.9873 4.74521 14.967C4.79476 14.9468 4.83983 14.917 4.87783 14.8793L5.69121 14.0659C5.72915 14.028 5.75924 13.983 5.77977 13.9334C5.80031 13.8839 5.81087 13.8308 5.81087 13.7772C5.81087 13.7235 5.80031 13.6704 5.77977 13.6209C5.75924 13.5713 5.72915 13.5263 5.69121 13.4884ZM13.7686 5.32796C13.7019 5.28003 13.6222 5.25343 13.5401 5.25165C13.458 5.24987 13.3772 5.273 13.3085 5.31799L12.4951 6.13137C12.4572 6.16899 12.4271 6.2137 12.4064 6.26296C12.3858 6.31222 12.3751 6.36506 12.3748 6.41847C12.3746 6.47188 12.3849 6.52481 12.4052 6.57424C12.4254 6.62366 12.4552 6.66862 12.4928 6.70654L12.4951 6.70887C12.5331 6.74657 12.5782 6.77639 12.6278 6.79663C12.6773 6.81687 12.7304 6.82712 12.7839 6.82681C12.8835 6.82122 12.9776 6.77925 13.0482 6.70887L13.8616 5.89549C13.9245 5.80789 13.9501 5.69889 13.9326 5.59246C13.9152 5.48603 13.8562 5.39088 13.7686 5.32796ZM3.89364 9.68992H2.73457C2.62671 9.68992 2.52327 9.73276 2.447 9.80903C2.37073 9.8853 2.32788 9.98875 2.32788 10.0966C2.32788 10.2045 2.37073 10.3079 2.447 10.3842C2.52327 10.4605 2.62671 10.5033 2.73457 10.5033H3.89364C4.0015 10.5033 4.10494 10.4605 4.18121 10.3842C4.25748 10.3079 4.30033 10.2045 4.30033 10.0966C4.30033 9.98875 4.25748 9.8853 4.18121 9.80903C4.10494 9.73276 4.0015 9.68992 3.89364 9.68992ZM15.4396 9.68992H14.2846C14.1767 9.68992 14.0733 9.73276 13.997 9.80903C13.9207 9.8853 13.8779 9.98875 13.8779 10.0966C13.8779 10.2045 13.9207 10.3079 13.997 10.3842C14.0733 10.4605 14.1767 10.5033 14.2846 10.5033H15.4396C15.5474 10.5033 15.6509 10.4605 15.7272 10.3842C15.8034 10.3079 15.8463 10.2045 15.8463 10.0966C15.8463 9.98875 15.8034 9.8853 15.7272 9.80903C15.6509 9.73276 15.5474 9.68992 15.4396 9.68992ZM9.08301 3.33334C8.97515 3.33334 8.87171 3.37619 8.79544 3.45246C8.71917 3.52873 8.67632 3.63217 8.67632 3.74003V4.8991C8.67632 5.00696 8.71917 5.11041 8.79544 5.18668C8.87171 5.26294 8.97515 5.30579 9.08301 5.30579C9.19087 5.30579 9.29431 5.26294 9.37058 5.18668C9.44685 5.11041 9.4897 5.00696 9.4897 4.8991V3.74003C9.4897 3.63217 9.44685 3.52873 9.37058 3.45246C9.29431 3.37619 9.19087 3.33334 9.08301 3.33334ZM9.08301 14.8915C8.97515 14.8915 8.87171 14.9343 8.79544 15.0106C8.71917 15.0869 8.67632 15.1903 8.67632 15.2982V16.4532C8.67632 16.561 8.71917 16.6645 8.79544 16.7408C8.87171 16.817 8.97515 16.8599 9.08301 16.8599C9.19087 16.8599 9.29431 16.817 9.37058 16.7408C9.44685 16.6645 9.4897 16.561 9.4897 16.4532V15.2982C9.4897 15.1903 9.44685 15.0869 9.37058 15.0106C9.29431 14.9343 9.19087 14.8915 9.08301 14.8915ZM39.6702 29.9472H36.3394C36.2315 29.9472 36.1281 29.99 36.0518 30.0663C35.9756 30.1426 35.9327 30.246 35.9327 30.3539C35.9327 30.4617 35.9756 30.5652 36.0518 30.6414C36.1281 30.7177 36.2315 30.7606 36.3394 30.7606H39.6702C39.7781 30.7606 39.8815 30.7177 39.9578 30.6414C40.034 30.5652 40.0769 30.4617 40.0769 30.3539C40.0769 30.246 40.034 30.1426 39.9578 30.0663C39.8815 29.99 39.7781 29.9472 39.6702 29.9472ZM27.3759 44.1732H24.9765C24.8948 43.8496 24.7156 43.559 24.4631 43.3408C24.2107 43.1225 23.8972 42.9872 23.5653 42.9531C23.6019 41.8388 23.7157 38.7683 23.8784 37.6377C23.9475 37.1497 24.094 36.4502 24.2607 35.6408C24.3949 34.9942 24.5413 34.2825 24.6674 33.5504C24.6864 33.443 24.6622 33.3324 24.6 33.2427C24.5378 33.153 24.4427 33.0916 24.3353 33.0717C24.228 33.0519 24.1172 33.0752 24.0271 33.1367C23.9369 33.1982 23.8747 33.2928 23.854 33.4C23.7198 34.1279 23.5734 34.8356 23.4473 35.4782C23.2765 36.2915 23.1301 37.0114 23.0406 37.5116C22.8332 38.9472 22.7153 43.1565 22.7071 43.3354C22.7063 43.3896 22.7163 43.4435 22.7365 43.4937C22.7568 43.544 22.7869 43.5898 22.8251 43.6282C22.8624 43.6674 22.9072 43.6987 22.9568 43.7204C23.0063 43.742 23.0597 43.7536 23.1138 43.7543H23.3904C23.5302 43.7573 23.667 43.7963 23.7874 43.8675C23.9078 43.9387 24.0078 44.0398 24.0777 44.161H20.3158V38.0606C20.2794 37.2294 20.0948 36.4113 19.7708 35.6449C19.5459 35.2036 19.2974 34.7746 19.0266 34.3598C18.506 33.5464 18.0139 32.733 17.9001 31.8301C17.7374 30.5409 18.0587 29.4266 18.4288 28.3041C18.4576 28.203 18.4462 28.0945 18.3968 28.0016C18.3474 27.9087 18.2639 27.8385 18.1638 27.8059C18.0638 27.7733 17.955 27.7807 17.8603 27.8266C17.7656 27.8724 17.6924 27.9532 17.656 28.052C17.1695 29.2839 16.9773 30.6125 17.0948 31.9318C17.1872 32.5731 17.3997 33.1912 17.7211 33.7538C16.6198 34.1661 15.4524 34.3742 14.2764 34.3679C13.0784 34.3736 11.888 34.1784 10.7545 33.7904C10.8737 33.1615 10.935 32.5231 10.9375 31.883C10.9385 31.2432 10.88 30.6046 10.7626 29.9756C10.753 29.9222 10.733 29.8712 10.7037 29.8256C10.6743 29.7799 10.6363 29.7405 10.5918 29.7095C10.5018 29.647 10.3906 29.6227 10.2827 29.6422C10.1749 29.6616 10.0792 29.723 10.0166 29.813C9.95407 29.903 9.92984 30.0142 9.94926 30.122C10.0557 30.6975 10.1088 31.2815 10.1079 31.8667C10.1583 33.5072 9.69164 35.122 8.77392 36.4827C8.19924 37.2219 7.88217 38.1289 7.87107 39.0652V43.3476C7.87107 43.4555 7.91392 43.5589 7.99019 43.6352C8.06646 43.7115 8.1699 43.7543 8.27776 43.7543H8.55431C8.69418 43.7573 8.83092 43.7963 8.95131 43.8675C9.07171 43.9387 9.1717 44.0398 9.24162 44.161H5.4472V38.3453C5.44958 38.1064 5.40238 37.8695 5.30858 37.6497C5.21478 37.4299 5.07642 37.2319 4.90223 37.0683C3.7513 36.0191 3.03552 34.0425 3.03552 31.8586C3.03461 31.4507 3.06043 31.0431 3.11279 30.6385C3.1253 30.5314 3.09512 30.4237 3.02877 30.3386C2.96242 30.2536 2.86524 30.1981 2.75829 30.1842C2.65134 30.1703 2.54321 30.1991 2.45733 30.2644C2.37144 30.3296 2.31471 30.426 2.29941 30.5328C2.24564 30.9741 2.21847 31.4182 2.21807 31.8627C2.21807 34.2459 3.03146 36.4746 4.34913 37.6743C4.44039 37.761 4.51249 37.8659 4.56082 37.9822C4.60914 38.0984 4.63262 38.2235 4.62975 38.3494V44.1488L1.94966 44.1447C1.8418 44.1447 1.73835 44.1876 1.66209 44.2639C1.58582 44.3401 1.54297 44.4436 1.54297 44.5514C1.54297 44.6593 1.58582 44.7627 1.66209 44.839C1.73835 44.9153 1.8418 44.9581 1.94966 44.9581H9.75812C9.86598 44.9581 9.96942 44.9153 10.0457 44.839C10.122 44.7627 10.1648 44.6593 10.1648 44.5514C10.1683 43.7072 9.52529 43.0006 8.68445 42.9247V39.0652C8.69584 38.3049 8.95581 37.5693 9.42463 36.9707C9.95156 36.2439 10.3403 35.4265 10.5715 34.559C11.7659 34.9578 13.0172 35.1597 14.2764 35.1569C15.5961 35.1674 16.9058 34.9273 18.1359 34.4492C18.201 34.559 18.2701 34.6648 18.3393 34.7746C18.5928 35.1692 18.8263 35.5764 19.0388 35.9947C19.3116 36.6556 19.4684 37.3586 19.5024 38.0728V44.5799C19.5024 44.6878 19.5453 44.7912 19.6215 44.8675C19.6978 44.9437 19.8012 44.9866 19.9091 44.9866H27.3759C27.4838 44.9866 27.5872 44.9437 27.6635 44.8675C27.7398 44.7912 27.7826 44.6878 27.7826 44.5799C27.7826 44.472 27.7398 44.3686 27.6635 44.2923C27.5872 44.216 27.4838 44.1732 27.3759 44.1732ZM45.0914 44.1447H39.5157C39.4078 44.1447 39.3043 44.1876 39.2281 44.2639C39.1518 44.3401 39.109 44.4436 39.109 44.5514C39.109 44.6593 39.1518 44.7627 39.2281 44.839C39.3043 44.9153 39.4078 44.9581 39.5157 44.9581H45.0914C45.1992 44.9581 45.3027 44.9153 45.379 44.839C45.4552 44.7627 45.4981 44.6593 45.4981 44.5514C45.4981 44.4436 45.4552 44.3401 45.379 44.2639C45.3027 44.1876 45.1992 44.1447 45.0914 44.1447ZM36.9576 44.1447H36.1442C36.0363 44.1447 35.9329 44.1876 35.8566 44.2639C35.7803 44.3401 35.7375 44.4436 35.7375 44.5514C35.7375 44.6593 35.7803 44.7627 35.8566 44.839C35.9329 44.9153 36.0363 44.9581 36.1442 44.9581H36.9576C37.0654 44.9581 37.1689 44.9153 37.2451 44.839C37.3214 44.7627 37.3643 44.6593 37.3643 44.5514C37.3643 44.4436 37.3214 44.3401 37.2451 44.2639C37.1689 44.1876 37.0654 44.1447 36.9576 44.1447ZM46.405 35.8727C46.0318 35.8719 45.6645 35.9646 45.3363 36.1422C45.0081 36.3198 44.7296 36.5766 44.5261 36.8894C44.3235 36.5736 44.0451 36.3135 43.7161 36.1331C43.3872 35.9526 43.0183 35.8575 42.6431 35.8564C42.5352 35.8564 42.4318 35.8992 42.3555 35.9755C42.2793 36.0518 42.2364 36.1552 42.2364 36.2631C42.2364 36.3709 42.2793 36.4744 42.3555 36.5506C42.4318 36.6269 42.5352 36.6698 42.6431 36.6698C43.4014 36.6733 44.0237 37.2706 44.0584 38.0281H39.7922C39.7374 38.0281 39.6832 38.0391 39.6327 38.0605C39.5823 38.082 39.5367 38.1134 39.4987 38.1529C39.4607 38.1924 39.4311 38.2392 39.4117 38.2904C39.3922 38.3417 39.3833 38.3963 39.3855 38.4511C39.3855 38.5589 39.4284 38.6624 39.5046 38.7386C39.5809 38.8149 39.6843 38.8578 39.7922 38.8578H44.8514C44.9593 38.8578 45.0627 38.8149 45.139 38.7386C45.2153 38.6624 45.2581 38.5589 45.2581 38.4511C45.2573 38.3682 45.2311 38.2875 45.1831 38.2199C45.1351 38.1524 45.0677 38.101 44.9897 38.0728C45.0074 37.3033 45.6352 36.6881 46.405 36.686C46.5128 36.686 46.6163 36.6432 46.6926 36.5669C46.7688 36.4906 46.8117 36.3872 46.8117 36.2793C46.8117 36.1715 46.7688 36.068 46.6926 35.9918C46.6163 35.9155 46.5128 35.8727 46.405 35.8727ZM47.4258 38.0444H46.8117C46.7038 38.0444 46.6004 38.0872 46.5241 38.1635C46.4478 38.2398 46.405 38.3432 46.405 38.4511C46.405 38.5589 46.4478 38.6624 46.5241 38.7386C46.6004 38.8149 46.7038 38.8578 46.8117 38.8578H47.4258C47.5336 38.8578 47.6371 38.8149 47.7134 38.7386C47.7896 38.6624 47.8325 38.5589 47.8325 38.4511C47.8325 38.3432 47.7896 38.2398 47.7134 38.1635C47.6371 38.0872 47.5336 38.0444 47.4258 38.0444ZM15.4233 46.8533H9.32296C9.2151 46.8533 9.11165 46.8961 9.03538 46.9724C8.95911 47.0487 8.91627 47.1521 8.91627 47.26C8.91627 47.3678 8.95911 47.4713 9.03538 47.5476C9.11165 47.6238 9.2151 47.6667 9.32296 47.6667H15.4233C15.5312 47.6667 15.6346 47.6238 15.7109 47.5476C15.7872 47.4713 15.83 47.3678 15.83 47.26C15.83 47.1521 15.7872 47.0487 15.7109 46.9724C15.6346 46.8961 15.5312 46.8533 15.4233 46.8533ZM43.0498 29.9472H42.0819C41.974 29.9472 41.8706 29.99 41.7943 30.0663C41.718 30.1426 41.6752 30.246 41.6752 30.3539C41.6752 30.4617 41.718 30.5652 41.7943 30.6414C41.8706 30.7177 41.974 30.7606 42.0819 30.7606H43.0498C43.1577 30.7606 43.2611 30.7177 43.3374 30.6414C43.4136 30.5652 43.4565 30.4617 43.4565 30.3539C43.4565 30.246 43.4136 30.1426 43.3374 30.0663C43.2611 29.99 43.1577 29.9472 43.0498 29.9472ZM45.4005 24.282H41.5166C41.4087 24.282 41.3053 24.3248 41.229 24.4011C41.1527 24.4774 41.1099 24.5808 41.1099 24.6887C41.1099 24.7965 41.1527 24.9 41.229 24.9762C41.3053 25.0525 41.4087 25.0954 41.5166 25.0954H45.4005C45.5083 25.0954 45.6118 25.0525 45.688 24.9762C45.7643 24.9 45.8072 24.7965 45.8072 24.6887C45.8072 24.5808 45.7643 24.4774 45.688 24.4011C45.6118 24.3248 45.5083 24.282 45.4005 24.282Z" />
                              </svg>
                            </div>
                            <h4>
                              <Link href="#">Wildlife </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="category-card">
                          <Link href="#" className="card-img">
                            <Image src={historical} alt="" />
                          </Link>
                          <div className="card-content">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="51"
                                height="51"
                                viewBox="0 0 51 51"
                              >
                                <g>
                                  <path d="M41.0158 10.1468C41.4585 10.1469 41.8913 10.0157 42.2594 9.76983C42.6275 9.52394 42.9145 9.1744 43.084 8.7654C43.2534 8.35641 43.2978 7.90635 43.2115 7.47214C43.1251 7.03793 42.9119 6.63908 42.5989 6.32604C42.2859 6.01299 41.887 5.79982 41.4528 5.71348C41.0186 5.62713 40.5685 5.6715 40.1595 5.84097C39.7505 6.01043 39.401 6.29739 39.1551 6.66553C38.9092 7.03368 38.778 7.46647 38.7781 7.90918C38.7788 8.50242 39.0148 9.07116 39.4343 9.49065C39.8538 9.91013 40.4225 10.1461 41.0158 10.1468ZM41.0158 6.73353C41.2483 6.73342 41.4757 6.80228 41.6691 6.9314C41.8625 7.06052 42.0132 7.2441 42.1023 7.45891C42.1914 7.67373 42.2147 7.91013 42.1694 8.13822C42.1241 8.36631 42.0122 8.57584 41.8478 8.74031C41.6834 8.90478 41.4739 9.01681 41.2458 9.06221C41.0178 9.10762 40.7814 9.08437 40.5665 8.9954C40.3517 8.90643 40.168 8.75575 40.0388 8.5624C39.9096 8.36905 39.8406 8.14173 39.8406 7.90918C39.8405 7.59728 39.9642 7.29808 40.1845 7.07734C40.4049 6.85659 40.7038 6.73236 41.0158 6.73193V6.73353ZM4.91785 5.66943C4.47518 5.66943 4.04245 5.8007 3.67439 6.04663C3.30633 6.29256 3.01946 6.64212 2.85006 7.05108C2.68066 7.46005 2.63633 7.91007 2.72269 8.34423C2.80905 8.77839 3.02222 9.17719 3.33523 9.49021C3.64824 9.80322 4.04704 10.0164 4.4812 10.1027C4.91536 10.1891 5.36538 10.1448 5.77435 9.97538C6.18332 9.80598 6.53287 9.51911 6.7788 9.15104C7.02474 8.78298 7.156 8.35026 7.156 7.90759C7.1553 7.31421 6.91927 6.74533 6.49968 6.32575C6.0801 5.90617 5.51123 5.67014 4.91785 5.66943ZM4.91785 9.08272C4.6853 9.08272 4.45798 9.01375 4.26463 8.88454C4.07128 8.75534 3.9206 8.57169 3.83163 8.35684C3.74266 8.14199 3.71941 7.90557 3.76482 7.6775C3.81022 7.44943 3.92225 7.23995 4.08672 7.07556C4.25119 6.91116 4.46072 6.79923 4.68881 6.75393C4.9169 6.70862 5.1533 6.73198 5.36812 6.82105C5.58293 6.91011 5.76651 7.06088 5.89563 7.25429C6.02474 7.44769 6.09361 7.67504 6.0935 7.90759C6.0935 8.21949 5.96967 8.51863 5.74922 8.73928C5.52878 8.95993 5.22975 9.08403 4.91785 9.08431V9.08272ZM16.4587 7.61434H23.9786C24.1195 7.61434 24.2546 7.55837 24.3542 7.45874C24.4538 7.35911 24.5098 7.22399 24.5098 7.08309C24.5098 6.94219 24.4538 6.80707 24.3542 6.70744C24.2546 6.60781 24.1195 6.55184 23.9786 6.55184H16.4587C16.3178 6.55184 16.1827 6.60781 16.0831 6.70744C15.9834 6.80707 15.9275 6.94219 15.9275 7.08309C15.9275 7.22399 15.9834 7.35911 16.0831 7.45874C16.1827 7.55837 16.3178 7.61434 16.4587 7.61434Z" />
                                  <path d="M49.0668 43.5042H47.7971C47.702 43.3406 47.5716 43.2004 47.4153 43.0938C47.2591 42.9871 47.0809 42.9168 46.894 42.8879V24.5067C47.0809 24.4757 47.2587 24.404 47.4148 24.2966C47.5709 24.1891 47.7014 24.0487 47.7971 23.8851H49.0668C49.5796 23.8851 50.0715 23.6814 50.4342 23.3187C50.7968 22.9561 51.0005 22.4642 51.0005 21.9514C51.0005 21.4385 50.7968 20.9466 50.4342 20.584C50.0715 20.2213 49.5796 20.0176 49.0668 20.0176H47.7971C47.6813 19.8251 47.5177 19.6658 47.3223 19.5551C47.1268 19.4443 46.9061 19.3859 46.6815 19.3854H33.8199V7.61292H36.1043C36.0454 8.59582 36.2831 9.57375 36.7866 10.42C37.29 11.2662 38.036 11.9418 38.9279 12.3591C39.8197 12.7764 40.8164 12.9162 41.7886 12.7605C42.7609 12.6047 43.664 12.1606 44.3809 11.4856C45.0978 10.8106 45.5954 9.93585 45.8094 8.97471C46.0233 8.01356 45.9437 7.01032 45.5808 6.09497C45.2178 5.17962 44.5884 4.39436 43.774 3.84093C42.9596 3.2875 41.9977 2.99142 41.013 2.99104H4.9199C3.93546 2.99066 2.97359 3.28596 2.15895 3.83868C1.34432 4.3914 0.714468 5.17606 0.351036 6.09096C-0.0123956 7.00587 -0.0926565 8.00884 0.120655 8.96989C0.333967 9.93095 0.831016 10.8058 1.54739 11.481C2.26376 12.1563 3.16643 12.6008 4.13841 12.7569C5.11038 12.9131 6.10686 12.7737 6.9987 12.3569C7.89054 11.9401 8.63663 11.265 9.14026 10.4191C9.6439 9.57325 9.88187 8.59562 9.82334 7.61292H12.1077V41.427C12.1077 41.5679 12.1637 41.703 12.2633 41.8026C12.3629 41.9023 12.4981 41.9582 12.639 41.9582H25.6121V42.8879C25.4251 42.9168 25.247 42.9871 25.0907 43.0938C24.9345 43.2004 24.804 43.3406 24.709 43.5042H23.4393C22.9264 43.5042 22.4346 43.7079 22.0719 44.0706C21.7093 44.4332 21.5055 44.9251 21.5055 45.4379C21.5055 45.9508 21.7093 46.4426 22.0719 46.8053C22.4346 47.1679 22.9264 47.3717 23.4393 47.3717H24.7037C24.819 47.5662 24.983 47.7273 25.1796 47.8391C25.3762 47.9509 25.5985 48.0095 25.8246 48.0092H46.6815C46.9076 48.0095 47.1299 47.9509 47.3265 47.8391C47.523 47.7273 47.6871 47.5662 47.8024 47.3717H49.0668C49.5796 47.3717 50.0715 47.1679 50.4342 46.8053C50.7968 46.4426 51.0005 45.9508 51.0005 45.4379C51.0005 44.9251 50.7968 44.4332 50.4342 44.0706C50.0715 43.7079 49.5796 43.5042 49.0668 43.5042ZM46.894 46.3092V46.8085C46.8754 46.8494 46.8456 46.8842 46.8079 46.9087C46.7702 46.9331 46.7264 46.9463 46.6815 46.9467H25.8246C25.7797 46.9463 25.7358 46.9331 25.6982 46.9087C25.6605 46.8842 25.6306 46.8494 25.6121 46.8085V46.3092H25.5908V44.5667H25.6121V44.0673C25.6306 44.0264 25.6605 43.9917 25.6982 43.9672C25.7358 43.9427 25.7797 43.9295 25.8246 43.9292H46.6815C46.7264 43.9295 46.7702 43.9427 46.8079 43.9672C46.8456 43.9917 46.8754 44.0264 46.894 44.0673V44.5667H46.9152V46.3092H46.894ZM23.4393 21.0801H24.5283V22.8226H23.4393C23.2082 22.8226 22.9866 22.7308 22.8232 22.5674C22.6598 22.404 22.568 22.1824 22.568 21.9514C22.568 21.7203 22.6598 21.4987 22.8232 21.3353C22.9866 21.1719 23.2082 21.0801 23.4393 21.0801ZM25.6121 21.0801V20.5807C25.6309 20.5405 25.661 20.5065 25.6987 20.4829C25.7364 20.4594 25.7801 20.4472 25.8246 20.4479H46.6815C46.7259 20.4472 46.7696 20.4594 46.8073 20.4829C46.845 20.5065 46.8751 20.5405 46.894 20.5807V21.0801H46.9152V22.8226H46.894V23.322C46.8763 23.3635 46.8467 23.3989 46.8088 23.4235C46.771 23.4481 46.7266 23.4608 46.6815 23.4601H25.8299C25.7839 23.4619 25.7384 23.4497 25.6995 23.425C25.6605 23.4003 25.6301 23.3644 25.6121 23.322V22.8226H25.5908V21.0801H25.6121ZM23.4924 23.8851H24.709C24.8046 24.0487 24.9352 24.1891 25.0912 24.2966C25.2473 24.404 25.4252 24.4757 25.6121 24.5067V35.7745H23.4924V23.8851ZM49.938 21.9514C49.9379 22.1824 49.8461 22.4039 49.6827 22.5673C49.5193 22.7306 49.2978 22.8225 49.0668 22.8226H47.9777V21.0801H49.0668C49.2976 21.0811 49.5186 21.1732 49.6818 21.3364C49.8449 21.4995 49.9371 21.7206 49.938 21.9514ZM9.21771 6.55042C9.13838 6.55024 9.06001 6.56783 8.98835 6.6019C8.91671 6.63597 8.8536 6.68565 8.80366 6.74731C8.75373 6.80896 8.71824 6.88102 8.69979 6.95818C8.68135 7.03535 8.68043 7.11566 8.69709 7.19323C8.84324 7.97182 8.74565 8.77653 8.41764 9.49762C8.08963 10.2187 7.54717 10.8211 6.86424 11.2225C6.18131 11.624 5.39116 11.805 4.60158 11.7408C3.81199 11.6767 3.06141 11.3706 2.4522 10.8642C1.843 10.3578 1.40483 9.67583 1.19747 8.91127C0.990112 8.14671 1.02365 7.33679 1.29351 6.59199C1.56338 5.84719 2.05643 5.20376 2.70541 4.74948C3.3544 4.29519 4.12772 4.05217 4.9199 4.05354H41.013C41.7746 4.05354 42.519 4.2793 43.1523 4.70228C43.7856 5.12526 44.2792 5.72648 44.5709 6.42995C44.8626 7.13342 44.9392 7.90757 44.791 8.65456C44.6428 9.40154 44.2765 10.0878 43.7384 10.6267C43.2002 11.1656 42.5145 11.5328 41.7677 11.682C41.0209 11.8312 40.2467 11.7557 39.5428 11.465C38.8389 11.1743 38.237 10.6815 37.8132 10.0488C37.3893 9.4161 37.1625 8.67196 37.1615 7.91042C37.1615 7.17464 37.3623 7.04767 37.1243 6.74698C37.0737 6.68597 37.0104 6.63675 36.9389 6.6028C36.8673 6.56884 36.7891 6.55096 36.7099 6.55042H28.2567C28.1158 6.55042 27.9806 6.60639 27.881 6.70602C27.7814 6.80565 27.7254 6.94077 27.7254 7.08167C27.7254 7.22256 27.7814 7.35769 27.881 7.45732C27.9806 7.55695 28.1158 7.61292 28.2567 7.61292H32.7574V19.3854H30.2924V12.3782C30.2924 12.2373 30.2364 12.1022 30.1368 12.0026C30.0372 11.903 29.9021 11.847 29.7612 11.847C29.6203 11.847 29.4851 11.903 29.3855 12.0026C29.2859 12.1022 29.2299 12.2373 29.2299 12.3782V19.3854H26.8924V12.3782C26.8924 12.2373 26.8364 12.1022 26.7368 12.0026C26.6372 11.903 26.5021 11.847 26.3612 11.847C26.2203 11.847 26.0851 11.903 25.9855 12.0026C25.8859 12.1022 25.8299 12.2373 25.8299 12.3782V19.3854C25.6043 19.3848 25.3825 19.4427 25.186 19.5536C24.9895 19.6644 24.8251 19.8243 24.709 20.0176H23.4924V12.3782C23.4924 12.2373 23.4364 12.1022 23.3368 12.0026C23.2372 11.903 23.1021 11.847 22.9612 11.847C22.8203 11.847 22.6851 11.903 22.5855 12.0026C22.4859 12.1022 22.4299 12.2373 22.4299 12.3782V20.3045C22.1479 20.477 21.9149 20.719 21.7533 21.0074C21.5916 21.2957 21.5068 21.6208 21.5068 21.9514C21.5068 22.2819 21.5916 22.607 21.7533 22.8953C21.9149 23.1837 22.1479 23.4257 22.4299 23.5982V35.7745H20.0961V12.3782C20.0961 12.2373 20.0402 12.1022 19.9405 12.0026C19.8409 11.903 19.7058 11.847 19.5649 11.847C19.424 11.847 19.2888 11.903 19.1892 12.0026C19.0896 12.1022 19.0336 12.2373 19.0336 12.3782V35.7745H16.6961V12.3782C16.6961 12.2373 16.6402 12.1022 16.5405 12.0026C16.4409 11.903 16.3058 11.847 16.1649 11.847C16.024 11.847 15.8888 11.903 15.7892 12.0026C15.6896 12.1022 15.6336 12.2373 15.6336 12.3782V35.7745H13.1702V7.08167C13.1702 6.94077 13.1142 6.80565 13.0146 6.70602C12.915 6.60639 12.7799 6.55042 12.639 6.55042H9.21771ZM13.1702 40.8957V36.837H25.6121V40.8957H13.1702ZM26.6746 24.5226H45.8315V42.8667H26.6746V24.5226ZM22.568 45.4379C22.569 45.2071 22.6611 44.9861 22.8243 44.8229C22.9875 44.6598 23.2085 44.5676 23.4393 44.5667H24.5283V46.3092H23.4393C23.2083 46.309 22.9867 46.2172 22.8234 46.0538C22.66 45.8905 22.5682 45.6689 22.568 45.4379ZM49.0668 46.3092H47.9777V44.5667H49.0668C49.2979 44.5667 49.5195 44.6585 49.6828 44.8219C49.8462 44.9852 49.938 45.2068 49.938 45.4379C49.938 45.669 49.8462 45.8906 49.6828 46.054C49.5195 46.2174 49.2979 46.3092 49.0668 46.3092Z" />
                                  <path d="M29.2274 28.4645C29.4075 28.5846 28.4379 28.5495 42.9921 28.5495C43.133 28.5495 43.2681 28.4935 43.3677 28.3939C43.4673 28.2943 43.5233 28.1592 43.5233 28.0183C43.5233 27.8774 43.4673 27.7422 43.3677 27.6426C43.2681 27.543 43.133 27.487 42.9921 27.487C28.499 27.487 29.4138 27.4477 29.2274 27.572C29.1528 27.6202 29.0915 27.6862 29.0491 27.7642C29.0066 27.8422 28.9844 27.9295 28.9844 28.0183C28.9844 28.107 29.0066 28.1944 29.0491 28.2723C29.0915 28.3503 29.1528 28.4164 29.2274 28.4645ZM29.2274 32.1992C29.4075 32.3193 28.4379 32.2842 42.9921 32.2842C43.133 32.2842 43.2681 32.2282 43.3677 32.1286C43.4673 32.029 43.5233 31.8938 43.5233 31.7529C43.5233 31.6121 43.4673 31.4769 43.3677 31.3773C43.2681 31.2777 43.133 31.2217 42.9921 31.2217C28.499 31.2217 29.4138 31.1824 29.2274 31.3067C29.1528 31.3549 29.0915 31.4209 29.0491 31.4989C29.0066 31.5768 28.9844 31.6642 28.9844 31.7529C28.9844 31.8417 29.0066 31.9291 29.0491 32.007C29.0915 32.085 29.1528 32.151 29.2274 32.1992ZM29.2274 35.9286C29.4138 36.0529 28.4666 36.0136 42.9921 36.0136C43.133 36.0136 43.2681 35.9576 43.3677 35.858C43.4673 35.7583 43.5233 35.6232 43.5233 35.4823C43.5233 35.3414 43.4673 35.2063 43.3677 35.1067C43.2681 35.007 43.133 34.9511 42.9921 34.9511C28.499 34.9511 29.4138 34.9118 29.2274 35.0361C29.1528 35.0842 29.0915 35.1503 29.0491 35.2283C29.0066 35.3062 28.9844 35.3936 28.9844 35.4823C28.9844 35.5711 29.0066 35.6584 29.0491 35.7364C29.0915 35.8143 29.1528 35.8804 29.2274 35.9286ZM38.8696 38.6804H33.6314C33.4905 38.6804 33.3554 38.7364 33.2558 38.836C33.1562 38.9357 33.1002 39.0708 33.1002 39.2117C33.1002 39.3526 33.1562 39.4877 33.2558 39.5873C33.3554 39.687 33.4905 39.7429 33.6314 39.7429H38.8696C39.0105 39.7429 39.1456 39.687 39.2452 39.5873C39.3448 39.4877 39.4008 39.3526 39.4008 39.2117C39.4008 39.0708 39.3448 38.9357 39.2452 38.836C39.1456 38.7364 39.0105 38.6804 38.8696 38.6804Z" />
                                </g>
                              </svg>
                            </div>
                            <h4>
                              <Link href="#">Historical</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="category-card">
                          <Link href="#" className="card-img">
                            <Image src={honeymoon} alt="" />
                          </Link>
                          <div className="card-content">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="51"
                                height="51"
                                viewBox="0 0 51 51"
                              >
                                <g>
                                  <path d="M15.944 6.69113C16.1658 6.69113 16.3786 6.60301 16.5354 6.44615C16.6923 6.28929 16.7804 6.07655 16.7804 5.85473C16.7804 5.6329 16.6923 5.42016 16.5354 5.2633C16.3786 5.10645 16.1658 5.01833 15.944 5.01833C15.7222 5.01833 15.5094 5.10645 15.3526 5.2633C15.1957 5.42016 15.1076 5.6329 15.1076 5.85473C15.1076 6.07655 15.1957 6.28929 15.3526 6.44615C15.5094 6.60301 15.7222 6.69113 15.944 6.69113ZM44.2694 10.4396C44.4912 10.4396 44.704 10.3515 44.8608 10.1946C45.0177 10.0378 45.1058 9.82505 45.1058 9.60323C45.1058 9.14127 44.7314 8.76683 44.2694 8.76683C43.8075 8.76683 43.433 9.14127 43.433 9.60323C43.433 9.82505 43.5211 10.0378 43.678 10.1946C43.8348 10.3515 44.0476 10.4396 44.2694 10.4396ZM3.96921 28.3865C3.50725 28.3865 3.13281 28.761 3.13281 29.2229C3.13281 29.6849 3.50725 30.0593 3.96921 30.0593C4.43117 30.0593 4.80561 29.6849 4.80561 29.2229C4.80561 28.761 4.43117 28.3865 3.96921 28.3865ZM44.2694 15.9578C44.7314 15.9578 45.1058 15.5834 45.1058 15.1214C45.1058 14.6595 44.7314 14.285 44.2694 14.285C43.8075 14.285 43.433 14.6595 43.433 15.1214C43.433 15.5834 43.8075 15.9578 44.2694 15.9578ZM41.5103 13.1987C41.7321 13.1987 41.9449 13.1106 42.1017 12.9538C42.2586 12.7969 42.3467 12.5842 42.3467 12.3623C42.3467 11.9004 41.9723 11.5259 41.5103 11.5259C41.0484 11.5259 40.6739 11.9004 40.6739 12.3623C40.6739 12.5842 40.762 12.7969 40.9189 12.9538C41.0757 13.1106 41.2885 13.1987 41.5103 13.1987ZM6.72831 31.1456C6.26635 31.1456 5.89191 31.5201 5.89191 31.982C5.89191 32.444 6.26635 32.8184 6.72831 32.8184C7.19027 32.8184 7.56471 32.444 7.56471 31.982C7.56471 31.5201 7.19027 31.1456 6.72831 31.1456ZM6.72831 25.6274C6.50649 25.6274 6.29374 25.7155 6.13689 25.8724C5.98003 26.0293 5.89191 26.242 5.89191 26.4638C5.89191 26.9258 6.26635 27.3002 6.72831 27.3002C7.19027 27.3002 7.56471 26.9258 7.56471 26.4638C7.56471 26.354 7.54308 26.2452 7.50105 26.1437C7.45901 26.0423 7.3974 25.9501 7.31974 25.8724C7.24207 25.7947 7.14987 25.7331 7.04839 25.6911C6.94691 25.6491 6.83815 25.6274 6.72831 25.6274ZM44.7896 21.9197L36.5072 21.5423L33.5186 18.5435C33.0698 18.0947 32.5496 17.7173 31.9784 17.4215L28.8062 15.8201L29.0204 15.0959C29.4488 14.9123 29.8772 14.6573 30.2546 14.3105C30.4484 14.1371 30.632 13.9433 30.7952 13.7189V14.9735C30.7952 15.3203 31.0706 15.5957 31.4174 15.5957C31.7642 15.5957 32.0396 15.3203 32.0396 14.9735V10.8833L32.8964 9.65933C32.9678 9.55733 33.0086 9.42473 33.0086 9.30233C33.0086 9.21053 32.9882 8.70053 32.6108 7.91513C32.3762 7.43573 32.0192 6.85433 31.448 6.19133L31.9172 5.11013C31.958 5.01833 31.9784 4.91633 31.9682 4.81433L31.6214 0.550726C31.601 0.285526 31.4174 0.0713257 31.1624 -7.43177e-05C30.9074 -0.0714743 30.6422 0.0305257 30.4892 0.244726L28.0922 3.66173C28.031 3.75353 27.9902 3.86573 27.98 3.97793L27.8984 5.08973C26.9906 5.34473 26.3174 5.67113 25.8278 5.98733C25.0628 6.47693 24.7466 6.91553 24.7058 6.98693C24.6344 7.09913 24.5936 7.22153 24.6038 7.35413L24.6956 9.23093L24.3386 10.5569C24.2672 10.8323 24.2468 11.1077 24.2468 11.4545C24.2468 11.5565 24.2468 11.6585 24.257 11.7503L24.2571 11.7508C24.208 11.7386 24.1577 11.7324 24.1071 11.7322C23.9396 11.7322 23.779 11.7987 23.6605 11.9171C23.5421 12.0356 23.4756 12.1962 23.4756 12.3637C23.4756 12.5311 23.5421 12.6918 23.6605 12.8102C23.779 12.9286 23.9396 12.9951 24.1071 12.9951C24.2431 12.9952 24.3755 12.951 24.4843 12.8693C24.6206 13.2593 24.812 13.6279 25.0527 13.9637C25.0731 13.9943 25.0935 14.0147 25.1139 14.0453L24.9609 14.8103L21.3705 14.9327C20.7177 14.9531 20.0649 15.0755 19.4325 15.2999L15.2301 16.8605L11.3439 15.1367C11.2725 14.8715 11.1603 14.3717 11.1603 13.7291C11.1603 12.9029 11.3337 11.8523 11.9661 10.6793C12.0477 10.5365 12.0681 10.3631 12.0171 10.1999C11.9661 10.0367 11.8641 9.90413 11.7213 9.83273L11.2113 9.55733C11.0481 9.46553 10.8543 9.45533 10.6911 9.52673C10.1709 9.73073 9.70171 10.0265 9.29371 10.3835C8.68171 10.9139 8.22271 11.5769 7.89631 12.2909C7.66171 12.8315 7.49851 13.3925 7.43731 13.9637C7.21291 14.0147 7.00891 14.0963 6.82531 14.1881C6.60091 14.3105 6.40711 14.4635 6.26431 14.6267C6.03991 14.8613 5.88691 15.1061 5.78491 15.2897C5.68291 15.4733 5.64211 15.6059 5.63191 15.6365C5.54011 15.9221 5.66251 16.2281 5.91751 16.3811L9.34471 18.2783L9.11012 19.0433C9.00811 19.3697 9.19171 19.7165 9.51812 19.8185C9.84451 19.9205 10.1913 19.7369 10.2933 19.4105L10.4565 18.8903L14.8629 21.3281C15.0159 21.4097 15.1995 21.4301 15.3627 21.3791L16.3623 21.0425L14.4854 43.2581C14.465 43.5437 14.6384 43.8191 14.924 43.9007C14.9546 43.9109 16.658 44.4413 19.0958 44.7269C19.4528 45.3899 19.8812 46.0223 20.3708 46.6241C20.432 46.6955 20.5034 46.7567 20.585 46.7873C20.6054 46.7975 21.0746 47.0117 21.8294 47.2259C22.064 47.2871 22.319 47.3585 22.5944 47.4197L22.6964 47.6543L21.2276 48.7355C21.0644 48.8579 20.9318 49.0211 20.84 49.1945C20.7584 49.3679 20.7176 49.5617 20.7176 49.7351C20.7176 50.0513 20.84 50.3573 21.0542 50.6021C21.1664 50.7245 21.299 50.8265 21.4622 50.8979C21.6152 50.9693 21.7988 51.0101 21.9824 51.0101H25.2566C25.736 51.0101 26.1848 50.8163 26.501 50.4899C26.8172 50.1737 27.0212 49.7249 27.0212 49.2455V48.9293C27.0212 48.8681 27.011 48.7967 26.9906 48.7355L26.5928 47.5217C27.2864 47.3993 28.0106 47.1851 28.7348 46.8587H28.796L28.7144 48.3581L28.2962 48.7865C28.1738 48.9089 28.082 49.0619 28.0208 49.2149C27.9596 49.3679 27.929 49.5311 27.929 49.6943C27.929 50.0309 28.0616 50.3573 28.286 50.6021C28.3982 50.7245 28.541 50.8265 28.7042 50.8979C28.8674 50.9693 29.051 51.0101 29.2448 51.0101H30.6626C31.4378 51.0101 31.8623 50.5463 32.0192 50.1635L33.335 46.4405C33.4064 46.2467 33.3554 46.0427 33.2738 45.8795C33.1718 45.6755 32.7842 44.9309 32.2538 43.8803L33.8552 24.9695L34.61 25.4999C34.712 25.5713 34.8446 25.6121 34.9772 25.6121L39.1184 25.5917V26.0711C39.1184 26.4179 39.3938 26.6933 39.7406 26.6933C40.0874 26.6933 40.3628 26.4179 40.3628 26.0711V25.5917H40.5872C40.7504 25.7651 41.036 26.0813 41.3114 26.5403C41.5256 26.8973 41.7398 27.3461 41.903 27.8867C42.0662 28.4273 42.1682 29.0495 42.1682 29.7737C42.1682 30.1377 42.3466 30.4469 42.7904 30.4469H43.3616C43.5452 30.4469 43.7186 30.3653 43.841 30.2225C44.249 29.7431 44.5346 29.2025 44.7284 28.6313C44.9222 28.0601 45.0038 27.4787 45.0038 26.8871C45.0038 26.1527 44.861 25.4285 44.606 24.7655C44.6774 24.7043 44.7386 24.6431 44.7998 24.5819C45.0752 24.2759 45.2384 23.9393 45.3302 23.6333C45.422 23.3273 45.4424 23.0417 45.4424 22.8275C45.4424 22.4746 45.3383 21.9473 44.7896 21.9197ZM9.91581 13.7291C9.91581 14.6165 10.079 15.2693 10.181 15.5957L9.73221 17.0543L7.08021 15.5855C7.21281 15.3509 7.55961 15.1265 7.99821 15.1571C8.17161 15.1673 8.33481 15.1061 8.45721 14.9837C8.57961 14.8715 8.65101 14.7083 8.65101 14.5349C8.66121 13.7699 8.89581 12.9437 9.33441 12.2501C9.54861 11.9033 9.81381 11.5871 10.1198 11.3117C10.2116 11.2301 10.3136 11.1485 10.4258 11.0771C10.0382 12.0767 9.91581 12.9845 9.91581 13.7291ZM29.204 4.26353L30.5096 2.39693L30.7034 4.78373L30.4994 5.24273C30.377 5.13053 30.2546 5.01833 30.122 4.89593C29.9588 4.76333 29.816 4.74293 29.6324 4.76333C29.4692 4.78373 29.3162 4.81433 29.1632 4.83473L29.204 4.26353ZM26.5826 6.99713C27.164 6.65033 28.0922 6.24233 29.5304 6.02813C30.6626 7.04813 31.2134 7.89473 31.499 8.46593C31.6418 8.77193 31.7132 8.99633 31.7438 9.14933V9.15953L31.142 10.0265C30.989 9.91433 30.8156 9.77153 30.632 9.59813C30.1934 9.20033 29.7242 8.62913 29.459 7.95593C29.306 7.55813 28.8674 7.44593 28.5206 7.72133C28.235 7.95593 27.9009 8.14554 27.5516 8.28233C27.1052 8.45726 26.4841 8.6178 25.9808 8.66993L25.9196 7.57853C25.9808 7.42553 26.2154 7.22153 26.5826 6.99713ZM25.5524 10.8629L25.8176 9.90413C26.0522 9.88373 26.3582 9.84293 26.705 9.78173C27.0926 9.70013 27.521 9.58793 27.9596 9.41453C28.184 9.32273 28.4084 9.22073 28.6226 9.09833C28.7552 9.31253 28.8878 9.51653 29.0408 9.71033C29.4692 10.2611 29.9384 10.6691 30.2954 10.9547C30.377 11.0159 30.4586 11.0771 30.53 11.1281L30.2444 12.1787C29.9894 12.8621 29.5508 13.3517 29.0612 13.6883C28.8164 13.8515 28.5512 13.9739 28.2962 14.0555C28.0412 14.1371 27.7964 14.1779 27.5822 14.1779C27.2528 14.1779 26.8172 13.9841 26.6234 13.8413C26.3276 13.6271 26.042 13.2905 25.838 12.8927C25.634 12.4847 25.5014 12.0155 25.5014 11.4851C25.4912 11.2709 25.5116 11.0669 25.5524 10.8629ZM27.623 15.4019L27.47 15.9017C27.3578 16.1057 27.2252 16.2383 27.113 16.3097C26.9906 16.3913 26.8682 16.4219 26.756 16.4219C26.5928 16.4219 26.4296 16.3505 26.3072 16.2281C26.246 16.1669 26.1929 16.0861 26.1542 15.9833C26.0995 15.8377 26.0743 15.6319 26.1032 15.5039L26.195 15.0245C26.399 15.1469 26.6234 15.2387 26.8478 15.3101C27.1204 15.3846 27.4833 15.4019 27.623 15.4019ZM24.8792 16.0649C24.8996 16.1975 24.9404 16.3301 24.9914 16.4423C25.1342 16.8197 25.3892 17.1257 25.6952 17.3399C26.0012 17.5541 26.3684 17.6663 26.756 17.6663C27.113 17.6663 27.4802 17.5643 27.7964 17.3501C27.9596 17.2379 28.1126 17.1053 28.2554 16.9421L30.9482 18.2987C30.4586 18.7985 29.9078 19.1759 29.3264 19.4615C28.541 19.8389 27.7046 20.0225 26.8784 20.0225C25.634 20.0225 24.4202 19.6145 23.4308 18.8597C22.931 18.4823 22.5026 18.0029 22.1456 17.4521C21.9008 17.0747 21.6968 16.6463 21.5438 16.1873L24.8792 16.0649ZM25.8176 22.1951L24.8282 22.7459L24.1448 21.8891L25.1342 21.3383L25.8176 22.1951ZM20.2892 16.3301C20.483 16.9727 20.7584 17.5643 21.095 18.0947C21.7478 19.1147 22.625 19.9103 23.6348 20.4407C23.7266 20.4917 23.8184 20.5325 23.9102 20.5733L22.8902 21.1343C22.727 21.2261 22.6148 21.3791 22.5842 21.5525C22.5536 21.7361 22.5944 21.9197 22.7066 22.0625L24.1754 23.9087C24.3692 24.1433 24.6956 24.2147 24.9608 24.0617L27.062 22.8989C27.2252 22.8071 27.3374 22.6541 27.368 22.4705C27.4088 22.2869 27.3578 22.1033 27.2456 21.9605L26.654 21.2261H26.8886C27.8984 21.2261 28.9286 21.0017 29.8772 20.5427C30.6728 20.1653 31.4174 19.6145 32.0702 18.9005C32.2742 19.0433 32.4578 19.2065 32.6312 19.3799L33.7226 20.4713C32.3966 21.5219 31.0298 22.4195 29.969 23.0621C29.3672 23.4293 28.847 23.7251 28.49 23.9189C28.3064 24.0209 28.1738 24.0923 28.0718 24.1433C27.9392 24.2147 27.8066 24.2657 27.7046 24.3983L27.0314 25.3061C26.8172 25.4081 26.246 25.6529 25.3586 25.7957C25.3178 25.7447 25.2668 25.6937 25.226 25.6427C24.8588 25.2653 24.3284 25.0409 23.7674 25.0409C23.4213 25.0406 23.0808 25.1284 22.778 25.2959C22.3292 25.0409 22.013 24.7553 21.7988 24.5207C21.6764 24.3779 21.5846 24.2555 21.5336 24.1739V23.2355C21.5336 23.1029 21.4928 22.9805 21.4214 22.8785L21.4112 22.8683C21.3398 22.7663 20.7176 21.8891 19.9526 20.6753C19.4443 19.8842 18.5372 18.4229 17.9432 17.1563L20.2892 16.3301ZM25.8176 27.0299C26.4194 26.9177 26.8886 26.7545 27.215 26.6321C27.3272 26.8259 27.4292 27.0299 27.521 27.2543C27.5924 27.4175 27.6536 27.6011 27.7046 27.7847C27.317 27.9683 26.8886 28.1315 26.4602 28.2539C26.1236 28.3559 25.7972 28.4273 25.4912 28.4681V28.2743C25.7054 27.9989 25.8584 27.5501 25.8176 27.0299ZM23.7623 27.9989C23.5418 27.9989 23.3304 27.9113 23.1745 27.7554C23.0186 27.5995 22.931 27.3881 22.931 27.1676C22.931 26.9472 23.0186 26.7357 23.1745 26.5798C23.3304 26.4239 23.5418 26.3363 23.7623 26.3363C23.9828 26.3363 24.1942 26.4239 24.3501 26.5798C24.506 26.7357 24.5936 26.9472 24.5936 27.1676C24.5936 27.3881 24.506 27.5995 24.3501 27.7554C24.1942 27.9113 23.9828 27.9989 23.7623 27.9989ZM24.2366 29.1719L24.0836 36.1793H22.4924L23.0738 29.1107C23.288 29.1923 23.5226 29.2331 23.7674 29.2331C23.9204 29.2229 24.0836 29.2025 24.2366 29.1719ZM21.7478 27.6317C21.6254 27.5603 21.503 27.4889 21.3908 27.4073C21.2072 27.2747 21.044 27.1421 20.9114 27.0095C20.8502 26.9381 20.789 26.8769 20.738 26.8055L21.1154 25.6529C21.3296 25.8569 21.5846 26.0609 21.8906 26.2649C21.758 26.5301 21.6866 26.8361 21.6866 27.1523C21.6968 27.3257 21.7172 27.4787 21.7478 27.6317ZM15.2402 20.1143L10.844 17.6765L11.2316 16.4423L14.9648 18.0947C15.1076 18.1559 15.281 18.1661 15.434 18.1049L16.76 17.6153C17.0354 18.1763 17.3414 18.7475 17.6474 19.2983L15.2402 20.1143ZM16.4744 43.0235C16.1888 42.9623 15.9542 42.9011 15.7706 42.8501L17.6576 20.6141L18.29 20.4101C18.5246 20.7977 18.749 21.1547 18.9632 21.5015C19.5548 22.4399 20.0648 23.1641 20.279 23.4803V24.2861C20.1464 24.6635 19.6568 26.0915 19.1162 27.8357C18.8 28.8557 18.4634 29.9777 18.1778 31.0691C17.882 32.1605 17.6372 33.2009 17.4944 34.0781C17.3516 34.9349 17.27 35.9039 17.27 36.9239C17.27 38.4947 17.4638 40.2083 17.9534 41.8811C18.0962 42.3911 18.2798 42.8909 18.4736 43.3907C17.678 43.2785 17.0048 43.1357 16.4744 43.0235ZM25.7666 49.2455C25.7666 49.5069 25.6575 49.7657 25.2566 49.7657H21.9314L23.8286 48.3581C24.053 48.1949 24.1448 47.8889 24.0326 47.6237C24.2978 47.6441 24.5732 47.6543 24.869 47.6543C25.0118 47.6543 25.1648 47.6543 25.3178 47.6441L25.7666 49.0211V49.2455ZM28.3268 45.6653C27.1436 46.2263 25.9502 46.4201 24.8792 46.4201C23.4171 46.4201 21.9574 46.0714 21.2378 45.7163C20.8263 45.2137 19.7351 43.5887 19.1264 41.5343C18.6776 39.9941 18.494 38.3927 18.494 36.9137C18.494 35.9651 18.5756 35.0573 18.698 34.2719C18.8306 33.4661 19.0652 32.4461 19.3508 31.3751C19.6364 30.2939 19.973 29.1617 20.2994 28.1417C20.534 28.3355 20.789 28.5089 21.0542 28.6619C21.299 28.8047 21.554 28.9271 21.809 29.0393L21.1766 36.7301C21.1664 36.9035 21.2174 37.0769 21.3398 37.1993C21.4622 37.3217 21.6254 37.4033 21.7988 37.4033H24.6854C25.022 37.4033 25.2974 37.1279 25.3076 36.7913L25.4606 29.7023C25.8992 29.6513 26.348 29.5493 26.807 29.4167C27.2048 29.3045 27.6026 29.1515 27.9902 28.9883C28.0004 29.0597 28.0106 29.1413 28.0208 29.2127C28.1228 29.9369 28.1636 30.7019 28.1636 31.4567C28.1636 32.8439 28.0208 34.2005 27.878 35.2001C27.8066 35.6999 27.7352 36.1079 27.6842 36.3935C27.6536 36.5363 27.6332 36.6485 27.623 36.7199C27.5822 36.9239 27.5822 37.0871 27.6434 37.2095C29.0918 40.3715 30.8768 43.9211 31.7132 45.5531H28.8062C28.5716 45.5531 28.4798 45.5939 28.3268 45.6653ZM30.8666 49.6637C30.8156 49.7249 30.7442 49.7555 30.6626 49.7555H29.0612L29.765 49.0313C29.867 48.9191 29.9282 48.7865 29.9384 48.6335L30.0404 46.8383H31.8662L30.8666 49.6637ZM28.1942 25.8569L28.6022 25.3061C28.8878 25.1531 29.6222 24.7655 30.5912 24.1739C30.938 23.9597 31.3154 23.7251 31.7132 23.4701L32.6516 24.1331L31.1726 41.7383C30.4382 40.2491 29.612 38.5355 28.8674 36.9239C28.9184 36.6485 29.0204 36.1079 29.1224 35.4041C29.2754 34.3637 29.4182 32.9561 29.4182 31.4873C29.4182 30.4163 29.3407 29.3139 29.1224 28.2743C28.9477 27.4423 28.5019 26.3745 28.1942 25.8569ZM35.1506 24.3677L32.825 22.7255C33.4064 22.3175 34.0082 21.8789 34.5998 21.3995L35.783 22.5929C35.8952 22.7051 36.038 22.7663 36.191 22.7765L39.0878 22.9091V24.3473H39.098L35.1506 24.3677ZM44.0348 23.4701C43.994 23.5721 43.9328 23.6741 43.8512 23.7557C43.7696 23.8475 43.6676 23.9291 43.5248 24.0005C43.3718 24.0719 43.2596 24.2045 43.2086 24.3677C43.1576 24.5309 43.1678 24.7043 43.2494 24.8573C43.5656 25.4489 43.739 26.1833 43.739 26.9075C43.739 27.3665 43.6676 27.8255 43.5248 28.2539C43.4636 28.4171 43.4024 28.5803 43.3208 28.7435C43.2596 28.2947 43.1678 27.8765 43.0556 27.4991C42.7598 26.5097 42.311 25.7753 41.9234 25.2755C41.546 24.7757 41.24 24.5207 41.2094 24.5003C41.0972 24.4085 40.9544 24.3575 40.8116 24.3575H40.3526V22.9805L44.1368 23.1539C44.1164 23.2457 44.0858 23.3579 44.0348 23.4701ZM9.48741 28.3865C9.02545 28.3865 8.65101 28.761 8.65101 29.2229C8.65101 29.6849 9.02545 30.0593 9.48741 30.0593C9.94937 30.0593 10.3238 29.6849 10.3238 29.2229C10.3238 28.761 9.94937 28.3865 9.48741 28.3865ZM47.0285 11.5259C46.9187 11.5259 46.8099 11.5476 46.7084 11.5896C46.607 11.6316 46.5148 11.6932 46.4371 11.7709C46.3594 11.8486 46.2978 11.9408 46.2558 12.0422C46.2137 12.1437 46.1921 12.2525 46.1921 12.3623C46.1921 12.8243 46.5666 13.1987 47.0285 13.1987C47.4905 13.1987 47.8649 12.8243 47.8649 12.3623C47.8649 12.2525 47.8433 12.1437 47.8012 12.0422C47.7592 11.9408 47.6976 11.8486 47.6199 11.7709C47.5423 11.6932 47.4501 11.6316 47.3486 11.5896C47.2471 11.5476 47.1384 11.5259 47.0285 11.5259ZM41.5154 33.0785C41.2936 33.0785 41.0808 33.1666 40.924 33.3235C40.7671 33.4804 40.679 33.6931 40.679 33.9149C40.679 34.3769 41.0535 34.7513 41.5154 34.7513C41.9774 34.7513 42.3518 34.3769 42.3518 33.9149C42.3518 33.6931 42.2637 33.4804 42.1068 33.3235C41.95 33.1666 41.7372 33.0785 41.5154 33.0785Z" />
                                </g>
                              </svg>
                            </div>
                            <h4>
                              <Link href="#">Honeymoon</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="category-card">
                          <Link href="#" className="card-img">
                            <Image src={luxury} alt="" />
                          </Link>
                          <div className="card-content">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="51"
                                height="51"
                                viewBox="0 0 51 51"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M34.9652 42.4275C34.9653 42.529 34.9453 42.6295 34.9065 42.7233C34.8677 42.8171 34.8108 42.9023 34.739 42.974C34.6672 43.0458 34.582 43.1027 34.4883 43.1415C34.3945 43.1803 34.294 43.2003 34.1925 43.2002H16.249C16.1475 43.2003 16.047 43.1803 15.9532 43.1415C15.8594 43.1027 15.7742 43.0458 15.7025 42.974C15.6307 42.9023 15.5738 42.8171 15.535 42.7233C15.4962 42.6295 15.4762 42.529 15.4763 42.4275C15.4763 42.326 15.4962 42.2256 15.5351 42.1318C15.5739 42.038 15.6308 41.9529 15.7026 41.8811C15.7743 41.8093 15.8595 41.7524 15.9533 41.7136C16.047 41.6748 16.1475 41.6548 16.249 41.6548H34.1926C34.2941 41.6548 34.3946 41.6748 34.4883 41.7136C34.582 41.7525 34.6672 41.8094 34.739 41.8811C34.8107 41.9529 34.8676 42.0381 34.9064 42.1318C34.9452 42.2256 34.9652 42.3261 34.9652 42.4275ZM30.4793 46.7411C30.4794 46.9461 30.398 47.1428 30.2531 47.2878C30.1082 47.4328 29.9116 47.5143 29.7066 47.5144H20.7348C20.5326 47.5102 20.3401 47.4268 20.1986 47.2823C20.0571 47.1378 19.9778 46.9437 19.9778 46.7414C19.9778 46.5392 20.0571 46.345 20.1986 46.2005C20.3401 46.056 20.5326 45.9727 20.7348 45.9684H29.7066C29.9115 45.9685 30.108 46.05 30.2528 46.1949C30.3977 46.3398 30.4792 46.5362 30.4793 46.7411ZM41.172 32.0638C41.8345 30.912 43.5731 31.1331 43.9195 32.4253C44.2647 33.7141 42.8758 34.7798 41.7208 34.1135C41.0037 33.6998 40.7576 32.7803 41.172 32.0638ZM39.8336 31.2911C38.6544 33.3334 40.1555 35.8605 42.4661 35.8605C44.4622 35.8605 45.9342 33.9711 45.4126 32.0258C44.7104 29.4076 41.184 28.95 39.8336 31.2911ZM43.7354 38.1217L47.6998 31.2552L41.206 27.5061L37.2415 34.3726L43.7354 38.1217ZM36.0152 37.8986C35.9996 37.8888 35.9833 37.8796 35.9676 37.8705L37.0281 36.0335L42.4028 39.1379L40.8483 41.8311C39.4426 40.2962 37.8151 38.9668 36.0152 37.8986ZM21.4553 35.2823C22.0126 33.4035 22.5308 31.7949 24.5394 31.2715C24.9997 31.1519 25.483 31.1523 25.9431 31.2727C28.0444 31.8183 28.7897 33.8361 29.2008 35.3215C26.6406 34.835 24.0212 34.8195 21.4553 35.2823ZM8.07266 43.6955L4.16042 36.9197C4.03195 36.6965 4.11057 36.4054 4.33329 36.2756L11.3127 32.2465C11.5339 32.1186 11.8289 32.1976 11.9568 32.4181L14.9189 37.5482L14.8582 37.65C14.7133 37.7312 14.5693 37.8141 14.4263 37.8987C11.9333 39.378 9.76941 41.3593 8.07266 43.6955ZM3.72903 29.9396L5.85128 33.6157L8.25017 32.2295L6.12724 28.5548L4.00499 27.6478L3.72903 29.9396ZM20.4059 30.2783C19.6469 32.2328 18.6739 34.2135 17.374 36.4485C18.142 36.1433 18.9271 35.8829 19.7253 35.6687C20.4447 33.3353 20.9703 30.6045 24.1505 29.7765C24.866 29.5905 25.6173 29.5905 26.3328 29.7765C29.6827 30.648 30.4638 34.0561 30.9048 35.7202C31.6803 35.9357 32.4429 36.1952 33.1889 36.4975C31.237 32.8084 30.2876 31.4074 29.0195 27.2007H21.4625C21.1502 28.2398 20.7978 29.2665 20.4059 30.2783ZM22.4466 23.3589C22.7657 21.8651 23.0189 20.3636 23.2238 18.9545H27.2575C27.5848 21.1977 27.9943 23.4203 28.5849 25.6554H21.8984C22.0982 24.894 22.281 24.1284 22.4466 23.3589ZM23.6898 15.3217C24.0055 12.5733 24.2501 9.91272 24.5616 7.16368H25.9216C26.3091 10.6135 26.5988 13.9559 27.0453 17.4094H23.4365C23.5331 16.6672 23.6167 15.9644 23.6898 15.3217ZM44.9048 24.9897L48.0294 26.7941L48.0665 29.3281L47.9131 29.5931L42.5378 26.49L42.6912 26.2251L44.9048 24.9897ZM49.4514 20.7237L46.9083 22.1881L45.9666 23.8182L48.5137 25.2885L49.4547 23.659L49.4514 20.7237ZM51 23.8647L50.9955 19.3859C50.9951 18.7932 50.3513 18.4211 49.8378 18.7177L45.9569 20.9527C45.8391 21.0205 45.7412 21.1179 45.673 21.2354L44.3495 23.5299L41.7521 24.9793C41.4918 25.125 41.3606 25.4391 41.1942 25.7277C40.8464 25.5966 40.4456 25.7317 40.2538 26.0632L35.5167 34.2689C35.4252 34.4274 35.3931 34.6132 35.426 34.7932C35.4588 34.9732 35.5546 35.1357 35.6961 35.2517L34.9529 36.5374C33.7888 34.2093 32.4793 32.1955 31.517 29.7191C31.1953 28.8897 30.9014 28.0498 30.636 27.2008H31.3512C31.7774 27.2008 32.1239 26.8549 32.1239 26.4281C32.1239 26.0012 31.7774 25.6555 31.3512 25.6555H30.1831C29.5747 23.4283 29.1564 21.2145 28.8198 18.9547H29.3895C29.5944 18.9547 29.791 18.8732 29.9359 18.7283C30.0808 18.5835 30.1622 18.3869 30.1622 18.182C30.1622 17.9771 30.0808 17.7806 29.9359 17.6357C29.791 17.4908 29.5944 17.4094 29.3895 17.4094H28.6031C28.1116 13.6758 27.8136 10.039 27.3782 6.30227C27.3325 5.91337 27.0023 5.61838 26.6108 5.61838H25.9934V4.25762C25.9934 4.0527 25.912 3.85617 25.7671 3.71127C25.6222 3.56637 25.4257 3.48497 25.2207 3.48497C25.0158 3.48497 24.8193 3.56637 24.6744 3.71127C24.5295 3.85617 24.4481 4.0527 24.4481 4.25762V5.61826H23.8718C23.6823 5.61836 23.4994 5.68807 23.3579 5.81415C23.2164 5.94024 23.1262 6.1139 23.1043 6.30216C22.6752 10.0413 22.3669 13.6795 21.8787 17.4092H21.0519C20.847 17.4093 20.6505 17.4908 20.5056 17.6356C20.3607 17.7805 20.2793 17.9769 20.2792 18.1818C20.2794 18.3867 20.3608 18.5831 20.5057 18.728C20.6506 18.8729 20.847 18.9543 21.0519 18.9545H21.662C21.3293 21.2028 20.9037 23.439 20.3 25.6554H19.0901C18.8852 25.6555 18.6888 25.7369 18.5439 25.8817C18.399 26.0266 18.3175 26.2231 18.3174 26.428C18.3175 26.6329 18.399 26.8293 18.5438 26.9742C18.6887 27.1191 18.8852 27.2006 19.0901 27.2007H19.8458C18.8631 30.3316 17.6883 32.88 15.8272 36.0314L13.2951 31.6453C12.7398 30.6834 11.5031 30.3513 10.5399 30.908L9.58771 31.4568L7.33688 27.5595C7.25375 27.4145 7.12572 27.3004 6.97211 27.2345L3.90168 25.9235L1.44207 21.6641C1.22933 21.2941 0.756141 21.1674 0.386157 21.3808C0.298224 21.4316 0.221161 21.4992 0.159382 21.5797C0.0976038 21.6603 0.0523226 21.7522 0.0261314 21.8503C-5.9698e-05 21.9484 -0.00664613 22.0507 0.00674925 22.1513C0.0201446 22.2519 0.0532586 22.3489 0.104195 22.4368L2.56312 26.6962L2.16312 30.0107C2.1441 30.1766 2.17838 30.3444 2.261 30.4896L4.51239 34.3883L3.56092 34.9371C2.59745 35.4936 2.26507 36.7296 2.82152 37.6923L7.11496 45.1298C7.01255 45.3002 6.91003 45.4697 6.81079 45.6427C6.59997 46.0141 6.72855 46.4859 7.09989 46.6966C7.4692 46.9093 7.94113 46.7795 8.15377 46.4094C11.6452 40.2915 18.1841 36.4907 25.2202 36.4907C32.2564 36.4907 38.7954 40.2913 42.2867 46.4094C42.337 46.4976 42.4043 46.5749 42.4845 46.6371C42.5648 46.6992 42.6565 46.7449 42.7545 46.7716C42.8524 46.7983 42.9546 46.8054 43.0553 46.7925C43.156 46.7796 43.2532 46.7471 43.3413 46.6966C43.7119 46.4858 43.8405 46.014 43.6297 45.6427C43.1187 44.748 42.5405 43.8937 41.9081 43.0846L43.7471 39.8999C44.1041 40.0324 44.4965 39.8935 44.6862 39.5645L49.424 31.3582C49.6138 31.0305 49.5379 30.6186 49.2458 30.376C49.412 30.0871 49.6187 29.815 49.6145 29.5191L49.5715 26.5453L50.8962 24.2508C50.9644 24.1335 51.0002 24.0003 51 23.8647Z"
                                />
                              </svg>
                            </div>
                            <h4>
                              <Link href="#">Luxury Tour</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="category-card">
                          <Link href="#" className="card-img">
                            <Image src={group} alt="" />
                          </Link>
                          <div className="card-content">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="51"
                                height="51"
                                viewBox="0 0 51 51"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M45.8564 34.4958C45.8564 35.7619 46.8834 36.7871 48.1488 36.7871H50.2528C50.5289 36.7871 50.7528 36.5633 50.7528 36.2871V31.249C50.7528 30.9728 50.5289 30.749 50.2528 30.749H48.1488C46.883 30.749 45.8564 31.7757 45.8564 33.0413V34.4958ZM48.1488 35.7871C47.435 35.7871 46.8564 35.2088 46.8564 34.4958V33.0413C46.8564 32.328 47.4354 31.749 48.1488 31.749H49.7528V35.7871H48.1488Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0.578816 36.5923C0.673478 36.7152 0.819779 36.7871 0.974858 36.7871H3.80037C5.06692 36.7871 6.09273 35.7617 6.09273 34.4958V33.0413C6.09273 31.7758 5.0673 30.749 3.80037 30.749H2.30235C2.07527 30.749 1.87671 30.902 1.81885 31.1216L0.49136 36.1597C0.451847 36.3097 0.484154 36.4695 0.578816 36.5923ZM1.62367 35.7871L2.68767 31.749H3.80037C4.51466 31.749 5.09273 32.3277 5.09273 33.0413V34.4958C5.09273 35.209 4.51504 35.7871 3.80037 35.7871H1.62367Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.26435 27.315C8.26436 27.3149 8.26435 27.315 8.26435 27.315L10.3466 19.4132C10.3639 19.3473 10.4026 19.2887 10.4565 19.247C10.5105 19.2054 10.5767 19.1828 10.6448 19.1827H18.1558C18.6207 19.1827 18.9975 19.5595 18.9975 20.0243V27.5296C18.9975 27.9943 18.6207 28.3711 18.1558 28.3711H9.07815C8.52629 28.3711 8.12377 27.8488 8.26435 27.315ZM7.29734 27.0602C6.98972 28.2281 7.87034 29.3711 9.07815 29.3711H18.1558C19.1729 29.3711 19.9975 28.5466 19.9975 27.5296V20.0243C19.9975 19.0073 19.173 18.1827 18.1558 18.1827H10.6442C10.3553 18.183 10.0741 18.2789 9.84539 18.4555C9.61672 18.6321 9.4529 18.8793 9.37949 19.1587L7.29734 27.0602Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M25.2215 28.3711C24.7567 28.3711 24.3799 27.9943 24.3799 27.5295V20.0243C24.3799 19.5596 24.7566 19.1828 25.2215 19.1828H32.4557C32.5237 19.1828 32.5898 19.2054 32.6436 19.2469C32.6974 19.2884 32.736 19.3466 32.7533 19.4123L33.3161 21.5481C33.3864 21.8151 33.6599 21.9746 33.9269 21.9042C34.194 21.8339 34.3534 21.5604 34.2831 21.2933L33.7204 19.1577C33.6469 18.8785 33.483 18.6314 33.2543 18.455C33.0257 18.2787 32.7451 18.1829 32.4563 18.1828H25.2215C24.2044 18.1828 23.3799 19.0073 23.3799 20.0243V27.5295C23.3799 28.5466 24.2044 29.3711 25.2215 29.3711H34.0221C35.2493 29.3711 36.1076 28.2048 35.7966 27.0381L35.792 27.0209L35.7916 27.0191L35.0628 24.2527C34.9924 23.9857 34.719 23.8263 34.4519 23.8966C34.1849 23.967 34.0254 24.2405 34.0958 24.5075L34.825 27.2756L34.8255 27.2774L34.8304 27.2957C34.9772 27.8466 34.5727 28.3711 34.0221 28.3711H25.2215Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M11.0698 41.0047C11.0698 42.687 12.4336 44.0508 14.1159 44.0508C15.7983 44.0508 17.162 42.687 17.162 41.0047C17.162 39.3224 15.7983 37.9586 14.1159 37.9586C12.4336 37.9586 11.0698 39.3224 11.0698 41.0047ZM14.1159 43.0508C12.9859 43.0508 12.0698 42.1347 12.0698 41.0047C12.0698 39.8746 12.9859 38.9586 14.1159 38.9586C15.246 38.9586 16.162 39.8746 16.162 41.0047C16.162 42.1347 15.246 43.0508 14.1159 43.0508Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M32.3147 41.0047C32.3147 42.687 33.6785 44.0508 35.3608 44.0508C37.0431 44.0508 38.4069 42.687 38.4069 41.0047C38.4069 39.3224 37.0431 37.9586 35.3608 37.9586C33.6785 37.9586 32.3147 39.3224 32.3147 41.0047ZM35.3608 43.0508C34.2308 43.0508 33.3147 42.1347 33.3147 41.0047C33.3147 39.8746 34.2308 38.9586 35.3608 38.9586C36.4908 38.9586 37.4069 39.8746 37.4069 41.0047C37.4069 42.1347 36.4908 43.0508 35.3608 43.0508Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.52888 13.9199C6.44663 13.9199 5.56934 13.0427 5.56934 11.9605V8.40513C5.56934 7.32301 6.44664 6.44568 7.52888 6.44568H12.0994V13.9199H7.52888ZM4.56934 11.9605C4.56934 13.595 5.8944 14.9199 7.52888 14.9199H12.5994C12.8755 14.9199 13.0994 14.6961 13.0994 14.4199V5.94568C13.0994 5.66954 12.8755 5.44568 12.5994 5.44568H7.52888C5.89439 5.44568 4.56934 6.7707 4.56934 8.40513V11.9605Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.0996 14.4199C12.0996 14.6961 12.3235 14.9199 12.5996 14.9199H17.2592C17.5354 14.9199 17.7592 14.6961 17.7592 14.4199V5.94568C17.7592 4.38279 16.4923 3.11582 14.9294 3.11582C13.3666 3.11582 12.0996 4.3828 12.0996 5.94568V14.4199ZM13.0996 13.9199V5.94568C13.0996 4.93506 13.9189 4.11582 14.9294 4.11582C15.94 4.11582 16.7592 4.93507 16.7592 5.94568V13.9199H13.0996Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M16.759 14.4199C16.759 14.6961 16.9829 14.9199 17.259 14.9199H25.1014C25.3775 14.9199 25.6014 14.6961 25.6014 14.4199V5.94568C25.6014 5.66954 25.3775 5.44568 25.1014 5.44568H17.259C16.9829 5.44568 16.759 5.66954 16.759 5.94568V14.4199ZM17.759 13.9199V6.44568H24.6014V13.9199H17.759Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M24.6016 14.4199C24.6016 14.6961 24.8254 14.9199 25.1016 14.9199H29.7612C30.0373 14.9199 30.2612 14.6961 30.2612 14.4199V5.94568C30.2612 4.38279 28.9942 3.11582 27.4313 3.11582C25.8684 3.11582 24.6016 4.38282 24.6016 5.94568V14.4199ZM25.6016 13.9199V5.94568C25.6016 4.93504 26.4207 4.11582 27.4313 4.11582C28.4419 4.11582 29.2612 4.93507 29.2612 5.94568V13.9199H25.6016Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M36.791 11.9609C36.791 12.2371 37.0149 12.4609 37.291 12.4609H40.6825C41.9404 12.4609 42.9601 11.4412 42.9601 10.1833C42.9601 8.92542 41.9404 7.90569 40.6825 7.90569H37.291C37.0149 7.90569 36.791 8.12955 36.791 8.40569V11.9609ZM37.791 11.4609V8.90569H40.6825C41.3881 8.90569 41.9601 9.47771 41.9601 10.1833C41.9601 10.8889 41.3881 11.4609 40.6825 11.4609H37.791Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M29.261 14.4199C29.261 14.6961 29.4848 14.9199 29.761 14.9199H34.8315C36.466 14.9199 37.791 13.595 37.791 11.9605V8.40513C37.791 6.7707 36.466 5.44568 34.8315 5.44568H29.761C29.4848 5.44568 29.261 5.66954 29.261 5.94568V14.4199ZM30.261 13.9199V6.44568H34.8315C35.9137 6.44568 36.791 7.32301 36.791 8.40513V11.9605C36.791 13.0427 35.9137 13.9199 34.8315 13.9199H30.261Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.23584 41.0046C7.23584 44.8044 10.3162 47.8848 14.116 47.8848C17.9158 47.8848 20.9962 44.8044 20.9962 41.0046C20.9962 37.2048 17.9158 34.1244 14.116 34.1244C10.3162 34.1244 7.23584 37.2048 7.23584 41.0046ZM14.116 46.8848C10.8685 46.8848 8.23584 44.2521 8.23584 41.0046C8.23584 37.7571 10.8685 35.1244 14.116 35.1244C17.3635 35.1244 19.9962 37.7571 19.9962 41.0046C19.9962 44.2521 17.3635 46.8848 14.116 46.8848Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M1.34781 36.8327C1.34784 36.8326 1.34778 36.8328 1.34781 36.8327L1.45832 36.4151L2.78595 31.3765L3.76729 27.6525C3.83766 27.3855 3.67824 27.112 3.41121 27.0416C3.14418 26.9712 2.87067 27.1306 2.80031 27.3977L1.81896 31.1217L0.380936 36.5774C-0.286037 39.1098 1.62328 41.5898 4.24304 41.5898H7.73792C7.87144 41.5898 7.99942 41.5364 8.09334 41.4415C8.18725 41.3466 8.2393 41.2181 8.23789 41.0846C8.23769 41.0652 8.23702 41.0463 8.2366 41.0341L8.23647 41.0303C8.23598 41.0161 8.23583 41.0097 8.23583 41.0051C8.23583 37.7575 10.8685 35.1249 14.116 35.1249C17.3635 35.1249 19.9961 37.7575 19.9961 41.0051C19.9961 41.0248 19.996 41.0263 19.9956 41.0287C19.9953 41.0318 19.9947 41.0365 19.994 41.0828C19.9921 41.2166 20.044 41.3456 20.1379 41.4409C20.2319 41.5362 20.3601 41.5898 20.494 41.5898H28.9827C29.1166 41.5898 29.2448 41.5362 29.3388 41.4409C29.4327 41.3456 29.4846 41.2166 29.4827 41.0828C29.4821 41.0402 29.4815 41.0338 29.4811 41.0294C29.4808 41.0258 29.4806 41.0236 29.4806 41.0051C29.4806 37.7575 32.1132 35.1249 35.3607 35.1249C38.6082 35.1249 41.2409 37.7575 41.2409 41.0051C41.2409 41.0097 41.2407 41.0161 41.2402 41.0303L41.2401 41.0341C41.2397 41.0462 41.239 41.0652 41.2388 41.0846C41.2374 41.2181 41.2894 41.3466 41.3834 41.4415C41.4773 41.5364 41.6053 41.5898 41.7388 41.5898H46.7595C48.9651 41.5898 50.7529 39.8019 50.7529 37.5955V31.2491C50.7529 29.0436 48.9651 27.2556 46.7595 27.2556H41.6271C41.2359 27.2555 40.8556 27.126 40.5458 26.8872C40.2359 26.6483 40.0138 26.3136 39.9141 25.9353L37.8427 18.0728C37.1983 15.6254 34.9851 13.9204 32.4561 13.9204H10.6442C8.11412 13.9204 5.90196 15.6254 5.25754 18.0728L3.58772 24.4094C3.51735 24.6764 3.67677 24.9499 3.9438 25.0203C4.21083 25.0907 4.48434 24.9312 4.5547 24.6642L6.22455 18.3275C6.75333 16.3193 8.56839 14.9204 10.6442 14.9204H32.4561C34.5309 14.9204 36.3469 16.3193 36.8757 18.3274L38.9471 26.1901C39.1031 26.782 39.4505 27.3056 39.9353 27.6792C40.4201 28.0528 41.0149 28.2555 41.627 28.2556H46.7595C48.4127 28.2556 49.7529 29.5959 49.7529 31.2491V37.5955C49.7529 39.2498 48.4127 40.5898 46.7595 40.5898H42.2285C42.0139 36.9834 39.0211 34.1249 35.3607 34.1249C31.7003 34.1249 28.7077 36.9834 28.493 40.5898H20.9838C20.7691 36.9834 17.7764 34.1249 14.116 34.1249C10.4556 34.1249 7.46284 36.9834 7.24815 40.5898H4.24304C2.2795 40.5898 0.848019 38.7312 1.34781 36.8327Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M28.4805 41.0046C28.4805 44.8044 31.5608 47.8848 35.3606 47.8848C39.1604 47.8848 42.2408 44.8044 42.2408 41.0046C42.2408 37.2048 39.1604 34.1244 35.3606 34.1244C31.5608 34.1244 28.4805 37.2048 28.4805 41.0046ZM35.3606 46.8848C32.1131 46.8848 29.4805 44.2521 29.4805 41.0046C29.4805 37.7571 32.1131 35.1244 35.3606 35.1244C38.6082 35.1244 41.2408 37.7571 41.2408 41.0046C41.2408 44.2521 38.6082 46.8848 35.3606 46.8848Z"
                                />
                              </svg>
                            </div>
                            <h4>
                              <Link href="#">Group Tour</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
