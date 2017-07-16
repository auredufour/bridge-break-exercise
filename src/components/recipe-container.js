import React, { Component } from 'react';

export default class Recipe extends Component {

  render() {
      const { recipeToShow } = this.props;

      const recipeItemToShow = () => {
          if(recipeToShow){
              return (
                  <div>
                      <img src={ recipeToShow.recipe.image }/>
                      <h1>{ recipeToShow.recipe.label }</h1>
                      <ul>
                        { recipeToShow.recipe.ingredientLines.map( ingredient => <li className='ingredients'>{ingredient}</li>)}
                      </ul>
                      <ul>
                        { recipeToShow.recipe.healthLabels.map( foodLabel => <li className='food-label'>{foodLabel}</li>)}
                      </ul>
                      <p>{ recipeToShow.recipe.calories }</p>
                  </div>
              )
          }
      }
        return (
      <div className="recipes-list">
          { recipeItemToShow()} 
      </div>
    )
  }
}
  