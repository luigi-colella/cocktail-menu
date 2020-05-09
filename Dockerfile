FROM php:7.4-fpm

# Set default directory for Docker commands
WORKDIR /var/www/app

# Set Composer bin globally
COPY ./composer.phar /usr/local/bin/composer

# Install PHP extensions needed for Laravel
RUN apt-get update \
    && apt-get install libzip-dev unzip -y \
    && docker-php-ext-install bcmath pdo_mysql zip

# Install Node.js and NPM to build frontend assets
RUN apt-get install -y nodejs npm
