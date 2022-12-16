import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017")
  .then(console.log("Conectado a DB"))
  .catch((err) => {
    err;
  });
