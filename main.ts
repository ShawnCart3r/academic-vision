function toggleMenu(): void {
  const navLinks = document.getElementById("navLinks") as HTMLElement | null;
  if (navLinks !== null) {
    navLinks.classList.toggle("active");
  }
}
function bookAppointment(): void {
  window.location.href = "/booking-page"; // replace with actual URL
}