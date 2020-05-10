import Axios from "axios"

/**
 * @typedef  {Object} Ingredient
 * @property {string} Ingredient.name the name of the ingredient.
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
    }

}