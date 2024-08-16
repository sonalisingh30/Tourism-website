var modal = document.getElementById("ReadMoreModal");
var btn = document.getElementById("ReadMoreBtn");
var span = document.getElementsByClassName("close")[0];
var closeButton = document.getElementById("closeBtn");
btn.onclick = function () {
    alert("hello")
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

closeButton.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}