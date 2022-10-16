# Redis OM Example
---

## Prerequisites

### Node >= 12.0

If this is your fist development. We encourage you to use NVM by following the steps on https://github.com/nvm-sh/nvm.

### Redis Stack

A redis extension with supported JSON data, time series data, graph and searching feature.

--

For local development using MacOS, follow the steps on https://redis.io/docs/stack/get-started/install/mac-os/. Or if you have installed docker in your machine, run with command below:

```
docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest
```


## Frameworks & 3rd party libraries

|No| Name | Version | Description |
|--|--|--|--|
|1.| [**Express.js**](https://hapi.dev/) | `4.17.3` | Primary Back End API framework. |
|2.| [**Redis**](https://github.com/redis/node-redis) | `4.17.3` | A redis client. |
|3.| [**Redis OM**](https://github.com/redis/redis-om-node) | `4.0.4` | Object mapping for Redis. |
|4.| [**Swagger UI Express**](https://github.com/scottie1984/swagger-ui-express) | `4.3.0` | For serving auto-generated swagger-ui API docs from express. |
|5.| [**nodemon**](https://github.com/remy/nodemon) | `2.0.15` | Dev-only standalone package. For enabling hot-reloading in local development. |


## Development Guideline

1. Clone this repository `git clone https://github.com/valdiearsanur/redis-om-example.git`

1. Install the dependencies `npm install`

1. Run the application `npm run start`

