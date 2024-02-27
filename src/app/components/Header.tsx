"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { logo1 } from "../imagesImports";

import {
  google_icon,
  banner1,
  banner23,
  banner33,
  banner4,
  homebanner1,
  homebanner2,
  homebanner3,
  homebanner4,
  login_modal_header_img,
} from "../imagesImports";

const Header = () => {
  return (
    <>
      <div
        className="modal login-modal"
        id="user-login"
        data-bs-keyboard="false"
        tab-index="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-clode-btn" data-bs-dismiss="modal"></div>
            <div className="modal-header">
              <Image src={login_modal_header_img} alt="" />
            </div>
            <div className="modal-body">
              <div className="login-registration-form">
                <div className="form-title">
                  <h2>Sign in to continue</h2>
                  <p>Enter your email address for Login.</p>
                </div>
                <form>
                  <div className="form-inner mb-20">
                    <input type="text" placeholder="User name or Email *" />
                  </div>
                  <Link href="#" className="login-btn mb-25">
                    Sign In
                  </Link>
                  <div className="divider">
                    <span>or</span>
                  </div>
                  <Link href="#" className="google-login-btn">
                    <div className="icon">
                      <Image src={google_icon} alt="" />
                    </div>
                    Sign in with Google
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-bar style-2">
        <div className="topbar-left two">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g>
                <path d="M9.84497 19.8136V25.0313C9.84583 25.2087 9.90247 25.3812 10.0069 25.5246C10.1112 25.6679 10.2581 25.7748 10.4266 25.8301C10.5951 25.8853 10.7767 25.8861 10.9457 25.8324C11.1147 25.7787 11.2625 25.6732 11.3682 25.5308L14.4203 21.3773L9.84497 19.8136ZM26.6468 0.156459C26.5201 0.0661815 26.3708 0.0127263 26.2155 0.00200482C26.0603 -0.00871662 25.9051 0.0237135 25.7671 0.0957086L0.454599 13.3145C0.308959 13.3914 0.188959 13.5092 0.109326 13.6535C0.0296936 13.7977 -0.00610776 13.962 0.00631628 14.1262C0.0187403 14.2905 0.0788492 14.4475 0.179266 14.5781C0.279683 14.7087 0.416039 14.8071 0.571599 14.8613L7.60847 17.2666L22.5946 4.45283L10.9981 18.4242L22.7915 22.4551C22.9085 22.4944 23.0327 22.5077 23.1554 22.4939C23.2781 22.4802 23.3963 22.4399 23.5017 22.3757C23.6072 22.3115 23.6973 22.225 23.7659 22.1223C23.8344 22.0196 23.8797 21.9032 23.8985 21.7812L26.9922 0.968709C27.0151 0.81464 26.995 0.657239 26.934 0.513898C26.8731 0.370556 26.7737 0.246854 26.6468 0.156459Z" />
              </g>
            </svg>
          </div>
          <div className="content">
            <Link href="mailto:info@travelride.in">
              <span>info@travelride.in</span>
            </Link>
          </div>
        </div>
        <p>
          Hurry Up For your new Tour! <Link href="#">Book Now</Link>
        </p>
        <div className="topbar-right">
          <div className="social-icon-area">
            <ul>
              <li>
                <Link href="https://www.facebook.com/Travelride.in/">
                  <i className="bx bxl-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/Travelride_in">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    className="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/">
                  <i className="bx bxl-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/travelride.in/">
                  <i className="bx bxl-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="header-area style-1">
        <div className="header-logo d-lg-none d-flex">
          <Link href="index.html">
            <Image
              style={{ width: "auto", height: "auto" }}
              height={1000}
              width={1000}
              alt="image"
              className="img-fluid"
              src={logo1}
            />
          </Link>
        </div>
        <div className="company-logo d-lg-flex d-none">
          <Link href="/">
            <Image
              style={{ width: "auto", height: "auto" }}
              height={130}
              width={130}
              alt="image"
              className="img-fluid"
              src={logo1}
            />
          </Link>
        </div>
        <div className="main-menu">
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <Link href="index.html">
                {/* <img alt="image" src="assets/img/logo.png" /> */}
              </Link>
            </div>
            <div className="menu-close-btn">
              <i className="bi bi-x"></i>
            </div>
          </div>
          <ul className="menu-list">
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li className="menu-item-has-children">
              <Link href="#" className="drop-down">
                Destination
              </Link>
              <i className="bi bi-plus dropdown-icon"></i>
              <ul className="sub-menu">
                <div className="row">
                  <div className="col-md-4">
                    <li>
                      <Link href="/destination">Uttarakhand</Link>
                    </li>
                    <li>
                      <Link href="/destination">Himachal</Link>
                    </li>
                    <li>
                      <Link href="/destination">Rajasthan</Link>
                    </li>
                    <li>
                      <Link href="/destination">Gujarat</Link>
                    </li>
                    <li>
                      <Link href="/destination">Uttar Pradesh</Link>
                    </li>
                  </div>
                  <div className="col-md-4">
                    <li>
                      <Link href="/destination">Jammu & Kashmir</Link>
                    </li>
                    <li>
                      <Link href="/destination">Tamil Nadu</Link>
                    </li>
                    <li>
                      <Link href="/destination">Karnataka</Link>
                    </li>
                    <li>
                      <Link href="/destination">Maharashtra</Link>
                    </li>
                    <li>
                      <Link href="/destination">Goa</Link>
                    </li>
                  </div>
                  <div className="col-md-4">
                    <li>
                      <Link href="/destination">North East</Link>
                    </li>
                    <li>
                      <Link href="/destination">Kerala</Link>
                    </li>
                    <li>
                      <Link href="/destination">Madhya Pradesh</Link>
                    </li>
                    <li>
                      <Link href="/destination">Leh Ladakh</Link>
                    </li>
                    <li>
                      <Link href="/destination">Andaman Nicobar</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="#" className="drop-down">
                Tour Types
              </Link>
              <i className="bi bi-plus dropdown-icon"></i>
              <ul className="sub-menu" style={{ width: "50px" }}>
                <div className="row">
                  <div className="col-md-4">
                    <li>
                      <Link href="#">Religious Package</Link>
                    </li>
                    <li>
                      <Link href="#">Adventure Package</Link>
                    </li>
                  </div>
                  <div className="col-md-4">
                    <li>
                      <Link href="#">Honeymoon Package</Link>
                    </li>
                    <li>
                      <Link href="#">Wildlife Package</Link>
                    </li>
                  </div>
                  <div className="col-md-4">
                    <li>
                      <Link href="#">Luxury Package</Link>
                    </li>
                    <li>
                      <Link href="#">Group Package</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <Link href="#" className="drop-down">
                Weekend Getaways
              </Link>
            </li>
            <li>
              <Link href="/about" className="drop-down">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="drop-down">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="drop-down">
                Contact
              </Link>
            </li>
          </ul>
          <div className="topbar-right d-lg-none d-block">
            <button
              type="button"
              className="modal-btn header-cart-btn"
              data-bs-toggle="modal"
              data-bs-target="#user-login"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z"
                ></path>
              </svg>
              REGISTER/ LOGIN
            </button>
          </div>
          <div className="hotline-area d-lg-none d-flex">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
              >
                <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z" />
                <path d="M15.865 7.46746C18.6983 7.4708 20.9943 9.76678 20.9976 12.6001C20.9976 12.7238 21.0468 12.8425 21.1343 12.93C21.2218 13.0175 21.3404 13.0666 21.4642 13.0666C21.5879 13.0666 21.7066 13.0175 21.7941 12.93C21.8816 12.8425 21.9308 12.7238 21.9308 12.6001C21.9269 9.2516 19.2134 6.53813 15.865 6.5343C15.6073 6.5343 15.3984 6.74318 15.3984 7.00088C15.3984 7.25859 15.6073 7.46746 15.865 7.46746Z" />
                <path d="M15.865 10.267C17.1528 10.2686 18.1964 11.3122 18.198 12.6C18.198 12.7238 18.2472 12.8424 18.3347 12.9299C18.4222 13.0174 18.5409 13.0666 18.6646 13.0666C18.7883 13.0666 18.907 13.0174 18.9945 12.9299C19.082 12.8424 19.1312 12.7238 19.1312 12.6C19.1291 10.797 17.668 9.33589 15.865 9.33386C15.6073 9.33386 15.3984 9.54274 15.3984 9.80044C15.3984 10.0581 15.6073 10.267 15.865 10.267Z" />
              </svg>
            </div>
            <div className="content">
              <span>To More Inquiry</span>
              <h6>
                <Link href="tel:+919557559891">+91 9557559891</Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <ul className="icon-list">
            {/* <li className="d-lg-flex d-none">
              <Link
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#user-login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M26 13.5C26 20.4036 20.4035 26 13.5 26C6.59632 26 1 20.4036 1 13.5C1 6.59632 6.59632 1 13.5 1C20.4035 1 26 6.59632 26 13.5Z"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5001 11.8333C18.5001 14.5947 16.2616 16.8333 13.5001 16.8333C10.7384 16.8333 8.5 14.5947 8.5 11.8333C8.5 9.07189 10.7384 6.8333 13.5001 6.8333C16.2616 6.8333 18.5001 9.07189 18.5001 11.8333Z"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.04297 23.5324C6.44287 19.7667 9.62917 16.8333 13.5008 16.8333C17.3725 16.8333 20.5588 19.7669 20.9585 23.5325"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li> */}
            <li className="right-sidebar-button"></li>
          </ul>
          <div className="hotline-area d-xl-flex d-none">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
              >
                <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z" />
                <path d="M15.865 7.46746C18.6983 7.4708 20.9943 9.76678 20.9976 12.6001C20.9976 12.7238 21.0468 12.8425 21.1343 12.93C21.2218 13.0175 21.3404 13.0666 21.4642 13.0666C21.5879 13.0666 21.7066 13.0175 21.7941 12.93C21.8816 12.8425 21.9308 12.7238 21.9308 12.6001C21.9269 9.2516 19.2134 6.53813 15.865 6.5343C15.6073 6.5343 15.3984 6.74318 15.3984 7.00088C15.3984 7.25859 15.6073 7.46746 15.865 7.46746Z" />
                <path d="M15.865 10.267C17.1528 10.2686 18.1964 11.3122 18.198 12.6C18.198 12.7238 18.2472 12.8424 18.3347 12.9299C18.4222 13.0174 18.5409 13.0666 18.6646 13.0666C18.7883 13.0666 18.907 13.0174 18.9945 12.9299C19.082 12.8424 19.1312 12.7238 19.1312 12.6C19.1291 10.797 17.668 9.33589 15.865 9.33386C15.6073 9.33386 15.3984 9.54274 15.3984 9.80044C15.3984 10.0581 15.6073 10.267 15.865 10.267Z" />
              </svg>
            </div>
            <div className="content">
              <span>To More Inquiry</span>
              <h6>
                <Link href="tel:+919557559891">+91 9557559891</Link>
              </h6>
            </div>
          </div>
          <div className="sidebar-button mobile-menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <path d="M0 4.46439C0 4.70119 0.0940685 4.92829 0.261511 5.09574C0.428955 5.26318 0.656057 5.35725 0.892857 5.35725H24.1071C24.3439 5.35725 24.571 5.26318 24.7385 5.09574C24.9059 4.92829 25 4.70119 25 4.46439C25 4.22759 24.9059 4.00049 24.7385 3.83305C24.571 3.6656 24.3439 3.57153 24.1071 3.57153H0.892857C0.656057 3.57153 0.428955 3.6656 0.261511 3.83305C0.0940685 4.00049 0 4.22759 0 4.46439ZM4.46429 11.6072H24.1071C24.3439 11.6072 24.571 11.7013 24.7385 11.8688C24.9059 12.0362 25 12.2633 25 12.5001C25 12.7369 24.9059 12.964 24.7385 13.1315C24.571 13.2989 24.3439 13.393 24.1071 13.393H4.46429C4.22749 13.393 4.00038 13.2989 3.83294 13.1315C3.6655 12.964 3.57143 12.7369 3.57143 12.5001C3.57143 12.2633 3.6655 12.0362 3.83294 11.8688C4.00038 11.7013 4.22749 11.6072 4.46429 11.6072ZM12.5 19.643H24.1071C24.3439 19.643 24.571 19.737 24.7385 19.9045C24.9059 20.0719 25 20.299 25 20.5358C25 20.7726 24.9059 20.9997 24.7385 21.1672C24.571 21.3346 24.3439 21.4287 24.1071 21.4287H12.5C12.2632 21.4287 12.0361 21.3346 11.8687 21.1672C11.7012 20.9997 11.6071 20.7726 11.6071 20.5358C11.6071 20.299 11.7012 20.0719 11.8687 19.9045C12.0361 19.737 12.2632 19.643 12.5 19.643Z" />
            </svg>
          </div>
        </div>
      </header>

      {/* <div className="home2-banner-area desktop-view">
        <div className="swiper home1-banner-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image src={homebanner1} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={homebanner2} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={homebanner3} alt="" />
            </div>
            <div className="swiper-slide">
              <Image src={homebanner4} alt="" />
            </div>
          </div>
        </div>
        <div className="slider-btn-grp">
          <div className="slider-btn home1-banner-prev">
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className="slider-btn home1-banner-next">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div> */}

      <div className="home2-banner-area mobile-view">
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
              <Image src={banner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner23} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner33} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner4} alt="" />
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
      </div>
    </>
  );
};

export default Header;
