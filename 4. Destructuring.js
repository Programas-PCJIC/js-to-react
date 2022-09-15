//Imagina que tienes un objeto 

const cuadrado = {
    x: 10,
    y: 10,
}

function calcularArea(cuadrado){
    return cuadrado.x * cuadrado.y;
}

calcularArea(cuadrado)

//en el destructuring lo podemos hacer de dos formas

function calcularAreaDos(cuadrado){
    //saco las claves del objeto y trabajar directamente con ellas
    const {x, y} = cuadrado
    return x * y;
}

calcularAreaDos(cuadrado)

//Se utiliza mucho en react cuando le estamos pasando propiedades a un componente.
//Propiedades mas usadas en react
function Avatar({ username, url}){
    return <img src={url} alt={username} />
}
