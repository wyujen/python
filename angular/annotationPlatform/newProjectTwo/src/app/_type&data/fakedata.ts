import { Dataset, Item, Ontology, Shape } from "./project.interface";

export const fakeDataset: Record<string, Dataset> = {
    ds001: {
        id: 'ds001',
        name: 'DS001',
        descripthon: 'id is ds001',
        imageList: [
            {
                id: 'im001',
                url: 'IM001.png',
                type: 'png',
                size: '12'
            },
            {
                id: 'im002',
                url: 'IM002.png',
                type: 'png',
                size: '16'
            }
        ]
    },
    ds002: {
        id: 'ds002',
        name: 'DS002',
        descripthon: 'id is ds002',
        imageList: [
            {
                id: 'im003',
                url: 'IM003.png',
                type: 'png',
                size: '12'
            },
            {
                id: 'im004',
                url: 'IM004.png',
                type: 'png',
                size: '16'
            }
        ]
    }
}

export const fakeOntology: Record<string, Ontology> = {
    ol001: {
        id: 'ol001',
        name: 'OL001',
        descripthon: 'I ol',
        resList: [
            {
                id: 're001',
                item: 'hat',
                shape: 'circle'
            },
            {
                id: 're002',
                item: 'class',
                shape: 'square',
            }
        ]
    },
    ol002: {
        id: 'ol002',
        name: 'OL002',
        descripthon: 'I ol',
        resList: [
            {
                id: 're003',
                item: 'hat',
                shape: 'circle'
            },
            {
                id: 're004',
                item: 'class',
                shape: 'square',
            }
        ]
    }
}
export const fakeItem : Record<string, Item> = {
    It01:{
        id: 'it01',
        name: "hat"
    },
    It02:{
        id: 'it02',
        name:'glass'
    }
    
}

export const fakeShape : Record<string, Shape> = {
    Sp01:{
        id: 'sp01',
        name: 'cirle'
    },
    Sp02:{
        id: 'sp02',
        name: 'square'
    }
}
