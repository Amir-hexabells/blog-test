import React from 'react'
import CTA from './cta'

const Careers = () => {
    return (
        <>

            <div className="row">
                <div className="col-lg-7 ">
                    <div className="careers-title">
                        <span>Careers</span>
                        <h2 className="pt-4 pb-3">
                            <span>We&apos;re growing</span> and <br /> we want you to{" "}
                            <span>join us</span>
                        </h2>
                        <p className='mb-5'>
                            Explore current available positions and locate your next dream
                            job. If you don&apos;t find what you&apos;re searching for,
                            please feel free to apply for future positions.
                        </p>
                        <CTA CtaName="Open Roles" href="/career" />
                    </div>
                </div>
                <div className="col-lg-5 career-col1">
                    <div className="careers-img">
                        <img src="/assets/images/Chair.webp" className="w-100" alt="Life is short" />
                        <div className="careers-img-content">
                            <img src="/assets/images/quote.svg" alt="Quote" /><br />
                            <span>
                                Life is short. <br />
                                Work somewhere awesome
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Careers;