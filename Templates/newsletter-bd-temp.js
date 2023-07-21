export default function NewsLetterBdTemplate(email){
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
              background-color: #ffffff;
              /* margin: 5rem 0rem; */
            "
            bgcolor="#ffffff"
          >
            <table
              bgcolor="#ffffff"
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
              style="padding: 0; background-color: #ffffff"
            >
              <tr>
                <div style="width: 100%;height: inherit;">
                  <p>
                    A new use has been added to your <b>NewsLetter</b> mailing list with
                    <span style="color: #eb7373">${email}</span>
                  </p>
                </div>
              </tr>
            </table>
          </body>
        </html>
        `
    )
}