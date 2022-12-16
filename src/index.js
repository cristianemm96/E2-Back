import app from "./app.js";
import "./database.js"

const puerto = 3000;

app.listen(puerto)
console.log("Corriendo en puerto",puerto)