
import emoticonsList from "./emoticonsList";
import './emoticons.scss';
import notyf from "../../../helpers/toast";

const renderEmoticons = () => {
    const list = document.createElement("ul");
    list.id = "emoticons-list";
    emoticonsList.forEach(emoticon => {
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

    const listContainer = document.createElement("div");
    listContainer.id = "list-container";
    listContainer.appendChild(list);
    return listContainer;
}

export default renderEmoticons;