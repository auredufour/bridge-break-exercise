import React, { Component } from 'react';

export default class Recipe extends Component {
     constructor(props) {
        super(props);
    }

  render() {
      const { recipeToShow, addtoFavorite, favoriteRecipes } = this.props;

    //   const setFavoriteButton = () => {
    //       console.log(this.props)
    //     if(!favoriteRecipes || favoriteRecipes.label !== recipeToShow.recipe.label){
    //         return(
    //             <button onClick={ () => addtoFavorite(recipeToShow.recipe)}>add to favorite</button>
    //         )
    //     }
    //   }

      const recipeItemToShow = () => {
          if(recipeToShow){
              return (
                  <div>
                      <img src={ recipeToShow.recipe.image }/>
                      <h1>{ recipeToShow.recipe.label }</h1>
                      <ul className='label'>
                        { recipeToShow.recipe.healthLabels.map( foodLabel => <li className='food-label'>{foodLabel}</li>)}
                      </ul>
                      <h3>Ingredients</h3>
                      <ul>
                        { recipeToShow.recipe.ingredientLines.map( ingredient => <li className='ingredients'>{ingredient}</li>)}
                      </ul>
                      {/*{ setFavoriteButton() }*/}
                      <a href={recipeToShow.recipe.url}>See the recipe steps</a>
                  </div>
              )
          }
          else {
              return (
                  <div className='no-recipe'>No recipe found! Try another search!</div>
              )
          }
      }
        return (
      <div className="recipes-container">
          { recipeItemToShow()} 
      </div>
    )
  }
}
  