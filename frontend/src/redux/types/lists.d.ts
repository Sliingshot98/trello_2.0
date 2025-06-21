export interface IList {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    position: number;
    boardId: number;
}
export interface ICreateList {
    name: string;
    description: string;
    position: number;
    boardId: number;
}
export interface IUpdateList {
    id: number;
    name: string;
    description: string;
    position: number;
    boardId: number;
}
export interface IListState {
    lists: IList[];
    loading: boolean;
    error: string | null;
    success: boolean;
}
