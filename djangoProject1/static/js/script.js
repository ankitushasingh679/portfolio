
// Dark mood
 var icon = document.getElementById("icon");
 icon.onclick = function () {
   document.body.classList.toggle("dark-theme");
   if (document.body.classList.contains("dark-theme")) {
     icon.src = "static/images/sun.png";
   } else {
     icon.src = "static/images/moon.png";
   }
 };
 // Typing Animation
 //for Name
//  var typed = new Typed("#naam", {
//    strings: [
//      "Sajan Kumar Singh ",
//    ],
//    typeSpeed: 50,
//    backSpeed: 50,
//    backDelay: 100,
//    loop: true,
//  });


 //For Web Dev
 var typed = new Typed("#text", {
   strings: [
     "Full-stack Python developer"
   ],
   typeSpeed: 50,
   backSpeed: 50,
   backDelay: 100,
   loop: true,
 });

 // ------------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     const submitBtn = document.getElementById('submitBtn');
//
//     submitBtn.addEventListener('click', function () {
//         const name = document.getElementById('nameInput').value;
//         const email = document.getElementById('emailInput').value;
//         const phone = document.getElementById('phoneInput').value;
//         const message = document.getElementById('messageTextarea').value;
//
//         const data = {
//             personalizations: [
//                 {
//                     to: [{ email: "ankitsingh63510@gmail.com" }] // Change this to your recipient email
//                 }
//             ],
//             from: { email: email },
//             subject: "New message from website",
//             content: [
//                 {
//                     type: 'text/plain',
//                     value: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`
//                 }
//             ]
//         };
//
//         fetch('https://api.sendgrid.com/v3/mail/send', {
//             method: 'POST',
//             headers: {
//                 'Authorization': 'Bearer YOUR_SENDGRID_API_KEY',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         .then(response => {
//             if (response.ok) {
//                 alert('Message sent successfully');
//                 document.getElementById('contactForm').reset(); // Reset the form
//             } else {
//                 alert('Failed to send message');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('An error occurred. Please try again later.');
//         });
//     });
// });

