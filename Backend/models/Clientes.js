import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({ 
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

const Cliente = mongoose.model("Cliente",clienteSchema);

export default Cliente

