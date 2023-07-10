export interface Res {
    id: string;
    item: string;
    shape: string
}

export interface Image {
    id: string;
    url: string;
    type: string;
    size: string;
}

export interface Ontology {
    id: string;
    name: string;
    descripthon: string;
    resList: Res[]
}

export interface Dataset {
    id: string;
    name: string;
    descripthon: string;
    imageList: Image[]
}

export interface Project {
    id: string;
    name: string;
    descripthon: string;
    datasetList: Record<string, Dataset>
    ontology: Ontology
}


