import "./styles.css";
import { Home } from "./pages/Home.js";
import { Menu } from "./pages/Menu.js";
import { About } from "./pages/About.js";

// Main App
const appDivContainer = document.querySelector("#content");
const nav = document.querySelector(".nav");

// Start with default Home page
console.log("Uploading Home template");

nav.addEventListener("click", (item) => {
  let btnName = item.target.textContent;

  if (btnName == "Home") {
    console.log("Uploading Home template");
  } else if (btnName == "About") {
    console.log("Uploading About template");
  } else if (btnName == "Menu") {
    console.log("Uploading Menu template");
  }
});
