import { createStore, combineReducers } from 'redux';
import { TimerReducer } from './TimerReducer';
import { MealsReducer } from './MealsReducer';

const rootReducer = combineReducers({
    TimerReducer,
    MealsReducer
})
export const store = createStore(rootReducer)