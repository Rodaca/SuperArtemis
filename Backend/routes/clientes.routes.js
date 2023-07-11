import express from "express";

import {obtenerClientes,obtenerOneCliente,agregarCliente,borrarCliente,actualizarCliente} from "../controllers/cliente.controlles.js";

const router = express.Router();

router.get("/all",obtenerClientes);
router.get("/one/:id",obtenerOneCliente);
router.post("/add",agregarCliente);
router.delete("/del/:id",borrarCliente);
router.patch("/upd/:id",actualizarCliente);

export default router;