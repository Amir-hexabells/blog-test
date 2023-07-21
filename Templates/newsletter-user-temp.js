export default function NewsletterUserTemplate(){
    return(
        `<!DOCTYPE html>
        <html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title></title>
          </head>
          <body
            style="
              margin: 0px;
              padding: 0px;
              background-color: #ebebeb;
              margin: 5rem 0rem;
            "
            bgcolor="#ebebeb"
          >
            <table
              bgcolor="#ebebeb"
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
              style="padding: 0; background-color: #ebebeb"
            >
              <tr>
                <td style="background-color: #ebebeb">
                  <table
                    width="700"
                    border="0"
                    valign="top"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    bgcolor="#ffffff"
                    style="padding: 2rem"
                  >
                    <tr>
                      <td style="background-color: #ffffff">
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
                          <p>Hey there!</p>
                          <h3>Thanks for subscribing!</h3>
                          <p>
                            Hexabells newsletter is the best way to find out about our
                            current deals and product developments.
                          </p>
                          <p>
                            We are going to share only 2 mails per week with information
                            about hexabells products major updates, special offers,
                            great deals product developments, and much more.
                          </p>
                          <p>we're happy to have you on board!</p>
                          <p style="margin-bottom: 0px;">Cheers,</p>
                          <span>Hexabells Team</span><br />
        
                          <br />
                          
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
                              text-align: center;
                            "
                          >
                            <span style="margin-bottom: 8px;">Terms & conditions | Privacy policy</span><br>
                            <span style="font-size: 12px;text-decoration: underline;">Unsubscribe from Hexabells Newsletter</span>
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
        `
    )
}