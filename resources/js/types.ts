
export interface Ingredient {
    /**
     * The name of the ingredient.
     */
    name: string
}

export interface Cocktail {
    /**
     * The id of the cocktail.
     */
    id: string,

    /**
     * The name of the cocktail.
     */
    name: string,

    /**
     * The url to the thumbnail of the cocktail.
     */
    thumbnailUrl: string
}

export interface SelectedCocktails {
    /**
     * A collection with the cocktails ordered by the user.
     * Each key-value pair identifies a cocktail (by its name) and the quantity ordered.
     */
    [cocktailName: string]: number
}