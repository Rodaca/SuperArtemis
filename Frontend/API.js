const url="http://localhost:5000/categoria/"

export const getcategoria = async ()=>{
    try {
        const dato = await fetch(url+"all",{
            method:"GET"});
        const datoJson = dato.json();
        return datoJson;
    } catch (error) {
        console.log(error);
    }
}