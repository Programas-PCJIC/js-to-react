const coche = {
    marca: "Tesla",
    //model: "CyberTruck",
}

//let modelo;

if (coche.model) {
    modelo = coche.model;
}else {
    modelo = "X"
}

modelo;

//En forma ternaria

let modelo = coche.model ? coche.model : 'X';

//En react se nota mucho en sus componentes para hacer renderizado condicional
function ListaTareas({ tareas }){
    return (
        <Componente>
            {tareas.length ? (
                <ul>
                    {tareas.map...}
                </ul>
            ) : (
                <div>No hay tareas</div>
        )}
        </Componente>
    )
}
