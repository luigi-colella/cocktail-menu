<?php

namespace App\Http\Requests;

use App\Models\Ingredient;
use Illuminate\Foundation\Http\FormRequest;

class CocktailIndexRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'ingredient' => 'required|string',
        ];
    }

    /**
     * Get the ingredient provided by the user.
     * 
     * @return Ingredient
     */
    public function getIngredient(): Ingredient
    {
        return new Ingredient($this->input('ingredient'));
    }
}
