
function suma (a,b){
    if( a === undefined || b == undefined){
        console.log("debes ingresar 2 valores");
    }
    return a + b
}

//comprobar de alguna manera para verificar 
//se hacia largo el código
suma(3);

//Colocar valores por defecto
function sumaDos (a = 0, b = 0){
    return a + b
}