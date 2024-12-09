function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const message = document.getElementById("message").value;
  const q1 = parseInt(document.getElementById("q1").value, 10);
  const q2 = parseInt(document.getElementById("q2").value, 10);
  const q3 = parseInt(document.getElementById("q3").value, 10);
  const q4 = parseInt(document.getElementById("q4").value, 10);
  const q5 = parseInt(document.getElementById("q5").value, 10);

  if (!name || !email || !phone || !address || !message) {
    alert("Prašome užpildyti visus laukus!");
    return;
  }

  const average = ((q1 + q2 + q3 + q4 + q5) / 5).toFixed(2);

  let averageColor;
  if (average < 4) {
    averageColor = "red";
  } else if (average < 7) {
    averageColor = "orange";
  } else {
    averageColor = "green";
  }

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
        <p><strong>Vardas:</strong> ${name}</p>
        <p><strong>El. paštas:</strong> ${email}</p>
        <p><strong>Telefono numeris:</strong> ${phone}</p>
        <p><strong>Adresas:</strong> ${address}</p>
        <p><strong>Žinutė:</strong> ${message}</p>
        <p><strong>Atsakymų vidurkis:</strong> <span style="color: ${averageColor};">${average}</span></p>
    `;

  document.getElementById("contactForm").reset();
}

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
