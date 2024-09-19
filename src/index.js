import "./styles.css";
import { Home } from "./pages/Home.js";
import { Menu } from "./pages/Menu.js";
import { About } from "./pages/About.js";

// Main App
const appDivContainer = document.querySelector("#content");
const nav = document.querySelector(".nav");

// Start with default Home page
Home.createHomePage();

// Check for menu click to serve different page
nav.addEventListener("click", (item) => {
  let btnName = item.target.textContent;

  if (btnName == "Home") {
    Home.createHomePage();
  } else if (btnName == "About") {
    About.createAboutPage();
  } else if (btnName == "Menu") {
    Menu.createMenuPage();
  }
});
