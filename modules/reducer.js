import { getState } from "./store.js";
import { increaseValue, decreaseValue } from "./actions.js"; 

export const reducer = (state,action) => {

    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                value: state.value + 1,
                status: state.value >= 9? "MAXIMUM": 'NORMAL',
                alert: false
                
            }
            break;
        case 'SUBTRACT':
            return {
                ...state,
                value: state.value - 1,
                status: state.value <= -9? "MINIMUM": 'NORMAL',
                alert: false
            }
            break;
        case 'RESET':
            return {
                ...state,
                value: 0,
                status: 'NORMAL',
                alert: true
            }
            break;
        default: 
            return state
    }
}