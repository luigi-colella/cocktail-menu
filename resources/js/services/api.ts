import Axios from "axios"
import { Ingredient, Cocktail } from "../types";

 /**
  * A list of all functions to query the backend APIs.
  */
export default {
    /**
     * Get a list of all available ingredients.
     */
    getIngredients (): Promise<Ingredient[]> {
        return Axios.get('/api/ingredients').then(response => response.data);
    },

    /**
     * Get a list of cocktails according to provided ingredient.
     */
    getCocktailsByIngredient (ingredient: string): Promise<Cocktail[]> {
        return Axios.get('/api/cocktails', {params: {'ingredient': ingredient}}).then(response => response.data);
    }
}