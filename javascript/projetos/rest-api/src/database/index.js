import Sequelize from "sequelize";
import database from "../config/database.cjs";
import Aluno from "../models/Aluno.js";
import User from "../models/User.js";
import Foto from "../models/Foto.js";

const models = [Aluno, User, Foto];
const connection = new Sequelize(database);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
