sidebar = document.querySelector(".sidebar");
mainContent = document.querySelector(".content-space ");
hamburger = document.querySelector(".hamburger");
addIcon = document.querySelector(".add-button");
menuButton = document.querySelector(".button-dot");
menu = document.querySelector(".dot-menu");

sidebarArrow = document.querySelector(".sidebar-arrow");

sidebarArrow.addEventListener("click", (event) => {
  sidebar.style.display = "none";
  mainContent.style.width = "100%";
  console.log(sidebar);
});

hamburger.addEventListener("click", (event) => {
  mainContent.style.width = "80%";
  sidebar.style.display = "flex";
});

menuButton.addEventListener("click", () => {
  menuButton.style.zIndex = "-1";
  menu.style.display = "initial";
});
