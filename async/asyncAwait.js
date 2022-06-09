async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('Hola, '+ nombre);
            resolve();
        }, 1500);
    });
};
//------------
async function hablar(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            // resolve(nombre);
            resolve();
        }, 1000);
    })
}
//-----------
async function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log('Adios, '+ nombre);
            resolve();
        }, 1000);
    })
}

async function main() {
    let nombre = await hola('Sneyder');
    await hablar();
    await hablar();
    await hablar();
    await adios('Sneyder');
    console.log('Terminamos el proceso');
}
console.log('Empezamos el proceso');
main();
console.log('Va a ser la segunda que se ejecute');