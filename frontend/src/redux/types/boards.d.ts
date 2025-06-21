export interface BoardInitialState {
    boards: Board[];
}
export interface IBoard {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    position: number;
}

export interface ICreateBoard {
    name: string;
    description: string;
    position: number;
}
