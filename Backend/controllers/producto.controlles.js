import Producto from "../models/Productos.js";

const obtenerProductos = async (req,res) =>{
    const productos =await Producto.find();
    res.json(productos);

}
const obtenerOneProducto = async (req,res) =>{
    try {
        const producto =await Producto.findOne({_id:req.params.id});
        res.json(producto);
    } catch (error) {
        res.status(404)
        res.send({error:"Producto no existe"})
    }
}

const agregarProducto =async (req,res)=>{
    const producto =new Producto(req.body);
    try {
        const nuevaProducto =await producto.save();
        res.json(nuevaProducto);
    } catch (error) {
        console.log(error);
    }
}

const borrarProducto = async (req,res) =>{
    
    try {
        await Producto.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Producto no existe"})
    }
}

const actualizarProducto = async (req,res)=>{
    try {
        const producto =await Producto.findOne({_id:req.params.id})
        if(req.body.imagen){
            producto.imagen=req.body.imagen;
        }

        if(req.body.nombre){
            producto.nombre=req.body.nombre;
        }

        if(req.body.descripcion_Producto){
            producto.descripcion_Producto=req.body.descripcion_Producto;
        }

        await Producto.save()
        res.send(Producto)
    } catch (error) {
        res.status(404)
        res.send({error:"Producto no existe"})
    }
}

export {obtenerProductos,obtenerOneProducto,agregarProducto,borrarProducto,actualizarProducto}