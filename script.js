// script.js
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Form action URL for Google Forms
  const formActionURL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSem9CxT1kiRod5sOkbf_auCyunh88BIcrplCPi2U8YiietrSg/formResponse";

  const formData = new FormData(document.getElementById("contactForm"));

  fetch(formActionURL, {
    method: "POST",
    mode: "no-cors", // no-cors mode is necessary for Google Forms
    body: formData,
  })
    .then(() => {
      
      document.getElementById("confirmationMessage").style.display = "block";
    })
    .catch((error) => console.error("Error!", error.message));
}

function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Show the thank you message
  document.getElementById("thankYouMessage").style.display = "block";

  // Clear the form fields
  event.target.reset();

  // Submit the form
  setTimeout(() => {
    event.target.submit();
  }, 500); // Optional: Adjust the delay if needed
}
