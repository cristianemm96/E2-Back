import mongoose from "mongoose";

const gastoSchema = new mongoose.Schema(
  {
    nombre_gasto: {
      type: String,
      required: true,
      trim: true,
    },
    monto: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("gasto", gastoSchema);
