import NavObj from "../types/NavObj";

const navElements: Array<NavObj> = [
    {
        name: "Emoticons",
        value: "emoticons",
        icon: chrome.runtime.getURL("svgs/emoticons.svg")
    },
    {
        name: "Text Emoticons",
        value: "text-emoticons",
        icon: chrome.runtime.getURL("svgs/text-emoticons.svg")
    },
    {
        name: "GIFs",
        value: "gifs",
        icon: chrome.runtime.getURL("svgs/gifs.svg")
    }
]

export default navElements;