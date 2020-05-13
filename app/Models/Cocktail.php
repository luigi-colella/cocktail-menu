<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Contracts\Support\Arrayable;

class Cocktail implements Arrayable
{
    /**
     * The id of cocktail (provided by external API)
     * 
     * @var string
     */
    private $id;

    /**
     * The name of cocktail
     * 
     * @var string
     */
    private $name;

    /**
     * The url to the thumbnail of the cocktail
     * 
     * @var string
     */
    private $thumbnailUrl;

    /**
     * @param string $id
     * @param string $name
     * @param string $thumbnailUrl
     */
    public function __construct(string $id, string $name, string $thumbnailUrl = null)
    {
        $this->id = $id;
        $this->name = $name;
        $this->thumbnailUrl = $thumbnailUrl;
    }

    /**
     * Get the id of cocktail (provided by the external API).
     * 
     * @return string
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * Get the name of cocktail.
     * 
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Get the thumbnail url.
     * 
     * @return string|null
     */
    public function getThumbnailUrl()
    {
        return $this->thumbnailUrl;
    }

    /**
     * @inheritdoc
     */
    public function toArray(): array
    {
        return [
            'id' => $this->getId(),
            'name' => $this->getName(),
            'thumbnailUrl' => $this->getThumbnailUrl(),
        ];
    }
}
