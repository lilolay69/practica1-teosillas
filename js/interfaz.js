
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


       const sillasCatalogo = document.querySelectorAll('.silla-item');
    const fichaCatalogo = document.getElementById('detalle-catalogo');

    if (sillasCatalogo.length && fichaCatalogo) {

        const fichas = {
            '01': ['Silla de líneas clásicas en madera maciza, con respaldo calado y acabado barnizado a mano.', '45 × 50 × 90 cm', 'Altura de asiento 46 cm', 'Madera natural'],
            '02': ['Asiento ergonómico en polipiel naranja sobre patas de acero fino. Moderna, cómoda y fácil de limpiar.', '48 × 52 × 82 cm', 'Altura de asiento 45 cm', 'Naranja'],
            '03': ['Diseño amarillo de líneas limpias, pensado para dar un toque de color a cocinas y comedores.', '46 × 50 × 80 cm', 'Altura de asiento 45 cm', 'Amarillo'],
            '04': ['Plegable y ligera, con estructura negra que ocupa muy poco espacio cuando no se usa.', '43 × 47 × 80 cm', 'Altura de asiento 44 cm', 'Negro'],
            '05': ['Respaldo de rejilla que deja pasar el aire y le da un aire moderno y ligero.', '45 × 52 × 85 cm', 'Altura de asiento 46 cm', 'Negro y madera'],
            '06': ['Estructura metálica lacada en azul, resistente y apilable, ideal para interior y terraza.', '44 × 50 × 83 cm', 'Altura de asiento 45 cm', 'Azul'],
            '07': ['Estilo nórdico en verde suave, con patas de madera inclinadas y asiento ligeramente curvo.', '47 × 51 × 81 cm', 'Altura de asiento 45 cm', 'Verde'],
            '08': ['Minimalismo en negro mate: una sola pieza de líneas rectas y sin adornos.', '42 × 48 × 82 cm', 'Altura de asiento 45 cm', 'Negro mate'],
            '09': ['Cuerpo transparente que casi desaparece en la estancia y deja ver el resto del espacio.', '46 × 52 × 80 cm', 'Altura de asiento 46 cm', 'Transparente'],
            '10': ['Reinterpretación de la clásica silla de Viena, con madera curvada al vapor y respaldo ovalado.', '43 × 49 × 89 cm', 'Altura de asiento 46 cm', 'Madera oscura'],
            '11': ['Pensada para largas jornadas: respaldo regulable, asiento acolchado y diseño actual.', '58 × 58 × 95 cm', 'Altura de asiento 42–52 cm', 'Gris y negro'],
            '12': ['Pieza de autor con curvas muy marcadas que sorprende desde cualquier ángulo.', '50 × 55 × 84 cm', 'Altura de asiento 45 cm', 'Multicolor'],
            '13': ['Tapizada en tela verde de tacto suave, con patas de madera y respaldo envolvente.', '48 × 54 × 85 cm', 'Altura de asiento 46 cm', 'Verde'],
            '14': ['Silla de despacho con aire ejecutivo: madera noble, brazos amplios y acolchado generoso.', '60 × 62 × 98 cm', 'Altura de asiento 47 cm', 'Madera y cuero'],
            '15': ['Réplica vintage de estilo Luis XVI, con respaldo tallado y patas torneadas.', '47 × 50 × 95 cm', 'Altura de asiento 46 cm', 'Blanco roto y dorado'],
            '16': ['Color coral, formas suaves y asiento cómodo. Una silla alegre para cualquier rincón.', '46 × 51 × 82 cm', 'Altura de asiento 45 cm', 'Coral'],
            '17': ['Silla de escritorio tapizada en terciopelo, con ruedas silenciosas y altura regulable.', '55 × 56 × 90 cm', 'Altura de asiento 44–52 cm', 'Terciopelo'],
            '18': ['Hierro forjado a mano con detalles artísticos. Cada unidad tiene pequeñas diferencias.', '44 × 48 × 92 cm', 'Altura de asiento 46 cm', 'Negro forja'],
            '19': ['Robusta silla de comedor de acabado rústico, pensada para aguantar décadas de comidas.', '46 × 50 × 92 cm', 'Altura de asiento 47 cm', 'Madera rústica'],
            '20': ['Asiento y respaldo de cuero con relleno denso, para una comodidad que se nota desde el primer día.', '52 × 56 × 86 cm', 'Altura de asiento 46 cm', 'Cuero marrón'],
            '21': ['Patas cruzadas y estructura ligera de inspiración retro, con asiento tapizado.', '45 × 50 × 83 cm', 'Altura de asiento 46 cm', 'Beige'],
            '22': ['Ratán natural trenzado a mano sobre bastidor de madera. Fresca, luminosa y muy duradera.', '48 × 52 × 85 cm', 'Altura de asiento 45 cm', 'Ratán natural'],
            '23': ['Silla de autor en tonos oscuros, con perfil escultórico y acabado satinado.', '48 × 53 × 86 cm', 'Altura de asiento 45 cm', 'Gris oscuro'],
            '24': ['Roble macizo y líneas rectas: minimalismo cálido que encaja en cualquier estancia.', '44 × 48 × 80 cm', 'Altura de asiento 45 cm', 'Roble'],
            '25': ['Estructura de acero doblado en una sola pieza. Una silla de vanguardia, ligera y resistente.', '45 × 55 × 82 cm', 'Altura de asiento 44 cm', 'Acero cromado']
        };

        const imagenesFicha = {};

        const fichaGrid = document.getElementById('catalogo-detalle-grid');
        const fichaCerrar = document.getElementById('catalogo-detalle-cerrar');
        const fichaRef = document.getElementById('catalogo-detalle-ref');
        const fichaNombre = document.getElementById('catalogo-detalle-nombre');
        const fichaDescripcion = document.getElementById('catalogo-detalle-descripcion');
        const fichaLista = document.getElementById('catalogo-detalle-lista');
        const fichaImagenes = [1, 2].map((n) => document.getElementById(`catalogo-detalle-img-${n}`));
        const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');

        let sillaAbierta = null;
        let temporizadorFicha;

        function marcarTexto(id, activo) {
            const texto = document.querySelector(`.texto-item[data-id="${id}"]`);
            if (!texto) return;
            texto.classList.toggle('text-rojo', activo);
            texto.classList.toggle('font-medium', activo);
            texto.classList.toggle('text-texto', !activo);
        }

        function datosSilla(item) {
            const id = item.dataset.id;
            const [descripcion, medidas, altura, color] = fichas[id] || ['', '', '', ''];
            return {
                nombre: (item.dataset.titulo || '').replace(/^\d+\s*/, ''),
                ref: `0009901${id}`,
                descripcion,
                datos: [['Medidas', medidas], ['Tamaño', altura], ['Color', color]].filter(([, valor]) => valor),
                imagenes: imagenesFicha[id] || ['#', '#']
            };
        }

        function rellenarFicha(silla) {
            fichaRef.textContent = `REF ${silla.ref}`;
            fichaNombre.textContent = silla.nombre;
            fichaDescripcion.textContent = silla.descripcion;

            fichaLista.replaceChildren(
                ...silla.datos.map(([etiqueta, valor]) => {
                    const li = document.createElement('li');
                    li.textContent = `${etiqueta}: ${valor}`;
                    return li;
                })
            );

            fichaImagenes.forEach((imagen, i) => {
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

        function mostrarFicha() {
            fichaCatalogo.classList.remove('hidden');
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    fichaCatalogo.dataset.visible = 'true';
                });
            });
            fichaGrid.scrollIntoView({
                behavior: menosMovimiento.matches ? 'auto' : 'smooth',
                block: 'end'
            });
        }

        function abrirFicha(item) {
            clearTimeout(temporizadorFicha);

            if (sillaAbierta && sillaAbierta !== item) {
                marcarTexto(sillaAbierta.dataset.id, false);
            }
            sillaAbierta = item;
            marcarTexto(item.dataset.id, true);

            const silla = datosSilla(item);

            if (fichaCatalogo.dataset.visible === 'true') {
                fichaCatalogo.dataset.visible = 'false';
                temporizadorFicha = setTimeout(() => {
                    rellenarFicha(silla);
                    mostrarFicha();
                }, 300);
            } else {
                rellenarFicha(silla);
                mostrarFicha();
            }
        }

        function cerrarFicha() {
            if (fichaCatalogo.classList.contains('hidden')) return;

            clearTimeout(temporizadorFicha);

            const anterior = sillaAbierta;
            sillaAbierta = null;

            if (anterior) {
                marcarTexto(anterior.dataset.id, false);
                anterior.scrollIntoView({
                    behavior: menosMovimiento.matches ? 'auto' : 'smooth',
                    block: 'center'
                });
            }

            fichaCatalogo.dataset.visible = 'false';
            temporizadorFicha = setTimeout(() => {
                fichaCatalogo.classList.add('hidden');
            }, 500);
        }

        sillasCatalogo.forEach((silla) => {
            const id = silla.dataset.id;

            silla.tabIndex = 0;
            silla.setAttribute('role', 'button');
            silla.setAttribute('aria-label', silla.dataset.titulo || `Silla ${id}`);

            const entrar = () => marcarTexto(id, true);
            const salir = () => {
                if (sillaAbierta !== silla) marcarTexto(id, false);
            };

            silla.addEventListener('mouseenter', entrar);
            silla.addEventListener('mouseleave', salir);
            silla.addEventListener('focus', entrar);
            silla.addEventListener('blur', salir);

            silla.addEventListener('click', () => abrirFicha(silla));

            silla.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    abrirFicha(silla);
                }
            });
        });

        fichaCerrar.addEventListener('click', cerrarFicha);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') cerrarFicha();
        });
    }


    

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



    // ==================================================
    // 9. CATÁLOGO: FICHAS PERSONALIZADAS DE LAS 25 SILLAS
    // ==================================================

    const seccionCatalogo = document.getElementById('detalle-catalogo');
    const gridCatalogoDetalle = document.getElementById('catalogo-detalle-grid');
    const botonCerrarCatalogo = document.getElementById('catalogo-detalle-cerrar');

    if (seccionCatalogo && gridCatalogoDetalle) {

        const elementosSillas = document.querySelectorAll('.silla-item');

        const refCatalogo = document.getElementById('catalogo-detalle-ref');
        const nombreCatalogo = document.getElementById('catalogo-detalle-nombre');
        const descripcionCatalogo = document.getElementById('catalogo-detalle-descripcion');
        const listaCatalogo = document.getElementById('catalogo-detalle-lista');

        const imagenCatalogo1 = document.getElementById('catalogo-detalle-img-1');
        const imagenCatalogo2 = document.getElementById('catalogo-detalle-img-2');

        const reducirMovimiento = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );

        let sillaCatalogoActual = null;
        let temporizadorCatalogo;

        // ----------------------------------------------
        // PREPARAR LAS SILLAS
        // ----------------------------------------------

        elementosSillas.forEach(silla => {

            silla.setAttribute('tabindex', '0');
            silla.setAttribute('role', 'button');

            silla.setAttribute(
                'aria-label',
                `Ver información de ${silla.dataset.titulo || 'esta silla'}`
            );

        });


        // ----------------------------------------------
        // RELLENAR LA FICHA
        // ----------------------------------------------

        function rellenarFichaCatalogo(silla) {

            const id = silla.dataset.id;
            const titulo = silla.dataset.titulo || `Silla ${id}`;

            const imagen = silla.querySelector('img');
            const rutaImagen = imagen ? imagen.src : '';

            const textoItem = document.querySelector(
                `.texto-item[data-id="${id}"] p`
            );

            const descripcion = textoItem
                ? textoItem.textContent.trim()
                : 'Información de esta pieza próximamente.';

            // Referencia
            refCatalogo.textContent = 'REF 000991207';

            // Nombre
            nombreCatalogo.textContent = titulo;

            // Descripción
            descripcionCatalogo.textContent = descripcion;

            // Características
            listaCatalogo.replaceChildren();

            const caracteristicas = [
                `Número de catálogo: ${id}`,
                'Pieza perteneciente al catálogo de Teo',
                'Consulta más información en tienda'
            ];

            caracteristicas.forEach(texto => {

                const li = document.createElement('li');

                li.textContent = texto;

                listaCatalogo.appendChild(li);

            });

            // Imágenes
            if (rutaImagen) {

                imagenCatalogo1.src = rutaImagen;
                imagenCatalogo1.alt = `${titulo}, imagen 1`;

                // Permite añadir una segunda imagen mediante data-imagen2.
                const segundaImagen = silla.dataset.imagen2 || rutaImagen;

                imagenCatalogo2.src = segundaImagen;
                imagenCatalogo2.alt = `${titulo}, imagen 2`;

            }

        }


        // ----------------------------------------------
        // MOSTRAR LA FICHA
        // ----------------------------------------------

        function mostrarFichaCatalogo() {

            seccionCatalogo.classList.remove('hidden');

            requestAnimationFrame(() => {

                requestAnimationFrame(() => {

                    seccionCatalogo.dataset.visible = 'true';

                });

            });

            gridCatalogoDetalle.scrollIntoView({

                behavior: reducirMovimiento.matches ? 'auto' : 'smooth',

                block: 'end'

            });

        }


        // ----------------------------------------------
        // ABRIR UNA SILLA
        // ----------------------------------------------

        function abrirFichaCatalogo(silla) {

            if (!silla) return;

            clearTimeout(temporizadorCatalogo);

            sillaCatalogoActual = silla;

            // Si ya hay una ficha abierta, primero desaparece.
            if (seccionCatalogo.dataset.visible === 'true') {

                seccionCatalogo.dataset.visible = 'false';

                temporizadorCatalogo = setTimeout(() => {

                    rellenarFichaCatalogo(silla);

                    mostrarFichaCatalogo();

                }, 300);

            } else {

                rellenarFichaCatalogo(silla);

                mostrarFichaCatalogo();

            }

        }


        // ----------------------------------------------
        // CERRAR LA FICHA
        // ----------------------------------------------

        function cerrarFichaCatalogo() {

            if (seccionCatalogo.classList.contains('hidden')) return;

            clearTimeout(temporizadorCatalogo);

            seccionCatalogo.dataset.visible = 'false';

            temporizadorCatalogo = setTimeout(() => {

                seccionCatalogo.classList.add('hidden');

                if (sillaCatalogoActual) {

                    sillaCatalogoActual.scrollIntoView({

                        behavior: reducirMovimiento.matches ? 'auto' : 'smooth',

                        block: 'center'

                    });

                }

            }, 500);

        }


        // ----------------------------------------------
        // EVENTOS DE LAS 25 SILLAS
        // ----------------------------------------------

        elementosSillas.forEach(silla => {

            silla.addEventListener('click', () => {

                abrirFichaCatalogo(silla);

            });

            silla.addEventListener('keydown', e => {

                if (e.key === 'Enter' || e.key === ' ') {

                    e.preventDefault();

                    abrirFichaCatalogo(silla);

                }

            });

        });


        // ----------------------------------------------
        // BOTÓN CERRAR
        // ----------------------------------------------

        if (botonCerrarCatalogo) {

            botonCerrarCatalogo.addEventListener('click', cerrarFichaCatalogo);

        }


        // ----------------------------------------------
        // ESCAPE
        // ----------------------------------------------

        document.addEventListener('keydown', e => {

            if (e.key === 'Escape') {

                cerrarFichaCatalogo();

            }

        });

    }



    
