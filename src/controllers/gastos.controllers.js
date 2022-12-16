import Gasto from "../models/Gasto.js";

export const obtenerGastos = async (req, res) => {
  const gastos = await Gasto.find();
  res.send(gastos);
};

export const obtenerGastoId = async (req, res) => {
  try {
    const { id } = req.params;
    const gastoDeId = await Gasto.findById(id);
    res.status(200).json(gastoDeId);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const agregarGasto = async (req, res) => {
  try {
    const nuevoGasto = new Gasto({
      nombre_gasto: req.body.nombre_gasto,
      monto: req.body.monto,
    });
    const nuevoGastoGuardao = await nuevoGasto.save();
    res.status(200).json(nuevoGastoGuardao);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const actualizarGasto = async (req, res) => {
  try {
    const gastoActualizado = await Gasto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(gastoActualizado);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const eliminarGasto = async (req, res) => {
  try {
    await Gasto.findByIdAndDelete(req.params.id);
    res.status(200).json(`Se ha eliminado el gasto ID: ${req.params.id}`);
  } catch (error) {
    res.status(500).json(error);
  }
};
