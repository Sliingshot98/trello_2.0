import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state } from 'redux';
import { List } from './lists';


interface ListsState {
    lists: List[];
}
const initialState: ListsState = {
    lists: [],
};
const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        setLists: (state, action: PayloadAction<List[]>) => {
            state.lists = action.payload;
        }
        ,
        addList: (state, action: PayloadAction<List>) => {
            state.lists.push(action.payload);
        }
        ,
        updateList: (state, action: PayloadAction<List>) => {
            const index = state.lists.findIndex(list => list.id === action.payload.id);
            if (index !== -1) {
                state.lists[index] = action.payload;
            }
        }
        ,
        deleteList: (state, action: PayloadAction<number>) => {
            state.lists = state.lists.filter(list => list.id !== action.payload);
        }
        ,
        clearLists: (state) => {
            state.lists = [];
        }
    }
});
export const {
    setLists,`      
    addList,
    updateList,
    deleteList,
    clearLists
} = listsSlice.actions;