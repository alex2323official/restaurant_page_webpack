import { Utility } from "./Utility.js";

export class About {
  static createAboutPage() {
    // Clear old web page
    Utility.appDivContainer.innerHTML = "";

    const aboutPageContainerDiv = document.createElement("div");
    aboutPageContainerDiv.classList.add("about__container");
    aboutPageContainerDiv.textContent = "ABOUT PAGE";

    Utility.appDivContainer.appendChild(aboutPageContainerDiv);
  }
}
