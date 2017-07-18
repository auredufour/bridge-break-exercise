import React, { Component } from 'react';

export default class RecipesList extends Component {
constructor(props) {
    super(props);
}

  render() {
    console.log(this.props)
  const setRecipeListItem = () => {
    if(this.props.recipes && this.props.recipes.hits){ 
      return ( 
        this.props.recipes.hits.map( recipeitem => {
          return (
            <li className='recipe'>
              <button onClick={() => this.props.showRecipeFun(recipeitem)}>
                {recipeitem.recipe.label}
              </button>
            </li>
          )
        })
      )
    }
  };

  const setPaggination = () => {
    if(this.props.recipes){
      return <p>Results {this.props.recipes.from}-{this.props.recipes.to} </p>
    }
  }

  const gotNextPage = () => {
    if(this.props.recipes){
    const nextFrom = Number(this.props.recipes.from) + 10;
    const nextTo = Number(this.props.recipes.to) + 10;
    return(
      <button onClick={() => this.props.goToNextPage( this.props.textInput, nextFrom, nextTo )}>next page</button>
    )
    }
  }

    return (
    <div className={this.props.recipes ? 'recipes-list-component' : 'hidden'}>
      <h2>Choose a recipe:</h2>
        { setPaggination() }
        <ul className='recipes-list'>
          { setRecipeListItem() }
        </ul>
        { gotNextPage() }
      </div>
    )
  }
}
  