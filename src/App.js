import React, { Component } from 'react';
import { connect } from 'react-redux';

import { inputChange, fetchRecipes, showOneRecipe, showFirstrecipe, calorieInputChange } from './actions';

import RecipeList from './components/recipes-list';
import SearchBar from './components/searchbar';
import Recipe from './components/recipe-container';

import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
}

  render() {
      console.log(this.props)
    const { textInput, onTextInputChange,calorieValFun, onSubmitSearchInput, showRecipeFun, recipes, recipeToShow, calorieInput } = this.props;
    return (
      <div className="App">
        <SearchBar 
            inputValue={textInput} 
            textInputFun={onTextInputChange} 
            onSubmitSearch={onSubmitSearchInput}
            showRecipe={showRecipeFun}
            calorieChange={calorieValFun}
            calorieValue={calorieInput}
        />
        <RecipeList 
            recipesItems={ recipes }
            showRecipeItem={ showRecipeFun } 
        />
        <Recipe {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    textInput: state.textInput,
    recipes: state.setRecipes,
    recipeToShow: state.showRecipe,
    calorieInput: state.calorieInput
});

const actions = {
    onTextInputChange: inputChange,
    onSubmitSearchInput: fetchRecipes,
    showRecipeFun: showOneRecipe,
    calorieValFun: calorieInputChange,
}

export default connect(mapStateToProps, actions)(App) ;