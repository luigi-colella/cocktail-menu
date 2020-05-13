<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CocktailOrderRequest extends FormRequest
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
            'cocktails' => 'required',
            'cocktails.*.name' => 'required|string',
            'cocktails.*.quantity' => 'required|numeric',
        ];
    }

    /**
     * Get the data about cocktails of the order.
     * 
     * @return array
     */
    public function getCocktails(): array
    {
        return $this->input('cocktails');
    }
}
