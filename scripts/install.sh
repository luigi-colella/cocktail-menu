# Generate the .env from .env.example
cp .env.example .env

# Install Laravel dependencies
composer install

# Generate the application key for encrypted data
php artisan key:generate

# Install Laravel Mix dependencies
yarn install --no-bin-links
