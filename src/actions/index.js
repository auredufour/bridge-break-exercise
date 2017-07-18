export const INPUT_CHANGE = 'INPUT_CHANGE';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SET_RECIPES = 'SET_RECIPES';
export const SHOW_ONE_RECIPE = 'SHOW_ONE_RECIPE';
export const SHOW_FIRST_RECIPE = 'SHOW_FIRST_RECIPE';
export const CALORIE_INPUT_CHANGE = 'CALORIE_INPUT_CHANGE';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const GO_NEXT_PAGE = 'GO_NEXT_PAGE';

export const inputChange = inputValue => ({
    type: INPUT_CHANGE,
    payload: inputValue,
});

export const fetchRecipes = (recipeKeyword, calories) => ({
    type: FETCH_RECIPES,
    payload: {ingredient: recipeKeyword, calories: calories},
});

export const setRecipes = recipes => ({
    type: SET_RECIPES,
    payload: recipes,
})

export const showFirstrecipe = recipes => ({
    type: SHOW_FIRST_RECIPE,
    payload: recipes,
})

export const showOneRecipe = recipe => ({
    type: SHOW_ONE_RECIPE,
    payload: recipe,
})

export const calorieInputChange = calorie => ({
    type: CALORIE_INPUT_CHANGE,
    payload: calorie,
})

export const addFavorites = recipe => ({
    type: ADD_FAVORITES,
    payload: recipe,
})

export const goToNextPage = (recipeKeyword, from, to) => ({
    type: GO_NEXT_PAGE,
    payload: {
        ingredient: recipeKeyword,
        from,
        to
    }
})

