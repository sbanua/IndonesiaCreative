document.addEventListener("DOMContentLoaded", () => {

    const emailLink = document.getElementById("email-link");

    if (!emailLink) return;

    emailLink.addEventListener("click", () => {

        if (typeof gtag === "function") {

            gtag("event", "generate_lead", {
                lead_type: "domain_acquisition",
                contact_method: "email",
                domain: "IndonesiaCreative.com"
            });

            console.log("GA4 Event: generate_lead");

        }

    });

});