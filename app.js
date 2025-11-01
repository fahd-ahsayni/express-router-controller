import express from "express";
import { studentsRouter, usersRouter } from "./src/routes";

const app = express();
const port = 3000;

app.use("/users", usersRouter);
app.use("/students", studentsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
