import React, { Component } from "react";
import CTA from "./cta";
import LandingPageBdTemplate from "../Templates/landing-page-bd-temp";
import ContactUserTemplate from "../Templates/contact-us-user-temp";
const interests = [
  {
    id: 1,
    name: "Custom Software Development",
    selected: false,
  },
  {
    id: 2,
    name: "Web Development",
    selected: false,
  },
  {
    id: 3,
    name: "App Development",
    selected: false,
  },
  {
    id: 4,
    name: "MVP Development",
    selected: false,
  },
  {
    id: 5,
    name: "Product Modernization",
    selected: false,
  },
  {
    id: 6,
    name: "Product Re-engineering",
    selected: false,
  },
  {
    id: 7,
    name: "Maintenance & Support",
    selected: false,
  },
];
export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      role: "",
      companyName: "",
      contactNo: "",
      email: "",
      invalidUsername: 0,
      invalidRole: 0,
      invalidCompanyName: 0,
      invalidContactNo: 0,
      invalidEmail: 0,
      isApiHitComplete: true,
      mailStatus: false,
      isError: false,
      allInterests: [...interests],
    };
  }
  onInterestClick = (id) => {
    let arr = this.state.allInterests;
    arr.forEach((el) => {
      if (el.id == id) {
        el.selected = !el.selected;
      }
    });
    this.setState({ allInterests: arr });
  };

  onBookMeeting = async (e) => {
    e.preventDefault();

    let isFormCanSubmit = true;

    if (this.state.username == "") {
      isFormCanSubmit = false;
      this.setState({ invalidUsername: 1 });
    } else {
      this.setState({ invalidUsername: 0 });
    }
    if (this.state.role == "") {
      isFormCanSubmit = false;
      this.setState({ invalidRole: 1 });
    } else {
      this.setState({ invalidRole: 0 });
    }

    if (this.state.companyName == "") {
      isFormCanSubmit = false;
      this.setState({ invalidCompanyName: 1 });
    } else {
      this.setState({ invalidCompanyName: 0 });
    }

    if (this.state.contactNo != "") {
      if (this.state.contactNo.length < 10) {
        isFormCanSubmit = false;
        this.setState({ invalidContactNo: 1 });
      } else {
        this.setState({ invalidContactNo: 0 });
      }
    } else {
      this.setState({ invalidContactNo: 0 });
    }

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/.test(this.state.email)
    ) {
      isFormCanSubmit = false;
      this.setState({ invalidEmail: 1 });
    } else {
      this.setState({ invalidEmail: 0 });
    }

    if (isFormCanSubmit) {
      this.setState({ isApiHitComplete: false, mailStatus: false });
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "info@hexabells.com",
          subject: "User Enquiry",
          html: LandingPageBdTemplate(this.state),
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
            to: this.state.email,
            subject: "Hexabells Technologies Pvt. Ltd.",
            html: ContactUserTemplate(this.state.username),
          }),
        });
        const resp = await res.json();
        console.log(resp);
        if (resp.command == 1) {
          this.state.allInterests.forEach((el) => {
            el.selected = false;
          });
          this.setState({
            mailStatus: true,
            username: "",
            role: "",
            companyName: "",
            contactNo: "",
            email: "",
          });
          setTimeout(() => {
            this.setState({ mailStatus: false });
          }, 5000);
        } else {
          this.setState({ isError: true });
        }
        this.setState({ isApiHitComplete: true });
      } else {
        this.setState({ isApiHitComplete: true, isError: true });
      }
    }
  };
  render() {
    return (
      <>
        <div
          className={`custom-modal-dialog ${
            this.props.show ? "show-modal-dialog" : "hide-modal"
          }`}
          onClick={() => this.props.onHide()}
        ></div>
        <div
          className={`custom-modal-outer-div ${
            this.props.show ? "show-modal" : "hide-modal"
          }`}
        >
          <div className="modal-hello">
            <div className="custom-modal-header">
              <div className="cancel-icon" onClick={() => this.props.onHide()}>
                &#x2715;
              </div>
            </div>
            <div className="custom-modal-body ">
              <form action="">
                <p>
                  I am{" "}
                  <input
                    type="text"
                    placeholder="Name and surname"
                    className={`${
                      this.state.invalidUsername == 1 ? "invalid" : ""
                    }`}
                    value={this.state.username}
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                  and <br /> I am a{" "}
                  <input
                    type="text"
                    placeholder="Role"
                    className={`${
                      this.state.invalidRole == 1 ? "invalid" : ""
                    }`}
                    value={this.state.role}
                    onChange={(e) => this.setState({ role: e.target.value })}
                  />{" "}
                  in{" "}
                  <input
                    type="text"
                    placeholder="Company name"
                    className={`${
                      this.state.invalidCompanyName == 1 ? "invalid" : ""
                    }`}
                    value={this.state.companyName}
                    onChange={(e) =>
                      this.setState({ companyName: e.target.value })
                    }
                  />
                </p>
                <p className="middle-para">
                  Actually, <span> I am interested in </span>
                </p>
                <ul type="none" >
                  {this.state.allInterests.map((el) => {
                    return (
                      <li
                        className={`interest${el.selected ? " active" : ""}`}
                        key={el.id}
                        onClick={() => this.onInterestClick(el.id)}
                      >
                        {el.name}
                      </li>
                    );
                  })}
                </ul>
                {/* <p>No, I'm Looking for something else!</p> */}
                <p className=" last-p">
                  You can <span> reach out </span>
                  to me at{" "}
                  <input
                    type="text"
                    placeholder="contact phone"
                    className={`${
                      this.state.invalidContactNo == 1 ? "invalid" : ""
                    }`}
                    maxLength={11}
                    value={this.state.contactNo}
                    onChange={(e) => {
                      // Only Number character in that range allowed
                      if (e.target.value == "") {
                        this.setState({ contactNo: "" });
                      } else {
                        if (e.target.value.match(/^[0-9]+$/)) {
                          this.setState({ contactNo: e.target.value });
                        }
                      }
                    }}
                  />
                  or{" "}
                  <input
                    type="text"
                    placeholder="business e-mail"
                    className={`${
                      this.state.invalidEmail == 1 ? "invalid" : ""
                    }`}
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />{" "}
                 <br /> for further proceedings.{" "}
                </p>
                <CTA
                  CtaName="Book a meeting"
                  onClick={(e) => this.onBookMeeting(e)}
                />
              </form>

              {this.state.isApiHitComplete ? (
                this.state.mailStatus ? (
                  <div class="alert alert-success" role="alert">
                    Response sent successfully
                  </div>
                ) : (
                  this.state.isError && (
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
            <div className="Heelo-tag">Hello !</div>
          </div>
        </div>
      </>
    );
  }
}
