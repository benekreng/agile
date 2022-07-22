const retract = document.querySelector(".retract");
const links = document.querySelector(".menu");

retract.addEventListener("click", function() {
    links.classList.toggle("active");
})