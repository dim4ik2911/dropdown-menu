const link = document.getElementById("link1");
const content = document.getElementById("dropdown-menu");

link.addEventListener("click", (e) => {
  if (content.style.display === "block") {
    return (content.style.display = "none");
  }
  return (content.style.display = "block");
});
