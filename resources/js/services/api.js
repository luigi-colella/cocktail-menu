import Axios from "axios"

/**
 * @typedef  {Object} Ingredient
 * @property {string} Ingredient.name the name of the ingredient.
 */

/**
 * @typedef  {Object} Cocktail
 * @property {string} Ingredient.id the id of the cocktail.
 * @property {string} Ingredient.name the name of the cocktail.
 * @property {string} Ingredient.thumbnailUrl the url to the thumbnail of the cocktail.
 */

 /**
  * A list of all functions to query the backend APIs.
  */
export default {
    /**
     * Get a list of all available ingredients.
     * 
     * @return {Promise<Array<Ingredient>>} 
     */
    getIngredients () {
        return Axios.get('/api/ingredients').then(response => response.data);
    },

    /**
     * Get a list of cocktails according to provided ingredient.
     * 
     * @param {string} ingredient
     * 
     * @return {Promise<Array<Cocktail>>} 
     */
    getCocktailsByIngredient (ingredient) {
        return Axios.get('/api/cocktails', {params: {'ingredient': ingredient}}).then(response => response.data);
    }
}