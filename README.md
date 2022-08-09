# URL Shortener Service

## Summary

The purpose of the service is to create a short URL.

## Getting started

### Prerequisites

1. Install [Docker](https://docs.docker.com/get-docker/)
   with Docker Compose.

2. Add `.env` file, example:

```
PG_DB=short
PG_HOST=db
PG_PORT=5432
PG_USER=short
PG_PASS=password
NODE_ENV=development
```

### Start

```
docker compose up
```

### Use

```
curl -d '{"url": "https://google.com"}' -H "Content-Type: application/json" -X POST http://localhost:5000/api/url
```

## Details

### Structure (inside /src)

`/src/entity/` - models for database.

`/src/libs/` - helpful libraries.

`/src/migration/` - migrations for database changes.

`/src/routes/` - routes of the service.

`/src/data-sources.ts` - database configuration file.

`/src/index.ts` - main file for service execution.
