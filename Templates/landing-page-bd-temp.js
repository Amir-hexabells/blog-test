export default function LandingPageBdTemplate({username,role,companyName,allInterests,contactNo,email}){
    return(
`<!DOCTYPE html>
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
        <p>I am <b>${username}</b> and I am a <b>${role}</b> in <b>${companyName}</b></p>
        <div>Actually, <span style='color:#eb7373'>I am interested in</span>
        <ul>
        ${allInterests.map((el)=>{
            if(el.selected){
                return(
                    `<li>${el.name}</li>`
                )
            }
        }).join(" ")}
        </ul>
        </div>
        <p>You can <span style='color:#eb7373'>reach out</span> to me at ${contactNo} or ${email} for further proceddings.</p>
      </tr>
    </table>
  </body>
</html>`
    )
}