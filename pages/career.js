import React, { useState } from 'react'
import CTA from '../components/cta'
import Footer from '../components/footer'
import Header from '../components/header'
import Head from 'next/head'

const Career = () => {
    const [customClass, setCustomClass] = useState('')

    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow " />
                <meta name="googlebot" content="noindex" />
                <meta name="googlebot-news" content="nosnippet" />

                <title>This is career</title>
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/footer.css" />
                
                <link rel="stylesheet" href="/assets/css/career.css" />

                

            </Head>
            {/* Header section */}
            <Header onMenuClick={(v) => setCustomClass(v ? 'active' : '')} />
            {/* Header section end */}

            <div className='career'>
                
                    <div className="row my-5">
                         <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                            <h1 className='text-center'>Coming Soon</h1>
                        <p className='text-center mb-5 mt-4'>The page you are looking for might have been removed had its
                                name changed or is temporarily unavailable.</p>
                        <div className='text-center'>  <CTA CtaName="Back To Home" href="/" /></div>
                         </div>
                    </div>
                
            </div>

            {/* footer */} 
              <Footer/>
            {/* footer end */}

        </>
    )
}

export default Career