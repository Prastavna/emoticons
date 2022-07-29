
import emoticonsList from "./emoticonsList";
import './emoticons.scss';
import notyf from "../../../helpers/toast";
import filterList from "../../../helpers/filterList";

const renderEmoticons = (searchText: string) => {
    const list = document.createElement("ul");
    list.id = "emoticons-list";

    const filteredList = filterList(emoticonsList, searchText);

    filteredList.forEach(emoticon => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span
                title="${emoticon.name}"
            >
                ${emoticon.value}
            </span>`
        ;
        listItem.addEventListener("click", () => {
            // Copy the value to clipboard
            navigator.clipboard.writeText(emoticon.value);
            notyf.success(`Copied ${emoticon.value} to clipboard`);
        })
        list.appendChild(listItem);
    })

    // Check if list container already exists
    const prevListContainer = document.querySelector("#list-container");
    if (prevListContainer) {
        prevListContainer.remove();
    }

    const listContainer = document.createElement("div");
    listContainer.id = "list-container";
    listContainer.appendChild(list);
    return listContainer;
}

export default renderEmoticons;