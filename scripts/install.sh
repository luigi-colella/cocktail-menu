# Install Laravel dependencies
composer install

# Generate the application key for encrypted data
php artisan key:generate

# Install Laravel Mix dependencies
yarn install --no-bin-links

# Run db migrations
php artisan migrate

# Run db seeders
php artisan db:seed

# Setup Laravel Passport
php artisan passport:install

# Build frontend
yarn run production
