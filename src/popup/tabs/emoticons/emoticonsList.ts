import EmoticonObj from "../../../types/EmoticonObj"

const emoticonsList: Array<EmoticonObj> = [
    {
        name: "Smileys & People",
        value: "smileys-and-people",
        items: [
            {
                name: "Smiley",
                value: "😀",
                tags: ["smiley", "smile"]
            },
            {
                name: "Laughing",
                value: "😂",
                tags: ["laughing", "lol"]
            }
        ]
    },
    {
        name: "Objects",
        value: "objects",
        items: [
            {
                name: "Trash",
                value: "🗑",
                tags: ["trash", "delete"]
            },
            {
                name: "Box",
                value: "📦",
                tags: ["box"]
            }
        ]
    }
]

export default emoticonsList