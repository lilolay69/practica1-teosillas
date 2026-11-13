document.addEventListener('DOMContentLoaded', () => {

        
const fichas = {
    '01': ['Silla de líneas clásicas fabricada en madera, con respaldo de diseño tradicional y acabado natural.', '45 × 50 × 90 cm', 'Altura de asiento 46 cm', 'Madera natural'],
    '02': ['Silla de diseño contemporáneo con asiento naranja y estructura ligera. Una pieza llamativa que aporta color al espacio.', '48 × 52 × 82 cm', 'Altura de asiento 45 cm', 'Naranja'],
    '03': ['Silla amarilla de formas sencillas y líneas limpias. Su color aporta luminosidad y personalidad a cualquier estancia.', '46 × 50 × 80 cm', 'Altura de asiento 45 cm', 'Amarillo'],
    '04': ['Silla plegable de estructura negra, práctica y funcional. Su diseño permite guardarla fácilmente cuando no se utiliza.', '43 × 47 × 80 cm', 'Altura de asiento 44 cm', 'Negro'],
    '05': ['Silla con respaldo de rejilla y estructura de líneas ligeras. Combina materiales y texturas en un diseño actual.', '45 × 52 × 85 cm', 'Altura de asiento 46 cm', 'Negro y madera'],
    '06': ['Silla de inspiración nórdica con asiento verde y patas de madera. Sus formas suaves y su estructura equilibrada aportan calidez.', '47 × 51 × 81 cm', 'Altura de asiento 45 cm', 'Verde'],
    '07': ['Silla de estética minimalista y acabado negro. Su estructura sencilla prescinde de adornos y apuesta por la funcionalidad.', '42 × 48 × 82 cm', 'Altura de asiento 45 cm', 'Negro mate'],
    '08': ['Silla transparente de aspecto ligero que permite integrar la pieza en distintos ambientes sin recargar el espacio.', '46 × 52 × 80 cm', 'Altura de asiento 46 cm', 'Transparente'],
    '09': ['Silla de estilo vienés con respaldo curvado y una silueta clásica. Una reinterpretación de un diseño atemporal.', '43 × 49 × 89 cm', 'Altura de asiento 46 cm', 'Madera oscura'],
    '10': ['Silla de oficina diseñada para el uso diario, con asiento cómodo, respaldo ergonómico y una estética funcional.', '58 × 58 × 95 cm', 'Altura de asiento 42–52 cm', 'Gris y negro'],
    '11': ['Silla metálica de acabado azul y estructura resistente. Su diseño sencillo combina ligereza visual y funcionalidad.', '45 × 50 × 82 cm', 'Altura de asiento 45 cm', 'Azul'],
    '12': ['Pieza de autor con una silueta expresiva y formas singulares. Un diseño con personalidad que destaca en cualquier ambiente.', '50 × 55 × 84 cm', 'Altura de asiento 45 cm', 'Multicolor'],
    '13': ['Silla tapizada en tela verde, con asiento acolchado y respaldo envolvente. Combina comodidad y una estética acogedora.', '48 × 54 × 85 cm', 'Altura de asiento 46 cm', 'Verde'],
    '14': ['Silla ejecutiva fabricada en madera, con brazos amplios y asiento acolchado. Una pieza de presencia elegante y clásica.', '60 × 62 × 98 cm', 'Altura de asiento 47 cm', 'Madera y cuero'],
    '15': ['Silla de inspiración Luis XVI con respaldo ornamentado y patas de formas torneadas. Un diseño de carácter clásico y vintage.', '47 × 50 × 95 cm', 'Altura de asiento 46 cm', 'Blanco roto y dorado'],
    '16': ['Silla de color coral y formas suaves. Su diseño aporta un toque de color y frescura a cualquier estancia.', '46 × 51 × 82 cm', 'Altura de asiento 45 cm', 'Coral'],
    '17': ['Silla de escritorio tapizada en terciopelo. Su acabado textil y su diseño aportan un punto sofisticado al espacio de trabajo.', '55 × 56 × 90 cm', 'Altura de asiento 44–52 cm', 'Terciopelo'],
    '18': ['Silla de hierro forjado con detalles decorativos y una estructura de carácter artesanal. Cada pieza destaca por su personalidad.', '44 × 48 × 92 cm', 'Altura de asiento 46 cm', 'Negro forja'],
    '19': ['Silla de comedor de estética rústica, con estructura robusta y acabado de aspecto natural. Pensada para espacios cálidos.', '46 × 50 × 92 cm', 'Altura de asiento 47 cm', 'Madera rústica'],
    '20': ['Silla de diseño clásico en color rojo. Su silueta sencilla y su acabado llamativo la convierten en una pieza protagonista.', '52 × 56 × 86 cm', 'Altura de asiento 46 cm', 'Rojo'],
    '21': ['Silla de inspiración retro con patas cruzadas y asiento tapizado. Una combinación de formas geométricas y líneas ligeras.', '45 × 50 × 83 cm', 'Altura de asiento 46 cm', 'Beige'],
    '22': ['Silla de ratán natural trenzado, con una estética artesanal y ligera. Sus materiales aportan textura y calidez al ambiente.', '48 × 52 × 85 cm', 'Altura de asiento 45 cm', 'Ratán natural'],
    '23': ['Silla de autor de tonos oscuros y perfil escultórico. Una pieza de diseño singular que destaca por sus formas y acabado.', '48 × 53 × 86 cm', 'Altura de asiento 45 cm', 'Gris oscuro'],
    '24': ['Silla minimalista fabricada en roble, con líneas rectas y una estética sobria. La madera aporta calidez a su diseño.', '44 × 48 × 80 cm', 'Altura de asiento 45 cm', 'Roble'],
    '25': ['Silla de vanguardia con estructura de acero y formas contemporáneas. Una pieza que combina resistencia y ligereza visual.', '45 × 55 × 82 cm', 'Altura de asiento 44 cm', 'Acero cromado']
};


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
            imagenes: ['#'],
            video: 'media/video/silla-azul.mp4'
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
            imagenes: ['#'],
            video: 'media/video/silla-esmeralda.mp4'
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
            imagenes: ['#'],
            video: 'media/video/silla-famosa.mp4'
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
            imagenes: ['#'],
            video: 'media/video/silla-organica.mp4'
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
            imagenes: ['#'],
            video: 'media/video/silla-serpiente.mp4'
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
            imagenes: ['#'],
            video: 'media/video/silla-morada.mp4'
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
            imagenes: ['#'],
            video: 'media/video/silla-roja.mp4'
        }
    };


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
            url: 'sobreteo.html',
            palabras: 'quien teo historia sobre'
        },
        {
            nombre: '¿Dónde está Teo?',
            url: 'ubicacion.html',
            palabras: 'donde direccion horario contacto mapa'
        }
    ];

       
