import Empleado, {  } from "../models/empleados.js";

const obtenerEmpleados = async (req,res) =>{
    const empleados =await Empleado.find();
    res.json(empleados);

}
const obtenerOneEmpleado = async (req,res) =>{
    try {
        const empleado =await Empleado.findOne({_id:req.params.id});
        res.json(Empleado);
    } catch (error) {
        res.status(404)
        res.send({error:"Empleado no existe"})
    }
}

const agregarEmpleado =async (req,res)=>{
    const empleado =new Empleado(req.body);
    try {
        const nuevaEmpleado =await empleado.save();
        res.json(nuevaEmpleado);
    } catch (error) {
        console.log(error);
    }
}

const borrarEmpleado = async (req,res) =>{
    
    try {
        await Empleado.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Empleado no existe"})
    }
}

const actualizarEmpleado = async (req,res)=>{
    try {
        const empleado =await Empleado.findOne({_id:req.params.id})
        if(req.body.imagen){
            empleado.imagen=req.body.imagen;
        }

        if(req.body.nombre){
            empleado.nombre=req.body.nombre;
        }

        if(req.body.descripcion_Empleado){
            empleado.descripcion_Empleado=req.body.descripcion_Empleado;
        }

        await Empleado.save()
        res.send(Empleado)
    } catch (error) {
        res.status(404)
        res.send({error:"Empleado no existe"})
    }
}

export {obtenerEmpleados,obtenerOneEmpleado,agregarEmpleado,borrarEmpleado,actualizarEmpleado}