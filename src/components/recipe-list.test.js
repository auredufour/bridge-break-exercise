import React from 'react';
import { shallow } from 'enzyme';
import RecipesList from './recipes-list';

describe('recipesList component tests', () => {
  const props = {
      hits:[{
        recipe : {
        uri : "http://www.edamam.com/ontologies/edamam.owl#recipe_02fd443559332f31d209108a7cd75e58",
        label : "Chocolat Blanc",
        image : "https://www.edamam.com/web-img/7a1/7a1b9c1a96125d079c0a082a2468a9bf.jpg",
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
        }      },{

        recipe : {
        uri : "http://www.edamam.com/ontologies/edamam.owl#recipe_02fd443559332f31d209108a7cd75e58",
        label : "Chocolat Blanc",
        image : "https://www.edamam.com/web-img/7a1/7a1b9c1a96125d079c0a082a2468a9bf.jpg",
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
      ]
  }

  it('should render one ul', () => {
   const wrapper = shallow(<RecipesList recipesItems={props}/>);
     expect(wrapper.find('ul')).toHaveLength(1)
  });

  it('should render two li', () => {
   const wrapper = shallow(<RecipesList recipesItems={props}/>);
    expect(wrapper.find('li').length).toEqual(2);
  });
});
