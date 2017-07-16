import React from 'react';
import { shallow } from 'enzyme';
import Recipe from './recipe-container';

describe('recipesList component tests', () => {
  const props = {
      recipeToShow: {
        recipe : {
        uri : "http://www.edamam.com/ontologies/edamam.owl#recipe_02fd443559332f31d209108a7cd75e58",
        label : "Chocolat Blanc",
        image : "image",
        source : "Martha Stewart",
        url : "http://www.marthastewart.com/343541/chocolat-blanc",
        shareAs : "http://www.edamam.com/recipe/chocolat-blanc-02fd443559332f31d209108a7cd75e58/chocolat/120-300-cal",
        healthLabels : [ "Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free" ],
        ingredientLines : [ "2 cups milk", "1 vanilla bean, split lengthwise", "5 ounces good-quality white chocolate, roughly chopped" ],
        ingredients : [ {
            text : "2 cups milk",
            weight : 488.0
        }, {
            text : "1 vanilla bean, split lengthwise",
            weight : 5.0
        }, {
            text : "5 ounces good-quality white chocolate, roughly chopped",
            weight : 141.74761962890625
        } ],
        calories : 1076.0996697998046,
        totalWeight : 634.7476196289062,
    }  
      }
  }

  it('should render one div', () => {
   const wrapper = shallow(<Recipe {...props}/>);
     expect(wrapper.find('.recipes-list')).toHaveLength(1)
  });

  it('should render the image', () => {
    const wrapper = shallow(<Recipe {...props}/>);
    const image = <img src={ 'image' } />
    expect(wrapper.contains(image)).toEqual(true);
  });

   it('should render the label', () => {
    const wrapper = shallow(<Recipe {...props}/>);
    const label = "Chocolat Blanc";
    expect(wrapper.contains(label)).toEqual(true);
  });

  it('should render 3 ingredients li', () => {
    const wrapper = shallow(<Recipe {...props}/>);
    expect(wrapper.find('.ingredients')).toHaveLength(3);
  });

  it('should render 4 food labels li', () => {
    const wrapper = shallow(<Recipe {...props}/>);
    expect(wrapper.find('.food-label')).toHaveLength(4);
  });
  
});

