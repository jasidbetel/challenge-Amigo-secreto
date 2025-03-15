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

    
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("no hay nombres en la lista, por favor digite algunos nombres ");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

}

