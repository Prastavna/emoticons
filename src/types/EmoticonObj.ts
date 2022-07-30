interface Category {
    name: string;
    value: string;
    tags: string[];
}
interface Emoticons {
    name: string;
    value: string;
    icon?: string;
    items: Category[];
}

export default Emoticons;