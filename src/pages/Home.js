import { Utility } from "./Utility";

export class Home {
  static createHomePage() {
    // Clear old web page
    Utility.appDivContainer.innerHTML = "";

    const homePageContainerDiv = document.createElement("div");
    homePageContainerDiv.classList.add("home__container");
    homePageContainerDiv.textContent = "HOME PAGE";

    Utility.appDivContainer.appendChild(homePageContainerDiv);
  }
}
