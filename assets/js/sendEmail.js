/*code from Rosie resume project */
function sendMail(contactForm) {
    email.js.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "comments": contactForm.comments.value
    })
    .then(
        function(response) {
            console.log("Success", response);
        },
        function(error) {
            console.log("Failed", error);
        });
        return false;  // To block from loading a new page
}