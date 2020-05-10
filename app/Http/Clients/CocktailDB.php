<?php

declare(strict_types=1);

namespace App\Http\Clients;

use App\Entities\Cocktail;
use App\Entities\Ingredient;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

/**
 * This class is responsible to query the public API of https://thecocktaildb.com/
 */
class CocktailDB
{
    /**
     * Url to fetch all available ingredients.
     * 
     * @var string
     */
    private $api_url_ingredients;

    /**
     * Url to fetch cocktails.
     * 
     * @var string
     */
    private $api_url_cocktails;

    public function __construct()
    {
        $api_url = config('clients.cocktailDB_api_url');
        $this->api_url_ingredients = $api_url . '/list.php';
        $this->api_url_cocktails = $api_url . '/filter.php';
    }

    /**
     * Fetch a list of all available ingredients.
     * 
     * @return Collection[Ingredient]
     */
    public function getIngredients(): Collection
    {
        $response = Http::get($this->api_url_ingredients, ['i' => 'list'])
            ->json();
        
        return collect($response['drinks'])->map(function (array $ingredient) {
            return new Ingredient($ingredient['strIngredient1']);
        });
    }

    /**
     * Fetch a list of cocktails according to passed ingredient.
     * 
     * @param Ingredient $ingredient
     * 
     * @return Collection[Cocktail]
     */
    public function getCocktailsByIngredient(Ingredient $ingredient): Collection
    {
        $response = Http::get($this->api_url_cocktails, ['i' => $ingredient->getName()])
            ->json();
        
        return collect($response['drinks'])->map(function (array $cocktail) {
            return new Cocktail($cocktail['idDrink'], $cocktail['strDrink'], $cocktail['strDrinkThumb']);
        });
    }
}
