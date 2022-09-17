const url = new URL(window.location);

// Resize fix for menuIcon
const menuCheck = document.querySelector("#menu-check");
window.addEventListener("resize", () => {
  if (innerWidth > 700) {
    menuCheck.checked = false;
  }
});
