import React from 'react';
import * as ActionCreator from './index';
import * as ActionType from './index';

describe('actions', () => {
  it('should create an action to change the inpput', () => {
    const payload = 'chocolat'
    const expectedAction = {
      type: ActionType.INPUT_CHANGE,
      payload
    }
    expect(ActionCreator.inputChange(payload)).toEqual(expectedAction)
  })
});

describe('actions', () => {
  it('should create an action to set the recipes', () => {
    const payload = {recipe: 'chocolat'}
    const expectedAction = {
      type: ActionType.SET_RECIPES,
      payload
    }
    expect(ActionCreator.setRecipes(payload)).toEqual(expectedAction)
  })
});

describe('actions', () => {
  it('should create an action to show the first recipe from res', () => {
    const payload = {recipe: [{one: 'wine'},{two:'bread'},{three:'cheese'}]}
    const expectedAction = {
      type: ActionType.SHOW_FIRST_RECIPE,
      payload
    }
    expect(ActionCreator.showFirstrecipe(payload)).toEqual(expectedAction)
  })
});

describe('actions', () => {
  it('should create an action to show the selected recipe', () => {
    const payload = {recipe: [{one: 'wine'},{two:'bread'},{three:'cheese'}]}
    const expectedAction = {
      type: ActionType.SHOW_ONE_RECIPE,
      payload
    }
    expect(ActionCreator.showOneRecipe(payload)).toEqual(expectedAction)
  })
});

describe('actions', () => {
  it('should create an action to show the calorie number', () => {
    const payload = 1200
    const expectedAction = {
      type: ActionType.CALORIE_INPUT_CHANGE,
      payload
    }
    expect(ActionCreator.calorieInputChange(payload)).toEqual(expectedAction)
  })
});

// describe('actions', () => {
//   it('should create an action to fetch the data with one entry', () => {
//     const payload= { ingredient: 'chocolat'}
//     const expectedAction = {
//       type: ActionType.FETCH_RECIPES,
//       payload
//     }
//     expect(ActionCreator.fetchRecipes(payload)).toEqual(expectedAction)
//   })
// });