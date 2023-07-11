import express from "express";

import {obtenerEmpleados,obtenerOneEmpleado,agregarEmpleado,borrarEmpleado,actualizarEmpleado} from "../controllers/empleado.controlles.js";

const router = express.Router();

router.get("/all",obtenerEmpleados);
router.get("/one/:id",obtenerOneEmpleado);
router.post("/add",agregarEmpleado);
router.delete("/del/:id",borrarEmpleado);
router.patch("/upd/:id",actualizarEmpleado);

export default router;