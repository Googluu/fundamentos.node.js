console.time('todo');
let suma = 0;
console.time('bucle');
for (let i = 0; i < 10000000; i++) {
    suma++;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle 2');
for (let j = 0; j < 1000000000; j++) {
    suma2++;
}
console.timeEnd('bucle 2');

console.time('asincrono')
console.log('Empieza el proceso async')
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    })

console.timeEnd('todo');

function asincrona() {
    return new Promise((resolve)=> {
        setTimeout(function() {
            console.log('Termino');
            resolve();
        })
    })
}
