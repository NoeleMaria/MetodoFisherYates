let grupo1js = "1";
let grupo2js = "2";
let grupo3js = "3";
let grupo4js = "4";
let grupo5js = "5";

let listaGrupo1js = [];
let listaGrupo2js = [];
let listaGrupo3js = [];
let listaGrupo4js = [];
let listaGrupo5js = [];

listaGrupo1js.push(grupo1js);
listaGrupo2js.push(grupo2js);
listaGrupo3js.push(grupo3js);
listaGrupo4js.push(grupo4js);
listaGrupo5js.push(grupo5js);

document.getElementById('grupo1-js').innerHTML = `<strong>Grupo 1:</strong> ${listaGrupo1js}`;
document.getElementById('grupo2-js').innerHTML = `<strong>Grupo 2:</strong> ${listaGrupo2js}`;
document.getElementById('grupo3-js').innerHTML = `<strong>Grupo 3:</strong> ${listaGrupo3js}`;
document.getElementById('grupo4-js').innerHTML = `<strong>Grupo 4:</strong> ${listaGrupo4js}`;
document.getElementById('grupo5-js').innerHTML = `<strong>Grupo 5:</strong> ${listaGrupo5js}`;

let concatJS = listaGrupo1js.concat(` ${listaGrupo2js}, ${listaGrupo3js}, ${listaGrupo4js}, ${listaGrupo5js}`);
document.getElementById('resultado-js').innerHTML = `O resultado do Método concat() é: ${concatJS}.`;
console.log(`concatjs: ${concatJS}`);

function embaralhaJS() {
    let embaralhanumerosJS = listaGrupo1js.concat(listaGrupo2js, listaGrupo3js, listaGrupo4js, listaGrupo5js);
    embaralha(embaralhanumerosJS);
    console.log(`embaralha: ${embaralhanumerosJS}`);

    document.getElementById('embaralha-js').innerHTML = `O resultado do Método de Fisher Yates é: ${embaralhanumerosJS}.`;
}

function usuario() {
    let grupo1usuario = document.getElementById('grupo1-usuario').value;
    let grupo2usuario = document.getElementById('grupo2-usuario').value;
    let grupo3usuario = document.getElementById('grupo3-usuario').value;let grupo4usuario = document.getElementById('grupo4-usuario').value;let grupo5usuario = document.getElementById('grupo5-usuario').value;

    let listaGrupo1usuario = [];
    let listaGrupo2usuario = [];
    let listaGrupo3usuario = [];
    let listaGrupo4usuario = [];
    let listaGrupo5usuario = [];

    listaGrupo1usuario.push(grupo1usuario);
    listaGrupo2usuario.push(grupo2usuario);
    listaGrupo3usuario.push(grupo3usuario);
    listaGrupo4usuario.push(grupo4usuario);
    listaGrupo5usuario.push(grupo5usuario);

    let concatUsuario = listaGrupo1usuario.concat(` ${listaGrupo2usuario}, ${listaGrupo3usuario}, ${listaGrupo4usuario}, ${listaGrupo5usuario}`);

    document.getElementById('resultado-usuario').innerHTML = `O resultado do Método concat() é: ${concatUsuario}.`;
    console.log(concatUsuario);
}

function embaralhaUsuario(){
    let grupo1usuario = document.getElementById('grupo1-usuario').value;
    let grupo2usuario = document.getElementById('grupo2-usuario').value;
    let grupo3usuario = document.getElementById('grupo3-usuario').value;let grupo4usuario = document.getElementById('grupo4-usuario').value;let grupo5usuario = document.getElementById('grupo5-usuario').value;

    let listaGrupo1usuario = [];
    let listaGrupo2usuario = [];
    let listaGrupo3usuario = [];
    let listaGrupo4usuario = [];
    let listaGrupo5usuario = [];

    listaGrupo1usuario.push(grupo1usuario);
    listaGrupo2usuario.push(grupo2usuario);
    listaGrupo3usuario.push(grupo3usuario);
    listaGrupo4usuario.push(grupo4usuario);
    listaGrupo5usuario.push(grupo5usuario);

    let embaralhanumerosUsuario = listaGrupo1usuario.concat(listaGrupo2usuario, listaGrupo3usuario, listaGrupo4usuario, listaGrupo5usuario);
    embaralha(embaralhanumerosUsuario);
    console.log(`embaralha: ${embaralhanumerosUsuario}`);

    document.getElementById('embaralha-usuario').innerHTML = `O resultado do Método de Fisher Yates é: ${embaralhanumerosUsuario}.`;
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}