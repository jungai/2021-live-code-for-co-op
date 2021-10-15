const Express = require("express");
const { usersController, postUsersController } = require("./controllers/users");
const cors = require("cors");

const app = new Express();

const port = 3000;

app.use(cors());
app.use(Express.json()).use(
  Express.urlencoded({
    extended: true,
  })
);

app.get("/users", usersController);
app.post("/users", postUsersController);

app.listen(port, () => console.log(`server start on port -> ${port}`));
