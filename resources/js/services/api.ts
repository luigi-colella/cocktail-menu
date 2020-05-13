import Axios from 'axios'
import { Ingredient, Cocktail, SelectedCocktails } from '../types'
import { map } from 'lodash'

/**
 * A list of all functions to query the backend APIs.
 */
export default {
  /**
   * Get a list of all available ingredients.
   */
  getIngredients(): Promise<Ingredient[]> {
    return Axios.get('/api/ingredients').then((response) => response.data)
  },

  /**
   * Get a list of cocktails according to provided ingredient.
   */
  getCocktailsByIngredient(ingredient: string): Promise<Cocktail[]> {
    return Axios.get('/api/cocktails', { params: { ingredient } }).then(
      (response) => response.data
    )
  },

  /**
   * Save the user's order.
   */
  submitOrder(order: SelectedCocktails): Promise<{}> {
    let cocktails = map(order, (quantity, name) => ({ quantity, name }))
    return Axios.post('/api/cocktails-order', { cocktails }).then(
      (response) => response.data
    )
  },
}
