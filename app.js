import express from "express";
import { PORT } from "#constants";
import listAllRoutes from "#helpers/list-all-routes.js";
import { studentsRouter, usersRouter } from "#routes";

const app = express();

app.set("port", PORT);

app.set("routers", [
  { path: "/users", router: usersRouter },
  { path: "/students", router: studentsRouter }
]);

app.use("/users", usersRouter);
app.use("/students", studentsRouter);


app.listen(app.get("port"), () => {
  console.log(`Server is running at http://localhost:${app.get("port")}`);
  listAllRoutes(app);
});
