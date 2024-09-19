import "./styles.css";
import { Utility } from "./pages/Utility.js";
import { Home } from "./pages/Home.js";
import { Menu } from "./pages/Menu.js";
import { About } from "./pages/About.js";

// Main App

// Start with default Home page
Home.createHomePage();

// Check for menu click to serve different page
Utility.nav.addEventListener("click", (item) => {
  let btnName = item.target.textContent;

  if (btnName == "Home") {
    Home.createHomePage();
  } else if (btnName == "About") {
    About.createAboutPage();
  } else if (btnName == "Menu") {
    Menu.createMenuPage();
  }
});
