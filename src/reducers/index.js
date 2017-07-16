import { combineReducers } from 'redux';

import { INPUT_CHANGE, SET_RECIPES, SHOW_ONE_RECIPE, SHOW_FIRST_RECIPE, CALORIE_INPUT_CHANGE } from '../actions';

const textInput = (state = '', action) => {
    if(action.type === INPUT_CHANGE){
        return action.payload
    }
    return state
};

const calorieInput = (state = '', action) => {
    if(action.type === CALORIE_INPUT_CHANGE){
        return action.payload
    }
    return state
};

const setRecipes = (state = null, action) => {
    if(action.type === SET_RECIPES){
        return action.payload
    }
    return state
};

const showRecipe = (state = null, action) => {
    if(action.type === SHOW_ONE_RECIPE){
        return action.payload
    }
    else if(action.type === SHOW_FIRST_RECIPE && action.payload.hits){
        return action.payload.hits[0]
    }
    return state
};


export default combineReducers({
  textInput,
  setRecipes,
  showRecipe,
  calorieInput
});
