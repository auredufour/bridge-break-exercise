import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import RecipeList from './components/recipes-list';
import SearchBar from './components/searchbar';
import Recipe from './components/recipe-container';

import { 
    inputChange, 
    fetchRecipes, 
    showOneRecipe, 
    showFirstrecipe, 
    calorieInputChange, 
    addFavorites,
    goToNextPage } from './actions';

class App extends Component {
    constructor(props) {
    super(props);
}

  render() {
    const { 
        showRecipeFun, 
        recipes
     } = this.props;

    return (
      <div className="App">
        <SearchBar {...this.props}/>
        <div className='recipe-result'>
            <RecipeList {...this.props}/>
            <Recipe {...this.props}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    textInput:       state.textInput,
    recipes:         state.setRecipes,
    recipeToShow:    state.showRecipe,
    calorieInput:    state.calorieInput,
    // favoriteRecipes: state.favoriteRecipes
});

const actions = {
    onTextInputChange:   inputChange,
    onSubmitSearchInput: fetchRecipes,
    showRecipeFun:       showOneRecipe,
    calorieValFun:       calorieInputChange,
    goToNextPage: goToNextPage,
    // addtoFavorite:       addFavorites,   
}

export default connect(mapStateToProps, actions)(App) ;