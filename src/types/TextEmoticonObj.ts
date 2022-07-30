interface Category {
    name: string;
    value: string;
    tags: string[];
}
interface TextEmoticons {
    name: string;
    value: string;
    icon?: string;
    items: Category[];
}

export default TextEmoticons;