import EmoticonObj from '../types/Emoticons'

const filterList = (list: EmoticonObj[], filter: string) => {
    if (filter === '') {
        return list
    }

    // Return an array of categories containing only those items whose tags contain the filter
    const filteredList: EmoticonObj[] = []
    list.forEach((category) => {
        if (category.items.some((item) => item.tags.some((tag) => tag.includes(filter)))) {
            filteredList.push({
                name: category.name,
                value: category.value,
                items: category.items.filter((item) => item.tags.some((tag) => tag.includes(filter))),
            })
        }
    })

    return filteredList
}

export default filterList
