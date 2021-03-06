function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('Hola, '+ nombre);
            resolve();
        }, 1500);
    });
};
//------------
function hablar(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            // resolve(nombre);
            reject('Ha habido un error');
        }, 1000);
    })
}
//-----------
function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log('Adios, '+ nombre);
            resolve();
        }, 1000);
    })
}

// EJECUCION
console.log('Iniciando el proceso...');
hola('Sneyder')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.error('Ha habido un error');
        console.error(error);
    })