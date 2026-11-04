// ===== MENÚ DESPLEGABLE =====
// Solo cambia data-menu en el <body> y aria-expanded en el botón.
// Los estilos (panel azul, cruz, bombilla blanca...) los hace Tailwind en el HTML.
const botonMenu = document.getElementById('boton-menu');

function abrirMenu(abrir) {
    document.body.dataset.menu = abrir ? 'abierto' : 'cerrado';
    botonMenu.setAttribute('aria-expanded', String(abrir));
    botonMenu.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
}

botonMenu.addEventListener('click', () => {
    abrirMenu(botonMenu.getAttribute('aria-expanded') !== 'true');
});

// Escape cierra el menú
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') abrirMenu(false);
});


// ===== BUSCADOR =====
// Busca entre las páginas de la web. Rellenad "palabras" con lo que tenga cada página.
const paginas = [
    { nombre: 'Catálogo de Teo',      url: 'catalogo.html',      palabras: 'catalogo sillas modelos comprar' },
    { nombre: 'Favoritas de Teo',     url: 'favoritas.html',     palabras: 'favoritas preferidas destacadas' },
    { nombre: '¿Quién es Teo?',       url: 'quien-es-teo.html',  palabras: 'quien teo historia sobre' },
    { nombre: '¿Dónde está Teo?',     url: 'donde-esta-teo.html', palabras: 'donde direccion horario contacto mapa' }
];

// Quita mayúsculas y tildes para que "catalogo" encuentre "Catálogo"
function normalizar(texto) {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const formularioBuscar = document.getElementById('formulario-buscar');
const buscador = document.getElementById('buscador');

formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();
    const consulta = normalizar(buscador.value.trim());
    if (!consulta) return;

    const resultado = paginas.find((p) => normalizar(p.nombre + ' ' + p.palabras).includes(consulta));

    if (resultado) {
        window.location.href = resultado.url;
    } else {
        buscador.setCustomValidity('No hay resultados para esa búsqueda');
        buscador.reportValidity();
    }
});

buscador.addEventListener('input', () => buscador.setCustomValidity(''));






const UMBRAL_SCROLL = 40;

function actualizarScroll() {
    document.body.dataset.scroll = window.scrollY > UMBRAL_SCROLL ? 'abajo' : 'arriba';
}

window.addEventListener('scroll', actualizarScroll, { passive: true });
actualizarScroll();