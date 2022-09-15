//Imagina que tienes diversos datos
const nombre = "John";
const edad = "29";
const twitter = 'https://twitter.com/faber_vasco';

const persona = {
    nombre: nombre,
    edad: edad,
    twitter: twitter
}

console.log(persona)

//Los shortand es lo mismo que la variable que he declarado funciona igual de la siguiente manera

const persona = {
    nombre,
    edad,
    twitter
}

//Como aplicaría en react

function Componente({initialState, totalCoiunt}){
    const [state, setState] = useState({initialState, totalCoiunt}})
}