# REST API

This is a REST API built with Node.js, Express and Sequelize. It has two endpoints: `/users` and `/tokens`.

## Endpoints

### Users

- `POST /users` - Create a new user
  - Body: `{email: string, password: string}`
  - Response: `{id: number, email: string}`
- `PUT /users` - Update a user
  - Body: `{email: string, password: string}`
  - Response: `{id: number, email: string}`
- `DELETE /users` - Delete a user
  - Body: `{email: string, password: string}`
  - Response: `void`

### Tokens

- `POST /tokens` - Create a new token
  - Body: `{email: string, password: string}`
  - Response: `{token: string}`
