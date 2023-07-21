import React, { useState } from 'react'

import dynamic from 'next/dynamic'

import GetMetaData from '../components/metadata'
import CustomHead from '../components/CustomHead'
const Header = dynamic(() => import('../components/header.js'))
const Footer = dynamic(() => import('../components/footer.js'))
const CTA = dynamic(() => import('../components/cta.js'))
const LetsProceed = dynamic(() => import('../components/lets-proceed.js'))
const Collapse = dynamic(() => import('../components/collapse.js'))
const Careers = dynamic(() => import('../components/careers.js'))



const About = () => {
  const MetaData = GetMetaData('About')

  const [customClass, setCustomClass] = useState('')
  return (
    <>
    {/* Header Start */}
      <CustomHead
        pagetitle={MetaData.pagetitle}
        description={MetaData.description}
        metatitle={MetaData.metatitle}
        canonical={MetaData.canonical}
        
      >
        <link  rel="stylesheet" href="/assets/css/about.css" />
      </CustomHead>
    {/* Header End */}

      {/* about banner */}
      <div className="about-banner">
        <Header onMenuClick={(v) => setCustomClass(v ? 'active' : '')} page={""} />
        <div className="row pt-3">
          <div className="col-md-12 col-lg-8">
            <div className="about-banner-content">
              <div className='about-banner-subtitle'>We are <span> @Hexabells</span></div>
              <h1 className='pt-4 pb-3'>Passion combined with experience</h1>
              <p className='mb-5'>Based out of Noida, India, Hexabells Technologies Pvt. Ltd. is a modern-age strategic digital and
                tech innovation enabler that specializes in developing
                mobile apps, web applications, websites and digital
                solutions powered by <span> AI, Machine Learning </span>,
                <span> Deep Learning </span>
                and  <span> NLP technologies </span>for businesses across the globe.</p>
              <CTA CtaName="Learn more" onClick={() => window.scrollTo(0, 500)} />
              <div className='collapse-btn' >
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                    <Collapse />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="about-banner-img">
              <img src="/assets/images/about-hexabells.webp"
                className='ing-fluid' alt="About Banner" loading="lazy" />
              <div className="about-banner-img-content">
                <span>Working together to push limits <br /> and grow together.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about banner end */}

      {/*  About page counter  */}
      <div className="about-counter">
        <div className="row bg-white">
          <div className="col-md-12 col-lg-5">
            <div className="about-counter-left">
              <div className="about-counter-left-item">
                <div className="row about-counter-left-item-row">
                  <div className="col-12 col-sm-4">
                    <span>50 <sub>+</sub> </span>
                  </div>
                  <div className="col-12 col-sm-8 about-counter-p">
                    <p>Tech  covered</p>
                  </div>
                </div>
              </div>
              <div className="about-counter-left-item">
                <div className="row about-counter-left-item-row">
                  <div className="col-12 col-sm-4">
                    <span>95    <sub>%</sub> </span>
                  </div>
                  <div className="col-12 col-sm-8 about-counter-p">
                    <p>Success rate</p>
                  </div>
                </div>
              </div>
              <div className="about-counter-left-item">
                <div className="row about-counter-left-item-row">
                  <div className="col-12 col-sm-4">
                    <span>50 <sub>+</sub> </span>
                  </div>
                  <div className="col-12 col-sm-8 about-counter-p">
                    <p>Team Members</p>
                  </div>
                </div>
              </div>
              <div className="about-counter-left-item">
                <div className="row about-counter-left-item-row">
                  <div className="col-12 col-sm-4">
                    <span > 90 </span>
                  </div>
                  <div className="col-12 col-sm-8 about-counter-p">
                    <p>Net Promoter <br /> Score(NPS)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-7 bg-dark">
            <div className="about-counter-right">
              <div className="about-counter-right-item ">
                <img src="/assets/images/mission.svg" alt="Our  Vision" />
                <h6 >Our <span> Vision</span></h6>
                <p>Be the <span> Technology Enabler and the Change Catalyst</span> for partner businesses and pave the way for a better, digital future.</p>
              </div>
              <div className="about-counter-right-item">

                <img src="/assets/images/vision.svg" alt="Our Mission" />
                <h6 >Our <span> Mission</span></h6>
                <p><span> One-stop destination for modern organizations </span> to get their hands on the best of technology and digital solutions for sustainable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  About page counter end  */}

      {/* The Idea Behind */}
      <div className="idea-behind">
        <div className="row gx-0">
          <div className="col-lg-5 idea-behind-col">
            <div className="idea-behind-img">
              <img src="/assets/images/idea-behind.webp"
                className='w-100' alt="HexaBells" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-7 idea-behind-col">
            <div className="idea-behind-content">
              <div className='idea-behind-sub-title'>The <span> Idea</span> behind</div>
              <h2 className='pt-3'>HexaBells</h2>
              <p>Being entrepreneurs ourselves, we understand that
                constant, inside out technology transformation is
                perhaps the only way businesses can stay afloat and
                capitalize on the opportunities that the digital age offers.
              </p>

              <p>However, finding the right platform that can serve with
                end-to-end solutions to meet the ever-changing tech needs
                is the biggest struggle for most businesses, and this
                is where HexaBells stands out.</p>
              <p>
                Working as a change
                catalyst, HexaBells is an attempt to make innovative,
                future-proof technology-driven solutions easily
                accessible to modern organizations to help them
                survive and thrive in today’s competitive landscape.</p>

            </div>
          </div>
        </div>
      </div>
      {/* The Idea Behind end*/}

      {/* Team of */}
      <div className="team-of">
        <div className="row">
          <div className="col-lg-7">
            <div className="team-of-title">
              <span>A Team of</span>
              <h2 className='pt-4 pb-3'>&quot;Digital Scientists&quot;</h2>
              <p>That&apos;s how our clientele address us, and honestly,
                we love it. We are obsessed with creativity, innovation,
                and technology, challenging what is, while outlining what
                lies ahead. <br /> <br /> HexaBells gives us the platform to contemplate
                genius concepts, brainstorm different ideas, and play
                with some of the most fascinating technologies,
                and that gives us the confidence to think out-of-the-box
                and come up with innovative web solutions to meet and
                exceed the tech needs of our clients.</p>

            </div>
          </div>
          <div className="col-lg-5 team-of-img-col">
            <div className="team-of-img">
              <img src="/assets/images/we-craft-solutions-img-about.webp"
                className='w-100' alt="A Team of" loading="lazy" />
              
            </div>
          </div>
        </div>
      </div>
      {/* Team of  end */}

      {/* Meat the  team */}
      <div className="meat-the-team">
        <div className="row meat-the-team-row">
          <div className="col-12 col-sm-7 meat-the-team-col">
            <div className="meat-the-team-title pb-5">
              <span>Meet the team</span>
              <h2 className='pt-4 pb-2'>Led by a group of <span> industry pioneers</span></h2>
              <p>We strive for a diverse, inclusive and supportive team of proactive creators and strategic thinkers, working together.</p>
            </div>
          </div>
        </div>
        <div className="custom-container">

          <div className="row odd-row gx-0">
            <div className="col-md-12 col-lg-6 team-col">
              <div className='meat-team-item'>
                <div className="meat-team-item-left">
                  <img src="/assets/images/Deepak-Tiwari.webp"
                    className='w-100' alt="Deepak Tiwari" loading="lazy" />
                </div>
                <div className="meat-team-item-right bg-light">

                  <h3>Deepak Tiwari </h3>
                  <p>Head Honcho <br/> (CEO)</p>
                </div>

              </div>
            </div>
            <div className="col-md-12 col-lg-6 team-col">
              <div className='meat-team-item'>
                <div className="meat-team-item-left">
                  <img src="/assets/images/Isaac-Roy.webp"
                    className='w-100' alt="Isaac Roy" loading="lazy" />
                </div>
                <div className="meat-team-item-right bg-light">
                  <h3>Isaac Roy</h3>
                  <p>Master Handshaker <br/> (HOD of BD)</p>
                </div>

              </div>
            </div>
          </div>
          <div className="row even-row gx-0">
            <div className="col-md-12 col-lg-6 team-col">
              <div className='meat-team-item'>
                <div className="meat-team-item-left">
                  <img src="/assets/images/Vishwa-Deepak.webp"
                    className='w-100' alt="Vishwa Deepak" loading="lazy" />
                </div>
                <div className="meat-team-item-right bg-light">
                  <h3>Vishwa Deepak</h3>
                  <p>Chief Rockstar <br/> (Project Manager)</p>
                </div>

              </div>
            </div>
            <div className="col-md-12 col-lg-6 team-col">
              <div className='meat-team-item'>
                <div className="meat-team-item-left">
                  <img src="/assets/images/Abhishek-Pandey.webp"
                    className='w-100' alt="Abhishek Pandey" loading="lazy" />
                </div>
                <div className="meat-team-item-right bg-light">
                  <h3>Abhishek Pandey</h3>
                  <p>Lead Code Wizard <br/> (App Developer)</p>
                </div>

              </div>
            </div>
          </div>
          <div className="row odd-row gx-0">
            <div className="col-md-12 col-lg-6 team-col">
              <div className='meat-team-item'>
                <div className="meat-team-item-left">
                  <img src="/assets/images/Amit-Kumar.webp"
                    className='w-100' alt="Amit Kumar" loading="lazy" />
                </div>
                <div className="meat-team-item-right bg-light">
                  <h3>Amit Kumar</h3>
                  <p>Creative Maestro <br/> (UI/UX Designer)</p>
                </div>

              </div>
            </div>
            <div className="col-md-12 col-lg-6 team-col">
              <div className='meat-team-item'>
                <div className="meat-team-item-left">
                  <img src="/assets/images/Afjal-Hussain.webp"
                    className='w-100' alt="Afjal Hussain" loading="lazy" />
                </div>
                <div className="meat-team-item-right bg-light">
                  <h3>Afjal Hussain</h3>
                  <p>Brogrammer <br/> (Full Stack Developer)</p>
                </div>

              </div>
            </div>
          </div>
          <div className="row even-row gx-0">
            <div className="col-md-12 col-lg-6 team-col">
              <div className='meat-team-item'>
                <div className="meat-team-item-left">
                  <img src="/assets/images/Akanksha-Tripathi.webp"
                    className='w-100' alt="Akanksha Tripathi" loading="lazy" />
                </div>
                <div className="meat-team-item-right bg-light">
                  <h3>Akanksha Tripathi</h3>
                  <p>Brand Warrior <br/> (Marketing)</p>
                </div>

              </div>
            </div>
            <div className="col-md-12 col-lg-6 team-col">
              <div className='meat-team-item'>
                <div className="meat-team-item-left">
                  <img src="/assets/images/Deepika-Chaudhary.webp"
                    className='w-100' alt="Deepika Chaudhary" loading="lazy" />
                </div>
                <div className="meat-team-item-right bg-light">
                  <h3>Deepika Chaudhary</h3>
                  <p>Social Sensei <br/> (Digital Expert)</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Meat the  team */}

      {/* Careers Start */}
      <div className='careers'>
        <Careers />
      </div>
      {/* Careers End */}


      {/* Lets proceed */}
      <div className="about-lets-proceed">
        <LetsProceed />
      </div>
      {/* Lets proceed end */}
      <Footer />
    </>
  )
}

export default About