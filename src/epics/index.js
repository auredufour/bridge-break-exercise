import { combineEpics } from 'redux-observable';
import { FETCH_RECIPES, GO_NEXT_PAGE, setRecipes, showFirstrecipe } from '../actions';
import { fetchRecipes, goToNextPage } from '../api/edamam';

import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';

const dispatchAll = actions => concat$(...actions.map(action => of$(action)));

const fetchRecipesEpic = action$ => 
  action$.ofType(FETCH_RECIPES)
  .mergeMap( action => fetchRecipes(action.payload.ingredient, action.payload.calories))
  .flatMap( response => dispatchAll([setRecipes(response), showFirstrecipe(response)  ]))

const fetchNextRecipe = action$ => 
  action$.ofType(GO_NEXT_PAGE)
  .mergeMap( action => goToNextPage(action.payload.ingredient, action.payload.from, action.payload.to ))
  .flatMap( response => dispatchAll([setRecipes(response), showFirstrecipe(response)  ]))

export default combineEpics(
  fetchRecipesEpic,
  fetchNextRecipe
)
