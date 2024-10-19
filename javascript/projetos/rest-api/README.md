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

# Setup Docker

## REMOVE VERSÕES ANTERIORES DO DOCKER

sudo apt-get remove \
 docker \
 docker-engine \
 docker.io \
 containerd runc -y

sudo apt update

## INSTALA O DOCKER-CE

sudo apt install \
 apt-transport-https \
 ca-certificates \
 curl \
 gnupg-agent \
 software-properties-common -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
 "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
 $(lsb_release -cs) \
 stable" -y

sudo apt update

sudo apt install docker-ce docker-ce-cli containerd.io -y

#### CRIANDO O CONTAINER DO MARIADB

sudo docker run --restart always -d --name bdmariadb1 -p 3306:3306 \
 -e MYSQL_ROOT_PASSWORD=minha_senha mariadb
