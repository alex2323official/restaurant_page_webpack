import { Utility } from "./Utility.js";
import { Menu } from "./Menu.js";

import menu4pic from "../images/menu__images/menu4.jpg";

export class About {
  static createAboutPage() {
    // Clear old web page
    Utility.appDivContainer.innerHTML = "";

    const aboutPageContainerDiv = document.createElement("div");
    aboutPageContainerDiv.classList.add("about__container");
    aboutPageContainerDiv.textContent = "ABOUT PAGE";

    // Add some fluffff here
    Menu.createImg(
      menu4pic,
      aboutPageContainerDiv,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, suscipit optio! Eos quas deserunt quo earum laborum, dignissimos porro. Expedita error fuga itaque eveniet praesentium officiis dignissimos cupiditate ea at!"
    );

    Utility.appDivContainer.appendChild(aboutPageContainerDiv);
  }
}
