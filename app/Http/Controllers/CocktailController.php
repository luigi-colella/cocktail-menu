<?php

namespace App\Http\Controllers;

use App\Http\Clients\CocktailDB;
use App\Http\Requests\CocktailIndexRequest;
use App\Http\Requests\CocktailOrderRequest;
use App\Models\CocktailOrder;
use Illuminate\Support\Collection;

class CocktailController extends Controller
{
    /**
     * Return all available cocktails according to provided ingredient.
     * 
     * @param CocktailIndexRequest $request
     * @param CocktailDB $cocktailDB
     * 
     * @return Collection[\App\Models\Cocktail]
     */
    public function index(CocktailIndexRequest $request, CocktailDB $cocktailDB): Collection
    {
        $ingredient = $request->getIngredient();

        return $cocktailDB->getCocktailsByIngredient($ingredient);
    }

    /**
     * Save the order made by user in the database.
     * 
     * @param CocktailOrderRequest $request
     * 
     * @return int
     */
    public function saveOrder(CocktailOrderRequest $request): int
    {
        $cocktails = $request->getCocktails();

        $order = CocktailOrder::create([
            'user_id' => $request->user()->id,
            'cocktails_quantity' => json_encode($cocktails),
        ]);

        return $order->id;
    }
}
