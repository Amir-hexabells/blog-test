import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

import CustomHead from "../components/CustomHead";
import GetMetaData from "../components/metadata";

const Header = dynamic(() => import("../components/header.js"));
const Footer = dynamic(() => import("../components/footer.js"));
const NewsLetter = dynamic(() => import("../components/news-letter.js"));
const CTA = dynamic(() => import("../components/cta.js"));
const LetsProceed = dynamic(() => import("../components/lets-proceed.js"));
const CustomModal = dynamic(() => import("../components/CustomModal.js"));
const Collapse = dynamic(() => import("../components/collapse.js"));

const Home = () => {
  const MetaData = GetMetaData("Home");
  const [customClass, setCustomClass] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(993);
  const [isFullWidthVideo, setIsFullWidthVideo] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  //console.log(allBlogs);
  // const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    setWindowWidth(screen.width);
  }, []);

  useEffect(() => {
    // if (sessionStorage.getItem("lastActivePage")) {
    //   fetchAllBlogsList(
    //     `https://sagecrm.thesagenext.com/hexabellblog/api/posts?page=${sessionStorage.getItem(
    //       "lastActivePage"
    //     )}`
    //   );
    // } else {
    fetchAllBlogsList(`https://sagecrm.thesagenext.com/hexabellblog/api/posts`);
  }, []);

  const fetchAllBlogsList = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    //  console.log(data);
    setAllBlogs(data.data);
  };
  const togglePlay = () => {
    const video = videoRef.current;
    setIsFullWidthVideo(video.paused);
    if (video.paused) {
      console.log("play");
      video.play();
    } else {
      console.log("pause");
      video.pause();
    }
  };
  // useEffect(() => {
  //   console.log(isFullWidthVideo);
  // }, [isFullWidthVideo]);

  useEffect(() => {
    const videoElement = videoRef.current;
    const options = {
      threshold: 0.25, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video is in viewport, play it
          // videoElement.play();
        } else {
          // Video is not in viewport, pause it
          setIsFullWidthVideo(false);
          videoElement.pause();
        }
      });
    }, options);

    observer.observe(videoElement);

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      {/* Head Tag Start */}
      <CustomHead
        pagetitle={MetaData.pagetitle}
        description={MetaData.description}
        metatitle={MetaData.metatitle}
        canonical={MetaData.canonical}
      ></CustomHead>
      {/* Head Tag End */}

      {/* Banner */}
      <div className={`banner ${customClass}`}>
        {/* Header start */}
        {/* <Header /> */}
        <Header onMenuClick={(v) => setCustomClass(v ? "active" : "")} />

        {/* Header End */}
        <div className="container h-100">
          <div className="row pt-3 h-100">
            <div className="col-md-12 col-lg-7">
              <div className="banner-title text-end">
                <h1>
                  Transforming Disruptive Concepts into{" "}
                  <span> Breakthrough Innovations </span> using Futuristic
                  Technology Solutions
                </h1>
                <CTA
                  CtaName="Let's start today!"
                  onClick={() => setIsShowModal(true)}
                />
                <div className="collapse-btn">
                  <Collapse />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 banner-img-desktop">
              <div className="banner-img">
                {/* {
                  windowWidth > 992 &&
                  <picture>
                    <source width="480" height="570" media="(min-width:1200px)" srcSet="/assets/images/banner.webp" />
                    <source width="400" height="600" media="(min-width:1200px)" srcSet="/assets/images/banner.webp" />
                    <source width="350" height="500" media="(min-width:992px)" srcSet="/assets/images/banner.webp" />
                    <img src="/assets/images/banner.webp" alt="Hexabells" />
                  </picture>
                } */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner end */}

      {/* We Craft Solutions that are */}
      <div className="we-craft-solutions">
        <div className="row">
          <div className="col-md-5 col-lg-5">
            <div
              className="we-craft-solutions-img"
              style={{ position: "relative" }}
            >
              {/* <picture>
                <source media="(min-width:1400px )"
                  srcSet="/assets/images/we-craft-solutions-img1.webp"
                  width={800} height={1200} />
                <source media="(min-width:1200px )"
                  srcSet="/assets/images/we-craft-solutions-img.webp"
                  width={512} height={700} />
                <source media="(min-width:768px )"
                  srcSet="/assets/images/we-craft-solutions-img2.webp"
                  width={400} height={650} />

                <img
                  src="/assets/images/we-craft-solutions-img.webp"
                  className="w-100"
                  alt="We craft solution by hexabells"
                  loading="lazy"
                />
              </picture> */}
              <video
                poster="/assets/images/video-poster.webp"
                className={isFullWidthVideo ? "full-width" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  // setIsFullWidthVideo(!isFullWidthVideo)
                  // togglePlay(e)
                }}
                controls={false}
                ref={videoRef}
                // controls={false}
              >
                <source src="/assets/images/hexabells.m4v" type="video/mp4" />
                {/* <source src="/assets/images/video.mp4" type="video/mp4" /> */}
              </video>
              <div
                className={`video-btn ${isFullWidthVideo ? "pause" : "play"}`}
                onClick={togglePlay}
              ></div>
            </div>
          </div>
          <div className="col-md-7 col-lg-7">
            <div className="we-craft-solutions-content">
              <span className="subtitle">We Craft Solutions that are</span>
              <h2 className="pt-4">Innovative. Resilient. Sustainable.</h2>
              <p>
                We love innovation. We love to combine human intelligence with
                innovative Artificial Intelligence and Machine Learning
                methodologies fueled on consumer data to learn unique systems,
                continuously adapting to dynamic environments while delivering
                comprehensive analytics and automation for complex workflows.
              </p>
              <CTA CtaName="Meet our team" href="/about" />
            </div>
          </div>
        </div>
      </div>
      {/* We Craft Solutions that are end */}

      {/* We are Focused yet Adaptive */}
      <div className="we-are-focused">
        <div className="custom-container">
          <div className="row">
            <div className="col-12 we-are-focused-title-col">
              <div className="we-are-focused-title text-end">
                <span className="subtitle">We are Focused yet Adaptive</span>
                <h2 className="pt-4">
                  As we foster{" "}
                  <span> Intelligence, Creativity, and Novelty</span>
                </h2>
                <p>
                  To unleash your business potential and capabilities we have
                  our core #4
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              <div className="adaptive-sol">
                <div className="adaptive-item">
                  <img
                    src="/assets/images/Interaction.svg"
                    height={70}
                    width={60}
                    loading="lazy"
                    alt="Interaction icons "
                  />
                  <h3 className="pt-3 pb-1">Interaction</h3>
                  <p>
                    Leveraging game-changing tools and technologies to enhance
                    user experiences for maximum output
                  </p>
                </div>
                <div className="adaptive-item">
                  <img
                    src="/assets/images/Reasoning.svg"
                    height={70}
                    width={60}
                    loading="lazy"
                    alt="Reasoning"
                  />
                  <h3 className="pt-3 pb-1">Reasoning</h3>
                  <p>
                    Drawing constructive conclusions and making future-proof
                    predictions backed by data for quick problem-solving
                  </p>
                </div>
                <div className="adaptive-item">
                  <img
                    src="/assets/images/Learning.svg"
                    height={70}
                    width={60}
                    loading="lazy"
                    alt="Learning"
                  />
                  <h3 className="pt-3 pb-1">Learning</h3>
                  <p>
                    Seamless development process with clean, high quality codes
                    to improve products’ efficiency and performance
                  </p>
                </div>
                <div className="adaptive-item">
                  <img
                    src="/assets/images/Recommendation.svg"
                    height={70}
                    width={60}
                    alt="Recommendation"
                  />
                  <h3 className="pt-3 pb-1">Recommendation</h3>
                  <p>
                    Extracting detailed insights to redesign your strategies and
                    planning your next move with smart recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* We are Focused yet Adaptive end */}

      {/* How do we do it? */}
      <div className="how-we-do">
        <div className="custom-container">
          <div className="row">
            <div className="col-12 col-md-12 how-we-do-title-col">
              <div className="how-we-do-title">
                <span className="subtitle">How do we do it?</span>
                <h2 className="pt-4">
                  We spent our most of the <span> time</span> doing.
                </h2>
                <p>
                  When two businesses collaborate impartially, they typically
                  produce excellent products.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="how-we-do-container">
          <div className="row gx-0 how-we-do-img-row">
            <div className="col-lg-6 how-we-do-img">
              <img
                src="../assets/images/Data-Analysis.webp"
                height={650}
                width={632}
                className="img-fluid"
                alt="Predictive Analytics"
              />
              <img
                src="../assets/images/Data-Analysis-icon.svg"
                className="how-we-do-img-icon"
                alt="Predictive Analytics icon"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 how-we-do-description">
              <div className="middle-align">
                <h3>Predictive Analytics</h3>
                <p>
                  Efficient data analytics help us set up meaningful and
                  tangible objectives for your success. It further enables us in
                  tracking the progress report of your business growth in an
                  easy-to-understand way. For us, driving new sales and
                  acquiring new customers is the only KPI we believe in.
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-0 ">
            <div className="col-lg-6 how-we-do-description">
              <div className="middle-align">
                <h3>Strategic Planning</h3>
                <p>
                  Equipping you with the right set of technology and resources
                  to strengthen the foundation and guide you in the process to
                  help you make the most of your business operations. We are
                  confident that we have the required expertise and experience
                  to curate innovative strategies to help you make a difference.
                </p>
              </div>
            </div>
            <div className="col-lg-6 how-we-do-img">
              <img
                src="../assets/images/Strategic-Planning.webp"
                className="img-fluid"
                height={650}
                width={632}
                alt="Strategic Planning"
              />
              <img
                src="../assets/images/Strategic-Planning-icon.svg"
                className="how-we-do-img-icon"
                alt="Strategic Planning icon"
                loading="lazy"
              />
            </div>
          </div>
          <div className="row gx-0 ">
            <div className="col-lg-6 how-we-do-img">
              <img
                src="../assets/images/Project-Management.webp"
                height={650}
                width={632}
                className="img-fluid"
                alt="Project Management"
              />
              <img
                src="../assets/images/Project-Management-icon.svg"
                className="how-we-do-img-icon"
                alt="Project Management icon"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 how-we-do-description">
              <div className="middle-align">
                <h3>Project Management</h3>
                <p>
                  Efficient project management remains at the heart of our
                  operations and we take pride in following the best development
                  practices to make things work wonders. Not only do we stick to
                  our plans, but we also keep you posted throughout so that you
                  are updated about the process and the progress.
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-0 how-we-do-img-row">
            <div className="col-lg-6 how-we-do-description">
              <div className="middle-align">
                <h3>Outcome Evaluation</h3>
                <p>
                  Multiple A/B testing helps us evaluate different strategies
                  and techniques, allowing us to formulate the most suitable
                  plans to promote sustainable results. What’s more, customized
                  checklists with different KPIs, factors and metrics help us
                  analyze and work on special areas to improve user experience.
                </p>
              </div>
            </div>
            <div className="col-lg-6 how-we-do-img">
              <img
                src="../assets/images/Outcome-Evaluation.webp"
                height={650}
                width={632}
                className="img-fluid"
                alt="Outcome Evaluation"
              />
              <img
                src="../assets/images/Outcome-Evaluation-icon.svg"
                className="how-we-do-img-icon"
                alt="Outcome Evaluation icon"
                loading="lazy"
              />
            </div>
          </div>
          <div className="row gx-0 pt-5 how-we-do-img-row how-we-do-img-row-cta">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 pt-3 our-services-cta">
              <CTA
                CtaName="Our Services"
                href="
              /services"
              />
            </div>
          </div>
        </div>
      </div>
      {/* How do we do it? end */}

      {/* industries we serve */}
      {/* <div className="industries-we-serve">
        <div className="custom-container">
          <div className="row">
            <div className="col-12 industries-we-serve-title-col">
              <div className="industries-we-serve-title">
                <span className="subtitle">Industries we serve</span>
                <h2 className="pt-4">
                  Generating 360° Values for <br /> Modern Organizations
                </h2>
                <p className="mb-0">
                  Every Day, in Every Way, to Drive Processes and Professionals
                </p>
              </div>
            </div>
          </div>
          <div>
            <IndustriesItem data={Industries} />
          </div>
          <div className="row pt-5">
            <div className="col-12">
              <CTA CtaName="All Industries" href="/expertise" />
            </div>
          </div>
        </div>
      </div> */}
      {/* industries we serve end */}

      {/* Blogs slider */}
      <div className="blogs">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              <div className="blogs-title">
                <p className="mb-0">Feeds | Articles | Blogs</p>
                <h2 className="pt-4 pb-5">
                  We publish more when you like more, <br />{" "}
                  <span> Get inspired</span> through our creatives
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container me-0 pe-0">
          <div className="row">
            <div className="col-12">
              <div className="blogs-item-container ">
                {allBlogs?.map((data, index) => (
                  <a href={`/blogs/${data.slug}`}>
                    <div className="blogs-item me-4" key={index}>
                      <div className="card">
                        <div className="blog-img">
                          <img
                            src={`https://sagecrm.thesagenext.com/${data.image}`}
                            className="w-100"
                            height={350}
                            alt="blogs_img"
                            loading="lazy"
                          />
                        </div>
                        <div className="card-body">
                          <h3 className="card-title">{data.title}</h3>
                          <p className="card-text">{data.summery}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}

                {/* <div className="blogs-item me-4">
                  {
                    allBlogs.map((data) =>{
                      return(
                           {data.title}
                      )
                    })
                  }
                  <div className="card">
                    <div className="blog-img">
                      <img
                        src="../assets/images/everything-you-know.webp"
                        className="w-100"
                        height={350}
                        alt="Everything about Front-end technologies that you need to
                        know in 2023"
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        Everything about Front-end technologies that you need to
                        know in 2023
                      </h3>
                      <p className="card-text">
                        Imagine you're going to a new restaurant that you've
                        never been to before. You walk in and are greeted by the
                        hostess, who hands you a menu...
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="blogs-item me-4">
                  <div className="card">
                    <div className="blog-img">
                      <img
                        src="/assets/images/what-we-can.webp"
                        className="w-100"
                        height={350}
                        alt="What can we expect from AI in 2023?"
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        What can we expect from AI in 2023?
                      </h3>
                      <p className="card-text">
                        This report provides an analysis of the current and
                        future state of Artificial Intelligence, and provides a
                        forecast of the industry's performance in 2023...
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <a href="/blogs">
                  <div className="blogs-item me-4">
                    <div className="card">
                      <div className="blog-img">
                        <img
                          src="/assets/images/ux-ui.webp"
                          className="w-100"
                          height={350}
                          alt="UX is not UI"
                          loading="lazy"
                        />
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">UX is not UI</h3>
                        <p className="card-text">
                          While UX targets optimizing a product or a service to
                          make it easy, effective and pleasant for someone to
                          use, UI focuses on the visual components, sensations
                          and interactivity...
                        </p>
                      </div>
                    </div>
                  </div>
                </a> */}
                <a href="/blogs">
                  <div className="blogs-item me-4">
                    <div className="card">
                      <div className="blog-img">
                        <img
                          src="/assets/images/machine.webp"
                          className="w-100"
                          height={350}
                          alt="Machines are learning, humans are forgetting"
                          loading="lazy"
                        />
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">
                          Machines are learning, humans are forgetting
                        </h3>
                        <p className="card-text">
                          Assuming that the Right to Be Forgotten is a valuable
                          right that should be protected, and given that this
                          article proves the impracticability of applying the
                          Right to Be Forgotten in machine learning
                          environments...
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="blogs-cta pt-5">
                <CTA CtaName="Explore more" href="/blogs" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blogs slider end */}

      {/* Let's proceed */}
      <div className="lets-proceed">
        <LetsProceed />
      </div>
      {/* Let's proceed end*/}

      {/* home page contents */}

      <NewsLetter />

      {/* home page contents end */}

      <Footer />

      {/* modal data */}
      {/* Modal start*/}
      <CustomModal show={isShowModal} onHide={() => setIsShowModal(false)} />
      {/* Modal End*/}
      {/* madal data end  */}
    </>
  );
};

export default Home;
