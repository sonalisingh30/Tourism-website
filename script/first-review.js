document.getElementById(".ReviewStripCardV2_reviewCardBox").addEventListener("click", function (event) {
    event.preventDefault();
   
    $("#first-review-section").toggleClass("active");
    alert("clicked");
})