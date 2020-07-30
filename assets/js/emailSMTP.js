// Send Email from SMTP.js

document.querySelector('#contact-submit').onclick = function () {
    // const contactName = document.querySelector('#contact-name');
    // const contactEmail = document.querySelector('#contact-mail');
    // const contactSubject = document.querySelector('#contact-subject');
    // const contactMsge = document.querySelector('#contact-message');

    Email.send({
        SecureToken: 'e1429bba-6e2b-407d-a75a-33986102412a',
        Host: 'smtp.gmail.com',
        Username: 'technocolabs@gmail.com',
        Password: 'technolive',
        To: "rishisoni6071@gmail.com",
        From: "rishisoni4493@gmail.com",
        Subject: "This is the Subject",
        Body: "This is the Body"
    }).then(
        function(message) {
            alert("Mail Sent Successfully")
        });
}