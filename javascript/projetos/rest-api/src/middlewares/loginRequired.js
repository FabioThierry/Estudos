import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ errors: ["Login inválido"] });

  const [, token] = authorization.split(" ");
  if (!token) return res.status(401).json({ errors: ["Login inválido"] });

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({ where: { id, email } });
    if (!user) return res.status(401).json({ errors: ["Login inválido"] });

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ errors: ["Token expirado ou inválido"] });
  }
};
