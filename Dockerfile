FROM php:7.4-fpm

# Set default directory for Docker commands
WORKDIR /var/www/app

# Set Composer bin globally
COPY ./composer.phar /usr/local/bin/composer

# Install PHP extensions needed for Laravel
RUN apt-get update \
    && apt-get install -y libzip-dev unzip \
    && docker-php-ext-install bcmath pdo_mysql zip

# Install Node.js and some libraries to build frontend assets
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash \
    && apt-get install -y nodejs \
    && npm install -g yarn \
    && npm install -g cross-env

