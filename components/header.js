import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = (props) => {
  const router = useRouter();
  const [selectedLink, setSelectedLink] = useState(router.pathname);

  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isHideMenu, setIsHideMenu] = useState(true);
  const HideMenu = () => {
    alert("helo");
    setIsHideMenu(!isHideMenu);
  };

  const [windowWidth, setWindowWidth] = useState(993);
  const [stickyClass, setStickyClass] = useState("");
  const [smLogoClass, setSmLogoClass] = useState(false);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 100) {
        setStickyClass("header-row-sticky");
        setSmLogoClass(true);
      } else {
        setStickyClass("");
        setSmLogoClass(false);
      }
    }
  };
  const Links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Expertise",
      path: "/expertise",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    setWindowWidth(screen.width);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  return (
    <>
      {/* toggle menu */}
      <div
        className={`row  ${stickyClass} ${
          props.page == undefined ? "pt-4" : "pt-4 fixHeader"
        } `}
        id="header-row"
      >
        <div className="col-12">
          {/* <div
            className={`d-none toggle-menu-list-container  ${
              !isShowMenu && "Hide "
            }`}
          >
            <div className="row"></div>
          </div> */}
          {/* toggle menu end */}

          <div className="custom-container">
            <div className="row" id="stickyMenuRow">
              <div
                className={`${
                  smLogoClass || props.page != undefined
                    ? "col-md-8"
                    : "col-md-12 logo-reverse"
                } col-lg-6 logo-reverse-index`}
              >
                <div
                  className={`hexabells-logo ${
                    smLogoClass || props.page != undefined ? "reset" : ""
                  }`}
                >
                  <span className={`${props.page == 'Blogs' ? '' : 'logo-bg'}`}>
                  <Link href="/">
                  {stickyClass && (props.page == 'Blogs')?  
                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 74 74.02">
                 <path id="LogoMark" d="M2061.465.586l.069-18.024,6.49-6.508,6.438,6.463L2074.4.51l-6.512,6.51ZM2031-29.885,2068.105-67,2105-30.1,2086.77-11.873l-18.664-18.665-18.883,18.882Z" transform="translate(-2031 67)" fill="#eb7373"/>
               </svg>
                :  
                      <img
                        src={`/assets/images/hexabells-logo.webp`}
                        alt="Hexabells Logo"
                        width={221}
                        height={40}
                      />
                      }
                     

                      {/* } */}
                      {/* <img
                                                src={`/assets/images/${replaceLogo ? 'hexabells-logo.png' : "sticky-logo.svg"}`}
                                                alt="Hexabells Logo"
                                            /> */}
                      {/* <img
                                            src="/assets/images/sticky-logo.svg"

                                            alt=""
                                        /> */}
                    </Link>
                  </span>
        
                 
        
                </div>
              </div>
              <div
                className={`${
                  smLogoClass || props.page != undefined
                    ? "col-md-4"
                    : "col-md-12 menu-reverse"
                } col-lg-6 text-end d-flex justify-content-end menu-toggle-icon`}
              >
                <span>
                  <div
                    className="toggle-menu"
                    onClick={() => {
                      setIsShowMenu(!isShowMenu);
                      props.onMenuClick(true);
                    }}
                  >
                    <div className="toggle-menu-icons"></div>
                    <div className="toggle-menu-icons"></div>
                    <div className="toggle-menu-icons"></div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ opacity: "0" }}
        className={`leftMenu   ${!isShowMenu && "Hide "}`}
        onClick={() => {
          setIsShowMenu(!isShowMenu);
          props.onMenuClick(false);
        }}
      ></div>
      <div
        style={{ opacity: "0" }}
        className={`rightMenu bg-white  ${!isShowMenu && "Hide "}`}
      >
        <div className="menu-bar ">
          <div className="emptyDiv"></div>
          <div className="toggle-cancel mb-5">
            <div className="pe-5">Eng</div>{" "}
            <div
              className="cancel-icon"
              onClick={() => {
                setIsShowMenu(!isShowMenu);
                props.onMenuClick(false);
              }}
            >
              &#x2715;
            </div>
          </div>
          <div className="collapse-toggle-menu mt-4 ">
            <ul type="none">
              {Links.map((li) => {
                return (
                  <li
                    key={li.path}
                    className={
                      li.path == selectedLink ? "header-li-active" : ""
                    }
                  >
                    <Link
                      href={li.path}
                      onClick={() => setSelectedLink(li.path)}
                    >
                      {li.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="row mt-3 menu-custom-row">
            {/* <div className="col-md-8 border-end toggle-menu-footer-right">
              <div className="ps-4  toggle-menu-footer">
                <h6>
                  {" "}
                  <b>Hexabells Technologies Pvt. Ltd.</b>{" "}
                </h6>
                <p>
                  C-10, First Floor, Sector 3, <br /> Noida, UP - 201301
                </p>
              </div>
            </div> */}
            <div className="col-md-12 social-icon-col">
              <div className="social-icon">
                <Link href="https://twitter.com/InfoHexabells" target="_blank">
                  <img
                    src="/assets/images/twitter-icon.svg"
                    className="img-fluid"
                    alt="Twitter Icon"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/hexabells"
                  target="_blank"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/linkedin.svg"
                    alt="LinkedIn icon"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/p/Cq-SmqCrTXX"
                  target="_blank"
                >
                  <img
                    className="img-fluid"
                    src="/assets/images/Blogs/instagram.svg"
                    alt="Instagram icon"
                  />
                </Link>
                <Link href="https://www.facebook.com/hexabells" target="_blank">
                  <img
                    src="/assets/images/fb-icon.svg"
                    className="img-fluid"
                    alt="Facebook Icon"
                  />
                </Link>
              </div>
              <span>2023 www.hexabells.com All rights reserved</span>
            </div>
            {/* <div className="col-md-2 col-sm-6 social-icon-col">
              <div className="social-icon d-flex justify-content-center flex-column align-items-start">
                <Link href="https://www.linkedin.com/company/hexabells" target="_blank">
                  <img
                    className="img-fluid mb-md-4"
                    src="/assets/images/linkedin.svg"
                    alt="LinkedIn icon"
                  />
                </Link>

                <Link href="https://www.facebook.com/hexabells" target="_blank">
                  <img
                    src="/assets/images/fb-icon.svg"
                    className="img-fluid"
                    alt="Facebook Icon"
                  />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
