<?php

namespace App\Http\Controllers;

use App\Http\Clients\CocktailDB;
use App\Http\Requests\CocktailRequest;
use Illuminate\Support\Collection;

class CocktailController extends Controller
{
    /**
     * Return all available cocktails according to provided ingredient.
     * 
     * @param Request $request
     * @param CocktailDB $cocktailDB
     * 
     * @return Collection[\App\Entities\Cocktail]
     */
    public function index(CocktailRequest $request, CocktailDB $cocktailDB): Collection
    {
        $ingredient = $request->getIngredient();

        return $cocktailDB->getCocktailsByIngredient($ingredient);
    }
}
