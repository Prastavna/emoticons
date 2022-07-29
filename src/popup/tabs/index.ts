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
        // Accept alphanumeric characters or backspace
        if (e.key.match(/^[a-zA-Z0-9]$/) || e.key === "Backspace") {
            // remove special characters from search text
            searchText = searchBar.value.replace(/[^a-zA-Z0-9]/g, "");;
            renderSearchResults(tabName, searchText);
        }
    })

    popupBody.appendChild(searchBar);
    renderSearchResults(tabName, searchText);
}

export default renderTabBody;