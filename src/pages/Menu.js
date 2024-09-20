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
    // menuPageContainerDiv.textContent = "MENU PAGE";

    // Add image gallery to menu__container
    this.createImg(menu1pic, menuPageContainerDiv, "$40");
    this.createImg(menu2pic, menuPageContainerDiv, "$40");
    this.createImg(menu3pic, menuPageContainerDiv, "$40");
    this.createImg(menu4pic, menuPageContainerDiv, "$40");
    this.createImg(menu5pic, menuPageContainerDiv, "$40");
    this.createImg(menu6pic, menuPageContainerDiv, "$40");

    Utility.appDivContainer.appendChild(menuPageContainerDiv);
  }

  static createImg(urlLink, whereToAdd, price) {
    // Create menu__img-single-container
    let imgSingleContainer = document.createElement("div");
    imgSingleContainer.classList.add("menu__img-single-container");

    // Create menu__img
    let image = document.createElement("img");
    image.classList.add("menu__image");
    image.src = urlLink;
    imgSingleContainer.appendChild(image);

    // Create menu__img-price
    let imagePrice = document.createElement("span");
    imagePrice.classList.add("menu__img-price");
    imagePrice.textContent = price;
    imgSingleContainer.appendChild(imagePrice);

    whereToAdd.appendChild(imgSingleContainer);
  }
}
