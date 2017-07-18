const APP_ID = 'e7e216b0';
const APP_KEY = '0b5ad1a1dcce889c9ea6a9df1e16a318';

export const fetchRecipes = (ingredient, calories=null) => {
    debugger
    if(calories){
        return (
            fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${ingredient}&calories=gte%20120,%20lte%20${calories}`)
            .then(res => res.json())
        )
    }
    else {
        return (
            fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${ingredient}`)
            .then(res => res.json())
        ) 
    }
}

export const goToNextPage = (ingredient, from, to) => {
        return (
            fetch(`https://api.edamam.com/search?app_id=${APP_ID}&from=${from}&to=${to}&app_key=${APP_KEY}&q=${ingredient}`)
            .then(res => res.json())
        ) 
    }


    