// ==================================================
//  MAPA INTERACTIVO - TEO SILLAS
// ==================================================

const contenedorMapa = document.getElementById('mapa-teo');

if (contenedorMapa && typeof L !== 'undefined') {

    // Coordenadas aproximadas de Calle de la Palma, Madrid
    const coordenadasTeo = [40.4263, -3.7045];

    // Crear mapa
    const mapa = L.map('mapa-teo', {
        scrollWheelZoom: false
    }).setView(coordenadasTeo, 17);

    // Añadir mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa);

    // Crear marcador
    const marcadorTeo = L.marker(coordenadasTeo).addTo(mapa);

    // Información del marcador
    marcadorTeo.bindPopup(`
        <strong>TEO SILLAS</strong><br>
        C/ de la Palma, 23<br>
        28004 Madrid
        <br><br>
        <a href="https://www.google.com/maps/dir/?api=1&destination=Calle+de+la+Palma+23%2C+28004+Madrid"
           target="_blank"
           rel="noopener noreferrer">
           Cómo llegar
        </a>
    `);

    marcadorTeo.openPopup();

}


// ==================================================
//  FORMULARIO DE CONTACTO
// ==================================================

const formularioContacto = document.getElementById('formulario-contacto');

if (formularioContacto) {

    const correo = document.getElementById('contacto-correo');
    const repetirCorreo = document.getElementById('contacto-correo-repetido');
    const mensajeContacto = document.getElementById('mensaje-contacto');

    formularioContacto.addEventListener('submit', function (evento) {

        // Comprobar que los correos coinciden
        if (correo.value.trim().toLowerCase() !== repetirCorreo.value.trim().toLowerCase()) {

            evento.preventDefault();

            mensajeContacto.textContent = 'Los correos electrónicos no coinciden.';
            mensajeContacto.classList.remove('hidden');

            repetirCorreo.setCustomValidity('Los correos no coinciden.');
            repetirCorreo.reportValidity();

            return;
        }

        // Permitir el envío a FormSubmit
        repetirCorreo.setCustomValidity('');

        mensajeContacto.classList.add('hidden');

    });


    repetirCorreo.addEventListener('input', function () {

        repetirCorreo.setCustomValidity('');
        mensajeContacto.classList.add('hidden');

    });

}

