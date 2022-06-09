function otraFunction(){
    serompe();
}

function  serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch(err) {
            console.error('Error en mi funcion asicrona');
            cb(err);
        }
    })
}

try {
    // otraFunction();
    seRompeAsincrona(function (err) {
        console.error(err.message);
    });
} catch (err) {
    console.error('Ups!, algo se ha roto...');
    console.error(err.message);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Esto de aqui esta al final');