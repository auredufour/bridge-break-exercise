import React, { Component } from 'react';



export default class RecipesList extends Component {
constructor(props) {
    super(props);
}

  render() {

  const setRecipeListItem = () => {
    if(this.props.recipesItems ){ 
      return ( 
        this.props.recipesItems.hits.map( 
          recipeitem => <li onClick={() => this.props.showRecipeItem(recipeitem)}>{recipeitem.recipe.label}</li>
        )
      ) 
    }
  };

    return (
     
      <ul className="recipes-list">
        { setRecipeListItem() }
      </ul>
    )
  }
}
  