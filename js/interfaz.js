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










const botonTema = document.getElementById('boton-tema');

function sincronizarBotonTema() {
    const oscuro = document.documentElement.classList.contains('dark');
    botonTema.setAttribute('aria-pressed', String(oscuro));
    botonTema.setAttribute('aria-label', oscuro ? 'Activar modo claro' : 'Activar modo oscuro');
}

botonTema.addEventListener('click', () => {
    const oscuro = document.documentElement.classList.toggle('dark');
    try {
        localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro');
    } catch (e) {}
    sincronizarBotonTema();
});

sincronizarBotonTema();




const nombreSilla = document.getElementById('nombre-silla');

document.querySelectorAll('.grid-con-nombres video').forEach(video => {

    function mostrarNombre() {
        nombreSilla.textContent = video.dataset.nombre;
        nombreSilla.classList.add('visible');
    }

    function ocultarNombre() {
        nombreSilla.classList.remove('visible');
    }

    video.addEventListener('mouseenter', mostrarNombre);
    video.addEventListener('mouseleave', ocultarNombre);

    // Compatibilidad con pantallas táctiles
    video.addEventListener('click', () => {
        nombreSilla.textContent = video.dataset.nombre;
        nombreSilla.classList.add('visible');
    });

});


document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.silla-video');

    videos.forEach(video => {
        const originalSrc = video.getAttribute('src');
        const altSrc = video.getAttribute('data-alt-video');

        video.addEventListener('mouseenter', () => {
            if (altSrc && altSrc !== '#') {
                video.src = altSrc;
                video.play();
            }
        });

        video.addEventListener('mouseleave', () => {
            video.src = originalSrc;
            video.play();
        });
    });
});