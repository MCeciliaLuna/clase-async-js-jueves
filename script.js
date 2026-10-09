console.log("Hola mundo!")

// ASINCRONISMO
// setTimeout

const pasos = () => {
    console.log("HOLA MUNDO");

    setTimeout( () => {
            alert("HOLA")
        }, 3000 )


    console.error("ERROR, AMIG@");
}

// PROMESA | ASYNC AWAIT | FETCH
// FULLFILED - PENDING - rejected

// const traerDatos = async () => {
//     const url = "https://jsonplaceholder.typicode.com/users";
//     const dataFetch = await fetch(url);
//     const data = await dataFetch.json()

//     console.log(data)
// }

const emailInput = document.getElementById("email")


const verificarEmail = async (event) => {
    event.preventDefault()

    const url = "https://jsonplaceholder.typicode.com/users";
    const fetchData = await fetch(url);
    const jsonData = await fetchData.json();

    const emailNoPermitido = jsonData[0].email
    const emailUser = emailInput.value

    console.error(emailNoPermitido)
    console.log(emailUser)
    
    if (emailUser === emailNoPermitido) {
        alert("NO PUEDES INGRESAR");
    } else {
        alert("BIENVENID@")
    }

}