const { getUsers, createUserData } = require("../models/users");

const usersController = (_req, res, _next) => {
  const usersData = getUsers();

  res.json({ result: usersData });
};

const postUsersController = (req, res, _next) => {
  createUserData({ id: req.body.id, name: req.body.name });

  res.json({ success: true });
};

module.exports = {
  usersController,
  postUsersController,
};
