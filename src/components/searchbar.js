import React, { Component } from 'react';

export default class SearchBar extends Component {

  render() {
    const { 
      textInput, 
      onTextInputChange, 
      onSubmitSearchInput, 
      recipeToShow, 
      calorieValFun, 
      calorieInput 
    } = this.props;

    return (
      <div className="searchbar">
            <input
            className='searchInput' 
            type='text'
            placeholder='recipe'
            value={ textInput }
            onChange={ evt => onTextInputChange( evt.target.value )}
             />
             {/*<input
             type='number'
             placeholder='calorie max'
            value={ calorieInput }
            onChange={ evt => calorieValFun( evt.target.value )}
            />*/}
            <button
            className='submit-button' 
            onClick={ () => {
                    onSubmitSearchInput(textInput, calorieInput)
                    {/*onTextInputChange('')*/}
                     }
             } >
                {`Let's search`}
            </button>
      </div>
    )
  }
}
  