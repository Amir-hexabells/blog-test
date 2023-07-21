import React, { useState } from "react";
import CTA from "./cta";
import NewsletterUserTemplate from "../Templates/newsletter-user-temp";
import NewsLetterBdTemplate from "../Templates/newsletter-bd-temp";
const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState(1);
  const [isApiHitComplete, setIsApiHitComplete] = useState(true);
  const [isEmailSent, setIsEmailSent] = useState(false);
  // NewsletterUserTemplate
  const subScribeNewsLetter = async (e) => {
    e.preventDefault();
    let isFormCanSubmit = true;
    if (email == "") {
      isFormCanSubmit = false;
      setEmailStatus(0);
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/.test(email)) {
      isFormCanSubmit = false;
      setEmailStatus(0);
    } else {
      setEmailStatus(1);
    }

    if (isFormCanSubmit) {
      setIsApiHitComplete(false);
      setIsEmailSent(false);
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "info@hexabells.com",
          subject: "New User Subscription",
          html: NewsLetterBdTemplate(email),
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
            html: NewsletterUserTemplate(),
          }),
        });
        const resp = await res.json();
        console.log(resp);
        if (resp.command == 1) {
          setIsEmailSent(true);
          setEmail("");
          setTimeout(() => {
            setIsEmailSent(false);
          }, 5000);
        }
        setIsApiHitComplete(true);
      } else {
        setIsApiHitComplete(true);
      }
      //   console.log("success");
    }
  };
  return (
    <>
      <div className="home-news-letter">
        <div className="custom-container">
          <div className="row news-letter-row">
            <div className="col-md-12 col-lg-6 ">
              <div className="home-news-letter-content">
                <span className="subtitle">Subscribe to our</span>
                <h2 className="pt-4">Newsletter</h2>
                <p>We are going to share only 2 mails per week</p>
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className={`${emailStatus == 0 ? "invalid" : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 position-relative">
              <div className="news-letter-cta">
                {isApiHitComplete ? (
                  isEmailSent ? (
                    <div class="alert alert-success" role="alert">
                      Thank You!
                    </div>
                  ) : (
                    <CTA
                      CtaName="Subscribe"
                      href=""
                      onClick={subScribeNewsLetter}
                    />
                  )
                ) : (
                  <div class="spinner-border text-dark" role="status"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
