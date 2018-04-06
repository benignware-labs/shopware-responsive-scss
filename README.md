# Shopware Responsive SCSS

## Description
A sass port of Shopware's Responsive theme


## Development

Download [Docker CE](https://www.docker.com/get-docker) for your OS.

Point terminal to your project root and start up the container.

```cli
docker-compose up -d
```

Open your browser at [http://localhost:7777](http://localhost:7777).

Go through Shopware installation and activate this theme.

Building of client side assets is handled by nodejs and hence completely untangled from shopware backend.
Therefore you should disable any compression and source map creating in theme manager settings.
When developing you will also need to disable caching in order to make your changes actually take place.

### Useful docker commands

##### Startup services

```cli
docker-compose up -d
```
You may omit the `-d`-flag for verbose output.

##### Shutdown services

In order to shutdown services, issue the following command

```cli
docker-compose down
```

##### List running containers

```cli
docker-compose ps
```

##### Remove containers

```cli
docker-compose rm
```

##### List all globally running docker containers

```cli
docker ps
```

##### Globally stop all running docker containers

```cli
docker stop $(docker ps -a -q)
```

##### Globally remove all containers

```cli
docker rm $(docker ps -a -q)
```

##### Delete all docker related stuff

```cli
docker system prune
```

## Production

Download [Shopware CE](https://de.shopware.com/community/) to a distinct directory on your machine.

Extract the archive, point the terminal to that directory and run the following command in order to install [composer](https://getcomposer.org/) locally.

```cli
curl -s https://getcomposer.org/installer | php
```

Install server-side dependencies:

```cli
php composer.phar install
```

Then, point the terminal to `recovery/common` and repeat the two steps above.

Upload all shopware related files to a web-server.

Upload project directory to `themes/Frontend/ResponsiveSCSS` on the remote server.

Open up the domain in your browser and go through the assistant in order to complete the installation.
