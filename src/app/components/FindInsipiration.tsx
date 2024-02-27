import Link from "next/link";
import React from "react";
import { blogcard1, blogcard2, blogcard3, blogcard4 } from "../imagesImports";
import Image from "next/image";

const FindInsipiration = () => {
  return (
    <>
      <div className="home5-blog-section mb-50">
        <div className="container">
          <div className="row marginbottom10">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="section-title2 two text-center">
                <h2>Find Inspiration - Our Travel Blogs</h2>
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-5">
              <div className="blog-card style-5">
                <div className="blog-card-img-wrap">
                  <Link href="#" className="card-img">
                    <Image src={blogcard1} alt="" />
                  </Link>
                </div>
                <div className="blog-card-content">
                  <h5>
                    <Link href="#">Places to visit in Bangalore</Link>
                  </h5>
                  <p className="pira">
                    Bangalore is also known as the Garden City of India and It
                    has a lot of Popular...
                  </p>
                  <div className="bottom-area">
                    <Link href="#">View Post</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-md-4 gy-5">
                <div className="col-lg-12">
                  <div className="blog-card two">
                    <div className="blog-card-img-wrap">
                      <Link href="#" className="card-img">
                        <Image src={blogcard2} alt="" />
                      </Link>
                    </div>
                    <div className="blog-card-content">
                      <h5>
                        <Link href="#">Famous food of Uttarakhand</Link>
                      </h5>
                      <p>
                        Apart from all the scenic and picturesque beauty,
                        Uttarkhand is also known for its tempting...
                      </p>
                      <div className="bottom-area">
                        <Link href="#">
                          View Post
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                            >
                              <path
                                d="M2.07617 8.73272L12.1899 2.89355"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M10.412 7.59764L12.1908 2.89295L7.22705 2.08105"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="blog-card two mt-2">
                    <div className="blog-card-img-wrap">
                      <Link href="#" className="card-img">
                        <Image src={blogcard3} alt="" />
                      </Link>
                    </div>
                    <div className="blog-card-content">
                      <h5>
                        <Link href="#">
                          Pangong Lake - A Lake which changes its Color
                        </Link>
                      </h5>
                      <p>
                        Pangong Lake is situated at a higher elevation in the
                        Himalayan mountain range, this spot is...
                      </p>
                      <div className="bottom-area">
                        <Link href="#">
                          View Post
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                            >
                              <path
                                d="M2.07617 8.73272L12.1899 2.89355"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M10.412 7.59764L12.1908 2.89295L7.22705 2.08105"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="blog-card two mt-2">
                    <div className="blog-card-img-wrap">
                      <Link href="#" className="card-img">
                        <Image src={blogcard4} alt="" />
                      </Link>
                    </div>
                    <div className="blog-card-content">
                      <h5>
                        <Link href="#">
                          30 Major Attractions of the Historic City - Delhi
                        </Link>
                      </h5>
                      <p>
                        Delhi which is the capital city of India is a perfect
                        blend of the ...
                      </p>
                      <div className="bottom-area">
                        <Link href="#">
                          View Post
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                            >
                              <path
                                d="M2.07617 8.73272L12.1899 2.89355"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M10.412 7.59764L12.1908 2.89295L7.22705 2.08105"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 d-flex justify-content-center">
              <Link href="#" className="primary-btn4 two">
                <span>
                  View All Blogs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                  >
                    <path d="M7.70294 9.65818L7.27464 11.6673L5.29549 17.0003L6.47016 16.8046L11.9577 9.62856C12.7321 9.6016 13.4832 9.56006 14.1359 9.49563C17.1552 9.19702 16.9986 8.50013 16.9986 8.50013C16.9986 8.50013 17.1552 7.80325 14.1358 7.50464C13.4832 7.43995 12.7321 7.39845 11.9576 7.3717L6.47019 0.195477L5.29549 -5.1162e-07L7.27464 5.33303L7.70294 7.34212C6.69752 7.35717 6.01715 7.38006 6.01715 7.38006C6.01715 7.38006 4.63017 7.41207 2.48417 7.8956L0.734503 5.46859L-8.41624e-05 5.46859L0.523018 8.41949C0.428867 8.44835 0.428867 8.55195 0.523018 8.58081L-8.44274e-05 11.5317L0.734502 11.5317L2.48417 9.10495C4.63017 9.58848 6.01715 9.62001 6.01715 9.62001C6.01715 9.62001 6.69752 9.64317 7.70294 9.65818Z" />
                    <path d="M11.4004 11.2692L11.4004 12.0613L8.47265 12.0613L8.47265 11.2692L11.4004 11.2692ZM11.4004 4.94234L11.4004 5.73425L8.47282 5.73425L8.47282 4.94234L11.4004 4.94234ZM9.42515 13.9276L9.42515 14.7195L6.71923 14.7195L6.71923 13.9276L9.42515 13.9276ZM9.42515 2.28418L9.42515 3.07634L6.71924 3.07634L6.71924 2.28418L9.42515 2.28418Z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home5-banner3-section">
        <div className="home5-banner3-content">
          <h2>Join The Newsletter</h2>
          <p>To receive our best monthly deals</p>
          <form>
            <div className="from-inner">
              <input type="email" placeholder="Enter Your Gmail..." />
              <button type="submit" className="from-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                >
                  <path
                    d="M7 1L16 8.5M16 8.5L7 16M16 8.5H0.5"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FindInsipiration;
