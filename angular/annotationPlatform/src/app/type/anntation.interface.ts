export interface Image{
    id: string;
    url: string;
    isEdited: boolean;
}

export interface DataSet {
    id: string;
    name: string;
    description: string;
    image : Image[]

}