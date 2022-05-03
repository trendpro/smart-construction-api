# Materials Management API

## How to run the app
1. `cd` into project folder.
2. Run `yarn install` to install dependencies.
3. Start the server by running `yarn start` and the API will be available on port 
`http://localhost:4000`

Run `yarn test` to run the tests.

## Questions
1. How do we handle AuthN and AuthZ?

## Trade-offs
1. Doesn't support different clients updating the data at the same time. Doesn't guarantee data consistency.
1. Current architecture isn't as scalable.
1. API doesn't allow filtering, sorting and pagination.
1. we could cache data to improve perf.
1. CORS policy might leave users exposed.

## How long it took to build?
API development: 1 hour 37min
Web app development: 2 hours