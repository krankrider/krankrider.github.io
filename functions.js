document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  let currentTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-theme", currentTheme);
  htmlElement.classList.toggle("dark-theme", currentTheme === "dark");

  themeToggleButton.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";

    htmlElement.setAttribute("data-theme", currentTheme);
    htmlElement.classList.toggle("dark-theme", currentTheme === "dark");

    localStorage.setItem("theme", currentTheme);
  });
});
