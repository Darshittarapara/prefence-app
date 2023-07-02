import { ADD_TIMER_ID } from "./action-type";

const initalState = {
    activeTaskId: ''
};
export const TimerReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_TIMER_ID:
            return {
                ...state,
                activeTaskId: action.payload
            }
        default:
            return state
    }
}
export const addTimeIdAction = (payload) => {
    return {
        type: ADD_TIMER_ID,
        payload
    }
}