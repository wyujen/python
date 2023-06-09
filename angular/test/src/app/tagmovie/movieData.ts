import { Movie, Tag } from "./movietag.interface";


export const MOVIES :Movie[]=[
    {id:1, name: 'Farewell My Concubine', tagid: [1,2]},
    {id:2, name: 'Happy Together', tagid: [2,3,5]},
    {id:3, name: 'The Sea Inside', tagid: [4,5]},
    {id:4, name: 'In the Mood for Love', tagid: [1,3,5]},
    {id:5, name: 'Before Midnight', tagid: [2,4]},
]

export const TAGS : Tag[]=[
    {id:1, name: 'Love'},
    {id:2, name: 'Romance'},
    {id:3, name: 'Personal'},
    {id:4, name: 'Relationships'},
    {id:5, name: 'Emotions'},
]



