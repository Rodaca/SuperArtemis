import express from "express";

import {obtenerCategorias,obtenerOneCategoria,agregarCategoria,borrarCategoria,actualizarCategoria} from "../controllers/categoria.controlles.js";

const router = express.Router();

router.get("/all",obtenerCategorias);
router.get("/one/:id",obtenerOneCategoria);
router.post("/add",agregarCategoria);
router.delete("/del/:id",borrarCategoria);
router.patch("/upd/:id",actualizarCategoria);

export default router;