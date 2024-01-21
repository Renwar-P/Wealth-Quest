$(document).ready(function () {
  // Show the welcome modal on page load
  $("#welcomeModal").modal("show");
});

// Add an event listener to the "Start Game" button
document
  .getElementById("startGameButton")
  .addEventListener("click", function () {
    // Close the modal when the button is clicked
    $("#welcomeModal").modal("hide");
  });

// Add event listener to open game card on dice roll.
document.getElementById("roll-dice-btn").addEventListener("click", function () {
  $("#randomCardModal").modal("show");
});

// Add event listener to close game card on accept of decline
document
  .getElementById("reject-offer-btn")
  .addEventListener("click", function () {
    $("#randomCardModal").modal("hide");
  });

document
  .getElementById("accept-offer-btn")
  .addEventListener("click", function () {
    $("#randomCardModal").modal("hide");
  });
