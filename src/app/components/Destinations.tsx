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
} from "../imagesImports";

const Destinations = () => {
  return (
    <>
      <div className="home4-destination-card-slider-section pt-50 mb-50">
        <div className="container">
          <div className="row mb-20">
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
                        <div
                          className="destination-card2 style-2"
                          style={{ width: "15vw" }}
                        >
                          <Link href="#" className="destination-card-img">
                            <Image
                              style={{ width: "15vw" }}
                              src={destination}
                              alt=""
                            />
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
                        <div
                          className="destination-card2 style-2"
                          style={{ width: "15vw" }}
                        >
                          <Link href="#" className="destination-card-img">
                            <Image
                              style={{ width: "15vw" }}
                              src={andaman}
                              alt=""
                            />
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
                      {" "}
                      {/* swiper-slide */}
                      <div className="swiper-slide">
                        <div
                          className="destination-card2 style-2"
                          style={{ width: "15vw" }}
                        >
                          <Link href="#" className="destination-card-img">
                            <Image
                              style={{ width: "15vw" }}
                              src={ladakh}
                              alt=""
                            />
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
                        <div
                          className="destination-card2 style-2"
                          style={{ width: "15vw" }}
                        >
                          <Link href="#" className="destination-card-img">
                            <Image
                              style={{ width: "15vw" }}
                              src={gujrat}
                              alt=""
                            />
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
                        <div
                          className="destination-card2 style-2"
                          style={{ width: "15vw" }}
                        >
                          <Link href="#" className="destination-card-img">
                            <Image
                              style={{ width: "15vw" }}
                              src={tamil}
                              alt=""
                            />
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
                        <div
                          className="destination-card2 style-2"
                          style={{ width: "15vw" }}
                        >
                          <Link href="#" className="destination-card-img">
                            <Image
                              style={{ width: "15vw" }}
                              src={rajasthan}
                              alt=""
                            />
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

      <div className="home4-destination-card-slider-section   mb-50">
        <div className="container">
          <div className="row mb-20">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title3">
                <h2>Explore the Montage of India's cities</h2>
              </div>
              <div className="slider-btn-grp5">
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
                          <div
                            className="activity-card-content-wrapper"
                            style={{ width: "16vw" }}
                          >
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
                          <div
                            className="activity-card-content-wrapper"
                            style={{ width: "16vw" }}
                          >
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
                          <div
                            className="activity-card-content-wrapper"
                            style={{ width: "16vw" }}
                          >
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
                          <div
                            className="activity-card-content-wrapper"
                            style={{ width: "16vw" }}
                          >
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
                          <div
                            className="activity-card-content-wrapper"
                            style={{ width: "16vw" }}
                          >
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
                          <div
                            className="activity-card-content-wrapper"
                            style={{ width: "16vw" }}
                          >
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
          <div className="row mb-20">
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
                                <a>BELOW</a>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                &nbsp;20,000/-
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
                                <a>BELOW</a>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                &nbsp;50,000/-
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
                                <a>BELOW</a>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                &nbsp;75,000/-
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
                                <a>BELOW</a>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                &nbsp;1,00,000/-
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
                                <a>BELOW</a>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                &nbsp;2,00,000/-
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
                                <a>BELOW</a>
                              </h4>
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                &nbsp;3,00,000/-
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

      <div className="destination-dropdown-section mb-120">
        <Image src={vector1} alt="" className="vector1" />

        <Image
          //  style={{ width: "100vw"}}
          src={vector2}
          alt=""
          className="vector2"
        />

        <div className="container">
          <div className="row mb-50">
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
          <div className="row mb-20">
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
                              <a href="#">Delhi</a>
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
                              <a href="#">Mumbai</a>
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
                              <a href="#">Chennai</a>
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
                              <a href="#">Bengaluru</a>
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
                              <a href="#">Ahmedabad</a>
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
                              <a href="#">Pune</a>
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
                              <a href="#">Kolkata</a>
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
