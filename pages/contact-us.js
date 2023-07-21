import React, { useState } from "react";
import dynamic from "next/dynamic.js";
import ContactUserTemplate from "../Templates/contact-us-user-temp";
import ContactUsBdTemplate from "../Templates/contact-us-bd-temp.js";
import CustomHead from "../components/CustomHead";
import GetMetaData from "../components/metadata";

const Header = dynamic(() => import("../components/header"));
const Footer = dynamic(() => import("../components/footer"));
const CTA = dynamic(() => import("../components/cta"));
const CustomModal = dynamic(() => import("../components/CustomModal"));
const Careers = dynamic(() => import("../components/careers"));

const ContactUs = () => {
  const MetaData = GetMetaData("ContactUs");

  const [customClass, setCustomClass] = useState("");
  const [name, setName] = useState("");
  const [nameColor, setNameColor] = useState("#000");
  const [email, setEmail] = useState("");
  const [emailColor, setEmailColor] = useState("#000");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("#000");
  const [attachment, setAttachment] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [isApiHitComplete, setIsApiHitComplete] = useState(true);
  const [MailStatus, setMailStatus] = useState(false);
  const [error, setError] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);

  const contactUsFormSubmit = async (e) => {
    e.preventDefault();
    console.log("contact us btn clicked");

    let isFormCanSubmit = true;
    if (name == "") {
      isFormCanSubmit = false;
      setNameColor("#ff0000");
    } else {
      setNameColor("#000");
    }
    //
    if (email == "") {
      isFormCanSubmit = false;
      setEmailColor("#ff0000");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/.test(email)) {
      isFormCanSubmit = false;
      setEmailColor("#ff0000");
    } else {
      setEmailColor("#000");
    }

    if (message == "") {
      isFormCanSubmit = false;
      setMessageColor("#ff0000");
    } else {
      setMessageColor("#000");
    }

    if (isFormCanSubmit) {
      setIsApiHitComplete(false);
      setMailStatus(false);
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "info@hexabells.com",
          subject: "User Enquiry",
          html: ContactUsBdTemplate(name, email, message),
        }),
      });
      const resp = await res.json();
      console.log(resp);

      if (resp.command == 1) {
        const res = await fetch("/api/sendmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: email,
            subject: "Hexabells Technologies Pvt. Ltd.",
            html: ContactUserTemplate(name),
          }),
        });
        const resp = await res.json();
        console.log(resp);
        if (resp.command == 1) {
          setMailStatus(true);
          setName("");
          setEmail("");
          setMessage("");
          setAttachment([]);
          setTimeout(() => {
            setMailStatus(false);
          }, 5000);
        } else {
          setError(true);
        }
        setIsApiHitComplete(true);
      } else {
        setError(true);
        setIsApiHitComplete(true);
      }
    }
  };
  return (
    <>
      <CustomHead
        pagetitle={MetaData.pagetitle}
        description={MetaData.description}
        metatitle={MetaData.metatitle}
        canonical={MetaData.canonical}
      >
        <link rel="stylesheet" href="../assets/css/contact.css" />
        {/* <link rel="stylesheet" href="../assets/css/custommodal.css" /> */}
      </CustomHead>

      <div className="front-Banner">
        {/* <div className="banner-bg-image"> */}
        <img
          className="banner-img w-100 d-none d-sm-none d-md-none d-lg-block"
          src="/assets/images/ContactPage.png"
          alt="Contact Us Banner"
          loading="lazy"
        />
        <div className="banner-bg-content">
          <div className="row">
            <div className="col-12">
              <Header
                onMenuClick={(v) => setCustomClass(v ? "active" : "")}
                page={""}
              />
            </div>
            <div className="col d-none d-sm-none d-md-none d-lg-block "></div>
            <div className="col-lg-4 col-sm-12">
              <div className="Contact-form">
                <div className="form-group">
                  <label
                    htmlFor="surname"
                    className={nameColor == "#ff0000" ? "empty-error" : ""}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`form-control`}
                    placeholder="eg. John wayne"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className={emailColor == "#ff0000" ? "empty-error" : ""}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control`}
                    placeholder="eg. John.wayne@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="message"
                    className={messageColor == "#ff0000" ? "empty-error" : ""}
                  >
                    Message
                  </label>
                  <textarea
                    className={`form-control`}
                    rows="3"
                    placeholder="eg. I'd like to start a new project next week..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Attachments</label>
                  <input
                    type="file"
                    hidden
                    id="attachments"
                    onChange={(e) => setAttachment(e.target.files[0])}
                  />
                  <div
                    className="attachment"
                    onClick={() =>
                      document.getElementById("attachments").click()
                    }
                  >
                    <span>Drag and drop file(s) or browse your files</span>
                    <span>{selectedFileName}</span>
                  </div>
                </div>

                <div className="contact-form-cta mt-4">
                  <CTA CtaName="Send" onClick={(e) => contactUsFormSubmit(e)} />
                  <br />
                  {isApiHitComplete ? (
                    MailStatus ? (
                      <div class="alert alert-success" role="alert">
                        Response sent successfully
                      </div>
                    ) : (
                      error && (
                        <div class="alert alert-danger" role="alert">
                          Something went wrong!, please try again
                        </div>
                      )
                    )
                  ) : (
                    <div class="alert alert-warning" role="alert">
                      Loading...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* Floating Address start */}
      {/* <div className="floating-address-box">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-md-12 address-outer-div">
            <div className="ad-box">
              <div className="leftdiv">
                <div className="top">
                  <h3 className="mb-0">Hexabells Technologies Pvt. Ltd.</h3>
                </div>
                <div className="bottom">
                  <span>
                    C-10, First Floor, Sector 3, <br /> Noida, UP - 201301 <br />
                    <a href="tel:+91 7982574168">+91 7982574168</a> | <a href="mailto:info@hexabells.com">info@hexabells.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="rightdiv">
                <div className="top">
                  <Link href="https://www.facebook.com/hexabells" target="_blank">
                    <img src="/assets/images/fb-icon.svg" alt="Hexabells Facebook Icon" />
                  </Link>
                </div>
                <div className="bottom">
                  <Link href="https://twitter.com/InfoHexabells" target="_blank">
                    <img src="/assets/images/twitter-icon.svg" alt="Hexabells Twitter Icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div> */}
      {/* Floating Address End */}

      {/* Map Start */}
      <div className="map-banner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.2088177694324!2d77.31970487023202!3d28.582256360436762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55bd48af063%3A0xd8aa4da72082171!2sHexabells%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1684758888914!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Map End */}

      {/* Info Div Start */}
      <div className="info-div">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-div">
              <h3>Need a proposal quickly?</h3>
              <h4 className="mt-3"> Fill out the brief.</h4>
              <span className="desc">
                Describe your requirements, and we will produce an initial offer
                for you within 24 hours.
              </span>
              <div className="mt-4">
                <CTA CtaName="Let's share brief" href="/cost-estimator" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-div">
              <h3>Do you want to meet us?</h3>
              <h4 className="mt-3">Select a date.</h4>
              <span className="desc mb-4">
                Write us an e-mail via this form, or just send us an email
                directly at info@hexabells.com
              </span>

              <div className="mt-4">
                <CTA
                  CtaName="Let's start today!"
                  onClick={() => setIsShowModal(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Info Div End */}

      {/* Careers Start */}
      <div className="careers">
        <Careers />
      </div>
      {/* Careers End */}
      <Footer />

      {/* Modal start*/}
      <CustomModal show={isShowModal} onHide={() => setIsShowModal(false)} />
      {/* Modal End*/}
    </>
  );
};

export default ContactUs;
