document.addEventListener("DOMContentLoaded", () => {

    const emailLink = document.getElementById("email-link");

    if (emailLink) {

        emailLink.addEventListener("click", () => {

            gtag("event", "acquisition_inquiry", {

                contact_method: "email",

                domain: "IndonesiaCreative.com"

            });

        });

    }

});