import {types} from "./types";

export const noteReducer = (state = [], action) => {
    switch(action.type) {
        case types.add:
            return [action.payload, ...state];
        case types.remove:
            return state.filter(note => note.id !== action.payload);
        case types.toggle:
            return state.map(note => {
                if(note.id === action.payload) {
                    return {
                        ...note,
                        done: !note.done
                    };
                }

                return note;
            });           
        default:
            return state;
    }
};