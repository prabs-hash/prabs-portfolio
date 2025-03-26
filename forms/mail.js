function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_4gjv2vp", "template_op6mdnk", params).then(function (res) {
        alert("Success! " + res.status);
    })
}


// document.addEventListener("DOMContentLoaded", function () {
//     emailjs.init("pgz_qW2AMQq8TaxYA");  // Initialize Email.js

//     function SendMail() {
//         var params = {
//             from_name: document.getElementById("fullName").value,
//             email_id: document.getElementById("email_id").value,
//             message: document.getElementById("message").value
//         };

//         emailjs.send("service_4gjv2vp", "template_op6mdnk", params, "pgz_qW2AMQq8TaxYA")
//             .then(function (res) {
//                 alert("Success! " + res.status);
//             })
//             .catch(function (error) {
//                 console.error("Email sending failed:", error);
//                 alert("Failed to send email. Check console for details.");
//             });
//     }

//     document.getElementById("sendButton").addEventListener("click", SendMail);
// });
