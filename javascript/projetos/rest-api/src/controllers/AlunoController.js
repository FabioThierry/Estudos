import Aluno from "../models/Aluno.js";
import Foto from "../models/Foto.js";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
      order: [
        ["id", "DESC"],
        [Foto, "id", "DESC"],
      ],
      include: {
        model: Foto,
        attributes: ["filename_url", "filename"],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      const { nome, sobrenome, email, idade, peso, altura } = novoAluno;
      return res.json({ nome, sobrenome, email, idade, peso, altura });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["Faltando ID"] });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
        order: [
          ["id", "DESC"],
          [Foto, "id", "DESC"],
        ],
        include: {
          model: Foto,
          attributes: ["filename_url", "filename"],
        },
      });

      if (!aluno) {
        return res.status(400).json({ errors: ["Aluno não existe"] });
      }

      res.json(aluno);
    } catch (e) {
      return res.status(400).json({ eerrors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["Faltando ID"] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({ errors: ["Aluno não existe"] });
      }

      const novosDados = await aluno.update(req.body);
      const { nome, sobrenome, email, idade, peso, altura } = novosDados;
      return res.json({ nome, sobrenome, email, idade, peso, altura });
    } catch (e) {
      return res.status(400).json({ eerrors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["Faltando ID"] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({ errors: ["Aluno não existe"] });
      }

      await aluno.destroy();

      res.json({ deleted: true });
    } catch (e) {
      return res.status(400).json({ eerrors: e.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
