import React, { useState, useEffect } from "react";
import getIndustriesData from "../components/IndustriesItemData";
import CustomHead from '../components/CustomHead'
import GetMetaData from '../components/metadata'
import dynamic from "next/dynamic";

const Header=dynamic(()=>import('../components/header'))
const Footer = dynamic(() => import('../components/footer'))
const LetsProceed =dynamic(()=>import('../components/lets-proceed'))
const Animation=dynamic(()=>import('../components/Animation'))
const Collapse=dynamic(()=>import('../components/collapse'))
const Services = () => {
  const MetaData = GetMetaData('Services')

  const [customClass, setCustomClass] = useState("");
  const Industries = getIndustriesData("services");

  
  return (
    <>

      {/* Header Satart */}
      <CustomHead
        pagetitle={MetaData.pagetitle}
        description={MetaData.description}
        metatitle={MetaData.metatitle}
        canonical={MetaData.canonical}
      >
        <link rel="stylesheet" href="../assets/css/services.css  " />
      </CustomHead>
      {/* Header End */}

      {/* <Header /> */}
      {/* <h1>This is services Page</h1> */}
      {/* services banner start */}
      <div className="service-banner">
        {/* Header start */}
        <Header
          page={""}
          onMenuClick={(v) => setCustomClass(v ? "active" : "")}
        />
        {/* Header End */}
        <div className="row comp-row pt-3">
          <div className="col-lg-8 service-banner-col">
            <div className="service-banner-title text-end">
              <p>
                We <span>Facilitate</span> clients with
              </p>
              <h1 className="pt-4 pb-3">
                AI-Driven Apps, Software, and Website Development
              </h1>
              <p>
                Experimenting Great Concepts with Creativity to Create
                Impeccable Technology Solutions for Modern Businesses.
              </p>
              <div className='collapse-btn'>
                <Collapse />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-banner-img">
              <img
                src="../assets/images/services/banner.webp"
                className="w-100"
                alt="Hexabells Banner"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* services banner end */}
      {/* Technology in Action start */}
      <div className="tech-action">
        <div className="row comp-row">
          <div className="col-lg-5 tech-action-img">
            <img
              src="/assets/images/services/askfor.webp"
              className="w-100"
              alt="Technology in Action"
              loading="lazy"
            />
          </div>
          <div className="col-lg-7">
            <div className="tech-action-item">
              <span>Technology in Action</span>
              <h2 className="pt-4 pb-2">To Turn Ideas into Driving Force</h2>
              <p>
                Feature-richness, intuitive designs, personalized user
                experiences, seamless performance, and stringent security
                collectively set the standards for modern-day web-based
                solutions. And this is where predictive analysis and innovative
                AI-based technologies can give businesses a competitive edge.
              </p>
              <p>
                Whether you&apos;ve got a well-researched and adequately funded
                idea, a new mobile app, software, or web project, or you are
                planning to modernize and reengineer your legacy system, we can
                help take your product to the next level with our technological
                expertise and experience.
              </p>
              <div className="pt-5">
                {/* <CTA CtaName="Know more" href="/about" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Technology in Action end */}

      {/* Our core competencies start*/}
      <div className="competencies">
        <div className="row core-comp-main-row">
          <div className="col-12 comp-title-col">
            <div className="core-comp-title">
              <span>Our Core Competencies</span>
              <h2 className="pt-4 pb-2">
                How We Can <span>Help</span> You?
              </h2>
              <p>
                With a team of highly <u> creative designers, developers, data
                  analysts </u>, and <u> AI/ML experts </u> who have rich experience in their
                respective fields, we specialize in a wide range of services and
                solutions to meet the ever-changing needs of business.
              </p>
              {/* <CTA CtaName="Send" /> */}
            </div>
          </div>
        </div>
        <div className="row core-comp-main-row gx-0 comp-row core-comp-reverse-row">
          <div className="col-lg-6 core-comp-img">
            <img
              src="/assets/images/services/Services1.webp"
              className="w-100"
              alt="Website Development"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <div className="core-comp-item core-comp-item-left">
              <h3>Website Development</h3>
              <p>
                With a strong foothold in full stack web development,
                 we specialise in developing websites that effectively 
                 communicate with your target audiences, drive the right
                  traffic, promote conversions and unlock new avenues for
                   sales and business development.
              </p>
              {/* <CTA CtaName="Know more" /> */}
            </div>
          </div>
        </div>
        <div className="row core-comp-main-row gx-0 comp-row">
          <div className="col-lg-6 core-comp-img">
            <img
              src="/assets/images/services/Services2.webp"
              className="w-100"
              alt="Application Development"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <div className="core-comp-item">
              <h3>Application Development</h3>
              <p>
                Whether you are planning to develop native applications or wish
                to move to a cross-platform solution for seamless performance,
                we can develop mobile apps for both Android and iOS devices as
                well as deliver hybrid app solutions to meet and exceed your
                business objectives.
              </p>
              {/* <CTA CtaName="Know more" /> */}
            </div>
          </div>
        </div>
        <div className="row core-comp-main-row gx-0 comp-row core-comp-reverse-row">
          <div className="col-lg-6 core-comp-img">
            <img
              src="/assets/images/services/Services3.webp"
              className="w-100"
              alt="Custom Software Development"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <div className="core-comp-item core-comp-item-left">
              <h3>Custom Software Development</h3>
              <p>
                If you are looking for a custom software solution exclusively
                tailored to fit your requirements that is also ready for the
                impending future, then we can help. We bring in our extensive
                experience to design, develop, and deploy cutting-edge software
                products that add value and give your business a competitive
                edge.
              </p>
              {/* <CTA CtaName="Know more" /> */}
            </div>
          </div>
        </div>
        <div className="row core-comp-main-row gx-0 comp-row">
          <div className="col-lg-6 core-comp-img">
            <img
              src="/assets/images/services/Services4.webp"
              className="w-100"
              alt="Product Modernization and Re-engineering"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <div className="core-comp-item">
              <h3>Product Modernization and Re-engineering</h3>
              <p>
                Own a legacy platform that no longer serves your fast-scaling
                operations but is loved by your users? Our skilled developers
                can transform your traditional websites, web-based portals, and
                utilities into advanced platforms by adding a modern touch to
                the interfaces, functionalities, and data.
              </p>
              {/* <CTA CtaName="Know more" /> */}
            </div>
          </div>
        </div>
        <div className="row core-comp-main-row gx-0 comp-row core-comp-reverse-row">
          <div className="col-lg-6 core-comp-img">
            <img
              src="/assets/images/services/Services5.webp"
              className="w-100"
              alt="MVP Development"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <div className="core-comp-item core-comp-item-left">
              <h3>MVP Development</h3>
              <p>
                Do you require a pilot project to test the market? Looking
                forward to developing a mobile app or web project from scratch?
                Or are you planning to create a small in-house portal or a
                prototype to catch the attention of the investors? HexaBells can
                provide turnkey MVP solutions for existing businesses as well as
                startups.
              </p>
              {/* <CTA CtaName="Know more" /> */}
            </div>
          </div>
        </div>
        <div className="row core-comp-main-row gx-0 comp-row">
          <div className="col-lg-6 core-comp-img">
            <img
              src="/assets/images/services/Services6.webp"
              className="w-100"
              alt="Maintenance and Support"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <div className="core-comp-item">
              <h3>Maintenance and Support</h3>
              <p>
                We take full responsibility for the performance and quality of
                our developed solutions and products and we aim for perfection.
                Once the solution/product is developed and deployed, we provide
                continuous support and maintenance to help our clients make the
                most of it.
              </p>
              {/* <CTA CtaName="Know more" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* Our core competencies end*/}

      {/* Development cycle start */}
      <div className="dev-cycle">
        <div className="custom-container">
          <div className="row comp-row">
            <div className="col-lg-8 col-12">
              <div className="dev-cycle-title">
                <span>Development Cycle</span>
                <h2 className="pt-4 pb-2">
                  What Goes into Our <span>Development Process?</span>
                </h2>
                <p className="mb-0">
                  Putting good development practices into our operations, which
                  run on agile methodologies, we undertake each project as a
                  challenge and strive to strike gold every time. We have
                  divided our approach into multiple steps, each of which is
                  equally vital to delivering a well-thought of and crafted
                  product that can help you make a difference.
                </p>
              </div>
            </div>
          </div>
          <Animation />
        </div>
      </div>
      {/* Development cycle end */}

      {/* Industries we served start */}
      {/* <div className="indus-we-serve">
        <div className="custom-container">
          <div className="row comp-row">
            <div className="col-lg-7 col-12">
              <div className="indus-we-serve-title">
                <span>Industries we serve</span>
                <h2 className="pt-4 pb-2">
                  Generating 360° Values for Modern Organizations
                </h2>
                <p>
                  Every Day, in Every Way, to Drive Processes and Professionals
                </p>
              </div>
            </div>
          </div>
          <div>
            <IndustriesItem data={Industries} />
          </div>
        </div>
      </div> */}
      {/* Industries we served end */}

     
      {/* Let's Proceed start */}
      <div className="services-let-proceed">
        <LetsProceed />
      </div>
      {/* Let's Proceed end */}
      <Footer />
    </>
  );
};

export default Services;
