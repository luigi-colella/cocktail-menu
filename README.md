# Cocktail Menu
An interactive menu where you can choose and order your favourite drinks 🍺🍹

# Prerequisites

- Docker Compose >= 3.3

# Getting started

To start the application run the following commands:

```sh
# Clone this repository
git clone https://github.com/lgcolella/cocktail-menu.git

# Navigate into the project folder
cd cocktail-menu

# Start docker-compose with services
docker-compose up -d

# Setup Laravel and install dependencies
docker-compose exec app bash -c "./scripts/install.sh"
```

Then you can visit the application at `localhost:8000`.

To log into, you can use a test user providing `test@email.com` and `password` as credentials.

If you want manage the database with a visual GUI, you can use Adminer at `localhost:8080` (The database credentials are those in the .env file).

> If you installed Docker by using Docker Toolbox, you may need to replace `localhost` with the output of `docker-machine ip`.
