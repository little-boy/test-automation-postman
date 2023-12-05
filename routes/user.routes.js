module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/users/:id", User.findUserById);
  app.get("/users", User.findUsers);
  app.post("/users", User.createNewUser);
  app.put("/users/:id", User.updateById);
  app.delete("/users/:id", User.deleteUserById);
};

// route (= url + verbe)
// arguments (= body, header, ...)
