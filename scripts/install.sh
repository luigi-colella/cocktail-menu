# Install Laravel dependencies
composer install

# Generate the .env from .env.example
cp .env.example .env

# Generate the application key for encrypted data
php artisan key:generate
