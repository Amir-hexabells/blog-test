import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic.js";

import IndustriesItem from "../components/IndustriesItem";
import getIndustriesData from "../components/IndustriesItemData";
import CustomHead from '../components/CustomHead'
import GetMetaData from '../components/metadata'
const Footer = dynamic(() => import('../components/footer'))
const Header = dynamic(() => import('../components/header'))
const CTA=dynamic(()=>import('../components/cta'))
const LetsProceed=dynamic(()=>import('../components/lets-proceed'))

const Expertise = () => {
  const MetaData = GetMetaData('Expertise')

  const [customClass, setCustomClass] = useState("");
  const Industries = getIndustriesData("expertise");

  useEffect(() => {
    let carouselOne = document.getElementById("c1");
    let carouselTwo = document.getElementById("c2");

    var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    console.log(width);
    if (width < 993) {
      carouselOne.innerHTML += carouselTwo.innerHTML;
      carouselTwo.innerHTML = "";
    } else {
      const observer1 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(
              "slide-in-from-right-one",
              entry.isIntersecting
            );
          });
        },
        { rootMargin: "-30%", threshold: 0 }
      );
      observer1.observe(document.getElementById("c1"));

      const observer2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(
              "slide-in-from-right-two",
              entry.isIntersecting
            );
          });
        },
        { rootMargin: "-20%", threshold: 0 }
      );
      observer2.observe(document.getElementById("c2"));
    }
  }, []);
  return (
    <>

      <CustomHead
        pagetitle={MetaData.pagetitle}
        description={MetaData.description}
        metatitle={MetaData.metatitle}
        canonical={MetaData.canonical}
      >
        <link rel="stylesheet" href="/assets/css/expertise.css" />
      </CustomHead>
     

      {/* Expertise Banner */}
      <div className="expertise-banner">
        <div>
          <Header
            onMenuClick={(v) => setCustomClass(v ? "active" : "")}
            page={""}
          />
        </div>
        <div className="row pt-4 ">
          <div className="col-lg-4 expertise-banner-col">
            <div className="expertise-banner-img">
              <img
                className="img-fluid"
                src="/assets/images/expertise-banner.webp"
                alt="Expertise Banner"
                loading="lazy"
              />
            </div>
          </div>
          <div className=" col-lg-8 expertise-banner-col">
            <div className="expertise-banner-title">
              <div className="banner-sub-title">
                Our <span> Expertise</span>
              </div>
              <h1 className="pt-4 pb-2">Driven by data, fueled by passion </h1>
              <p className="mb-5">
                We collaborate with the top businesses in the world across a
                range of <u> sectors</u> and <u>industries</u> to help them stay
                on top of the rapidly evolving technology trends. Let us assist
                you in connecting your brand with customers and nurturing an
                unmatched user experience.
              </p>
              <CTA
                CtaName="All Industries"
                onClick={() => window.scrollTo(0, 570)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Expertise Banner end */}

      {/* Industries & Area */}
      <div className="industries-area">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-7 expertise-banner-col">
              <div className="industries-area-title">
                <span>Industries & Areas</span>
                <h2 className="pt-4">
                  Our <span> Verticals Focused</span>
                </h2>
                <p>
                  We at HexaBells wish to leave our mark in a variety of
                  industries. Our brief yet significant experience taught us
                  about how clients behave in various industries. Our
                  imagination and viewpoint are crucial in adjusting to that
                  unique vertical.
                </p>
              </div>
            </div>
          </div>
          <div>
            <IndustriesItem data={Industries} />
          </div>
        </div>
      </div>
      {/* Industries & Area end */}

      {/* our tech stack start */}
      <div className="tech-stack-outer-div">
        <div className="custom-container comp-row">
          <div className="row">
            <div className="col-12">
              <div className="tech-stack-title">
                <span>Our tech. stack</span>
                <h2 className="pt-4 pb-2">
                  <span>Technologies and Tools</span> we are well versed in
                </h2>
                <p>
                  Our developers use the best available technologies and embrace
                  new ones.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tech-stack-carousel-outer-div comp-row">
          <div className="tech-stack-carousel-one" id="c1">
            <div className="tech-image">
              <img src="/assets/images/services/jquery.svg" alt="Jquery" />
              <span>Jquery</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/erlang.svg" alt="ER Lang" />
              <span>ER Lang</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/postgresql.svg" alt="Postgre Sql" />
              <span>Postgre Sql</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/docker.svg" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/aws.svg" alt="AWS Services" />
              <span>AWS Services</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/nodejs.svg" alt="Node JS" />
              <span>Node JS</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/jenkins.svg" alt="Jenkins" />
              <span>Jenkins</span>
            </div>
          </div>
          <div className="tech-stack-carousel-two" id="c2">
            <div className="tech-image">
              <img src="/assets/images/services/reactjs.svg" alt="React JS" />
              <span>React JS</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/android.svg" alt="Android" />
              <span>Android</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/apple.svg" alt="Apple" />
              <span>Apple</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/kibana.svg" alt="Kibana" />
              <span>Kibana</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/kubernet.svg" alt="Kubernetes" />
              <span>Kubernetes</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/ruby.svg" alt="Ruby" />
              <span>Ruby</span>
            </div>
            <div className="tech-image">
              <img src="/assets/images/services/nextdotjs.svg" alt="Next Dot JS" />
              <span>Next Dot JS</span>
            </div>
          </div>
          <div className="many-more comp-row">
            <span>And many more</span>
          </div>
        </div>
      </div>
      {/* our tech stack end */}
      {/* Let's proceed */}
      <div className="services-let-proceed">
        <LetsProceed />
      </div>
      {/* Let's proceed end */}
      <Footer />
    </>
  );
};

export default Expertise;
