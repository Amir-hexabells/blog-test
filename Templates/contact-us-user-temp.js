export default function ContactUserTemplate(username) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title></title>
    </head>
    <body
      style="margin: 0px; padding: 0px; background-color: #ebebeb;margin:5rem 0rem;"
      bgcolor="#ebebeb"
    >
      <table
        bgcolor="#ebebeb"
        width="100%"
        border="0"
        align="center"
        cellpadding="0"
        cellspacing="0"
        style="padding:0;background-color: #ebebeb;"
      >
        <tr>
          <td style="background-color: #ebebeb;">
            <table
              width="700"
              border="0"
              valign="top"
              align="center"
              cellpadding="0"
              cellspacing="0"
              bgcolor="#ffffff"
              style="padding:2rem"
            >
              <tr>
                <td style="background-color: #ffffff;">
                  <div style="width: 100%; margin-bottom: 2rem">
                    <img
                      src="https://starfish-app-92xxn.ondigitalocean.app/assets/images/emailImage/hexabells-logo.png"
                      alt="Hexabells"
                      height="30"
                    />
                  </div>
                  <img
                    height="300"
                    width="100%"
                    src="https://starfish-app-92xxn.ondigitalocean.app/assets/images/emailImage/email-banner.png"
                    alt=""
                  />
  
                  <div>
                    <p>Hi ${username}</p>
                    <h3>
                      Welcome to
                      <span style="color: #eb7373">HexaBells Technologies</span>
                    </h3>
                    <p>
                      Thanks for contacting or getting in touch with us and to. We
                      hope we will answer to all our questions and requests for
                      that reason we just time till next dawn.
                    </p>
                    <p>
                      During this time we want you to take a look at our areas of
                      <a href="https://www.hexabells.com/expertise" target="_blank" style="color: #eb7373; text-decoration: none"
                        >expertise</a
                      >, learn about the markets and industries we're involved in.
                    </p>
                    <p>Click below to the Visit now! button.</p>
  
                    <a
                      style="
                        padding: 10px 20px;
                        background-color: #2c3441;
                        display: inline-block;
                        border-radius: 2px;
                        color: #ffffff;
                        border: 2px solid #2c3441;
                        cursor: pointer;
                        text-decoration: none;
                      "
                      href="https://www.hexabells.com/"
                      target="_blank"
                    >
                      Visit now!
                  </a>
  
                    <p>
                      & if you have any questions left apart from the form you
                      have submitted. please don't hesitate to
                      <a href="https://www.hexabells.com/contact-us" target="_blank" style="color: #eb7373; text-decoration: none"
                        >contact us.</a
                      >
                    </p>
  
                    <p>Thanks & regards</p>
  
                    <span>Sahil Ranjan</span><br />
                    <span>Client Acquisition Team</span><br />
                    <span>Hexabells.com</span>
  
                    <br /><br /><br />
                    <p>Follow us @</p>
                    <div style="width: 35px; display: inline-block">
                      <img
                        width="25"
                        height="25"
                        src="https://starfish-app-92xxn.ondigitalocean.app/assets/images/emailImage/facebook.png"
                        alt=""
                      />
                    </div>
                    <div style="width: 35px; display: inline-block">
                      <img
                        width="25"
                        height="25"
                        src="https://starfish-app-92xxn.ondigitalocean.app/assets/images/emailImage/twitter.png"
                        alt=""
                      />
                    </div>
                    <br /><br />
                    <hr />
                    <div style="padding: 10px 0px; text-align: center">
                      <img
                        src="https://starfish-app-92xxn.ondigitalocean.app/assets/images/emailImage/LogoMark.png"
                        alt=""
                        width="25"
                        height="25"
                      />
                    </div>
                    <div
                      style="
                        padding: 5px 0px;
                        min-height: 5vh;
                        text-align: center;
                      "
                    >
                      <span>Terms & conditions | Privacy policy</span>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}
