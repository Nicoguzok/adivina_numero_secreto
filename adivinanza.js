const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado == numeroSecreto) {
        console.log('Felicitaciones!! Adivinaste el numero secreto!!');
    } else if (numeroAdivinado > numeroSecreto) {
        console.log('El numero secreto es menor. Sigue intentandolo!!');
    } else {
        console.log('El numero secreto es mayor. Sigue intentandolo!!');
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};