import { ADD_TIMER_ID, ADD_USER_PREFRENCS } from "./action-type";
import meals from '../data/meals.json'
const initalState = {
    list: meals,
    prefenceList: []
};
export const MealsReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_USER_PREFRENCS:
            const newPrefenceList = [...state.prefenceList];
            newPrefenceList.push(action.payload)
            return {
                ...state,
                prefenceList: newPrefenceList
            }
        default:
            return state
    }
}
export const addPrefenceAction = (payload) => {
    return {
        type: ADD_USER_PREFRENCS,
        payload
    }
}