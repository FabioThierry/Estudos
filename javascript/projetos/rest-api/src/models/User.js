import Sequelize, { Model } from "sequelize";
import bcrypy from "bcryptjs";
export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "O nome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Email ja existe",
          },
          validate: {
            isEmail: {
              msg: "Email invalido",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: "A senha deve ter entre 6 e 50 caracteres",
            },
          },
        },
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypy.hash(user.password, 8);
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcrypy.compare(password, this.password_hash);
  }
}
