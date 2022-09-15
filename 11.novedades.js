function suma(a,b){
    //a = a == null ? 0 : a
    a = a ?? 0
    //b = b == null ? 0 : b
    b = b ?? 0
    return a + b
}

//se aplica en react 
function Avatar( { user }){
    return <img src={user.imageUrl ?? 'https://image.jpg'} />
}

const user = {
    nombre,
    edad,
    location : {
        x,
        y,
        city : {
            zipcode,
            zone
        }
    }
}

const zipcode = user && user.location  && user.location.city && user.location.city.zipcode;

const zipcodeTwo = user?.location?.city?.zipcode;

//En react se utiliza para el renderizado de propiedades.