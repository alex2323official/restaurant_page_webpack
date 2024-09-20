import { Utility } from "./Utility.js";
import menu1pic from "../images/menu__images/menu1.jpg";
import menu2pic from "../images/menu__images/menu2.jpg";
import menu3pic from "../images/menu__images/menu3.jpg";
import menu4pic from "../images/menu__images/menu4.jpg";
import menu5pic from "../images/menu__images/menu5.jpg";
import menu6pic from "../images/menu__images/menu6.jpg";

export class Menu {
  static createMenuPage() {
    // Clear old web page
    Utility.appDivContainer.innerHTML = "";

    const menuPageContainerDiv = document.createElement("div");
    menuPageContainerDiv.classList.add("menu__container");
    menuPageContainerDiv.textContent = "MENU PAGE";

    Utility.appDivContainer.appendChild(menuPageContainerDiv);
  }

  static createImg(urlLink) {
    let image = document.createElement("img");
    image.classList.add("menu__image");
    image.src = urlLink;
    Utility.appDivContainer.appendChild(image);
  }
}
