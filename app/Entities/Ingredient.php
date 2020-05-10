<?php

declare(strict_types=1);

namespace App\Entities;

use Illuminate\Contracts\Support\Arrayable;

class Ingredient implements Arrayable
{
    /**
     * The name of the ingredient.
     * 
     * @var string
     */
    private $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    /**
     * Return the name of the ingredient
     * 
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @inheritdoc
     */
    public function toArray(): array
    {
        return [
            'name' => $this->getName(),
        ];
    }
}
