function nombre () {
    return 'Hola';
}

nombre();

//Se pueden codificar en forma de función flecha de la siguiente manera.

const funcionFlecha = () => {
    return "algo"
}

//o en su versión corta

const funcionFlechaDos = () => "algo"
funcionFlechaDos();

//En react lo vamos a utilizar mucho cuando estamos recorriendo un listado y vamos a imprimir varios
//componente por cada listado o manipulando arreglos y la función map

//Ejemplo: se puede observar de manera más legible

function ListaDeTareas () {
    return (
        <ul>
            {listado.map( elemento => <li>{elemento.nombre}</li>)}
        </ul>
    )
}



