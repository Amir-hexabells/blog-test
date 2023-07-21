export default function ContactUsBdTemplate(username, email, message) {
  return `<!DOCTYPE html>
        <html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title></title>
          </head>
          <body
            style="margin: 0px; padding: 0px; background-color: #ffffff;margin:5rem 0rem;"
            bgcolor="#ffffff"
          >
            <table
              bgcolor="#ffffff"
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
              style="padding:0;background-color: #ffffff;"
            >
              <tr>
                <p>Hello,</p>
                <p>I am <b>${username}</b></p>
                <p>${message}</p>
                <p>You can <span style='color:#eb7373'>reach out</span> to me at ${email} for further proceddings.</p>
              </tr>
            </table>
          </body>
        </html>`;
}
