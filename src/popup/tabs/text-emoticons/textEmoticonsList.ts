import { TextEmoticons } from '@types'

const textEmoticonsList: Array<TextEmoticons> = [
    {
        name: 'Happy',
        value: 'happy',
        items: [
            {
                name: 'Smiley',
                value: ':)',
                tags: ['smiley', 'smile'],
            },
            {
                name: 'Smiley',
                value: '(:',
                tags: ['smiley', 'smile'],
            },
        ],
    },
    {
        name: 'Sad',
        value: 'sad',
        items: [
            {
                name: 'Sad',
                value: ':(',
                tags: ['sad'],
            },
            {
                name: 'Cry',
                value: ":'(",
                tags: ['cry'],
            },
        ],
    },
]

export default textEmoticonsList
