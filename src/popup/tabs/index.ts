import debounce from "../../helpers/debounce";
import renderEmoticons from "./emoticons";
import renderGifs from "./gifs";
import './tabs.scss'

const popupBody = document.querySelector("#popup .body");

const renderSearchResults = (tabName: string, searchText: string) => {
    if (tabName === 'emoticons') {
        popupBody.appendChild(renderEmoticons(searchText));
    } else if(tabName === 'gifs') {
        renderGifs(searchText).then(gifs => {
            popupBody.appendChild(gifs);
        });
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
    searchBar.addEventListener("keyup", debounce((e: KeyboardEvent) => {
        // Accept alphanumeric characters or backspace
        if (e.key.match(/^[a-zA-Z0-9]$/) || e.key === "Backspace") {
            // remove special characters from search text
            searchText = searchBar.value.trim().replace(/[^a-zA-Z0-9]/g, "");
            renderSearchResults(tabName, searchText);
        }
    }, 1200));

    popupBody.appendChild(searchBar);
    renderSearchResults(tabName, searchText);
}

export default renderTabBody;