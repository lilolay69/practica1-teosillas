
document.addEventListener('DOMContentLoaded', () => {

    // ==================================================
    // 1. MENÚ DESPLEGABLE
    // ==================================================

    const botonMenu = document.getElementById('boton-menu');

    function abrirMenu(abrir) {
        if (!botonMenu) return;

        document.body.dataset.menu = abrir ? 'abierto' : 'cerrado';

        botonMenu.setAttribute('aria-expanded', String(abrir));
        botonMenu.setAttribute(
            'aria-label',
            abrir ? 'Cerrar menú' : 'Abrir menú'
        );
    }

    if (botonMenu) {
        botonMenu.addEventListener('click', () => {
            abrirMenu(botonMenu.getAttribute('aria-expanded') !== 'true');
        });
    }


    // ==================================================
    // 2. BUSCADOR
    // ==================================================

    const paginas = [
        {
            nombre: 'Catálogo de Teo',
            url: 'catalogo.html',
            palabras: 'catalogo sillas modelos comprar'
        },
        {
            nombre: 'Favoritas de Teo',
            url: 'favoritas.html',
            palabras: 'favoritas preferidas destacadas'
        },
        {
            nombre: '¿Quién es Teo?',
            url: 'quien-es-teo.html',
            palabras: 'quien teo historia sobre'
        },
        {
            nombre: '¿Dónde está Teo?',
            url: 'donde-esta-teo.html',
            palabras: 'donde direccion horario contacto mapa'
        }
    ];

    function normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    const formularioBuscar = document.getElementById('formulario-buscar');
    const buscador = document.getElementById('buscador');

    if (formularioBuscar && buscador) {

        formularioBuscar.addEventListener('submit', (e) => {
            e.preventDefault();

            const consulta = normalizar(buscador.value.trim());

            if (!consulta) return;

            const resultado = paginas.find((pagina) =>
                normalizar(pagina.nombre + ' ' + pagina.palabras)
                    .includes(consulta)
            );

            if (resultado) {
                window.location.href = resultado.url;
            } else {
                buscador.setCustomValidity(
                    'No hay resultados para esa búsqueda'
                );

                buscador.reportValidity();
            }
        });

        buscador.addEventListener('input', () => {
            buscador.setCustomValidity('');
        });
    }


    // ==================================================
    // 3. SCROLL
    // ==================================================

    const UMBRAL_SCROLL = 40;

    function actualizarScroll() {
        document.body.dataset.scroll =
            window.scrollY > UMBRAL_SCROLL ? 'abajo' : 'arriba';
    }

    window.addEventListener('scroll', actualizarScroll, {
        passive: true
    });

    actualizarScroll();


    // ==================================================
    // 4. MODO OSCURO
    // ==================================================

    const botonTema = document.getElementById('boton-tema');

    function sincronizarBotonTema() {
        if (!botonTema) return;

        const oscuro = document.documentElement.classList.contains('dark');

        botonTema.setAttribute('aria-pressed', String(oscuro));

        botonTema.setAttribute(
            'aria-label',
            oscuro ? 'Activar modo claro' : 'Activar modo oscuro'
        );
    }

    if (botonTema) {

        botonTema.addEventListener('click', () => {

            const oscuro =
                document.documentElement.classList.toggle('dark');

            try {
                localStorage.setItem(
                    'tema',
                    oscuro ? 'oscuro' : 'claro'
                );
            } catch (e) {}

            sincronizarBotonTema();
        });

        sincronizarBotonTema();
    }


    // ==================================================
    // 5. FICHA ANTIGUA DE SILLAS (ELEMENTOS .silla-item)
    // ==================================================

    const sillasAntiguas = document.querySelectorAll('.silla-item');

    if (sillasAntiguas.length) {

        const cajaDetalle = document.getElementById('caja-detalle');
        const detalleTitulo = document.getElementById('detalle-titulo');

        const imgZoom1 = document.querySelector('.zoom-img-1');
        const imgZoom2 = document.querySelector('.zoom-img-2');
        const imgZoom3 = document.querySelector('.zoom-img-3');

        sillasAntiguas.forEach(silla => {

            const id = silla.getAttribute('data-id');

            const textoCorrespondiente = document.querySelector(
                `.texto-item[data-id="${id}"]`
            );

            const imagen = silla.querySelector('img');
            const imgSilla = imagen ? imagen.getAttribute('src') : null;

            const tituloSilla = silla.getAttribute('data-titulo');

            silla.addEventListener('mouseenter', () => {

                if (textoCorrespondiente) {
                    textoCorrespondiente.classList.remove('text-texto');

                    textoCorrespondiente.classList.add(
                        'text-rojo',
                        'font-medium'
                    );
                }
            });

            silla.addEventListener('mouseleave', () => {

                if (textoCorrespondiente) {
                    textoCorrespondiente.classList.remove(
                        'text-rojo',
                        'font-medium'
                    );

                    textoCorrespondiente.classList.add('text-texto');
                }
            });

            silla.addEventListener('click', () => {

                if (!cajaDetalle) return;

                cajaDetalle.classList.remove('hidden');

                if (detalleTitulo) {
                    detalleTitulo.textContent = tituloSilla || '';
                }

                if (imgZoom1 && imgSilla) {
                    imgZoom1.setAttribute('src', imgSilla);
                }

                if (imgZoom2 && imgSilla) {
                    imgZoom2.setAttribute('src', imgSilla);
                }

                if (imgZoom3 && imgSilla) {
                    imgZoom3.setAttribute('src', imgSilla);
                }

                cajaDetalle.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            });
        });
    }


    // ==================================================
    // 6. NOMBRE DE LAS SILLAS EN EL GRID DE VÍDEOS
    // ==================================================

    const nombreSilla = document.getElementById('nombre-silla');

    document.querySelectorAll('.grid-con-nombres video').forEach(video => {

        function mostrarNombre() {

            if (!nombreSilla) return;

            nombreSilla.textContent = video.dataset.nombre || '';

            nombreSilla.classList.add('visible');
        }

        function ocultarNombre() {

            if (!nombreSilla) return;

            nombreSilla.classList.remove('visible');
        }

        video.addEventListener('mouseenter', mostrarNombre);

        video.addEventListener('mouseleave', ocultarNombre);

        video.addEventListener('click', mostrarNombre);

    });


    // ==================================================
    // 7. CONFIGURACIÓN Y REPRODUCCIÓN DE VÍDEOS
    // ==================================================

    const videos = document.querySelectorAll('.silla-video');

    videos.forEach(video => {

        video.muted = true;
        video.loop = true;
        video.playsInline = true;

        video.play().catch(() => {});

        // Pausar al pasar el cursor

        video.addEventListener('mouseenter', () => {
            video.pause();
        });

        // Reanudar al retirar el cursor

        video.addEventListener('mouseleave', () => {
            video.play().catch(() => {});
        });

    });


    // ==================================================
    // 8. GRID DE FAVORITAS Y FICHAS PERSONALIZADAS
    // ==================================================

    const seccionDetalle = document.getElementById('detalle-silla');
    const seccionGrid = document.getElementById('grid-favoritas');

    if (seccionDetalle && seccionGrid) {

        const sillas = {

            v1: {
                nombre: 'Silla azul',
                ref: '000990933',
                descripcion: 'Estructura de acero lacado en azul eléctrico y asiento de haya. Ligera, apilable y pensada para mesas pequeñas y cocinas con mucha vida.',
                datos: [
                    ['Medidas', '48 × 55 × 84 cm'],
                    ['Tamaño', 'Altura de asiento 46 cm'],
                    ['Color', 'Azul eléctrico']
                ],
                imagenes: ['#', '#']
            },

            v2: {
                nombre: 'Silla esmeralda',
                ref: '000990412',
                descripcion: 'Asiento tapizado en terciopelo verde esmeralda sobre una base de haya curvada al vapor. Cómoda, cálida y con un punto señorial.',
                datos: [
                    ['Medidas', '50 × 54 × 86 cm'],
                    ['Tamaño', 'Altura de asiento 45 cm'],
                    ['Color', 'Verde esmeralda']
                ],
                imagenes: ['#', '#']
            },

            v3: {
                nombre: 'Silla famosa',
                ref: '000991207',
                descripcion: 'La pieza más fotografiada del taller. Edición limitada de 25 unidades numeradas, con una silueta que parece moverse incluso quieta.',
                datos: [
                    ['Medidas', '47 × 60 × 90 cm'],
                    ['Tamaño', 'Altura de asiento 44 cm'],
                    ['Color', 'Rojo lacado']
                ],
                imagenes: ['#', '#']
            },

            v4: {
                nombre: 'Silla orgánica',
                ref: '000990586',
                descripcion: 'Formas redondeadas moldeadas a mano en madera contrachapada. Cada unidad es ligeramente distinta, porque ninguna curva se repite igual.',
                datos: [
                    ['Medidas', '52 × 58 × 78 cm'],
                    ['Tamaño', 'Altura de asiento 43 cm'],
                    ['Color', 'Madera natural']
                ],
                imagenes: ['#', '#']
            },

            v5: {
                nombre: 'Silla serpiente',
                ref: '000990871',
                descripcion: 'Tapizado con estampado de serpiente sobre un asiento acolchado y patas de acero cromado. Atrevida, brillante y difícil de pasar por alto.',
                datos: [
                    ['Medidas', '46 × 53 × 85 cm'],
                    ['Tamaño', 'Altura de asiento 47 cm'],
                    ['Color', 'Estampado serpiente']
                ],
                imagenes: ['#', '#']
            },

            v6: {
                nombre: 'Silla morada',
                ref: '000991054',
                descripcion: 'Tela jacquard morada con dibujo geométrico sobre una estructura de tubo cromado en voladizo. Un clásico reinterpretado en el taller de Teo.',
                datos: [
                    ['Medidas', '45 × 52 × 83 cm'],
                    ['Tamaño', 'Altura de asiento 46 cm'],
                    ['Color', 'Morado y blanco']
                ],
                imagenes: ['#', '#']
            },

            v7: {
                nombre: 'Silla roja',
                ref: '000990129',
                descripcion: 'Nuestra silla de siempre, lacada en rojo y con patas inclinadas. Sencilla, robusta y fiel al primer diseño que salió del taller.',
                datos: [
                    ['Medidas', '44 × 50 × 80 cm'],
                    ['Tamaño', 'Altura de asiento 45 cm'],
                    ['Color', 'Rojo taller']
                ],
                imagenes: ['#', '#']
            }

        };


        // Elementos HTML

        const gridVideos = document.getElementById('videos-favoritas');
        const gridDetalle = document.getElementById('detalle-grid');

        const botonCerrar = document.getElementById('detalle-cerrar');

        const refDetalle = document.getElementById('detalle-ref');
        const nombreDetalle = document.getElementById('detalle-nombre');
        const descripcionDetalle = document.getElementById('detalle-descripcion');

        const listaDetalle = document.getElementById('detalle-lista');

        const imagenesDetalle = [1, 2].map(n =>
            document.getElementById(`detalle-img-${n}`)
        );

        const reducirMovimiento = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );


        // Estado

        let sillaFija = null;
        let sillaHover = null;
        let temporizadorDetalle;


        // Actualizar nombre de la silla

        function actualizarNombre() {

            const id = sillaFija || sillaHover;

            if (id) {
                seccionGrid.dataset.nombre = id;
            } else {
                delete seccionGrid.dataset.nombre;
            }
        }


        // Rellenar información de la ficha

        function rellenarDetalle(silla) {

            if (refDetalle) {
                refDetalle.textContent = `REF ${silla.ref}`;
            }

            if (nombreDetalle) {
                nombreDetalle.textContent = silla.nombre;
            }

            if (descripcionDetalle) {
                descripcionDetalle.textContent = silla.descripcion;
            }

            if (listaDetalle) {

                listaDetalle.replaceChildren(
                    ...silla.datos.map(([etiqueta, valor]) => {

                        const li = document.createElement('li');

                        li.textContent = `${etiqueta}: ${valor}`;

                        return li;

                    })
                );
            }


            // Actualizar imágenes

            imagenesDetalle.forEach((imagen, i) => {

                if (!imagen) return;

                const ruta = silla.imagenes[i];

                if (ruta && ruta !== '#') {

                    imagen.src = ruta;

                    imagen.alt = `${silla.nombre}, vista ${i + 1}`;

                } else {

                    imagen.removeAttribute('src');

                    imagen.alt = '';
                }

            });

        }


        // Mostrar ficha

        function mostrarDetalle() {

            seccionDetalle.classList.remove('hidden');

            requestAnimationFrame(() => {

                requestAnimationFrame(() => {

                    seccionDetalle.dataset.visible = 'true';

                });

            });

            if (gridDetalle) {

                gridDetalle.scrollIntoView({

                    behavior: reducirMovimiento.matches ? 'auto' : 'smooth',

                    block: 'end'

                });

            }

        }


        // Abrir ficha de una silla

        function abrirDetalle(id) {

            const silla = sillas[id];

            if (!silla) return;

            clearTimeout(temporizadorDetalle);

            sillaFija = id;

            actualizarNombre();

            if (seccionDetalle.dataset.visible === 'true') {

                seccionDetalle.dataset.visible = 'false';

                temporizadorDetalle = setTimeout(() => {

                    rellenarDetalle(silla);

                    mostrarDetalle();

                }, 300);

            } else {

                rellenarDetalle(silla);

                mostrarDetalle();

            }

        }


        // Cerrar ficha

        function cerrarDetalle() {

            if (seccionDetalle.classList.contains('hidden')) return;

            clearTimeout(temporizadorDetalle);

            sillaFija = null;

            actualizarNombre();

            seccionDetalle.dataset.visible = 'false';

            if (gridVideos) {

                gridVideos.scrollIntoView({

                    behavior: reducirMovimiento.matches ? 'auto' : 'smooth',

                    block: 'center'

                });

            }

            temporizadorDetalle = setTimeout(() => {

                seccionDetalle.classList.add('hidden');

            }, 500);

        }


        // Eventos de los vídeos

        videos.forEach(video => {

            const entrar = () => {

                sillaHover = video.id;

                actualizarNombre();

            };

            const salir = () => {

                sillaHover = null;

                actualizarNombre();

            };

            video.addEventListener('mouseenter', entrar);

            video.addEventListener('mouseleave', salir);

            video.addEventListener('focus', entrar);

            video.addEventListener('blur', salir);

            video.addEventListener('click', () => {

                abrirDetalle(video.id);

            });

            video.addEventListener('keydown', e => {

                if (e.key === 'Enter' || e.key === ' ') {

                    e.preventDefault();

                    abrirDetalle(video.id);

                }

            });

        });


        // Botón de cerrar ficha

        if (botonCerrar) {

            botonCerrar.addEventListener('click', cerrarDetalle);

        }


        // Escape cierra la ficha

        document.addEventListener('keydown', e => {

            if (e.key === 'Escape') {

                cerrarDetalle();

            }

        });

    }


    // ==================================================
    // 9. ESCAPE: CERRAR MENÚ
    // ==================================================

    document.addEventListener('keydown', e => {

        if (e.key === 'Escape' && botonMenu) {

            abrirMenu(false);

        }

    });

});
