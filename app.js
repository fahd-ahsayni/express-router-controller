import express from "express";
import usersRouter from "./routes/users.routes.js";
import studentsRouter from "./routes/students.routes.js";

const app = express();
const port = 3000;

app.use("/users", usersRouter);
app.use("/students", studentsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
