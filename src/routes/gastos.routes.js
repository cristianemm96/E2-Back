import { Router } from "express";
import {
  obtenerGastos,
  obtenerGastoId,
  agregarGasto,
  actualizarGasto,
  eliminarGasto,
} from "../controllers/gastos.controllers.js";

const router = Router();

router.get("/all", obtenerGastos);
router.get("/:id", obtenerGastoId);
router.post("/", agregarGasto);
router.put("/:id", actualizarGasto);
router.delete("/:id", eliminarGasto);

export default router;
