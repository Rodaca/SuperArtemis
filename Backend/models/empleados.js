import mongoose from "mongoose";

const empleadoSchema = mongoose.Schema({ 
    nombre:{
        type:String,
        required:true,
        trim:true,
    },
    edad:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    telefono:{
        type:String,
        required:true,
        trim:true,
    }

},
{
    timestamps:true,
});

const Empleado = mongoose.model("Empleado",empleadoSchema);

export default Empleado



