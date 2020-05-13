<?php

namespace App\Http\Controllers;

use App\Http\Clients\CocktailDB;
use Illuminate\Support\Collection;

class IngredientController extends Controller
{
    /**
     * Return all available ingredients for cocktails.
     * 
     * @param CocktailDB $cocktailDB
     * 
     * @return Collection[\App\Models\Ingredient]
     */
    public function index(CocktailDB $cocktailDB): Collection
    {
        return $cocktailDB->getIngredients();
    }
}
