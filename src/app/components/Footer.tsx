import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section style-2">
      <div className="container">
        <div className="footer-top">
          <div className="row g-lg-4 gy-5 justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 ">
              <div className="footer-widget">
                <div className="widget-title">
                  <div
                    _ngcontent-serverapp-c80=""
                    className="xh-footer-col-title"
                    style={{ marginBottom: "10px" }}
                  >
                    Get Free Quotes
                  </div>
                </div>
                <div className="single-contact mb-30">
                  <div className="widget-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <g clip-path="url(#clip0_1139_225)">
                        <path d="M17.5107 13.2102L14.9988 10.6982C14.1016 9.80111 12.5765 10.16 12.2177 11.3262C11.9485 12.1337 11.0514 12.5822 10.244 12.4028C8.44974 11.9542 6.0275 9.62168 5.57894 7.73772C5.3098 6.93027 5.84808 6.03314 6.65549 5.76404C7.82176 5.40519 8.18061 3.88007 7.28348 2.98295L4.77153 0.470991C4.05382 -0.156997 2.97727 -0.156997 2.34929 0.470991L0.644745 2.17553C-1.0598 3.96978 0.82417 8.72455 5.04066 12.941C9.25716 17.1575 14.0119 19.1313 15.8062 17.337L17.5107 15.6324C18.1387 14.9147 18.1387 13.8382 17.5107 13.2102Z" />
                      </g>
                    </svg>
                    <h5>Call</h5>
                  </div>
                  <a href="tel:+919557559891">+91 9557559891</a>
                </div>
                <div className="single-contact mb-35">
                  <div className="widget-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path d="M19.9018 8.6153C19.5412 5.99522 18.1517 3.62536 16.0393 2.02707C13.9268 0.428777 11.2643 -0.267025 8.63745 0.0927308C6.01063 0.452486 3.63468 1.83833 2.03228 3.94539C0.42988 6.05245 -0.267711 8.70813 0.0929693 11.3282C0.388972 13.4966 1.38745 15.509 2.9363 17.0589C4.48516 18.6088 6.49948 19.6113 8.67243 19.9136C9.11786 19.9713 9.56656 20.0002 10.0157 20C11.8278 20.0033 13.606 19.5101 15.1563 18.5744C15.2358 18.5318 15.3058 18.4735 15.362 18.4031C15.4182 18.3326 15.4595 18.2516 15.4833 18.1648C15.5072 18.078 15.5131 17.9872 15.5007 17.8981C15.4884 17.8089 15.458 17.7232 15.4114 17.6461C15.3648 17.569 15.303 17.5021 15.2298 17.4496C15.1565 17.397 15.0733 17.3599 14.9853 17.3403C14.8972 17.3208 14.806 17.3193 14.7173 17.336C14.6287 17.3527 14.5443 17.3871 14.4694 17.4373C12.7129 18.4904 10.6392 18.8886 8.61629 18.5613C6.59339 18.2339 4.75224 17.2022 3.4197 15.6492C2.08717 14.0962 1.34948 12.1225 1.3376 10.0784C1.32573 8.03438 2.04043 6.05225 3.35483 4.48397C4.66923 2.91568 6.49828 1.86271 8.51723 1.512C10.5362 1.16129 12.6144 1.53554 14.383 2.56829C16.1515 3.60104 17.4959 5.22548 18.1776 7.1532C18.8592 9.08092 18.8338 11.1872 18.1061 13.0981C17.9873 13.4102 17.7626 13.6709 17.4711 13.8349C17.1795 13.999 16.8396 14.056 16.5104 13.996C16.1811 13.9361 15.8833 13.763 15.6687 13.5068C15.454 13.2506 15.3362 12.9275 15.3356 12.5936V5.37867C15.3356 5.2024 15.2654 5.03336 15.1404 4.90872C15.0155 4.78408 14.846 4.71406 14.6693 4.71406C14.4925 4.71406 14.3231 4.78408 14.1981 4.90872C14.0731 5.03336 14.0029 5.2024 14.0029 5.37867V6.52578C13.2819 5.70734 12.3261 5.12961 11.265 4.8708C10.204 4.61198 9.08877 4.68456 8.0704 5.07873C7.05203 5.47289 6.17966 6.16961 5.57134 7.07458C4.96303 7.97954 4.64814 9.04908 4.66929 10.1384C4.69045 11.2278 5.04663 12.2843 5.68962 13.1651C6.33262 14.0459 7.23139 14.7084 8.2643 15.0629C9.2972 15.4175 10.4144 15.4469 11.4646 15.1473C12.5149 14.8477 13.4475 14.2335 14.1362 13.3878C14.3015 13.9385 14.6358 14.4237 15.092 14.775C15.5482 15.1263 16.1033 15.326 16.6793 15.3461C17.2553 15.3662 17.8231 15.2057 18.3028 14.887C18.7825 14.5684 19.15 14.1078 19.3535 13.5699C19.9483 11.99 20.1368 10.2866 19.9018 8.6153ZM10.0051 14.0185C9.21436 14.0185 8.4414 13.7847 7.78396 13.3465C7.12651 12.9083 6.61409 12.2856 6.3115 11.5569C6.00891 10.8283 5.92974 10.0265 6.08399 9.25296C6.23825 8.47943 6.61902 7.7689 7.17813 7.21122C7.73724 6.65354 8.4496 6.27376 9.22511 6.1199C10.0006 5.96603 10.8045 6.045 11.535 6.34681C12.2655 6.64863 12.8899 7.15973 13.3292 7.8155C13.7685 8.47126 14.0029 9.24223 14.0029 10.0309C14.0019 11.0882 13.5803 12.1018 12.8308 12.8494C12.0813 13.597 11.065 14.0175 10.0051 14.0185Z" />
                    </svg>
                    <h5>Send Mail</h5>
                  </div>
                  <a href="#">
                    <span>info@travelride.in</span>
                  </a>
                </div>
                <div className="single-contact">
                  <div className="widget-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      //   xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 22.9 23"
                      //   style={style}
                      //   xml:space="preserve"
                    >
                      <g transform="translate(0 -0.002)">
                        <g>
                          <defs>
                            <rect y="0" width="22.9" height="23"></rect>
                          </defs>
                          <clipPath>
                            <use
                              //   xlink:href="#SVGID_1_"
                              style={{ overflow: "visible;" }}
                            ></use>
                          </clipPath>
                          <g transform="translate(0 0.002)" className="st0">
                            <path
                              className="st1"
                              d="M6.5,0c0.4,0,0.8,0.2,0.9,0.6c0,0.1,0,0.2,0,0.3c0,0.8,0,1.5,0,2.2c0,0.1,0,0.2,0,0.4    C7.2,4,6.8,4.3,6.3,4.2C6,4.2,5.8,3.9,5.7,3.6c0-0.2,0-0.5,0-0.7c0-0.6,0-1.2,0-1.9c0-0.1,0-0.2,0-0.4c0-0.3,0.2-0.5,0.5-0.6    C6.2,0,6.4,0,6.5,0 M16.1,0.1c-0.3,0.1-0.4,0.3-0.5,0.6c0,0.1,0,0.2,0,0.4c0,0.6,0,1.2,0,1.9c0,0.2,0,0.5,0,0.7    c0.1,0.5,0.6,0.7,1,0.6c0.3-0.1,0.6-0.3,0.6-0.7c0-0.1,0-0.2,0-0.4c0-0.6,0-1.2,0-1.9c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.3-0.3-0.5    C16.8,0.1,16.6,0,16.4,0C16.3,0,16.2,0,16.1,0.1 M3.9,1.5c-0.5,0-1,0-1.4,0.1C2.1,1.7,1.7,1.8,1.3,2C0.7,2.5,0.2,3.2,0.1,4    C0,4.3,0,4.6,0,5c0,0.7,0,1.4,0,2.1c7.6,0,15.2,0,22.9,0c11.5,0,0,0,0,0c0-0.7,0-1.3,0-1.9c0-0.2,0-0.4,0-0.7    c0-0.7-0.3-1.3-0.7-1.9c-0.4-0.5-1-0.8-1.6-1c-0.8-0.1-1.7-0.1-2.5-0.1v0c0,0.6,0,1.3,0,1.9c0,0.2,0,0.4-0.1,0.5    c-0.1,0.3-0.3,0.6-0.6,0.7c-0.7,0.5-1.8,0.4-2.3-0.3c-0.2-0.3-0.3-0.6-0.3-0.9c0-0.6,0-1.3,0-1.9v0H8.1v1.4c0,0.2,0,0.4,0,0.6    c0,0.2,0,0.4-0.1,0.5C7.9,4.3,7.7,4.6,7.4,4.8C7.2,5,6.8,5.1,6.5,5.1c-0.3,0-0.7-0.1-1-0.3C5.2,4.6,5.1,4.3,5,4    C4.9,3.8,4.9,3.6,4.9,3.5c0-0.6,0-1.3,0-1.9L3.9,1.5z M0,8.3c0,3.8,0,7.6,0,11.4c0,0.3,0,0.5,0.1,0.8c0.1,0.6,0.4,1.2,0.8,1.6    c0.4,0.4,1,0.7,1.6,0.8C2.8,23,3,23,3.3,23h16.3c0.3,0,0.5,0,0.8,0c0.2,0,0.4-0.1,0.6-0.2c0.5-0.2,1-0.6,1.4-1.1    c0.2-0.3,0.4-0.7,0.5-1.1c0-0.3,0.1-0.5,0.1-0.8c0-3.7,0-7.5,0-11.2c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0,0-0.1,0-0.1,0L0,8.3    C0,8.3,0,8.3,0,8.3 M9.2,10.7c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.4,0.4,0.7c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.7,0.4    c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.4-0.7c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2C8.9,10.8,9.1,10.7,9.2,10.7     M13.5,10.7c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.4,0.4,0.7c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.7,0.4    c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.4-0.7c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2C13.2,10.7,13.3,10.7,13.5,10.7     M17.7,10.7c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.4,0.4,0.7c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.7,0.4    c-0.3,0-0.6-0.1-0.8-0.3c-0.4-0.4-0.5-1.1-0.1-1.5C17.2,10.8,17.4,10.7,17.7,10.7 M5,14.6c0.6,0,1.1,0.4,1.2,1c0,0,0,0,0,0    c0,0.6-0.4,1.1-1,1.2c-0.3,0-0.6-0.1-0.8-0.3C4.1,16.3,4,16,4,15.7c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2    C4.7,14.6,4.9,14.6,5,14.6 M9.3,14.6c0.6,0,1.1,0.4,1.2,1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.7,0.4    c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.4-0.7c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2C9,14.6,9.1,14.6,9.3,14.6     M13.5,14.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.4,0.7c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.7,0.4    c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.4-0.7c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2C13.2,14.6,13.3,14.6,13.5,14.6     M17.7,14.6c0.6,0,1.1,0.4,1.2,1c0,0.3-0.1,0.6-0.3,0.8c-0.4,0.4-1.1,0.5-1.5,0.1c-0.2-0.2-0.3-0.4-0.4-0.7    c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2C17.4,14.6,17.6,14.6,17.7,14.6 M5,18.5c0.6,0,1.1,0.4,1.2,1c0,0,0,0,0,0    c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.7,0.4c-0.3,0-0.6-0.1-0.8-0.3C4.1,20.2,4,19.9,4,19.6c0-0.3,0.1-0.6,0.3-0.8    c0.1-0.1,0.2-0.2,0.3-0.2C4.7,18.5,4.9,18.5,5,18.5 M9.3,18.5c0.6,0,1.1,0.4,1.1,1c0,0.6-0.4,1.1-1,1.1c-0.3,0-0.6-0.1-0.8-0.3    c-0.4-0.4-0.5-1.1-0.1-1.5c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.3-0.2C9,18.5,9.1,18.5,9.3,18.5 M13.5,18.5c0.3,0,0.6,0.1,0.8,0.3    c0.2,0.2,0.3,0.5,0.3,0.7c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.7,0.4c-0.3,0-0.6-0.1-0.8-0.3c-0.4-0.4-0.5-1.1-0.1-1.5    c0.1-0.1,0.2-0.2,0.3-0.2C13.2,18.5,13.4,18.5,13.5,18.5"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h5>Chat</h5>
                  </div>
                  <a href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3631117,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866!16s%2Fg%2F11rs9vlwsk?entry=ttu">
                    House Mon - Sat: 10:AM - 07:PM
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="footer-widget">
                <div className="widget-title">
                  <div
                    _ngcontent-serverapp-c80=""
                    className="xh-footer-col-title"
                    style={{ marginBottom: "10px;" }}
                  >
                    Our Company
                  </div>
                </div>

                <ul className="widget-list">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-lg-center justify-content-sm-start">
              <div className="footer-widget">
                <div className="widget-title">
                  <div
                    _ngcontent-serverapp-c80=""
                    className="xh-footer-col-title"
                    style={{ marginBottom: "10px;" }}
                  >
                    Guest Service
                  </div>
                </div>

                <ul className="widget-list">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms Condition</a>
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Pay Now</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6  col-sm-6 col-6  d-flex justify-content-lg-end justify-content-sm-end">
              <div className="footer-widget">
                <div className="widget-title">
                  <div
                    _ngcontent-serverapp-c80=""
                    className="xh-footer-col-title"
                    style={{ marginBottom: "10px;" }}
                  >
                    Social
                  </div>
                </div>

                <div className="payment-partner">
                  <ul className="widget-list">
                    <li>
                      <a href="https://www.facebook.com/Travelride.in/">
                        <i className="fa-brands fa-facebook"></i>&nbsp;Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Travelride_in">
                        <i className="fa-brands fa-square-twitter"></i>
                        &nbsp;Twitter
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/travelride.in/">
                        <i className="fa-brands fa-square-instagram"></i>
                        &nbsp;Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/travelride">
                        <i className="fa-brands fa-linkedin"></i>&nbsp;Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-lg-end justify-content-sm-end">
              <div className="footer-widget">
                <div className="widget-title">
                  <div
                    _ngcontent-serverapp-c80=""
                    className="xh-footer-col-title"
                    style={{ marginBottom: "10px;" }}
                  >
                    Payment
                  </div>
                </div>

                <Link
                  href="//www.dmca.com/Protection/Status.aspx?ID=57f850de-3652-4348-b02c-762f6cbad55a"
                  title="DMCA.com Protection Status"
                  className="dmca-badge"
                >
                  <Image
                    src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=57f850de-3652-4348-b02c-762f6cbad55a"
                    alt="DMCA.com Protection Status"
                  />
                </Link>
                <script
                  src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
                  async
                ></script>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-12 d-flex flex-md-row flex-column align-items-center justify-content-md-between justify-content-center flex-wrap gap-3">
              <p>© Copyright 2024 Travelride </p>
              <div className="footer-right">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
