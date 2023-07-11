import { getcategoria } from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarCategoria();
})

async function cargarCategoria(){
    const datos = await getcategoria();
    const tabla=document.querySelector('#carta');
    datos.forEach(element => {
        const {_id,nombre,descripcion_categoria,imagen}=element;
        tabla.innerHTML+=`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${imagen}</h6>
                <p class="card-text">${descripcion_categoria}</p>
                <a href="#" class="btn btn-warning" class="card-link">Editar</a>
                <a href="#" class="btn btn-danger" class="card-link">Eliminar</a>
            </div>
        </div>
        `
    });
    console.log(clientes);
}