// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {
    let ingresarUsuario = document.getElementById('amigo');
    let nombreUsuario = ingresarUsuario.value.trim();

    if (nombreUsuario === "" ) {
        alert("por favor, inserte un nombre");
        return;
    } 

    amigos.push(nombreUsuario);
    ingresarUsuario.value = "";

    console.log(amigos);
}

