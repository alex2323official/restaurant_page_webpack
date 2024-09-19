import { Utility } from "./Utility";

export class Home {
  static createHomePage() {
    console.log("home page loaded from Home class");

    const homePageContainerDiv = document.createElement("div");
    homePageContainerDiv.classList.add("home__container");
    homePageContainerDiv.textContent = "HOME PAGE";

    Utility.appDivContainer.appendChild(homePageContainerDiv);
  }
}
