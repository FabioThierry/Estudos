# Agenda

This is a simple CRUD application built with Node.js, Express and EJS.

## Endpoints

### Users

- `POST /users/register` - Create a new user
  - Body: `{nome: string, sobrenome: string, email: string, password: string}`
  - Response: `{id: number, nome: string, sobrenome: string, email: string}`
- `GET /users` - List all users
  - Response: `{users: [{id: number, nome: string, sobrenome: string, email: string}]}`
- `GET /users/:id` - List a user by id
  - Response: `{user: {id: number, nome: string, sobrenome: string, email: string}}`
- `PUT /users/:id` - Update a user by id
  - Body: `{nome: string, sobrenome: string, email: string, password: string}`
  - Response: `{user: {id: number, nome: string, sobrenome: string, email: string}}`
- `DELETE /users/:id` - Delete a user by id
  - Response: `void`

### Events

- `POST /events` - Create a new event
  - Body: `{user_id: number, titulo: string, descricao: string, data: string}`
  - Response: `{event: {id: number, user_id: number, titulo: string, descricao: string, data: string}}`
- `GET /events` - List all events
  - Response: `{events: [{id: number, user_id: number, titulo: string, descricao: string, data: string}]}`
- `GET /events/:id` - List a event by id
  - Response: `{event: {id: number, user_id: number, titulo: string, descricao: string, data: string}}`
- `PUT /events/:id` - Update a event by id
  - Body: `{user_id: number, titulo: string, descricao: string, data: string}`
  - Response: `{event: {id: number, user_id: number, titulo: string, descricao: string, data: string}}`
- `DELETE /events/:id` - Delete a event by id
  - Response: `void`

## Requirements

- Node.js
- MongoDB

## Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file with the necessary environment variables
4. Start the application with `npm start`
