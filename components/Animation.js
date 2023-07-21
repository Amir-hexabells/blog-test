import React, { useEffect } from "react";
import CTA from "./cta";
const Animation = () => {
  useEffect(() => {
    const startAnimation_box = (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "slide-in-from-bottom",
          entry.isIntersecting
        );
        // observer.unobserve(entry.target)
      });
    };

    const startAnimation_dot = (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "slide-in-dot",
          entry.isIntersecting
        );
        // observer.unobserve(entry.target)
      });
    };

    const observer1 = new IntersectionObserver(startAnimation_box,{rootMargin: "-15%",threshold: 0.9 });
    // const options = { root: null, rootMargin: "100px", threshold: 1 };

    const elements1 = document.querySelectorAll(".animation-box");
    elements1.forEach((el) => {
      observer1.observe(el);
    });

    const observer2 = new IntersectionObserver(startAnimation_dot,{rootMargin: "-30px",threshold:1 });

    const elements2 = document.querySelectorAll(".dev-cycle-inner-div");
    elements2.forEach((el) => {
      observer2.observe(el);
    });
  }, []);
  return (
    <>
      <div className="dev-cycle-animation-outer-div">
        <div className="dev-cycle-inner-div">
          <div className="animation-outer-box odd">
            <span className="cycle-heading">Strategic Analysis</span>
            <span className="cycle-number">01</span>
            <div className="animation-box">
              <img src="/assets/images/services/dev-target.svg" alt="Strategic Analysis" />
              <h3>Strategic Analysis</h3>
              <p>
                Our main focus is to find out internal and external
                 strengths & weaknesses that affect the organizations growth
              </p>
            </div>
          </div>
        </div>
        <div className="dev-cycle-inner-div">
          <div className="animation-outer-box">
            <span className="cycle-heading">Planning</span>
            <span className="cycle-number">02</span>
            <div className="animation-box">
              <img src="/assets/images/services/planning.svg" alt="Planning" />
              <h3>Planning</h3>
              <p>
                This phase involves documentation of the plans, 
                deliverables and requirements also the project
                 schedules required for completion of project
              </p>
            </div>
          </div>
        </div>
        <div className="dev-cycle-inner-div">
          <div className="animation-outer-box odd">
            <span className="cycle-heading">UI / UX Designing</span>
            <span className="cycle-number">03</span>
            <div className="animation-box">
              <img src="/assets/images/services/ui.svg" alt="UI / UX Designing" />
              <h3>UI / UX Designing</h3>
              <p>
                Screens, buttons, toggles, icons, and other visual elements. And
                interaction you have with a product, including how you feel
                about the interaction.
              </p>
            </div>
          </div>
        </div>
        <div className="dev-cycle-inner-div">
          <div className="animation-outer-box">
            <span className="cycle-heading">Development</span>
            <span className="cycle-number">04</span>
            <div className="animation-box">
              <img src="/assets/images/services/development.svg" alt="Development" />
              <h3>Development</h3>
              <p>This phase involves development of the services using different development techniques.</p>
            </div>
          </div>
        </div>
        <div className="dev-cycle-inner-div">
          <div className="animation-outer-box odd">
            <span className="cycle-heading">Testing</span>
            <span className="cycle-number">05</span>
            <div className="animation-box">
              <img src="/assets/images/services/testing.svg" alt="Testing" />
              <h3>Testing</h3>
              <p>
                Different testing techniques takes place in this particular phase for evaluating and verifying a software and make it ready for deployment.
              </p>
            </div>
          </div>
        </div>
        <div className="dev-cycle-inner-div">
          <div className="animation-outer-box">
            <span className="cycle-heading">Deployement</span>
            <span className="cycle-number">06</span>
            <div className="animation-box">
              <img src="/assets/images/services/deployement.svg" alt="Deployement" />
              <h3>Deployement</h3>
              <p>
                Publishing of software or updates that are made or validated through testing are now ready for deployment.
              </p>
            </div>
          </div>
        </div>
        <div className="dev-cycle-inner-div">
          <div className="animation-outer-box odd">
            <span className="cycle-heading">Maintenance & Support</span>
            <span className="cycle-number">07</span>
            <div className="animation-box">
              <img src="/assets/images/services/support.svg" alt="Maintenance & Support" />
              <h3>Maintenance & Support</h3>
              <p>
                Support and Maintenance Plan (SMP) provides you with one year of
                application support, general corrective software updates for
                versions of the software .
              </p>
            </div>
          </div>
        </div>
        <div className="cycle-release-btn">
          <div className="cycle-release-inner-div">
            <span>Product Release</span>
            <CTA CtaName="Let's start today!" href="/contact-us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
