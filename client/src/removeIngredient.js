// Get the submit button
const submitButton = document.getElementById("submit-button");

// Add an event listener to the submit button
submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get all the checkboxes
  const checkboxes = document.querySelectorAll("#checkbox-list input[type='checkbox']");

  // Loop through the checkboxes
  for (let i = 0; i < checkboxes.length; i++) {
    // If the checkbox is checked
    if (checkboxes[i].checked) {
      // Remove the corresponding list item
      checkboxes[i].parentNode.remove();
    }
  }
});
