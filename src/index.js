import "./styles.css";
import { Utility } from "./pages/Utility.js";
import { Home } from "./pages/Home.js";
import { Menu } from "./pages/Menu.js";
import { About } from "./pages/About.js";
import menu1pic from "./images/menu__images/menu1.jpg";

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

Menu.createImg(menu1pic, Utility.appDivContainer, "$50");
