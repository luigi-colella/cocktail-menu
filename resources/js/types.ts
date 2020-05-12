
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
    [cocktailName: string]: number
}