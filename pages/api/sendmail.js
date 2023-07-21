
const sendmail = async (req, res) => {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'info@hexabells.com',
      pass: 'wreovmnjsutryvhg',
    },
    secure: true,
  })
  const mailData = {
    from: 'info@hexabells.com',
    to: `${req.body.to}`,
    cc: ["sahil@hexabells.com"],
    subject: `${req.body.subject}`,
    text: `${req.body.message}`,
    html: `${req.body.html}`
  }

  try{
    await transporter.sendMail(mailData)
  }catch(error){
    return res.status(error.statusCode || 500).json({ command:0,msg: error.message });
  }
  
  return res.status(200).json({ command: 1,msg:'Mail submitted succesfully' });
}

export default sendmail;