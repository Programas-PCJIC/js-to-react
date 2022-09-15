//Spread operator - Rest parameters

const array = [1,2,3,4,5];
const otroArray = [6,7,8,9,10];

//crear un solo array con estos dos
const nuevoArray = array.concat(otroArray);

console.log(nuevoArray);

//Nueva forma
//parecido a un destructuring pasado directamente y concatenando
const nuevoArrayDos = [...array, ...otroArray];
console.log(nuevoArrayDos);

//Con objetos se reduce mucho código
const objeto1 = {
    a: 'a',
    b: 'b',
    c: 'c',
}

const objeto2 = {
    d: 'd',
    e: 'e',
}

//antes
const nuevoObjeto = Object.assign({}, objeto1, objeto2);
console.log(nuevoObjeto);

//ahora
const nuevoObjetoDos = {...objeto1, ...objeto2};
console.log(nuevoObjetoDos);

//Uso en react
//function Componente({id, name, username, profile}){
function Componente({id, ...props}){
    //si se llaman igual puedo usar la propiedad explicada
    return <NuevoComponente key={id} {...props} />
}