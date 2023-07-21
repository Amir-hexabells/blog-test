import React from "react";
import Link from "next/link";

import Classes from "../styles/newfooter.module.css";

const Footer = () => {
  return (
    <>
      <div className={Classes["footer"]}>
        {/* footer menu */}
        <div className={Classes["wrapper"]}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center">
                <div
                  className={`${Classes["footer-wrap-item"]} ${Classes["item1"]}`}
                >
                  <span className={Classes["footer-normal-text"]}>
                    Learn more
                  </span>
                  <span className={Classes["footer-link-text"]}>
                    <Link href="/about">About us</Link>
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`${Classes["footer-wrap-item"]} ${Classes["item2"]}`}
                >
                  <span className={Classes["footer-normal-text"]}>
                    Get in touch
                  </span>
                  <span className={Classes["footer-link-text"]}>
                    <Link href="/contact-us">Contact</Link>
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className={Classes["footer-wrap-item"]}>
                  <span className={Classes["footer-normal-text"]}>Your</span>
                  <span className={Classes["footer-link-text"]}>
                    <Link href="/career">Career</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={Classes["addressbar"]}>
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <span className={Classes["cmpname"]}>
                    Hexabells Technologies Pvt. Ltd.
                  </span>
                  <address className={Classes["cmpaddress"]}>
                    C-10, Block C, Sector-3, Noida 201301(U.P.) India
                  </address>
                </div>
                <div className="col-md-3">
                  <div className={Classes["social-icons"]}>
                    <a
                      href="https://twitter.com/InfoHexabells"
                      target="_blank"
                      className={`${Classes['img']} ${Classes['t-fill']}`}
                    >
                      {/* <img
                        src="/assets/images/twitter-icon.svg"
                        className="img-fluid"
                        alt="Twitter Icon"
                      /> */}
                    </a>

                    <Link
                      href="https://www.linkedin.com/company/hexabells"
                      target="_blank"
                      className={`${Classes['img']} ${Classes['l-fill']}`}
                    >
                      {/* <img
                        className="img-fluid"
                        src="/assets/images/linkedin.svg"
                        alt="LinkedIn icon"
                      /> */}
                    </Link>
                    <Link
                      href="https://www.instagram.com/p/Cq-SmqCrTXX"
                      target="_blank"
                      className={`${Classes['img']} ${Classes['i-fill']}`}
                    >
                      {/* <img
                        className="img-fluid"
                        src="/assets/images/Blogs/instagram.svg"
                        alt="Instagram icon"
                      /> */}
                    </Link>
                    <Link
                      href="https://www.facebook.com/hexabells"
                      target="_blank"
                      className={`${Classes['img']} ${Classes['f-fill']}`}
                    >
                      {/* <img
                        src="/assets/images/fb-icon.svg"
                        className="img-fluid"
                        alt="Facebook Icon"
                      /> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* footer menu end */}

        {/* copyright  */}
        <div className={Classes["copyright-wrapper"]}>
          <div className="container">
            <div className={Classes["copyright-inner-div"]}>
              <div className="row">
                <div className="col-md-9 copyright-text d-flex align-items-center">
                  <span>2023 www.hexabells.com All rights reserved</span>
                </div>
                <div className="col-md-3 copyright-link d-flex align-items-center justify-content-between">
                  <ul type="none" className="ms-0 ps-0">
                    <li>
                      <Link href="">Privacy</Link>
                    </li>
                    <li>
                      <Link href="">Cookies</Link>
                    </li>
                    <li>
                      <Link href="">Sitemap</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright end */}
      </div>
    </>
  );
};

export default Footer;
