import { Utility } from "./Utility.js";
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
