function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks !== null) {
        navLinks.classList.toggle("active");
    }
}
function bookAppointment() {
    window.location.href = "/booking-page"; // replace with actual URL
}
