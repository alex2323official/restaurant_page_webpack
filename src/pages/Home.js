import { Utility } from "./Utility";
import firstImage from "../images/img_first.jpg";

export class Home {
  static createHomePage() {
    // Clear old web page
    Utility.appDivContainer.innerHTML = "";

    // .home__container
    const homePageContainerDiv = document.createElement("div");
    homePageContainerDiv.classList.add("home__container");
    homePageContainerDiv.style.backgroundImage = `url(${firstImage})`;
    homePageContainerDiv.style.backgroundSize = "cover";
    homePageContainerDiv.style.backgroundPosition = "center";

    // .home__h1
    const home__h1 = document.createElement("h1");
    home__h1.classList.add("home__h1");
    home__h1.textContent = "Thai Food From Boat";
    homePageContainerDiv.appendChild(home__h1);

    // home__textinfo
    const home__textinfo = document.createElement("p");
    home__textinfo.classList.add("home__textinfo");
    home__textinfo.textContent =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iusto aliquid et quae. Placeat autem quos corporis in numquam! Debitis recusandae, enim earum cupiditate eos placeat itaque repellat nostrum sint.hai Food From Boat";
    homePageContainerDiv.appendChild(home__textinfo);

    // home__cta
    const home__cta = document.createElement("button");
    home__cta.classList.add("home__cta");
    home__cta.textContent = "Place an order";
    homePageContainerDiv.appendChild(home__cta);

    Utility.appDivContainer.appendChild(homePageContainerDiv);
  }
}
