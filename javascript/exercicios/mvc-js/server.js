require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Conectado ao MongoDB");
    app.emit("pronto");
  })
  .catch((e) => console.log(e));
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const routes = require("./routes");
const path = require("path");
const helmet = require("helmet");
const csrf = require("csurf");
const {
  middlewareGlobal,
  csrfMiddleware,
  checkCsrfError,
} = require("./src/middlewares/middleware");

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
  secret: "seusecreto",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());
// Meus Middlewares
app.use(middlewareGlobal);
app.use(csrfMiddleware);
app.use(checkCsrfError);
app.use(routes);

const port = 3000;
app.on("pronto", () => {
  app.listen(port, () => {
    console.log("Acessar o servidor: http://localhost:" + port);
    console.log(`rodando na porta ${port}`);
  });
});
