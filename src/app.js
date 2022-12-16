import express from "express";
import morgan from "morgan";
import routerGastos from "./routes/gastos.routes.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Inicio");
});

app.use("/gastos", routerGastos);

export default app;
