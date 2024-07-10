const Login = require("../models/LoginModel");
exports.index = (req, res) => {
  if (req.session.user) return res.render("login-logado");
  res.render("login");
};
exports.register = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.register();
    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(() => res.redirect("/login/index"));
      return;
    }
    req.flash("success", "Seu usuário foi criado com sucesso");
    req.session.save(() => {
      return res.redirect("/login/index");
    });
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.login = async (req, res) => {
  try {
    console.log("Starting login process");
    const login = new Login(req.body);
    await login.login();

    if (login.errors.length > 0) {
      console.log("Login errors:", login.errors);
      req.flash("errors", login.errors);
      req.session.save(() => {
        console.log("Redirecting to login index");
        return res.redirect("/login/index");
      });
    } else {
      console.log("Login successful");
      req.flash("success", "Login efetuado com sucesso");
      req.session.user = login.user;
      req.session.save(() => {
        console.log("Redirecting to login index");
        return res.redirect("/login/index");
      });
    }
  } catch (e) {
    console.log("Error during login:", e);
    console.log("Redirecting to 404");
    return res.render("404");
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login/index");
};
