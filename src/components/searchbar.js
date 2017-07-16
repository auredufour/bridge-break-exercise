import React, { Component } from 'react';

export default class SearchBar extends Component {

  render() {

    const { inputValue, textInputFun, onSubmitSearch, showRecipe, calorieChange, calorieValue } = this.props;
    return (
      <div className="searchbar">
            <input 
            type='text'
            placeholder='recipe'
            value={ inputValue }
            onChange={ evt => textInputFun( evt.target.value )}
             />
             <input
             type='number'
             placeholder='calorie max'
            value={ calorieValue }
            onChange={ evt => calorieChange( evt.target.value )}
            />
            <button 
            onClick={ () => {
                console.log(calorieValue)
                    onSubmitSearch(inputValue, calorieValue)
                    textInputFun('') }
             } >
                {`Let's search for ${inputValue}`}
            </button>
      </div>
    )
  }
}
  