// Corazones flotantes
function crearCorazon() {
    const c = document.createElement('div');
    c.className = 'corazon';
    c.textContent = '❤️';
    c.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 5000);
}

setInterval(crearCorazon, 400);

// Efecto escritura
const saludo = document.getElementById('saludo');
const texto = saludo.innerHTML;
saludo.innerHTML = '';
let i = 0;

function escribir() {
    if (i < texto.length) {
        saludo.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, 60);
    }
}

setTimeout(escribir, 500);
