import EmoticonObj from "../types/EmoticonObj";

const filterList = (list: EmoticonObj[], filter: string) => {
    if (filter === "") {
        return list;
    }
    return list.filter(item => {
        return item.tags.some(tag => tag.includes(filter));
    });
}

export default filterList;