const nombresCatalogo = {
    '01': 'Silla clásica de madera',
    '02': 'Silla naranja moderna',
    '03': 'Silla amarilla de diseño',
    '04': 'Silla plegable negra',
    '05': 'Silla de rejilla',
    '06': 'Silla nórdica verde',
    '07': 'Silla minimalista negra',
    '08': 'Silla transparente',
    '09': 'Silla de Viena',
    '10': 'Silla de oficina',
    '11': 'Silla metálica azul',
    '12': 'Silla Chula de autor',
    '13': 'Silla tapizada verde',
    '14': 'Silla ejecutiva de madera',
    '15': 'Silla Luis XVI vintage',
    '16': 'Silla coral',
    '17': 'Silla Velvet',
    '18': 'Silla forjada artística',
    '19': 'Silla rústica de comedor',
    '20': 'Silla roja clásica',
    '21': 'Silla de patas cruzadas',
    '22': 'Silla de ratán natural',
    '23': 'Silla de autor',
    '24': 'Silla minimalista de roble',
    '25': 'Silla de vanguardia de acero'
};


    const sillasBuscables = [
        ...Object.keys(fichas).map((id) => {
            const [descripcion, , , color] = fichas[id];
            const nombre = nombresCatalogo[id] || `Silla ${id}`;

            return {
                nombre,
                texto: `${nombre} ${id} ${Number(id)} ${descripcion} ${color}`,
                url: `catalogo.html?silla=${id}`,
                seccion: 'Catálogo'
            };
        }),
        ...Object.keys(sillas).map((id) => {
            const silla = sillas[id];

            return {
                nombre: silla.nombre,
                texto: `${silla.nombre} ${silla.descripcion} ${silla.datos[2][1]}`,
                url: `favoritas.html?silla=${id}`,
                seccion: 'Favoritas'
            };
        })
    ];

    const opcionesBuscables = [
        ...paginas.map((p) => ({
            nombre: p.nombre,
            texto: `${p.nombre} ${p.palabras}`,
            url: p.url,
            seccion: 'Página'
        })),
        ...sillasBuscables
    ];

    function normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    function palabrasDe(texto) {
        return normalizar(texto).split(/[^a-z0-9]+/).filter(Boolean);
    }

    function coincide(palabrasTexto, palabrasConsulta) {
        return palabrasConsulta.every((q) => {
            if (/^\d+$/.test(q)) {
                return palabrasTexto.includes(q);
            }

            const raiz = q.length > 3 && q.endsWith('s') ? q.slice(0, -1) : q;

            return palabrasTexto.some((p) => p.startsWith(raiz));
        });
    }

    function buscarSugerencias(consulta) {
        const palabrasConsulta = palabrasDe(consulta);

        if (!palabrasConsulta.length) return [];

        const porNombre = opcionesBuscables.filter((o) =>
            coincide(palabrasDe(o.nombre), palabrasConsulta)
        );

        const porTexto = opcionesBuscables.filter((o) =>
            !porNombre.includes(o) && coincide(palabrasDe(o.texto), palabrasConsulta)
        );

        return [...porNombre, ...porTexto].slice(0, 8);
    }

    const formularioBuscar = document.getElementById('formulario-buscar');
    const buscador = document.getElementById('buscador');

    if (formularioBuscar && buscador) {

        const estilosSugerencias = document.createElement('style');

        estilosSugerencias.textContent = `
            #sugerencias-buscador {
                position: absolute;
                top: calc(100% + 4px);
                left: 0;
                right: 0;
                z-index: 60;
                margin: 0;
                padding: 0;
                list-style: none;
                max-height: 320px;
                overflow-y: auto;
                background: var(--color-fondo);
                color: #161616;
                border: 1px solid var(--color-caja);
                border-radius: 0;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
                font-family: var(--font-poppins);
            }
            #sugerencias-buscador[hidden] {
                display: none;
            }
            #sugerencias-buscador li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 12px;
                padding: 10px 12px;
                border-radius: 0;
                cursor: pointer;
                font-size: 0.95rem;
            }
            #sugerencias-buscador li[aria-selected="true"],
            #sugerencias-buscador li:hover {
                background: var(--color-amarillo);
                color: #161616;
            }
            #sugerencias-buscador small {
                color: var(--color-texto);
                white-space: nowrap;
            }
            #sugerencias-buscador li[aria-selected="true"] small,
            #sugerencias-buscador li:hover small {
                color: #161616;
            }
            .dark #sugerencias-buscador {
                color: var(--color-gris-claro);
            }
            .dark #sugerencias-buscador li[aria-selected="true"],
            .dark #sugerencias-buscador li:hover {
                color: #161616;
            }
        `;

        document.head.appendChild(estilosSugerencias);

        if (getComputedStyle(formularioBuscar).position === 'static') {
            formularioBuscar.style.position = 'relative';
        }

        const listaSugerencias = document.createElement('ul');

        listaSugerencias.id = 'sugerencias-buscador';
        listaSugerencias.setAttribute('role', 'listbox');
        listaSugerencias.hidden = true;

        formularioBuscar.appendChild(listaSugerencias);

        buscador.setAttribute('autocomplete', 'off');
        buscador.setAttribute('role', 'combobox');
        buscador.setAttribute('aria-autocomplete', 'list');
        buscador.setAttribute('aria-controls', 'sugerencias-buscador');
        buscador.setAttribute('aria-expanded', 'false');

        let sugerenciasActuales = [];
        let indiceActivo = -1;

        function cerrarSugerencias() {
            listaSugerencias.hidden = true;
            listaSugerencias.replaceChildren();
            sugerenciasActuales = [];
            indiceActivo = -1;
            buscador.setAttribute('aria-expanded', 'false');
            buscador.removeAttribute('aria-activedescendant');
        }

        function marcarActiva(indice) {
            const elementos = listaSugerencias.querySelectorAll('li');

            elementos.forEach((li, i) => {
                li.setAttribute('aria-selected', String(i === indice));
            });

            indiceActivo = indice;

            if (indice >= 0 && elementos[indice]) {
                buscador.setAttribute('aria-activedescendant', elementos[indice].id);
                elementos[indice].scrollIntoView({ block: 'nearest' });
            } else {
                buscador.removeAttribute('aria-activedescendant');
            }
        }

        function pintarSugerencias() {
            sugerenciasActuales = buscarSugerencias(buscador.value);
            indiceActivo = -1;

            if (!sugerenciasActuales.length) {
                cerrarSugerencias();
                return;
            }

            listaSugerencias.replaceChildren(
                ...sugerenciasActuales.map((opcion, i) => {
                    const li = document.createElement('li');
                    const nombre = document.createElement('span');
                    const seccion = document.createElement('small');

                    li.id = `sugerencia-${i}`;
                    li.setAttribute('role', 'option');
                    li.setAttribute('aria-selected', 'false');

                    nombre.textContent = opcion.nombre;
                    seccion.textContent = opcion.seccion;

                    li.append(nombre, seccion);

                    li.addEventListener('mousedown', (e) => {
                        e.preventDefault();
                    });

                    li.addEventListener('click', () => {
                        window.location.href = opcion.url;
                    });

                    return li;
                })
            );

            listaSugerencias.hidden = false;
            buscador.setAttribute('aria-expanded', 'true');
        }

        formularioBuscar.addEventListener('submit', (e) => {
            e.preventDefault();

            if (indiceActivo >= 0 && sugerenciasActuales[indiceActivo]) {
                window.location.href = sugerenciasActuales[indiceActivo].url;
                return;
            }

            const palabrasConsulta = palabrasDe(buscador.value);

            if (!palabrasConsulta.length) return;

            const porNombre = sillasBuscables.filter((s) =>
                coincide(palabrasDe(s.nombre), palabrasConsulta)
            );

            const porTexto = sillasBuscables.filter((s) =>
                coincide(palabrasDe(s.texto), palabrasConsulta)
            );

            const pagina = paginas.find((p) =>
                coincide(palabrasDe(`${p.nombre} ${p.palabras}`), palabrasConsulta)
            );

            let destino = null;

            if (porNombre.length === 1) {
                destino = porNombre[0].url;
            } else if (pagina) {
                destino = pagina.url;
            } else if (porNombre.length) {
                destino = porNombre[0].url;
            } else if (porTexto.length) {
                destino = porTexto[0].url;
            }

            if (destino) {
                window.location.href = destino;
            } else {
                buscador.setCustomValidity('No hay resultados para esa búsqueda');
                buscador.reportValidity();
            }
        });

        buscador.addEventListener('input', () => {
            buscador.setCustomValidity('');
            pintarSugerencias();
        });

        buscador.addEventListener('focus', () => {
            if (buscador.value.trim()) pintarSugerencias();
        });

        buscador.addEventListener('keydown', (e) => {
            if (listaSugerencias.hidden) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                marcarActiva((indiceActivo + 1) % sugerenciasActuales.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                marcarActiva(
                    indiceActivo <= 0 ? sugerenciasActuales.length - 1 : indiceActivo - 1
                );
            } else if (e.key === 'Escape') {
                cerrarSugerencias();
            }
        });

        buscador.addEventListener('blur', cerrarSugerencias);

        document.addEventListener('click', (e) => {
            if (!formularioBuscar.contains(e.target)) cerrarSugerencias();
        });
    }


    const UMBRAL_SCROLL = 40;

    function actualizarScroll() {
        document.body.dataset.scroll =
            window.scrollY > UMBRAL_SCROLL ? 'abajo' : 'arriba';
    }

    window.addEventListener('scroll', actualizarScroll, { passive: true });

    actualizarScroll();


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

            const oscuro = document.documentElement.classList.toggle('dark');

            try {
                localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro');
            } catch (e) {}

            sincronizarBotonTema();
        });

        sincronizarBotonTema();
    }


    const sillasCatalogo = document.querySelectorAll('.silla-item');
    const fichaCatalogo = document.getElementById('detalle-catalogo');

    if (sillasCatalogo.length && fichaCatalogo) {

        const imagenesFicha = {};

        const mainCatalogo = document.querySelector('main');
        const textosCatalogo = [...document.querySelectorAll('.texto-item')];
        const textosGrid = textosCatalogo.length ? textosCatalogo[0].parentElement : null;

        if (textosGrid) textosGrid.classList.add('textos-grid');

        const fichaGrid = document.getElementById('catalogo-detalle-grid');
        const fichaCerrar = document.getElementById('catalogo-detalle-cerrar');
        const fichaRef = document.getElementById('catalogo-detalle-ref');
        const fichaNombre = document.getElementById('catalogo-detalle-nombre');
        const fichaDescripcion = document.getElementById('catalogo-detalle-descripcion');
        const fichaLista = document.getElementById('catalogo-detalle-lista');
        const fichaImagenes = [1, 2].map((n) => document.getElementById(`catalogo-detalle-img-${n}`));

        const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');
        const movil = window.matchMedia('(max-width: 767px)');

        let sillaAbierta = null;
        let temporizadorFicha;

        function textoDe(id) {
            return document.querySelector(`.texto-item[data-id="${id}"]`);
        }

        function marcarTexto(id, activo) {
            const texto = textoDe(id);
            if (!texto) return;
            texto.classList.toggle('text-rojo', activo);
            texto.classList.toggle('font-medium', activo);
            texto.classList.toggle('text-texto', !activo);
        }

        function datosSilla(item) {
            const id = item.dataset.id;
            const [descripcion, medidas, altura, color] = fichas[id] || ['', '', '', ''];
            const imagenBase = item.querySelector('img');
            const rutaBase = imagenBase ? imagenBase.getAttribute('src') : '#';

            return {
                nombre: (item.dataset.titulo || '').replace(/^\d+\s*/, ''),
                ref: `0009901${id}`,
                descripcion,
                datos: [['Medidas', medidas], ['Tamaño', altura], ['Color', color]].filter(([, valor]) => valor),
                imagenes: imagenesFicha[id] || [rutaBase, item.dataset.imagen2 || rutaBase]
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

        function devolverFicha() {
            if (mainCatalogo && fichaCatalogo.parentElement !== mainCatalogo.parentElement) {
                mainCatalogo.after(fichaCatalogo);
            }
        }

        function colocarFicha(item) {
            if (!movil.matches || !textosGrid) {
                devolverFicha();
                return;
            }

            const textos = [...textosGrid.querySelectorAll('.texto-item')];
            const texto = textoDe(item.dataset.id);
            const indice = textos.indexOf(texto);

            if (indice === -1) return;

            const columnas = getComputedStyle(textosGrid).gridTemplateColumns.split(' ').length;
            const finDeFila = Math.min((Math.floor(indice / columnas) + 1) * columnas, textos.length) - 1;
            const referencia = textos[finDeFila];

            if (referencia.nextElementSibling !== fichaCatalogo) {
                referencia.after(fichaCatalogo);
            }
        }

        function alinearFicha() {
            const margen = movil.matches ? 20 : 32;
            const alto = fichaGrid.getBoundingClientRect().height;

            fichaGrid.scrollIntoView({
                behavior: menosMovimiento.matches ? 'auto' : 'smooth',
                block: alto + margen > window.innerHeight ? 'start' : 'end'
            });
        }

        function mostrarFicha() {
            fichaCatalogo.classList.remove('hidden');
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    fichaCatalogo.dataset.visible = 'true';
                });
            });
            alinearFicha();
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
                    colocarFicha(item);
                    rellenarFicha(silla);
                    mostrarFicha();
                }, 300);
            } else {
                colocarFicha(item);
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
                const destino = movil.matches ? (textoDe(anterior.dataset.id) || anterior) : anterior;
                destino.scrollIntoView({
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

        textosCatalogo.forEach((texto) => {
            const id = texto.dataset.id;
            const silla = document.querySelector(`.silla-item[data-id="${id}"]`);

            if (!silla) return;

            texto.tabIndex = 0;
            texto.style.cursor = 'pointer';
            texto.setAttribute('role', 'button');
            texto.setAttribute('aria-label', silla.dataset.titulo || `Silla ${id}`);

            const entrar = () => marcarTexto(id, true);
            const salir = () => {
                if (sillaAbierta !== silla) marcarTexto(id, false);
            };

            texto.addEventListener('mouseenter', entrar);
            texto.addEventListener('mouseleave', salir);
            texto.addEventListener('focus', entrar);
            texto.addEventListener('blur', salir);

            texto.addEventListener('click', () => abrirFicha(silla));

            texto.addEventListener('keydown', (e) => {
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

        movil.addEventListener('change', () => {
            if (sillaAbierta) {
                colocarFicha(sillaAbierta);
            } else {
                devolverFicha();
            }
        });

        window.addEventListener('resize', () => {
            if (movil.matches && sillaAbierta && fichaCatalogo.parentElement === textosGrid) {
                colocarFicha(sillaAbierta);
            }
        });

        const sillaPedidaCatalogo = new URLSearchParams(window.location.search).get('silla');

        if (sillaPedidaCatalogo) {
            const objetivo = [...sillasCatalogo].find((s) => s.dataset.id === sillaPedidaCatalogo);

            if (objetivo) {
                setTimeout(() => abrirFicha(objetivo), 300);
            }
        }
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


    const videos = document.querySelectorAll('.silla-video');

    videos.forEach(video => {

        video.muted = true;
        video.loop = true;
        video.playsInline = true;

        video.play().catch(() => {});

        video.addEventListener('mouseenter', () => {
            video.pause();
        });

        video.addEventListener('mouseleave', () => {
            video.play().catch(() => {});
        });

    });


    const seccionDetalle = document.getElementById('detalle-silla');
    const seccionGrid = document.getElementById('grid-favoritas');

    if (seccionDetalle && seccionGrid) {

        const gridVideos = document.getElementById('videos-favoritas');
        const gridDetalle = document.getElementById('detalle-grid');

        const botonCerrar = document.getElementById('detalle-cerrar');

        const refDetalle = document.getElementById('detalle-ref');
        const nombreDetalle = document.getElementById('detalle-nombre');
        const descripcionDetalle = document.getElementById('detalle-descripcion');
        const listaDetalle = document.getElementById('detalle-lista');

        const imagenesDetalle = [document.getElementById('detalle-img-1')];
        const videoDetalle = document.getElementById('detalle-video');

        const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');

        let sillaFija = null;
        let sillaHover = null;
        let temporizadorDetalle;

        function actualizarNombre() {
            const id = sillaFija || sillaHover;

            if (id) {
                seccionGrid.dataset.nombre = id;
            } else {
                delete seccionGrid.dataset.nombre;
            }
        }

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

            if (videoDetalle) {

                if (silla.video) {
                    videoDetalle.muted = true;
                    videoDetalle.loop = true;
                    videoDetalle.playsInline = true;
                    videoDetalle.src = silla.video;
                    videoDetalle.setAttribute('aria-label', `${silla.nombre}, vídeo`);
                    videoDetalle.load();
                    videoDetalle.play().catch(() => {});
                } else {
                    videoDetalle.pause();
                    videoDetalle.removeAttribute('src');
                    videoDetalle.removeAttribute('aria-label');
                    videoDetalle.load();
                }

            }
        }

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
                if (videoDetalle) videoDetalle.pause();
            }, 500);
        }

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

        if (botonCerrar) {
            botonCerrar.addEventListener('click', cerrarDetalle);
        }

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                cerrarDetalle();
            }
        });

        const sillaPedidaFavoritas = new URLSearchParams(window.location.search).get('silla');

        if (sillaPedidaFavoritas && sillas[sillaPedidaFavoritas]) {
            setTimeout(() => abrirDetalle(sillaPedidaFavoritas), 300);
        }

    }


    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && botonMenu) {
            abrirMenu(false);
        }
    });


    const contenedorMapa = document.getElementById('mapa-teo');

    if (contenedorMapa && typeof L !== 'undefined') {

        const coordenadasTeo = [40.4263, -3.7045];

        const mapa = L.map('mapa-teo', {
            scrollWheelZoom: false
        }).setView(coordenadasTeo, 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapa);

        const marcadorTeo = L.marker(coordenadasTeo).addTo(mapa);

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


    const formularioContacto = document.getElementById('formulario-contacto');

    if (formularioContacto) {

        formularioContacto.removeAttribute('action');
        formularioContacto.removeAttribute('method');

        const URL_ENVIO = 'https://formsubmit.co/ajax/hola@teosillas.es';

        const botonDesplegar = document.getElementById('contacto-desplegar');
        const filasContacto = formularioContacto.querySelectorAll('[data-fila]');

        const correo = document.getElementById('contacto-correo');
        const repetirCorreo = document.getElementById('contacto-correo-repetido');
        const mensajeContacto = document.getElementById('mensaje-contacto');
        const botonEnviar = formularioContacto.querySelector('button[type="submit"]');

        const modalContacto = document.getElementById('modal-contacto');
        const botonCerrarModal = document.getElementById('modal-contacto-cerrar');
        const botonCerrarModalX = document.getElementById('modal-contacto-cerrar-x');

        function desplegarFormulario(abrir) {

            formularioContacto.dataset.abierto = String(abrir);

            if (botonDesplegar) {
                botonDesplegar.setAttribute('aria-expanded', String(abrir));
            }

            filasContacto.forEach((fila) => {
                fila.inert = !abrir;
            });

        }

        function mostrarModal() {

            if (!modalContacto) {
                alert('MENSAJE ENVIADO CON ÉXITO');
                return;
            }

            modalContacto.dataset.visible = 'true';

            if (botonCerrarModal) botonCerrarModal.focus();

        }

        function ocultarModal() {

            if (!modalContacto || modalContacto.dataset.visible !== 'true') return;

            modalContacto.dataset.visible = 'false';

            if (botonDesplegar) botonDesplegar.focus();

        }

        function mostrarError(texto) {

            if (!mensajeContacto) {
                alert(texto);
                return;
            }

            mensajeContacto.textContent = texto;
            mensajeContacto.classList.remove('hidden');

        }

        formularioContacto.addEventListener('submit', async (evento) => {

            evento.preventDefault();

            if (correo.value.trim().toLowerCase() !== repetirCorreo.value.trim().toLowerCase()) {

                mostrarError('Los correos electrónicos no coinciden.');

                repetirCorreo.setCustomValidity('Los correos no coinciden.');
                repetirCorreo.reportValidity();

                return;
            }

            repetirCorreo.setCustomValidity('');
            if (mensajeContacto) mensajeContacto.classList.add('hidden');

            if (botonEnviar) botonEnviar.disabled = true;

            try {

                const respuesta = await fetch(URL_ENVIO, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(Object.fromEntries(new FormData(formularioContacto)))
                });

                const datos = await respuesta.json();

                if (respuesta.ok && String(datos.success) === 'true') {

                    formularioContacto.reset();
                    desplegarFormulario(false);
                    mostrarModal();

                } else {

                    mostrarError(datos.message || 'No se ha podido enviar el mensaje. Inténtalo de nuevo.');

                }

            } catch (error) {

                mostrarError('No se ha podido enviar el mensaje. Comprueba tu conexión e inténtalo de nuevo.');

            } finally {

                if (botonEnviar) botonEnviar.disabled = false;

            }

        });

        desplegarFormulario(false);

        if (botonDesplegar) {
            botonDesplegar.addEventListener('click', () => {
                desplegarFormulario(botonDesplegar.getAttribute('aria-expanded') !== 'true');
            });
        }

        repetirCorreo.addEventListener('input', () => {

            repetirCorreo.setCustomValidity('');
            if (mensajeContacto) mensajeContacto.classList.add('hidden');

        });

        if (botonCerrarModal) botonCerrarModal.addEventListener('click', ocultarModal);
        if (botonCerrarModalX) botonCerrarModalX.addEventListener('click', ocultarModal);

        if (modalContacto) {
            modalContacto.addEventListener('click', (evento) => {
                if (evento.target === modalContacto) ocultarModal();
            });
        }

        document.addEventListener('keydown', (evento) => {
            if (evento.key === 'Escape') ocultarModal();
        });

    }

});