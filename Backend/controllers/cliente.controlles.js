import Cliente, {  } from "../models/Clientes.js";

const obtenerClientes = async (req,res) =>{
    const clientes =await Cliente.find();
    res.json(clientes);

}
const obtenerOneCliente = async (req,res) =>{
    try {
        const cliente =await Cliente.findOne({_id:req.params.id});
        res.json(cliente);
    } catch (error) {
        res.status(404)
        res.send({error:"Cliente no existe"})
    }
}

const agregarCliente =async (req,res)=>{
    const cliente =new Cliente(req.body);
    try {
        const nuevaCliente =await cliente.save();
        res.json(nuevaCliente);
    } catch (error) {
        console.log(error);
    }
}

const borrarCliente = async (req,res) =>{
    
    try {
        await Cliente.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Cliente no existe"})
    }
}

const actualizarCliente = async (req,res)=>{
    try {
        const cliente =await Cliente.findOne({_id:req.params.id})
        if(req.body.imagen){
            cliente.imagen=req.body.imagen;
        }

        if(req.body.nombre){
            cliente.nombre=req.body.nombre;
        }

        if(req.body.descripcion_Cliente){
            cliente.descripcion_Cliente=req.body.descripcion_Cliente;
        }

        await Cliente.save()
        res.send(Cliente)
    } catch (error) {
        res.status(404)
        res.send({error:"Cliente no existe"})
    }
}

export {obtenerClientes,obtenerOneCliente,agregarCliente,borrarCliente,actualizarCliente}