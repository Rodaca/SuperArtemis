import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";

const app =express();
app.use(express.json());
app.use("/categoria",categoriasRouter);
dotenv.config();
const PORT =process.env.PORT;

conectarDB();
const configCors ={
    method:["GET","POST","PATCH","DELETE"]
}
app.use(cors(configCors))

app.listen(PORT,()=>{
    console.log(`Server Wed listenning on port ${PORT}`);
})