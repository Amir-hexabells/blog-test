import React from 'react'
import CTA from './cta';

const LetsProceed = () => {
  return (
    <>
          <div className="row">
              <div className="col-lg-5 lets-proceed-img-col">
                  <div className="lets-proceed-img">
                      <img
                          src="/assets/images/lets-proceed1.webp"
                          className="w-100"
                          height={700}
                          alt="Let's Proceed"
                          loading="lazy"
                      />
                      <div className="lets-proceed-img-content">
                          <span>
                              &quot;The bad news is time flies. <br /> The good news is you&apos;re
                              the pilot&quot;
                          </span>
                          <p className='pt-2'>-Michael altshuler</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-7 lets-proceed-img-col">
                  <div className="lets-proceed-content">
                      <span className="subtitle">Let&apos;s proceed;</span>
                      <h2 className='pt-4 mb-5'>
                          We&apos;ll put you in touch with the <br /> finest individual.
                      </h2>
                      <CTA CtaName="Contact here!" href="/contact-us" />
                  </div>
              </div>
          </div>
    </>
  )
}

export default LetsProceed;