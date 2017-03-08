const nodemailer = require('nodemailer');

// Trigger a mail service to send 'message' to the specified user 'id'.
const sendMailNotification = (mailServiceConfig, email, message) => {
  // TODO(A): Add proper check to mail service config
  if (!mailServiceConfig.providerConfig) {
    return Promise.reject('No proper mail service config. The notification will not be sent.');
  }
  const transporter = nodemailer.createTransport(mailServiceConfig.providerConfig);
  // TODO(A): Send to multiple emails at once and use a better html text format.
  const mailOptions = {
    from: mailServiceConfig.content.from,
    to: email,
    subject: 'iCare Notification',
    text: message,
    html: message,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      }
      return resolve(info);
    });
  });
};

module.exports = sendMailNotification;
