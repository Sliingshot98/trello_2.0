
export interface OptionsInterface {
    schema?: string;
    tableName?: string;

}
export interface Board {
    id: number;
    name: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface List {
    id: number;
    name: string;
    boardId: number;
    createdAt: Date;
    updatedAt: Date;        
}
export interface Card {
    id: number;
    title: string;
    description: string;        
    listId: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface User {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    hashedPassword: string;
}
