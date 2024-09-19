import { Utility } from "./Utility";
import firstImage from "../images/img_first.jpg";

export class Home {
  static createHomePage() {
    // Clear old web page
    Utility.appDivContainer.innerHTML = "";

    const homePageContainerDiv = document.createElement("div");
    homePageContainerDiv.classList.add("home__container");
    homePageContainerDiv.textContent = "HOME PAGE";

    // Adding images
    const image1 = document.createElement("img");
    image1.src = firstImage;
    homePageContainerDiv.appendChild(image1);

    Utility.appDivContainer.appendChild(homePageContainerDiv);
  }
}
