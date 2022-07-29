import renderEmoticons from "./emoticons";
import './tabs.scss'

const popupBody = document.querySelector("#popup .body");

const renderSearchResults = (tabName: string, searchText: string) => {
    if (tabName === 'emoticons') {
        popupBody.appendChild(renderEmoticons(searchText));
    }
}

const renderTabBody = (tabName: string) => {
    //Adds search bar to the popup
    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.placeholder = "Search";
    searchBar.id = "search-bar";
    popupBody.innerHTML = "";

    let searchText = ""
    searchBar.addEventListener("keyup", (e: KeyboardEvent) => {
        // Accept alphanumeric characters only
        if (e.key.match(/[a-zA-Z0-9]/)) {
            searchText += e.key;
            renderSearchResults(tabName, searchText);
        }
    })

    popupBody.appendChild(searchBar);
    renderSearchResults(tabName, searchText);
}

export default renderTabBody;