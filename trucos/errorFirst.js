function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (err) {
            callback(err);
        }
    }, 1000)
}

asincrona(function (err, dato) {
        if(err) {
            console.error('Tenemos un error')
            console.error(err);
            return false;
            // throw err; // NO VA A FUNCIONAR
        }
    
        console.log('Todo ha ido bien, mi data es', dato);
    })    
