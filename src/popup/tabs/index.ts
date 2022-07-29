import renderEmoticons from "./emoticons";
import './tabs.scss'

const renderTabBody = (tabName: string) => {
    const popupBody = document.querySelector("#popup .body");

    //Adds search bar to the popup
    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.placeholder = "Search";
    searchBar.id = "search-bar";
    popupBody.innerHTML = "";
    popupBody.appendChild(searchBar);

    if (tabName === 'emoticons') {
        popupBody.appendChild(renderEmoticons());
    }
}

export default renderTabBody;