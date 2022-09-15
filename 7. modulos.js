//Permiten crear distintos ficheros en varios archivos y cuando necesitemos
// algo de los componente importarlos en otra parte del código y reutilizarlos
//tener en cuenta si se exporta por defecto o no 
// si no es por defecto se debe llamar entre llaves
//.......archivo suma.js
export default function suma (a, b) {
    //codigo
}
//........................

//.......archivo resta.js
export function resta (a, b) {
    //codigo
}
//........................

import {suma, otraFuncion} from "./suma";
import resta from "./resta"

function calculadora (a, b) {
   suma();

   resta();
}

//En react se utiliza para los propios modulos o importante la propia librería de react
import React, { useState, useEffect, Fragment} from 'react';