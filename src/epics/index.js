import { combineEpics } from 'redux-observable';
import { FETCH_RECIPES, setRecipes, showFirstrecipe } from '../actions';
import { fetchRecipes } from '../api/edamam';

import { concat as concat$ } from 'rxjs/observable/concat';
import { of as of$ } from 'rxjs/observable/of';

const dispatchAll = actions => concat$(...actions.map(action => of$(action)));

const fetchRecipesEpic = action$ => 
  action$.ofType(FETCH_RECIPES)
  .mergeMap( action => fetchRecipes(action.payload.ingredient, action.payload.calories))
  .flatMap( response => dispatchAll([setRecipes(response), showFirstrecipe(response)  ]))


export default combineEpics(
  fetchRecipesEpic
)
