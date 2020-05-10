<?php

declare(strict_types=1);

namespace App\Http\Clients;

use App\Entities\Ingredient;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

/**
 * This class is responsible to query the public API of https://thecocktaildb.com/
 */
class CocktailDB
{
    /**
     * The url of the public API
     * 
     * @var string
     */
    private $api_url;

    public function __construct()
    {
        $this->api_url = config('clients.cocktailDB_api_url');
    }

    /**
     * Fetch a list of all available ingredients
     * 
     * @return Collection[Ingredient]
     */
    public function getIngredients(): Collection
    {
        $response = Http::get($this->api_url . '/list.php', ['i' => 'list'])->json();
        
        return collect($response['drinks'])->map(function (array $ingredient) {
            return new Ingredient($ingredient['strIngredient1']);
        });
    }
}
