document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  const updateTheme = (theme) => {
    htmlElement.setAttribute("data-theme", theme);
    htmlElement.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  let currentTheme = localStorage.getItem("theme") || "light";
  updateTheme(currentTheme);

  themeToggleButton.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    updateTheme(currentTheme);
  });

  const updateClock = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-GB", { hour12: false });
    document.getElementById("clock").textContent = formattedTime;
  };

  setInterval(updateClock, 1000);
  updateClock();
});
