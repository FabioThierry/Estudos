"use strict";

const bcrypy = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Joanna",
          email: "joanna@gmail.com",
          password_hash: await bcrypy.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Joanna 1",
          email: "joanna1@gmail.com",
          password_hash: await bcrypy.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Joanna 2",
          email: "joanna2@gmail.com",
          password_hash: await bcrypy.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
