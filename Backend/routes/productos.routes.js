import express from "express";

import {obtenerProductos,obtenerOneProducto,agregarProducto,borrarProducto,actualizarProducto} from "../controllers/producto.controlles.js";

const router = express.Router();

router.get("/all",obtenerProductos);
router.get("/one/:id",obtenerOneProducto);
router.post("/add",agregarProducto);
router.delete("/del/:id",borrarProducto);
router.patch("/upd/:id",actualizarProducto);

export default router;