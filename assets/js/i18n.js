(function () {
  'use strict';

  /* =========================================================
     TRANSLATIONS
  ========================================================= */
  var translations = {
    es: {
      /* --- NAV --- */
      'nav.home': 'Inicio',
      'nav.about': 'Nosotros',
      'nav.flame': 'línea Ignífuga',
      'nav.catalog': 'Catálogo',
      'nav.policies': 'Políticas',
      'nav.contact': 'Contacto',

      /* --- FOOTER --- */
      'footer.web': 'Web',
      'footer.company': 'Empresa',
      'footer.reports': 'Informes',
      'footer.newsletter.desc': 'Regístrese para recibir alertas de la industria, nuestras últimas noticias, pensamientos y perspectivas.',
      'footer.newsletter.email': 'Tu Correo Electrónico',
      'footer.newsletter.btn': 'Suscribir',
      'footer.question': '¿Tienes alguna pregunta?',
      'footer.clickHere': 'Click aquí',
      'footer.terms': 'Términos y condiciones',
      'footer.privacy': 'Política de privacidad',
      'footer.emailLabel': 'Correo:',

      /* --- INDEX — SLIDERS --- */
      'index.slide1.title': 'Prendas de protección contra fuego repentino y arco eléctrico',
      'index.slide1.desc': 'En Ignisafe 10 diseñamos y producimos ropa de protección industrial especializada para ambientes con riesgo térmico y eléctrico.',
      'index.slide1.catalog': 'Catálogo',
      'index.slide1.panel.title': 'Calidad',
      'index.slide1.panel.desc': 'Certificados bajo normas internacionales.',
      'index.slide1.panel.btn': 'Ver Productos',

      'index.slide2.title': 'Ignisafe 10, marca especializada en protección industrial',
      'index.slide2.desc': 'Décimo Dotaciones desarrolla, a través de Ignisafe 10, prendas de protección contra fuego repentino y arco eléctrico para sectores industriales de alta exigencia.(Prendas certificadas para entornos de alto riesgo, la combinación ideal entre confort y protección.)',
      'index.slide2.catalog': 'Catálogo',
      'index.slide2.panel.title': 'Normativas',
      'index.slide2.panel.desc': 'NFPA 2112, NFPA 2113 y ASTM F1506.',
      'index.slide2.panel.btn': 'Conocer Más',

      'index.slide3.title': 'Protección certificada, diseño especializado, calidad y confianza',
      'index.slide3.desc': 'Desarrollamos prendas de protección industrial con enfoque en seguridad, confort, durabilidad y cumplimiento para operaciones con riesgo térmico y eléctrico.',
      'index.slide3.catalog': 'Catálogo',
      'index.slide3.panel.title': 'Confort',
      'index.slide3.panel.desc': 'Seguridad y comodidad en cada uso',
      'index.slide3.panel.btn': 'Ver Productos',

      /* --- INDEX — FEATURES --- */
      'index.feat1.title': 'Certificación y respaldo técnico',
      'index.feat1.desc': 'Prendas desarrolladas con materiales y componentes certificados, según la referencia y el nivel de protección requerido.',
      'index.feat2.title': 'Diseño y producción especializada',
      'index.feat2.desc': 'Soluciones desarrolladas para sectores industriales que requieren desempeño, protección y confiabilidad',
      'index.feat3.title': 'Calidad y cumplimiento',
      'index.feat3.desc': 'Procesos orientados a entregar prendas con altos estándares de calidad, oportunidad y consistencia.',
      'index.feat4.title': 'Experiencia en sectores exigentes',
      'index.feat4.desc': 'Acompañamos empresas que requieren protección frente a riesgos térmicos y eléctricos en sus operaciones.',

      /* --- INDEX — ABOUT 1 --- */
      'index.about1.title': 'CONTAMOS CON CERTIFICACIONES DE CALIDAD ICONTEC',
      'index.about1.cert1': '⮞ NFPA 2112:2023 Prendas resistentes a la llama',
      'index.about1.cert2': '⮞ ASTM F1506:2022 Resistentes a la llama y el arco eléctrico',
      'index.about1.cert3': '⮞ SC – 2000823',
      'index.about1.btn': 'Conocer Más',

      /* --- INDEX — BLOG GRID --- */
      'index.blog1.cat': 'Calidad y compromiso colombiano',
      'index.blog1.title': 'Ignisafe 10, marca desarrollada por Decimo Dotaciones',
      'index.blog1.desc': 'Somos una empresa colombiana productora de prendas especializadas de protección personal, con altos estándares de calidad y servicio.',
      'index.blog1.btn': 'Ver Más',
      'index.blog2.cat': 'Ofertas del Mes en Protección y Vestuario',
      'index.blog2.title': 'NUESTRO CATÁLOGO',
      'index.blog2.desc': 'Conoce nuestros productos del mes. Encuentra grandes descuentos para tus equipos de protección y vestuario.',
      'index.blog2.btn': 'Ver Más',
      'index.blog3.cat': 'Protección confiable frente al fuego y la electricidad',
      'index.blog3.title': 'LÍNEA IGNÍFUGA',
      'index.blog3.desc': 'Las prendas ignífugas protegen frente al fuego o descargas eléctricas durante exposiciones breves, brindando seguridad.',
      'index.blog3.btn': 'Ver Más',

      /* --- INDEX — ABOUT 2 --- */
      'index.about2.subtitle': 'Fabricamos productos de alta calidad',
      'index.about2.title': 'PROTECCIÓN IGNÍFUGA​',
      'index.about2.text1': 'Las prendas con características ignífugas están diseñadas para proteger a una persona que está expuesta directamente al fuego o a una descarga eléctrica durante un breve período de tiempo mientras se aleja del peligro.',
      'index.about2.text2': 'La exposición a llamas o chispas es una parte común de las tareas diarias de muchos trabajadores, y por ello, DÉCIMO DOTACIONES, con su línea IGNISAFE 10, es líder en el desarrollo de prendas de este tipo en Colombia. Fabricamos productos de alta calidad que cumplen con todas las normas internacionales para arcos eléctricos y fuego de corta duración, incluyendo las Normas NFPA 2112, NFPA 2113 y NFPA 70E.',
      'index.about2.video': 'Ver Video!',
      'index.about2.qual.title': 'Calidad',
      'index.about2.qual.desc': 'Nuestras prendas ignífugas destacan por su calidad, resistencia y seguridad, ideales para quienes enfrentan altas exigencias laborales.',
      'index.about2.rel.title': 'Fiabilidad',
      'index.about2.rel.desc': 'Prendas ignífugas diseñadas para ofrecer fiabilidad y protección constante en los entornos más exigentes.',
      'index.about2.inn.title': 'Innovación',
      'index.about2.inn.desc': '> Incorporamos **innovación y tecnología** en cada prenda ignífuga para brindar mayor seguridad y comodidad al trabajador.',

      /* --- INDEX — SERVICES --- */
      'index.serv.subtitle': 'APRECIADOS ALIADOS COMERCIALES:',
      'index.serv.title': 'IMPLEMENTACIÓN DE SELLO DE NO DISCRIMINACIÓN​',
      'index.serv.desc1': 'Nos complace compartir con ustedes que nuestra empresa DECIMO DOTACIONES S.A.S. ha gestionado y recibido con éxito el sello de no discriminación, distintivo otorgado por Icontec, lo que nos enorgullece y nos motiva a compartir, fortalecer y promover la inclusión y la lucha contra cualquier forma de discriminación dentro de la compañía y con las partes interesadas externas, como lo son nuestros Clientes y Proveedores.',
      'index.serv.desc2': 'Queremos aprovechar la oportunidad para invitarlos a cultivar las diferencias y promover el respeto y la dignidad para todos es lo que nos permite avanzar como sociedad, de tal manera que la diversidad y la igualdad de oportunidades conducen a un mayor bienestar, crecimiento, desarrollo económico y competitividad.',
      'index.serv.item1.title': 'Comprometidos con la inclusión',
      'index.serv.item1.desc': 'En DÉCIMO DOTACIONES promovemos un entorno donde todas las personas son valoradas y respetadas, sin distinción alguna.',
      'index.serv.item2.title': 'Diversidad que impulsa',
      'index.serv.item2.desc': 'Creemos que la diversidad fortalece nuestra cultura organizacional y contribuye al desarrollo y la competitividad.',
      'index.serv.item3.title': 'Espacios seguros y respetuosos',
      'index.serv.item3.desc': 'Implementamos políticas que garantizan un ambiente libre de discriminación, violencia o acoso, promoviendo el bienestar.',

      /* --- INDEX — BANNER 2 --- */
      'index.banner2.subtitle': 'Promovemos políticas inclusivas que garantizan ambientes laborales libres de discriminación y acoso.',
      'index.banner2.title': 'Compromiso con la Igualdad y el Respeto',
      'index.banner2.desc': 'Promover y respetar los derechos de las personas y desarrollar políticas y prácticas que protegen a las personas de la discriminación, la violencia o el acoso de cualquier tipo, sigue siendo una obligación fundamental. Todas ellas se incorporan a nuestra selección, formación, promoción, procesos de desarrollo y remuneración. Lo invitamos a que si por algún caso usted conoce o quiere comunicarse con nosotros, dentro del programa se implementó un formato de denuncia de discriminación, este formato lo puede solicitar en los siguientes correos:',
      'index.banner2.fancy1': 'Igualdad <br> Respeto',
      'index.banner2.fancy2': 'Compromiso <br> Humano',
      'index.banner2.fancy3': 'Cultura <br> Inclusiva',

      /* --- NOSOTROS PAGE --- */
      'nosotros.page.sub': 'Calidad, confianza e innovación',
      'nosotros.page.heading': 'Ignisafe 10, marca desarrollada por Decimo Dotaciones',
      'nosotros.page.crumb': 'Sobre Nosotros',
      'nosotros.about.sub': 'Empresa colombiana con experiencia en la producción de prendas técnicas.',
      'nosotros.about.title': 'Comprometidos con la excelencia',
      'nosotros.about.pol': 'POLÍTICAS DE CALIDAD',
      'nosotros.about.text': 'Nuestra compañía manufactura y comercializa elementos de protección, ropa ignífuga y resistente al arco eléctrico, asegurando el cumplimiento de los requisitos normativos y del cliente, siendo eficientes en nuestros procesos, competitivos en el mercado local, regional e internacional; lo anterior en procura de la mejora continua, la satisfacción de nuestros clientes y las partes interesadas.',
      'nosotros.about.video': 'Ver Video!',
      'nosotros.vision.title': 'VISIÓN',
      'nosotros.vision.desc': 'Para el año 2034 seremos la compañía líder en el mercado local y a nivel Latinoamérica de prendas de protección personal especializada, aplicando en nuestros procesos tecnología de punta, con una operación sostenible, rentable y amigable con el medio ambiente.',
      'nosotros.mision.title': 'MISIÓN',
      'nosotros.mision.desc': 'Fabricar prendas técnicas de protección personal, cumpliendo con altos estándares en: calidad, servicio y buenas prácticas, asegurando una operación sostenible y rentable, aportando valor a todas las partes interesadas en la cadena productiva y comercial.',
      'nosotros.banner.title': 'ASESORIA PERSONALIZADA',
      'nosotros.banner.fancy1': 'Contacto <br> Directo',
      'nosotros.banner.fancy2': 'Entrega <br> Inmediata',
      'nosotros.banner.fancy3': 'Producto <br>Garantizado',
      'nosotros.banner.counter': 'Fabricamos ropa ignífuga y elementos de protección con altos estándares de calidad y compromiso con nuestros clientes.',

      /* --- LINEA IGNIFUGA PAGE --- */
      'linea.page.heading': 'Línea Ignisafe 10',
      'linea.page.btn': 'Agenda tu asesoría',
      'linea.page.crumb': 'Línea ignífuga',
      'linea.about1.title': 'Prendas de protección contra fuego repentino y arco eléctrico',
      'linea.about1.desc1': 'Las prendas ignífugas están diseñadas para proteger a una persona que está en exposición directa al fuego o a una descarga eléctrica por un tiempo muy corto mientras se pone a salvo.',
      'linea.about1.desc2': 'La exposición a las llamas o chispas es una parte de las tareas cotidianas de muchos trabajadores, es por esto que en Colombia <strong>DÉCIMO DOTACIONES con su línea IGNISAFE 10</strong> es pionero en el desarrollo de este tipo de prendas, fabricando un producto de calidad que cumple con todas las normas internacionales para arco eléctrico y fuego de corta duración bajo las normas <strong>NFPA 2112 NFPA 2113 y ASTM F1506</strong>.',
      'linea.about1.desc3': 'Es importante determinar y conocer la categoría del riesgo a la que se expone el trabajador para poder elegir la ropa apropiada. Cada tejido ignífugo tiene diferentes características: protección, confort, o durabilidad, nosotros le brindaremos el asesoramiento adecuado para seleccionar el tejido acorde con cada necesidad.',
      'linea.about1.btn': 'Contacto',
      'linea.banner.title': 'ASESORIA PERSONALIZADA',
      'linea.banner.fancy1': 'Contacto <br> Directo',
      'linea.banner.fancy2': 'Entrega <br> Inmediata',
      'linea.banner.fancy3': 'Producto <br>Garantizado',
      'linea.banner.counter': 'Fabricamos ropa ignífuga y elementos de protección con altos estándares de calidad y compromiso con nuestros clientes.',
      'linea.about2.title': 'PROTECCIÓN CONTRA ARCO ELÉCTRICO & FUEGO REPENTINO',
      'linea.about2.desc1': '⮞ Tenemos todas las opciones para proteger correctamente a sus trabajadores en el sector eléctrico y energético.',
      'linea.about2.desc2': '⮞ Las lesiones asociadas a estos dos riesgos son completamente preveniblescon el uso de las prendas adecuadas, claramente puede ser la diferencia entre la vida y la muerte.',
      'linea.about2.desc3': '⮞ Contamos con todas las tecnologías de protección dentro de nuestro portafolio. Con la tranquilidad de adquirir prendas certificadas bajo los más estrictos estándares de calidad.',
      'linea.about2.btn': 'Conocer Más',
      'linea.car.sub': 'Diseño, protección y tecnología que superan los estándares de seguridad.',
      'linea.car.title': 'PRENDAS ESPECIALES',
      'linea.car.desc1': 'Contamos con una amplia gama de diseños y colores para ajustarnos a las necesidades de nuestros clientes en cuanto a protección e imagen corporativa, teniendo en cuenta todas la tecnologías de protección dentro de nuestro portafolio.',
      'linea.car.desc2': 'Aunque las normas permiten que las lesiones por quemaduras sean menores al 50% del cuerpo y que estas quemaduras sean de 2° y 3° grado, las prendas Ignisafe 10 logran llevar ese porcentaje a niveles mucho más bajos, incluso eliminando la posibilidad de que existan quemaduras de 3° grado.',

      /* --- CATALOGO PAGE --- */
      'cat.page.heading': 'Nuestro portafolio',
      'cat.page.crumb': 'Catálogo',
      'cat.filter': 'Catálogo',
      'cat.p1.title': 'OVEROL IGNIFUGO',
      'cat.p1.desc': 'Para trabajos eléctricos, petroquímica, minería, mantenimiento industrial, y entornos con riesgo térmico.',
      'cat.p1.colors': '⮞ Colores disponibles: Azul Navy, Caqui, Gris Naranja, Azul Royal, Rojo',
      'cat.p2.title': 'CAMISA IGNIFUGA',
      'cat.p2.desc': 'resistente a ráfagas de fuego de corta duración y arco eléctrico. Fabricada con fibras naturales y fibras de poliamida de alta tenacidad, que impiden la propagación del fuego y protegen de la exposición al calor, proporcionando confort y alta transpirabilidad',
      'cat.p2.colors': '⮞ Colores disponibles: Azul Navy, Caqui, Azul Royal.',
      'cat.p3.title': 'BUSO IGNIFUGO',
      'cat.p3.desc': 'Resistente a ráfagas de fuego de corta duración y arco eléctrico, prenda interior o exterior multipropósito, como elemento de protección individual contra riesgos térmicos.',
      'cat.p3.colors': '⮞ Colores disponibles: Azul Navy',
      'cat.p4.title': 'PANTALON IGNIFUGO',
      'cat.p4.desc': 'Proporciona comodidad con la protección requerida para actividades de alto riesgo, protección a ráfagas de fuego de corta duración y arco eléctrico.',
      'cat.p4.colors': '⮞ Colores disponibles: Azul Navy, Caqui, Azul Royal.',
      'cat.p5.title': 'BALACLAVA IGNIFUGA',
      'cat.p5.desc': 'Protección para ráfagas de fuego de corta duración y arco eléctrico. Su diseño, con abertura en los ojos, mantiene la cabeza, el rostro y el cuello cubiertos, se ajusta cómodamente a la cabeza por elasticidad en el tejido de punto',
      'cat.p5.colors': '⮞ Colores disponibles: Azul Navy Orange',
      'cat.p6.title': 'BALACLAVA IGNIFUGA',
      'cat.p6.desc': 'Protección para ráfagas de fuego de corta duración y arco eléctrico. Su diseño, con abertura en los ojos, mantiene la cabeza, el rostro y el cuello cubiertos.',
      'cat.p6.colors': '⮞ Colores disponibles: Azul Navy, Gris',
      'cat.p7.title': 'CHAQUETA IGNIFUGA DENIM',
      'cat.p7.desc': 'Ideal para protección contra a ráfagas de fuego de corta duración y arco eléctrico. Prenda usada especialmente para salpicadura de metal fundido.',
      'cat.p7.colors': '⮞ Colores disponibles: Azul Denim',
      'cat.p8.title': 'TRAJE 40 CALORIAS',
      'cat.p8.desc': 'Este traje proteje los efectos térmicos de los arcos eléctricos, Se recomienda su uso a los trabajadores que desarrollan sus actividades en instalaciones conectadas a la red de energía.',
      'cat.p8.colors': '⮞ Colores disponibles: Azul Navy, Gris',
      'cat.p9.title': 'CHAQUETA IGNIFUGA',
      'cat.p9.desc': 'Chaqueta Ignífuga, ideal para protección contra a ráfagas de fuego de corta duración y arco eléctrico. Prenda versatíl, disponible en una sola capa o multicapa, de acuerdo a las necesidades de protección.',
      'cat.p9.colors': '⮞ Colores disponibles: Azul Navy, Gris, Azul Royal',
      'cat.p10.title': 'TRAJE 25 CALORIAS',
      'cat.p10.desc': 'Este traje proteje los efectos térmicos de los arcos eléctricos, Se recomienda su uso a los trabajadores que desarrollan sus actividades en instalaciones conectadas a la red de energía.',
      'cat.p10.colors': '⮞ Colores disponibles: Azul Navy, Gris',
      'cat.p11.title': 'ESCAFANDRA HRC 3',
      'cat.p11.desc': 'Especial para proteger la cabeza, la cara y el cuello a la exposición de un arco eléctrico.',
      'cat.p11.colors': '⮞ Colores disponibles: Azul Navy, Gris',
      'cat.p12.title': 'ESCAFANDRA HRC 4',
      'cat.p12.desc': 'Especial para proteger la cabeza, la cara y el cuello a la exposición de un arco eléctrico.',
      'cat.p12.colors': '⮞ Colores disponibles: Azul Navy, Gris',
      'cat.p13.title': 'TRAJE BOMBEROS FORESTALES',
      'cat.p13.desc': 'Camisa y pantalón ignífugos, resistentes a ráfagas de fuego de corta duración y arco eléctrico. Fabricados con fibras naturales y fibras de poliamida de alta tenacidad, que impiden la propagación del fuego y protegen de la exposición al calor, proporcionando confort y alta transpirabilidad.',
      'cat.p13.colors': '⮞ Colores disponibles: Amarillo y verde',
      'cat.p14.title': 'MANTA IGNIFUGA',
      'cat.p14.desc': 'manta diseñada para resistir y apagar incendios o llamas, reduciendo el riesgo de propagación del fuego. Está fabricada en fibra de vidrio, Ideal para utilizar en cocinas, en laboratorios o en cualquier lugar donde exista riesgo de incendios, y pueden ser empleadas para sofocar llamas en pequeñas superficies o para proteger a las personas del fuego.',
      'cat.p14.colors': '⮞ Colores disponibles: Blanco',
      'cat.p15.title': 'DELANTAL IGNIFIUGO',
      'cat.p15.desc': 'Ideal para el uso diario en cocinas industriales y caseras, puede ser usado para sofocar llamas en pequeñas superficies o para proteger a las personas del fuego.',
      'cat.p15.colors': '⮞ Colores disponibles: Azul Demin',
      'cat.p16.title': 'JEAN IGNIFUGO',
      'cat.p16.desc': 'Proporciona la misma comodidad que un Jean convencional, con la protección requerida para actividades de alto riesgo, protección a ráfagas de fuego de corta duración y arco eléctrico.',
      'cat.p16.colors': '⮞ Colores disponibles: Azul Denim',
      'cat.protCat.p1': '⮞ Categoría de Protección: HRC 2, HRC 3',
      'cat.protCat.p2': '⮞ Categoría de Protección: HRC 2',
      'cat.protCat.p3': '⮞ Categoría de Protección: HRC 2',
      'cat.protCat.p4': '⮞ Categoría de Protección: HRC 2',
      'cat.protCat.p5': '⮞ Categoría de Protección: HRC2, HRC 3',
      'cat.protCat.p6': '⮞ Categoría de Protección: HRC2, HRC 3',
      'cat.protCat.p7': '⮞ Categoría de Protección: HRC 2',
      'cat.protCat.p8': '⮞ Categoría de Protección: HRC 4',
      'cat.protCat.p9': '⮞ Categoría de Protección: HRC 2, HRC 3',
      'cat.protCat.p10': '⮞ Categoría de Protección: HRC 3',
      'cat.protCat.p11': '⮞ Categoría de Protección: HRC 3',
      'cat.protCat.p12': '⮞ Categoría de Protección: HRC 4',
      'cat.protCat.p13': '⮞ Categoría de Protección: HRC 2',
      'cat.protCat.p15': '⮞ Categoría de Protección: HRC 2',
      'cat.protCat.p16': '⮞ Categoría de Protección: HRC 2',

      /* --- CONTACTO PAGE --- */
      'cont.page.heading': 'CONTACTO',
      'cont.page.crumb': 'Contacto',
      'cont.panel.title': 'Soluciones efectivas, atención cercana',
      'cont.panel.desc': 'Contamos con equipos de atención al cliente comprometidos y servicios ágiles diseñados para ofrecer soluciones efectivas.',
      'cont.form.title': 'ESCRÍBENOS',
      'cont.form.desc': '¿Tienes preguntas o comentarios? ¡Nos encantaría saber de ti! Completa nuestro formulario de contacto y te responderemos pronto.',
      'cont.ph.name': 'Nombre',
      'cont.ph.email': 'Correo Electrónico',
      'cont.ph.phone': 'Teléfono',
      'cont.ph.details': 'Detalles',
      'cont.sel.default': 'Seleciona tu petición',
      'cont.sel.opt1': 'Cotización',
      'cont.sel.opt2': 'Sugerencia',
      'cont.sel.opt3': 'Felicitación',
      'cont.sel.opt4': 'Reclamo',
      'cont.form.send': 'Enviar',
      'cont.info': 'Nos pondremos en contacto con usted en un plazo de 24 horas o llámenos.',

      /* --- POLITICAS PAGE --- */
      'pol.page.heading': 'POLÍTICAS EMPRESARIALES',
      'pol.page.crumb': 'Políticas Empresariales',
      'pol.t1': 'POLÍTICA DE CAMBIOS – DÉCIMO DOTACIONES S.A.S. CAMBIOS O DEVOLUCIONES',
      'pol.d1': 'Si deseas hacer el cambio de alguno de nuestros productos, lo puedes hacer a través del formulario de contacto de nuestra página web o en nuestra dirección física: Carrera 64 # 4B – 92 Bogotá. Debes tener en cuenta que: Las prendas, calzado o elementos de protección personal en promoción o con descuento, no tienen cambio en talla, color o referencia. Los cambios de los artículos siempre se realizarán por el valor al que hubieren sido compradas. El producto no debe haber sido usada, lavada o dañada. Debe conservar las etiquetas originales, debe devolverse en el empaque original. La solicitud de devolución de dinero por compras realizadas en la página web solo aplicará por este medio. Los cambios aplican dentro de los treinta (30) días calendario siguientes de haber recibido el producto, debes ponerte en contacto con el área de Servicio al cliente: 601 – 4432180 en horario de lunes a viernes de 8:00 am – 5:00. Una vez hayas solicitado la devolución de tu producto podrás escoger entre las siguientes opciones: Cambio del producto por talla, referencia o color Cambio del producto por talla, referencia o color: sólo se podrán realizar cambios por: productos con valor igual o superior al original pagando el excedente, el cambio estará sujeto a la disponibilidad en el inventario. El costo del transporte del primer cambio del producto será asumido por DECIMO DOTACIONES SAS, si llegase a presentar inconformidad con el mismo producto, los costos de transporte adicionales serán asumidos por el cliente. Devolución del dinero, Nota: Para hacer la devolución del envío puedes utilizar el mismo empaque en que te entregamos tu pedido o utilizar un empaque de tu preferencia, sin embargo es importante que el empaque sea el adecuado según la naturaleza del producto para que no se vea afectada su integridad durante el proceso de transporte. El costo del transporte del primer cambio del producto será asumido por DECIMO DOTACIONES SAS si llegase a presentar inconformidad con el mismo producto, los costos de transporte adicionales serán asumidos por el cliente Recuerda que para el trámite del envío deberás contactarte con un agente de servicio al cliente quien te indicará los pasos a seguir y posteriormente programará la recogida del producto en la dirección acordada. En caso de que tu producto no cumpla con los criterios de nuestra política de cambios y garantías, te informaremos con un correo electrónico la razón por la cual no procede el cambio o la garantía y el producto será devuelto a la dirección de envío inicial, confirmada previamente con servicio al cliente. Los tiempos para el cambio, según la política de Decimo Dotaciones SAS son: Cambio del producto por talla, color o referencia: se despachará en dos (2) días hábiles después de haber recibido el producto en nuestra bodega y a partir de este momento aplican los mismos tiempos de entrega ya establecidos para las compras. Devolución del dinero A través de transferencia: se realiza aproximadamente dentro de los cinco días hábiles siguientes de recibir el producto en nuestra bodega. Para ello se le solicitará diligenciar un formato donde debe indicar el número de cuenta al que desea que se haga la transferencia del dinero. A través de reversión del pago. Transacción que se verá reflejada treinta días hábiles después de recibir el producto en nuestra bodega.',
      'pol.t2': 'POLÍTICA DE TRATAMIENTO DE DATOS – DÉCIMO DOTACIONES S.A.S.',
      'pol.d2': 'Conforme a la Ley 1581 de 2012 y al Decreto 1377 de 2013, DÉCIMO DOTACIONES S.A.S., considerada como Responsable y/o Encargada del tratamiento de datos personales que almacena y recolecta de sus clientes en desarrollo de sus actividades comerciales, de ventas de sus productos en su sede física o en los canales en línea, o en eventos promocionales, entre otros, requiere obtener su autorización para continuar con el tratamiento de sus datos personales conforme a la política de privacidad para el tratamiento de sus datos personales las cuales están disponibles en www.decimodotaciones.com',
      'pol.t3': 'DEFINICIONES',
      'pol.d3': 'Para efectos de la ejecución de la presente política y de conformidad con la normatividad legal, serán aplicables las siguientes definiciones: a) Autorización: consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales. b) Aviso de privacidad: documento físico, electrónico o en cualquier otro formato generado por el responsable que se pone a disposición del Titular para el tratamiento de sus datos personales. En el Aviso de Privacidad se comunica al Titular la información relativa a la existencia de las políticas de tratamiento de información que le serán aplicables, la forma de acceder a las mismas y la finalidad del tratamiento que se pretende dar a los datos personales. c) Base de Datos: conjunto organizado de datos personales que sea objeto de tratamiento. d) Dato personal: cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables. e) Dato público: es el dato calificado como tal según los mandatos de la ley o de la Constitución Política y aquel que no sea semiprivado, privado o sensible. Son públicos, entre otros, los datos relativos al estado civil de las personas, a su profesión u oficio, a su calidad de comerciante o de servidor público y aquellos que puedan obtenerse sin reserva alguna. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros públicos, documentos públicos, gacetas y boletines oficiales. f) Dato privado: es el dato que por su naturaleza íntima o reservada sólo es relevante para el Titular. g) Datos sensibles: se entiende por datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o losó cas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual y los datos biométricos. h) Encargado del Tratamiento: persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del Responsable del Tratamiento. i) Responsable del Tratamiento: persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos. j) Titular: persona natural cuyos datos personales sean objeto de Tratamiento. K) Tratamiento: cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión de los mismos.',
      'pol.t4': 'FINALIDAD CON LA QUE SE EFECTÚA LA RECOLECCIÓN DE DATOS PERSONALES Y TRATAMIENTO DE LOS MISMOS',
      'pol.d4': 'Decimo Dotaciones SAS podrá hacer uso de los datos personales para: a) Ejecutar la relación contractual existente con sus clientes, proveedores y trabajadores, incluida el pago de obligaciones contractuales; b) Proveer los servicios y/o los productos requeridos por sus usuarios; c) Informar sobre nuevos productos o servicios y/o sobre cambios en los mismos; d) Evaluar la calidad del servicio; e) Realizar estudios internos sobre hábitos de consumo; f) Enviar al correo físico, electrónico, celular o dispositivo móvil, vía mensajes de texto (SMS y/o MMS) o a través de cualquier otro medio análogo y/o digital de comunicación creado o por crearse, información comercial, publicitaria o promocional sobre los productos y/o servicios, eventos y/o promociones de tipo comercial o no de estas, con el fin de impulsar, invitar, dirigir, ejecutar, informar y de manera general, llevar a cabo campañas, promociones o concursos de carácter comercial o publicitario, adelantados por Decimo Dotaciones SAS y/o por terceras personas; g) Desarrollar el proceso de selección, evaluación, y vinculación laboral; h) Soportar procesos de auditoría interna o externa; i) Registrar la información de empleados y/o pensionados; i) Los indicados en la autorización otorgada por el titular del dato o descritos en el aviso de privacidad respectivo, según sea el caso; j) Suministrar, compartir, enviar o entregar sus datos personales a empresas filiales, vinculadas, o subordinadas de Decimo Dotaciones SAS ubicadas en Colombia o cualquier otro país en el evento que dichas compañías requieran la información para los fines aquí indicados.',
      'pol.t5': 'PRINCIPIOS APLICABLES AL TRATAMIENTO DE DATOS PERSONALES',
      'pol.d5': 'El tratamiento de datos personales en Decimo Dotaciones SAS se regirá por los siguientes principios: a) Principio de finalidad: el Tratamiento de los datos personales recogidos debe obedecer a una finalidad legítima, la cual debe ser informada al Titular; b) Principio de libertad: el Tratamiento sólo puede llevarse a cabo con el consentimiento, previo, expreso e informado del Titular. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento; c) Principio de veracidad o calidad: la información sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. No será efectuado el Tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error; d) Principio de transparencia: en el Tratamiento debe garantizarse el derecho del Titular a obtener de Decimo Dotaciones SAS en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan; e) Principio de acceso y circulación restringida: el Tratamiento se sujeta a los límites que se derivan de la naturaleza de los datos personales, de las disposiciones de la presente ley y la Constitución. f) Principio de seguridad: la información sujeta a Tratamiento por parte DECIMO DOTACIONES SAS deberá proteger mediante el uso de las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros. g) Principio de confidencialidad: todas las personas que intervengan en el Tratamiento de datos personales están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el Tratamiento.',
      'pol.t6': 'DERECHOS DE LOS TITULARES DE DATOS PERSONALES OBJETO DE TRATAMIENTO POR PARTE DE DECIMO DOTACIONES SAS',
      'pol.d6': 'Los titulares de datos personales por sí o por intermedio de su representante y/o apoderado o su causahabiente podrán ejercer los siguientes derechos: a) Derecho de acceso: en virtud del cual podrá acceder a los datos personales que estén bajo el control de La DECIMO DOTACIONES SAS, para efectos de consultarlos de manera gratuita al menos una vez cada mes calendario; b) Derecho de actualización, rectificación y supresión de los datos personales objeto de tratamiento; c) Derecho a solicitar prueba de la autorización; d) Derecho a ser informado respecto del uso del dato personal; e) Derecho a presentar quejas ante la Superintendencia de Industria y Comercio; f) Derecho a requerir el cumplimiento de las órdenes emitidas por la Superintendencia de Industria y Comercio.',
      'pol.t7': 'DEBERES DE DECIMO DOTACIONES SAS',
      'pol.d7': 'Todos los obligados a cumplir esta política deben tener presente que Decimo Dotaciones SAS está obligada a cumplir los deberes que al respecto imponga la ley. En consecuencia, se deben cumplir las siguientes obligaciones: Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeas data. Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento. Realizar oportunamente la actualización, rectificación o supresión de los datos en los términos de la presente ley.',
      'pol.t8': 'SOLICITUD DE AUTORIZACIÓN AL TITULAR DEL DATO PERSONAL',
      'pol.d8': 'Con antelación y/o al momento de efectuar la recolección del dato personal, Decimo Dotaciones SAS solicitará al titular del dato su autorización para efectuar su recolección y tratamiento, indicando la finalidad para la cual se solicita el dato, utilizando para esos efectos medios técnicos automatizados, escritos u orales, que permitan conservar prueba de la autorización. La autorización del titular no será necesaria cuando se trate de: a) Información requerida por una entidad pública o administrativa en ejercicio de sus funciones legales o por orden judicial. b) Datos de naturaleza pública. c) Casos de urgencia médica o sanitaria. d) Tratamiento de información autorizado por la ley para fines históricos, estadísticos o científicos. e) Datos relacionados con el Registro Civil de las Personas.',
      'pol.t9': 'LIMITACIONES TEMPORALES AL TRATAMIENTO DE LOS DATOS PERSONALES',
      'pol.d9': 'Decimo Dotaciones SAS solo podrá recolectar, almacenar, usar o circular los datos personales durante el tiempo que sea razonable y necesario, de acuerdo con las finalidades que justificaron el tratamiento, atendiendo a las disposiciones aplicables a la materia de que se trate y a los aspectos administrativos, contables, fiscales, jurídicos e históricos de la información. Una vez cumplida la o las finalidades del tratamiento y sin perjuicio de normas legales que dispongan lo contrario, procederá a la supresión de los datos personales en su posesión.'
    },

    en: {
      /* --- NAV --- */
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.flame': 'Flame-Resistant Line',
      'nav.catalog': 'Catalog',
      'nav.policies': 'Policies',
      'nav.contact': 'Contact',

      /* --- FOOTER --- */
      'footer.web': 'Web',
      'footer.company': 'Company',
      'footer.reports': 'Reports',
      'footer.newsletter.desc': 'Register to receive industry alerts, our latest news, thoughts, and perspectives.',
      'footer.newsletter.email': 'Your Email Address',
      'footer.newsletter.btn': 'Subscribe',
      'footer.question': 'Do you have a question?',
      'footer.clickHere': 'Click here',
      'footer.terms': 'Terms and conditions',
      'footer.privacy': 'Privacy policy',
      'footer.emailLabel': 'Email:',

      /* --- INDEX — SLIDERS --- */
      'index.slide1.title': 'Garments for Protection Against Flash Fire and Electric Arc',
      'index.slide1.desc': 'At Ignisafe 10 we design and produce specialized industrial protective clothing for environments with thermal and electrical risk.',
      'index.slide1.catalog': 'Catalog',
      'index.slide1.panel.title': 'Quality',
      'index.slide1.panel.desc': 'Certified under international standards.',
      'index.slide1.panel.btn': 'View Products',

      'index.slide2.title': 'Ignisafe 10, Specialized Industrial Protection Brand',
      'index.slide2.desc': 'Décimo Dotaciones develops, through Ignisafe 10, garments for protection against flash fire and electric arc for high-demand industrial sectors. (Certified garments for high-risk environments, the ideal combination of comfort and protection.)',
      'index.slide2.catalog': 'Catalog',
      'index.slide2.panel.title': 'Standards',
      'index.slide2.panel.desc': 'NFPA 2112, NFPA 2113 and ASTM F1506.',
      'index.slide2.panel.btn': 'Learn More',

      'index.slide3.title': 'Certified Protection, Specialized Design, Quality and Trust',
      'index.slide3.desc': 'We develop industrial protective garments focused on safety, comfort, durability, and compliance for operations with thermal and electrical risk.',
      'index.slide3.catalog': 'Catalog',
      'index.slide3.panel.title': 'Comfort',
      'index.slide3.panel.desc': 'Safety and comfort in every use',
      'index.slide3.panel.btn': 'View Products',

      /* --- INDEX — FEATURES --- */
      'index.feat1.title': 'Certification and Technical Support',
      'index.feat1.desc': 'Garments developed with certified materials and components, according to the reference and required protection level.',
      'index.feat2.title': 'Specialized Design and Production',
      'index.feat2.desc': 'Solutions developed for industrial sectors requiring performance, protection, and reliability.',
      'index.feat3.title': 'Quality and Compliance',
      'index.feat3.desc': 'Processes oriented to deliver garments with high quality standards, timeliness, and consistency.',
      'index.feat4.title': 'Experience in Demanding Sectors',
      'index.feat4.desc': 'We support companies that require protection against thermal and electrical risks in their operations.',

      /* --- INDEX — ABOUT 1 --- */
      'index.about1.title': 'WE HOLD ICONTEC QUALITY CERTIFICATIONS',
      'index.about1.cert1': '⮞ NFPA 2112:2023 Flame resistant garments',
      'index.about1.cert2': '⮞ ASTM F1506:2022 Flame and electric arc resistant',
      'index.about1.cert3': '⮞ SC – 2000823',
      'index.about1.btn': 'Learn More',

      /* --- INDEX — BLOG GRID --- */
      'index.blog1.cat': 'Quality and Colombian commitment',
      'index.blog1.title': 'Ignisafe 10, Brand Developed by Decimo Dotaciones',
      'index.blog1.desc': 'We are a Colombian company producing specialized personal protective garments, with high quality and service standards.',
      'index.blog1.btn': 'See More',
      'index.blog2.cat': 'Monthly Deals on Protection and Clothing',
      'index.blog2.title': 'OUR CATALOG',
      'index.blog2.desc': 'Discover our products of the month. Find great discounts for your protection and clothing equipment.',
      'index.blog2.btn': 'See More',
      'index.blog3.cat': 'Reliable protection against fire and electricity',
      'index.blog3.title': 'FLAME-RESISTANT LINE',
      'index.blog3.desc': 'Flame-resistant garments protect against fire or electric discharges during brief exposures, providing safety.',
      'index.blog3.btn': 'See More',

      /* --- INDEX — ABOUT 2 --- */
      'index.about2.subtitle': 'We manufacture high-quality products',
      'index.about2.title': 'FLAME PROTECTION',
      'index.about2.text1': 'Flame-resistant garments are designed to protect a person directly exposed to fire or an electric discharge for a brief period of time while moving away from danger.',
      'index.about2.text2': 'Exposure to flames or sparks is a common part of the daily tasks of many workers. For this reason, DÉCIMO DOTACIONES, with its IGNISAFE 10 line, is a leader in the development of this type of garment in Colombia. We manufacture high-quality products that comply with all international standards for electric arcs and short-duration fire, including NFPA 2112, NFPA 2113, and NFPA 70E standards.',
      'index.about2.video': 'Watch Video!',
      'index.about2.qual.title': 'Quality',
      'index.about2.qual.desc': 'Our flame-resistant garments stand out for their quality, resistance, and safety, ideal for those facing high work demands.',
      'index.about2.rel.title': 'Reliability',
      'index.about2.rel.desc': 'Flame-resistant garments designed to offer reliability and constant protection in the most demanding environments.',
      'index.about2.inn.title': 'Innovation',
      'index.about2.inn.desc': '> We incorporate **innovation and technology** in every flame-resistant garment to provide greater safety and comfort to the worker.',

      /* --- INDEX — SERVICES --- */
      'index.serv.subtitle': 'DEAR BUSINESS PARTNERS:',
      'index.serv.title': 'IMPLEMENTATION OF NON-DISCRIMINATION SEAL',
      'index.serv.desc1': 'We are pleased to share with you that our company DECIMO DOTACIONES S.A.S. has successfully obtained the non-discrimination seal, a distinction awarded by Icontec, which makes us proud and motivates us to share, strengthen, and promote inclusion and the fight against any form of discrimination within the company and with external stakeholders, such as our Clients and Suppliers.',
      'index.serv.desc2': 'We want to take this opportunity to invite you to embrace differences and promote respect and dignity for all, which allows us to advance as a society. Diversity and equal opportunities lead to greater well-being, growth, economic development, and competitiveness.',
      'index.serv.item1.title': 'Committed to inclusion',
      'index.serv.item1.desc': 'At DÉCIMO DOTACIONES we promote an environment where all people are valued and respected, without any distinction.',
      'index.serv.item2.title': 'Diversity that drives',
      'index.serv.item2.desc': 'We believe that diversity strengthens our organizational culture and contributes to development and competitiveness.',
      'index.serv.item3.title': 'Safe and respectful spaces',
      'index.serv.item3.desc': 'We implement policies that ensure an environment free of discrimination, violence, or harassment, promoting well-being.',

      /* --- INDEX — BANNER 2 --- */
      'index.banner2.subtitle': 'We promote inclusive policies that guarantee work environments free of discrimination and harassment.',
      'index.banner2.title': 'Commitment to Equality and Respect',
      'index.banner2.desc': 'Promoting and respecting people\'s rights and developing policies and practices that protect people from discrimination, violence, or harassment of any kind remains a fundamental obligation. All of these are incorporated into our selection, training, promotion, development, and compensation processes. We invite you, if by chance you know or wish to contact us, that within the program a discrimination complaint form was implemented; this form can be requested at the following email addresses:',
      'index.banner2.fancy1': 'Equality <br> Respect',
      'index.banner2.fancy2': 'Human <br> Commitment',
      'index.banner2.fancy3': 'Inclusive <br> Culture',

      /* --- NOSOTROS PAGE --- */
      'nosotros.page.sub': 'Quality, trust, and innovation',
      'nosotros.page.heading': 'Ignisafe 10, Brand Developed by Decimo Dotaciones',
      'nosotros.page.crumb': 'About Us',
      'nosotros.about.sub': 'We manufacture protective garments and equipment with quality, compliance, and continuous improvement.',
      'nosotros.about.title': 'Committed to excellence',
      'nosotros.about.pol': 'QUALITY POLICIES',
      'nosotros.about.text': 'Our company manufactures and markets protection elements, flame-resistant and arc-resistant clothing, ensuring compliance with regulatory and customer requirements, being efficient in our processes, competitive in the local, regional, and international market; all in pursuit of continuous improvement, and the satisfaction of our customers and interested parties.',
      'nosotros.about.video': 'Watch Video!',
      'nosotros.vision.title': 'VISION',
      'nosotros.vision.desc': 'By the year 2034 we will be the leading company in the local market and Latin America for specialized personal protective garments, applying cutting-edge technology in our processes, with a sustainable, profitable, and environmentally friendly operation.',
      'nosotros.mision.title': 'MISSION',
      'nosotros.mision.desc': 'To manufacture technical personal protective garments, complying with high standards in: quality, service, and best practices, ensuring a sustainable and profitable operation, adding value to all stakeholders in the production and commercial chain.',
      'nosotros.banner.title': 'PERSONALIZED ADVICE',
      'nosotros.banner.fancy1': 'Direct <br> Contact',
      'nosotros.banner.fancy2': 'Immediate <br> Delivery',
      'nosotros.banner.fancy3': 'Guaranteed <br> Product',
      'nosotros.banner.counter': 'We manufacture flame-resistant clothing and protective elements with high quality standards and commitment to our customers.',

      /* --- LINEA IGNIFUGA PAGE --- */
      'linea.page.heading': 'Ignisafe 10 Line',
      'linea.page.btn': 'Schedule your consultation',
      'linea.page.crumb': 'Flame-Resistant Line',
      'linea.about1.title': 'Garments for Protection Against Flash Fire and Electric Arc',
      'linea.about1.desc1': 'Flame-resistant garments are designed to protect a person in direct exposure to fire or an electric discharge for a very short time while getting to safety.',
      'linea.about1.desc2': 'Exposure to flames or sparks is part of the daily tasks of many workers. This is why in Colombia <strong>DÉCIMO DOTACIONES with its IGNISAFE 10 line</strong> is a pioneer in the development of this type of garment, manufacturing a quality product that meets all international standards for electric arc and short-duration fire under standards <strong>NFPA 2112, NFPA 2113 and ASTM F1506</strong>.',
      'linea.about1.desc3': 'It is important to determine and understand the risk category the worker is exposed to in order to choose the appropriate clothing. Each flame-resistant fabric has different characteristics: protection, comfort, or durability. We will provide the appropriate guidance to select the fabric that meets each need.',
      'linea.about1.btn': 'Contact',
      'linea.banner.title': 'PERSONALIZED ADVICE',
      'linea.banner.fancy1': 'Direct <br> Contact',
      'linea.banner.fancy2': 'Immediate <br> Delivery',
      'linea.banner.fancy3': 'Guaranteed <br> Product',
      'linea.banner.counter': 'We manufacture flame-resistant clothing and protective elements with high quality standards and commitment to our customers.',
      'linea.about2.title': 'ELECTRIC ARC & FLASH FIRE PROTECTION',
      'linea.about2.desc1': '⮞ We have all the options to properly protect your workers in the electrical and energy sector.',
      'linea.about2.desc2': '⮞ Injuries associated with these two risks are completely preventable with the use of appropriate garments, which can clearly make the difference between life and death.',
      'linea.about2.desc3': '⮞ We have all protection technologies within our portfolio. With the peace of mind of acquiring garments certified under the strictest quality standards.',
      'linea.about2.btn': 'Learn More',
      'linea.car.sub': 'Design, protection, and technology that exceed safety standards.',
      'linea.car.title': 'SPECIAL GARMENTS',
      'linea.car.desc1': 'We have a wide range of designs and colors to meet our customers\' needs in terms of protection and corporate image, taking into account all protection technologies within our portfolio.',
      'linea.car.desc2': 'Although standards allow burn injuries to be less than 50% of the body and for these burns to be 2nd and 3rd degree, Ignisafe 10 garments manage to bring that percentage to much lower levels, even eliminating the possibility of 3rd degree burns.',

      /* --- CATALOGO PAGE --- */
      'cat.page.heading': 'Our Portfolio',
      'cat.page.crumb': 'Catalog',
      'cat.filter': 'Catalog',
      'cat.p1.title': 'FLAME-RESISTANT COVERALL',
      'cat.p1.desc': 'For electrical work, petrochemicals, mining, industrial maintenance, and environments with thermal risk.',
      'cat.p1.colors': '⮞ Available colors: Navy Blue, Khaki, Orange Gray, Royal Blue, Red',
      'cat.p2.title': 'FLAME-RESISTANT SHIRT',
      'cat.p2.desc': 'Resistant to short-duration fire bursts and electric arc. Made with natural fibers and high-tenacity polyamide fibers that prevent flame propagation and protect against heat exposure, providing comfort and high breathability.',
      'cat.p2.colors': '⮞ Available colors: Navy Blue, Khaki, Royal Blue.',
      'cat.p3.title': 'FLAME-RESISTANT SWEATSHIRT',
      'cat.p3.desc': 'Resistant to short-duration fire bursts and electric arc, a multipurpose inner or outer garment, as an individual protection element against thermal risks.',
      'cat.p3.colors': '⮞ Available colors: Navy Blue',
      'cat.p4.title': 'FLAME-RESISTANT PANTS',
      'cat.p4.desc': 'Provides comfort with the required protection for high-risk activities, protection against short-duration fire bursts and electric arc.',
      'cat.p4.colors': '⮞ Available colors: Navy Blue, Khaki, Royal Blue.',
      'cat.p5.title': 'FLAME-RESISTANT BALACLAVA',
      'cat.p5.desc': 'Protection against short-duration fire bursts and electric arc. Its design, with an eye opening, keeps the head, face, and neck covered, comfortably adjusting to the head through the elasticity of the knit fabric.',
      'cat.p5.colors': '⮞ Available colors: Navy Blue, Orange',
      'cat.p6.title': 'FLAME-RESISTANT BALACLAVA',
      'cat.p6.desc': 'Protection against short-duration fire bursts and electric arc. Its design, with an eye opening, keeps the head, face, and neck covered.',
      'cat.p6.colors': '⮞ Available colors: Navy Blue, Gray',
      'cat.p7.title': 'FLAME-RESISTANT DENIM JACKET',
      'cat.p7.desc': 'Ideal for protection against short-duration fire bursts and electric arc. Garment used especially for molten metal splatter.',
      'cat.p7.colors': '⮞ Available colors: Denim Blue',
      'cat.p8.title': '40 CAL SUIT',
      'cat.p8.desc': 'This suit protects against the thermal effects of electric arcs. It is recommended for workers who carry out their activities in facilities connected to the power grid.',
      'cat.p8.colors': '⮞ Available colors: Navy Blue, Gray',
      'cat.p9.title': 'FLAME-RESISTANT JACKET',
      'cat.p9.desc': 'Flame-Resistant Jacket, ideal for protection against short-duration fire bursts and electric arc. Versatile garment, available in single-layer or multi-layer, according to protection needs.',
      'cat.p9.colors': '⮞ Available colors: Navy Blue, Gray, Royal Blue',
      'cat.p10.title': '25 CAL SUIT',
      'cat.p10.desc': 'This suit protects against the thermal effects of electric arcs. It is recommended for workers who carry out their activities in facilities connected to the power grid.',
      'cat.p10.colors': '⮞ Available colors: Navy Blue, Gray',
      'cat.p11.title': 'ARC FLASH HOOD HRC 3',
      'cat.p11.desc': 'Special to protect the head, face, and neck from exposure to an electric arc.',
      'cat.p11.colors': '⮞ Available colors: Navy Blue, Gray',
      'cat.p12.title': 'ARC FLASH HOOD HRC 4',
      'cat.p12.desc': 'Special to protect the head, face, and neck from exposure to an electric arc.',
      'cat.p12.colors': '⮞ Available colors: Navy Blue, Gray',
      'cat.p13.title': 'WILDLAND FIREFIGHTER SUIT',
      'cat.p13.desc': 'Flame-resistant shirt and pants, resistant to short-duration fire bursts and electric arc. Made with natural fibers and high-tenacity polyamide fibers that prevent flame propagation and protect against heat exposure, providing comfort and high breathability.',
      'cat.p13.colors': '⮞ Available colors: Yellow and green',
      'cat.p14.title': 'FLAME-RESISTANT BLANKET',
      'cat.p14.desc': 'Blanket designed to resist and extinguish fires or flames, reducing the risk of fire spread. Made of fiberglass, ideal for use in kitchens, laboratories, or any place where there is a fire risk, and can be used to smother flames on small surfaces or to protect people from fire.',
      'cat.p14.colors': '⮞ Available colors: White',
      'cat.p15.title': 'FLAME-RESISTANT APRON',
      'cat.p15.desc': 'Ideal for daily use in industrial and household kitchens, can be used to smother flames on small surfaces or to protect people from fire.',
      'cat.p15.colors': '⮞ Available colors: Denim Blue',
      'cat.p16.title': 'FLAME-RESISTANT JEANS',
      'cat.p16.desc': 'Provides the same comfort as conventional jeans, with the required protection for high-risk activities, protection against short-duration fire bursts and electric arc.',
      'cat.p16.colors': '⮞ Available colors: Denim Blue',
      'cat.protCat.p1': '⮞ Protection Category: HRC 2, HRC 3',
      'cat.protCat.p2': '⮞ Protection Category: HRC 2',
      'cat.protCat.p3': '⮞ Protection Category: HRC 2',
      'cat.protCat.p4': '⮞ Protection Category: HRC 2',
      'cat.protCat.p5': '⮞ Protection Category: HRC2, HRC 3',
      'cat.protCat.p6': '⮞ Protection Category: HRC2, HRC 3',
      'cat.protCat.p7': '⮞ Protection Category: HRC 2',
      'cat.protCat.p8': '⮞ Protection Category: HRC 4',
      'cat.protCat.p9': '⮞ Protection Category: HRC 2, HRC 3',
      'cat.protCat.p10': '⮞ Protection Category: HRC 3',
      'cat.protCat.p11': '⮞ Protection Category: HRC 3',
      'cat.protCat.p12': '⮞ Protection Category: HRC 4',
      'cat.protCat.p13': '⮞ Protection Category: HRC 2',
      'cat.protCat.p15': '⮞ Protection Category: HRC 2',
      'cat.protCat.p16': '⮞ Protection Category: HRC 2',

      /* --- CONTACTO PAGE --- */
      'cont.page.heading': 'CONTACT',
      'cont.page.crumb': 'Contact',
      'cont.panel.title': 'Effective solutions, close attention',
      'cont.panel.desc': 'We have committed customer service teams and agile services designed to offer effective solutions.',
      'cont.form.title': 'WRITE TO US',
      'cont.form.desc': 'Do you have questions or comments? We\'d love to hear from you! Fill out our contact form and we\'ll respond soon.',
      'cont.ph.name': 'Name',
      'cont.ph.email': 'Email',
      'cont.ph.phone': 'Phone',
      'cont.ph.details': 'Details',
      'cont.sel.default': 'Select your request',
      'cont.sel.opt1': 'Quote',
      'cont.sel.opt2': 'Suggestion',
      'cont.sel.opt3': 'Compliment',
      'cont.sel.opt4': 'Complaint',
      'cont.form.send': 'Send',
      'cont.info': 'We will contact you within 24 hours or call us.',

      /* --- POLITICAS PAGE --- */
      'pol.page.heading': 'BUSINESS POLICIES',
      'pol.page.crumb': 'Business Policies',
      'pol.t1': 'RETURN POLICY – DÉCIMO DOTACIONES S.A.S. EXCHANGES OR RETURNS',
      'pol.d1': 'If you wish to exchange any of our products, you can do so through the contact form on our website or at our physical address: Carrera 64 # 4B – 92 Bogotá. Please note: Garments, footwear, or personal protective equipment on promotion or with a discount cannot be exchanged for a different size, color, or reference. Item exchanges will always be made at the value at which they were purchased. The product must not have been used, washed, or damaged. It must retain its original labels and must be returned in the original packaging. Money refund requests for purchases made on the website will only be processed through this channel. Exchanges apply within thirty (30) calendar days following receipt of the product. You must contact Customer Service: 601 – 4432180, Monday to Friday from 8:00 am – 5:00 pm. Once you have requested the return of your product, you can choose: Product exchange by size, reference, or color: exchanges can only be made for products of equal or greater value than the original, paying the difference. The exchange is subject to inventory availability. The shipping cost for the first product exchange will be borne by DECIMO DOTACIONES SAS. If there is dissatisfaction with the same product again, additional shipping costs will be borne by the customer. Money refund. Note: To return the shipment, you can use the same packaging in which we delivered your order. The processing times for exchanges are: Product exchange by size, color, or reference: dispatched within two (2) business days after receiving the product in our warehouse. Money refund via bank transfer: processed approximately within five business days of receiving the product. Via payment reversal: the transaction will be reflected thirty business days after receiving the product in our warehouse.',
      'pol.t2': 'DATA PROCESSING POLICY – DÉCIMO DOTACIONES S.A.S.',
      'pol.d2': 'In accordance with Law 1581 of 2012 and Decree 1377 of 2013, DÉCIMO DOTACIONES S.A.S., considered as the Controller and/or Processor of personal data that it stores and collects from its clients in the development of its commercial activities, product sales at its physical location or online channels, or at promotional events, among others, requires your authorization to continue processing your personal data in accordance with the privacy policy available at www.decimodotaciones.com',
      'pol.t3': 'DEFINITIONS',
      'pol.d3': 'For the purposes of this policy and in accordance with legal regulations, the following definitions apply: a) Authorization: prior, express, and informed consent from the Data Subject to carry out the Processing of personal data. b) Privacy Notice: physical, electronic, or any other format document generated by the controller and made available to the Data Subject for processing their personal data. c) Database: organized set of personal data that is subject to processing. d) Personal data: any information linked to or that can be associated with one or more identified or identifiable natural persons. e) Public data: data classified as such according to the mandates of the law or the Political Constitution. f) Private data: data that, due to its intimate or reserved nature, is only relevant to the Data Subject. g) Sensitive data: data that affects the privacy of the Data Subject or whose improper use may generate discrimination, such as data revealing racial or ethnic origin, political orientation, religious convictions, union membership, health data, sexual life, and biometric data. h) Data Processor: natural or legal, public or private person, who processes personal data on behalf of the Data Controller. i) Data Controller: natural or legal, public or private person, who decides on the database and/or the Processing of data. j) Data Subject: natural person whose personal data is subject to Processing. k) Processing: any operation or set of operations on personal data, such as collection, storage, use, circulation, or deletion.',
      'pol.t4': 'PURPOSE FOR WHICH PERSONAL DATA COLLECTION AND PROCESSING IS CARRIED OUT',
      'pol.d4': 'Decimo Dotaciones SAS may use personal data to: a) Execute the contractual relationship with its clients, suppliers, and workers, including payment of contractual obligations; b) Provide the services and/or products required by its users; c) Inform about new products or services and/or changes thereto; d) Evaluate service quality; e) Conduct internal studies on consumption habits; f) Send commercial, advertising, or promotional information about products and/or services via physical mail, email, mobile phone, or text messages (SMS and/or MMS); g) Develop the selection, evaluation, and employment process; h) Support internal or external audit processes; i) Register information of employees and/or pensioners; j) Share personal data with affiliated, related, or subordinate companies of Decimo Dotaciones SAS located in Colombia or any other country when such companies require the information for the purposes indicated herein.',
      'pol.t5': 'PRINCIPLES APPLICABLE TO PERSONAL DATA PROCESSING',
      'pol.d5': 'The processing of personal data at Decimo Dotaciones SAS shall be governed by the following principles: a) Purpose principle: the Processing of collected personal data must follow a legitimate purpose, which must be informed to the Data Subject; b) Freedom principle: Processing may only be carried out with the prior, express, and informed consent of the Data Subject; c) Truthfulness or quality principle: the information subject to Processing must be truthful, complete, accurate, updated, verifiable, and understandable; d) Transparency principle: the Data Subject\'s right to obtain information about the existence of data concerning them must be guaranteed at all times; e) Restricted access and circulation principle: Processing is subject to the limits derived from the nature of personal data and applicable law; f) Security principle: information subject to Processing shall be protected using appropriate technical, human, and administrative measures; g) Confidentiality principle: all persons involved in the Processing of personal data are obligated to maintain the confidentiality of the information.',
      'pol.t6': 'RIGHTS OF PERSONAL DATA SUBJECTS PROCESSED BY DECIMO DOTACIONES SAS',
      'pol.d6': 'Personal data subjects may exercise the following rights: a) Right of access: to access personal data under the control of DECIMO DOTACIONES SAS, free of charge at least once per calendar month; b) Right of update, rectification, and deletion of personal data subject to processing; c) Right to request proof of authorization; d) Right to be informed about the use of personal data; e) Right to file complaints before the Superintendence of Industry and Commerce; f) Right to require compliance with orders issued by the Superintendence of Industry and Commerce.',
      'pol.t7': 'DUTIES OF DECIMO DOTACIONES SAS',
      'pol.d7': 'All those required to comply with this policy must bear in mind that Decimo Dotaciones SAS is obligated to fulfill the duties imposed by law. Accordingly, the following obligations must be met: Guarantee to the Data Subject, at all times, the full and effective exercise of the right of habeas data. Maintain information under the security conditions necessary to prevent its alteration, loss, unauthorized consultation, use, or access. Timely update, rectify, or delete data in accordance with this policy.',
      'pol.t8': 'REQUEST FOR AUTHORIZATION FROM THE PERSONAL DATA SUBJECT',
      'pol.d8': 'Prior to and/or at the time of collecting personal data, Decimo Dotaciones SAS shall request the data subject\'s authorization for its collection and processing, indicating the purpose for which the data is requested. The data subject\'s authorization shall not be necessary when: a) Information is required by a public or administrative entity in the exercise of its legal functions or by court order. b) Data is of a public nature. c) Cases of medical or health emergency. d) Processing of information authorized by law for historical, statistical, or scientific purposes. e) Data related to the Civil Registry of Persons.',
      'pol.t9': 'TEMPORAL LIMITATIONS ON THE PROCESSING OF PERSONAL DATA',
      'pol.d9': 'Decimo Dotaciones SAS may only collect, store, use, or circulate personal data for the time that is reasonable and necessary, in accordance with the purposes that justified the processing, taking into account the applicable provisions and the administrative, accounting, fiscal, legal, and historical aspects of the information. Once the purpose or purposes of the processing have been fulfilled, the personal data in its possession shall be deleted, unless legal regulations provide otherwise.'
    }
  };

  /* =========================================================
     ENGINE
  ========================================================= */
  var currentLang = localStorage.getItem('decimo_lang') || 'es';

  function applyTranslations(lang) {
    var t = translations[lang];
    if (!t) return;

    /* text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    /* inner HTML (for keys with <br>, <strong>, etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    /* placeholder attributes */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    document.documentElement.lang = lang;
    updateButtons(lang);
    localStorage.setItem('decimo_lang', lang);
    currentLang = lang;
  }

  function updateButtons(lang) {
    var btnEn = document.getElementById('langBtnEn');
    var btnEs = document.getElementById('langBtnEs');
    if (btnEn) btnEn.style.display = (lang === 'en') ? 'none' : 'inline-block';
    if (btnEs) btnEs.style.display = (lang === 'es') ? 'none' : 'inline-block';
  }

  /* expose globally so onclick attributes work */
  window.setLang = function (lang) { applyTranslations(lang); };

  /* =========================================================
     STYLES
  ========================================================= */
  var css = document.createElement('style');
  css.innerHTML = [
    '.lang-switcher { display:flex; align-items:center; margin-right:12px; }',
    '.btn-lang {',
    '  background: transparent;',
    '  border: 1.5px solid rgba(255,255,255,0.75);',
    '  color: #fff;',
    '  padding: 4px 11px;',
    '  border-radius: 3px;',
    '  cursor: pointer;',
    '  font-size: 12px;',
    '  font-weight: 700;',
    '  letter-spacing: 0.8px;',
    '  line-height: 1;',
    '  transition: background 0.2s, border-color 0.2s, color 0.2s;',
    '}',
    '.btn-lang:hover { background: rgba(255,255,255,0.2); }',
    /* when navbar becomes sticky/dark */
    '.sticky-navbar.sticky .btn-lang {',
    '  border-color: rgba(0,0,0,0.35);',
    '  color: #222;',
    '}',
    '.sticky-navbar.sticky .btn-lang:hover { background: rgba(0,0,0,0.06); }'
  ].join('');
  document.head.appendChild(css);

  /* =========================================================
     INIT
  ========================================================= */
  document.addEventListener('DOMContentLoaded', function () {
    applyTranslations(currentLang);
  });
})();
