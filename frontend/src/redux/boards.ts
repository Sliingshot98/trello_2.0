import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board } from '../types/board';
import { RootState } from './store';

interface BoardsState {
    boards: Board[];
}
const initialState: BoardsState = {
    boards: [],
};
const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        setBoards: (state, action: PayloadAction<Board[]>) => {
            state.boards = action.payload;
        }
        ,
        addBoard: (state, action: PayloadAction<Board>) => {
            state.boards.push(action.payload);
        }
        ,
        updateBoard: (state, action: PayloadAction<Board>) => {
            const index = state.boards.findIndex(board => board.id === action.payload.id);
            if (index !== -1) {
                state.boards[index] = action.payload;
            }
        }
        ,
        deleteBoard: (state, action: PayloadAction<number>) => {
            state.boards = state.boards.filter(board => board.id !== action.payload);
        }
        ,
        clearBoards: (state) => {
            state.boards = [];
        }
    }
});
export const {
    setBoards,
    addBoard,
    updateBoard,
    deleteBoard,
    clearBoards
} = boardsSlice.actions;