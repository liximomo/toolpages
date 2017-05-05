const express = require('express');
const router = new express.Router();
const nodemailer = require("nodemailer");

// {
//   "accepted": [
//     "xuyanghong@mufengcm.com"
//   ],
//   "rejected": [],
//   "response": "250 Ok: queued as ",
//   "envelope": {
//     "from": "lixi@mufengcm.com",
//     "to": [
//       "xuyanghong@mufengcm.com"
//     ]
//   },
//   "messageId": "<4e3e7835-b2cc-a204-d86f-f55208465891@mufengcm.com>"
// }

function parseResponse(resp) {
  const msgRegex = /^(\d{3,3})\s.*?:\s(.*)/;
  const matches = resp.match(msgRegex);
  if (!matches) {
    return {
      code: -1,
      error: '未知响应',
    };
  }

  return {
    code: parseInt(matches[1], 10),
    msg: matches[2],
  };
}

function send(req, res) {
  // create reusable transporter object using the default SMTP transport
  const {
    user,
    pass,
    content,
    subject,
    from,
    to,
    cc,
  } = req.body;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'QQex',
    auth: {
      user,
      pass,
    }
  });

  const mailOptions = {
    from,
    cc,
    to,
    subject,
    html: content,
  }

  transporter.sendMail(mailOptions, function(error, response) {
    transporter.close();

    if (error) {
      const result = parseResponse(error.response);
      res.send(result);
    } else {
      const result = parseResponse(response.response);
      res.send(result);
    }
  });
}

router.route('/send')
  .post(send);

module.exports = router;
