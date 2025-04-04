import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig.js";

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo deve ser preenchido",
            },
          },
        },
        filename: Sequelize.STRING,
        aluno_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          validate: {
            notEmpty: {
              msg: "O campo deve ser preenchido",
            },
          },
        },
        filename_url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue("filename")}`;
          },
        },
      },
      {
        sequelize,
        tableName: "fotos",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" });
  }
}
