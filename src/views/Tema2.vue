<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La interpretación

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5
        .bloque-texto-f.color-acento-contenido.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto Lo propio de saber no es ni ver, ni demostrar sino interpretar
          .bloque-texto-f__autor.mb-3
            h3.mb-0 - Michel Foucault
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/t2/img1.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center
      .col-lg-12.col-md-12.col-sm-12
        .tarjeta--container.borde-recto.row.justify-content-center
          .col-lg-3.col-md-3.col-12.tarjeta.color-primario(data-aos="fade-right")
            .row.justify-content-center.align-items-center
              .col-auto
                img.mt-2(src='@/assets/curso/t2/img2.png', alt='')
          .col-lg-9.col-md-12-.col-sm-12.tarjeta.bgrosadoclaro(data-aos="fade-left")
            .row.bgrosadoclaro
              p.px-4.mt-4 Articulando los aportes del contenido trabajado hasta aquí con (signos, conectores y diagramas…), se hace el registro de la información, para luego poder organizarla y por tanto se interpreta y comprende, se da paso al ejercicio del discurso profesional, en ambientes laborales o de formación académica, construyendo escenarios en los que el profesional se destaca y aporta a un grupo de personas; desde el convencimiento que el aprendiz tiene total capacidad de fortalecer su habilidad discursiva, para lo cual, se dan los siguientes aportes, de manera que el discurso sea interpretado adecuadamente.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 De la lectura al discurso


    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t2/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 
          br
          br
          | Utilizar correctamente los signos de puntuación permite una adecuada escritura y lectura, lo cual conlleva a la correcta interpretación y argumentación de teorías, ya sean propias o provenientes de otras fuentes. Dichas teorías se trasladan al discurso oral ante un público profesional determinado. Este discurso tiene dos formas generales que pueden ser combinadas (de acuerdo con la pertinencia), y que para este ejercicio vale la pena distinguir, no sin antes retomar lo abordado en componentes anteriores relacionados con la comunicación y la argumentación.
          br
          br
          br

    .row.justify-content-center.align-items-center.mb-4.mt-4(data-aos="fade")
      .col-auto
        img(src='@/assets/curso/t2/img4.png', alt='').d-none.d-lg-block
      .col
        p.mt-3 No se puede desconocer que leer es, de por sí, un ejercicio complejo, ya que depende en gran medida de los hábitos de lectura y de la persona que lee e interpreta. Se lee según el interés particular (por necesidad o por obligación). La necesidad surge del interés, del hábito, de la curiosidad… y el “me toca leer” nace de la obligación, del deber, del rol laboral o académico. Es ahí donde la lectura deja de ser agradable, y donde este curso pretende aportar.

    .row.justify-content-center.align-items-center(data-aos="fade")
      .col-lg-5.col-md-12.col-sm-12.bgverde.p-2.borde-redondo
        p.px-3.mt-3 En primera instancia y tal vez la más importante, el discurso que se planee para su ejecución debe ser agradable para el profesional y debe tener un sentido claro, acorde con su propósito profesional. De no ser así, será un discurso “por cumplir”, con temas no interiorizados por quien lo expone, sin conexión con su actuar profesional, y, por tanto, desconectado de su auditorio (ya sea virtual o presencial). Sus aportes carecerán de claridad y contundencia, y se desperdiciará la oportunidad de destacar en el ámbito laboral o académico.
      .col-lg-3.col-md-12.col-sm-12.px-4
        .row.justify-content-center.bgmorado
          .col-auto
            img.mt-3(src='@/assets/curso/t2/img5.png', alt='')
      .col-lg-4.col-md-12.col-sm-12
        p Es decir, si existe gusto por el tema y se le encuentra sentido, se realizarán lecturas y búsquedas individuales, ya sea en bibliotecas virtuales o físicas, se consultarán fuentes académicas o documentos en PDF publicados, entre otras lecturas relacionadas con el tema de interés. Así, habrá un lector (independientemente de su formación profesional) que construya un discurso agradable, novedoso y entretenido.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Discurso con ayudas audiovisuales

    p.mb-4 Para hacer las famosas presentaciones que apoyan el discurso es necesario que tenga estos cuatro ítems.
    
    .row.bgfondo5.align-items-center.px-5.py-5

      .tarjeta.tarjeta--gris.p-4
        PasosB.color-acento-contenido
          .row.justify-content-center(titulo="Paso 1")
            .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
              p.mb-4 #[b Conocer el auditorio que estará en su presentación]
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Número de personas.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Nivel profesional.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Expectativa de asistencia.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Tomar registro de asistencia.
            .col-lg-4.col-md-6.col-12
                img(src='@/assets/curso/t2/sly1-1.png', alt='Texto que describa la imagen')

          .row.justify-content-center(titulo="Paso 2")
            .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
              p.mb-4 #[b Elaborar las ayudas audiovisuales que estime pertinentes y que sean acordes al lugar físico o virtual]
              ul.lista-ul--color.fa-al
                li
                  i.fas.fa-check-circle
                  span.mb-0 H5P.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Power Point.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Canva.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Padlet.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Genially.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Educaplay.
            .col-lg-4.col-md-6.col-12
              img(src='@/assets/curso/t2/sly1-2.png', alt='Texto que describa la imagen')

          .row.justify-content-center(titulo="Paso 3")
            .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
              p.mb-4 #[b Ensayar la presentación en un lugar privado, preferiblemente frente a un espejo o con personas de confianza, permite:]
              ul.lista-ul--color.fa-al
                li
                  i.fas.fa-check-circle
                  span.mb-0 Afianzar el contenido y mejorar la expresión corporal, al practicar sin interrupciones y observar gestos, postura y lenguaje no verbal.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Recibir retroalimentación constructiva en un entorno de confianza, lo que facilita corregir errores y ajustar el discurso.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Incrementar la seguridad y reducir la ansiedad, al sentirse más preparado para enfrentar al público con fluidez y control.
            .col-lg-4.col-md-6.col-12
              img(src='@/assets/curso/t2/sly1-3.png', alt='Texto que describa la imagen')

          .row.justify-content-center(titulo="Paso 4")
            .col-lg-7.col-md-12.col-sm-12.mb-4.mb-md-0
              p.mb-4 #[b Parafraséalesando a Ortega (2002), hay “cinco problemas clásicos de los oradores sin experiencia]
              ul.lista-ul--color.fa-al
                li
                  i.fas.fa-check-circle
                  span.mb-0 Terror a enfrentarse con el auditorio.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Terror al micrófono.
                li
                  i.fas.fa-check-circle
                  span.mb-0 No saber qué hacer con las manos.
                li
                  i.fas.fa-check-circle
                  span.mb-0 Terror a la cámara.
                li
                  i.fas.fa-check-circle
                  span.mb-0 No saber a dónde mirar.
            .col-lg-4.col-md-6.col-12
              img(src='@/assets/curso/t2/sly1-4.png', alt='Texto que describa la imagen')

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3  Discurso de lo leído

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-md-12.col-sm-12
        .row.justify-content-center.align-items-center.bgrosadomasclaro
          p.p-4.mb-0 Denota la seguridad de quien discursa, a partir de su tono de voz y vocalización, de la misma manera, la conexión con el público a la vez que se levanta la mirada en la medida que se va leyendo.
        p.mt-4.mb-4 A continuación, se consideran algunos elementos para que un discurso leído sea exitoso:
        ul.lista-ul--color.fa-al
          li
            i.fas.fa-check-circle
            span.mb-0 Construir el escrito, argumentado, agradable, claro y con el objeto de aportar a un público.
          li
            i.fas.fa-check-circle
            span.mb-0 Mirarse y sentirse como el profesional del momento.
          li
            i.fas.fa-check-circle
            span.mb-0 La presentación personal debe estar acorde a la formalidad de la presentación.
          li
            i.fas.fa-check-circle
            span.mb-0 Un saludo amable, mirando a la cámara o al público, agradecer la presencia de los participantes y presentar el perfil profesional.
          li
            i.fas.fa-check-circle
            span.mb-0 Hacer una introducción antes de la lectura.
          li
            i.fas.fa-check-circle
            span.mb-0 Leer con seguridad, de manera pausada y tranquila
      .col-lg-3.col-md-5.col-12
        img(src='@/assets/curso/t2/img6.png', alt='')

    .row.bgfondo6

      p.mx-5 El maestro de ceremonias de un evento académico o laboral; debe tener en cuenta los siguientes aspectos. Parafraseando a Ortega en “7 sugerencias para hacer una buena presentación” (2002):
      
      .row.justify-content-center.align-items-end.mb-5
        .col-lg-3.col-md-6.col-12
          img(src='@/assets/curso/t2/img7.png', alt='')
        .col-lg-5.col-md-12.col-sm-12

          .row.bgfondo3.align-items-center.p-1.py-5
            .col-lg-12.col-12.px-lg-5.px-4

              .row.justify-content-center

              .tarjeta.tarjeta--blanca.p-4.py-3(data-aos="fade-down")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      p.mb-4 La presentación de la persona o grupo que discursará, no debe pasar más de cinco minutos.
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      p.mb-4 Tener preparada y ensayada la presentación.
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      p.mb-4 En un espacio físico, después de saludar y presentarse, invitar al público a utilizar las sillas de adelante.
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      p.mb-4 Comenzar presentando la entidad o empresa que representa el evento.
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      p.mb-4 Señalar la importancia del tema que convoca.
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      p.mb-4 Hacer la presentación del  especialista o grupo que discursará y su trayectoria.
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      p.mb-4 Después de mencionar el nombre de la persona o grupo, pedir al público que lo reciba con un fuerte aplauso.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.4 Uso de preposiciones

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-5.col-md-7.col-12
        img(src='@/assets/curso/t2/img8.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        .row.mb-2
          .col-auto
            img(src='@/assets/curso/t2/img9.png', alt='')
          .col
            p Siguiendo con el ejercicio de escribir un texto académico o laboral para una adecuada comprensión, es deber del profesional utilizar de manera apropiada las preposiciones a la vez que sabe cuáles son y en qué momento se utilizan.
        .row.bgmoradoclaro
          p.p-4.mb-2 Para la RAE la preposición es una clase de palabras invariables cuyos elementos se caracterizan por introducir un término, generalmente nominal u oracional, con el que forman grupo sintáctico.

    p.text-center.mb-4 Del significado citado, vale decir que:

    .row
      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bgazulconpuntos1.p-4
          .row.justify-content-center.mb-4
            .col-auto
              img(src='@/assets/curso/t2/uno.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-auto
          p.px-3.mb-5.mt-2.text-center Una proposición es invariable, dado que no cambia de género.

      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bgazulconpuntos2.p-4
          .row.justify-content-center.mb-4
            .col-auto
              img(src='@/assets/curso/t2/dos.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-auto
          p.px-3.mb-4.mt-2.text-center Un término nominal u oracional, quiere decir que es perteneciente o relativo a nombre y oracional porque construye una oración.

      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.bgazulconpuntos3.p-4
          .row.justify-content-center.mb-4
            .col-auto
              img(src='@/assets/curso/t2/tres.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-auto
          p.px-3.mb-1.mt-2.text-center Grupo sintáctico, se refiere al grupo de palabras que combinadas expresan significados, toda vez que cada unidad está debidamente conectada.

    p.mb-4.mt-4 El Centro de Estudios de Lectura y Escritura – CELEE de la Universidad EAFIT (s. f.) refiere que las preposiciones cumplen una función sintáctica (modo en que se combinan las palabras): “unir palabras o frases dentro de un enunciado”. También cumplen una función semántica (significado de las palabras) “concretar el significado de la palabra siguiente con relación a la anterior y sirven para indicar lugar, tiempo, destino, causa, etc.”

    .row.justify-content-center.align-items-center.bgmoradooscuro.borde-redondo.mb-4
      p.p-4.text-white.text-center.mb-0 #[b Las preposiciones, también se utilizan para conectar frases o palabras en mapas conceptuales, por lo que su importancia en modo de utilización es valiosa.]


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 1. 
        | Las proporciones y sus funciones
      figure
        img.mb-2(src='@/assets/curso/t2/tabla1.png', alt='Se detallan las funciones semánticas más comunes de las preposiciones, acompañadas de algunos ejemplos ilustrativos.')
      figcaption Referencia Tabla - Las proporciones y sus funciones EAFIT (s.f.)

    p.mb-4 Con relación al uso de los conectores lógicos se debe hacer la revisión minuciosa del material que está relacionado en la siguiente tabla que se deja descargable para que la pueda ver y llevar consigo, es importante que la use en cada una de las oportunidades que la requiera.

    .tarjeta.color-acento-contenido.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t2/img10.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Conectores lógicos
              p.mb-0 Lo invitamos a revisar la guía de conectores lógicos, con la cual podrá reforzar los conocimientos adquiridos. 
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Comunicacion_oral_y_escrita/CF3_Relacionando/media/anexos/conectores_logicos.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.5 Técnicas de registro de información 
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.col-md-12.col-sm-12
        .tarjeta--container.borde-recto.row.justify-content-center
          .col-lg-3.col-md-3.col-12.tarjeta.color-primario(data-aos="fade-right")
            .row.justify-content-center.align-items-center
              .col-auto
                img.mt-2(src='@/assets/curso/t2/img11.png', alt='')
          .col-lg-9.col-md-12-.col-sm-12.tarjeta.bgrosadoclaro(data-aos="fade-left")
            .row.bgrosadoclaro
              p.px-4.mt-4 Registrar información es un proceso que deriva de la comunicación del ser humano con su entorno y su inquietud, expectativa e incertidumbre frente a lo desconocido y el interés por conocer, en los diferentes contextos de su vida. Enfocando el contexto laboral o académico, el registro de la información se configura como la matriz del conocimiento y la experiencia que perfila al profesional en su técnica, por lo que el registro de información se convierte en un ejercicio fundamental.

    p.mb-4.text-center Parafraseando a Gallardo y Moreno (1983), hay dos posibilidades de tener acceso a la información.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-12.col-sm-12
        .tarjeta--container.row
          .col-lg-6.tarjeta.color-primario.px-3.py-2(data-aos="fade-right")
            .row.justify-content-center.p-4
              .col-lg-3
                img.img-a.img-t(src='@/assets/curso/t2/tar1-1.png', alt='')
              .col-lg-8
                .row.bgmagenta.mx-1.mt-4
                  h2.mt-1.mb-1 De manera inmediata que también se podría llamar información primaria
            p.mb-0.px-5.mt-3.text-white A través de los sentidos y el contacto con el ambiente, el cual emite información a través de los elementos que lo conforman. El profesional recoge información a través de un contacto directo con el objeto de estudio; persona (as), medio, elemento etc.
            .row.justify-content-end.mt-0
              .col-auto
                img.mb-4.mt-2(src='@/assets/curso/t2/ico.png', alt='')
          .col-lg-6.tarjeta.color-secundario.px-3.py-2(data-aos="fade-left")
            .row.justify-content-center.p-4
              .col-lg-3
                img.img-a.img-t(src='@/assets/curso/t2/tar1-2.png', alt='')
              .col-lg-8
                .row.bgmagenta.mx-1.mt-4
                  h2.mt-1.mb-1 A través de la experiencia ajena o información secundaria
            p.mb-0.px-5.mt-3 Se constituye a su vez en fuente de información. El profesional la obtiene a partir de investigaciones realizadas por otros profesionales o investigadores con otros propósitos y que es registrada en libros, fotos, material fílmico, artículos, ensayos, etc.
            .row.justify-content-end.mt-0
              .col-auto
                img.mb-4.mt-2(src='@/assets/curso/t2/ico.png', alt='')

    .subt.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-black Técnicas para registrar información

    p.mb-4 Toda técnica a implementar debe tener un propósito claro, planeado y argumentado, de manera que no se pierda el foco de la acción.

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.bgrosado.borde-redondo
        h3.px-1.pt-1.pb-0.mb-1 Registro e información directa

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-5.col-12
        img(src='@/assets/curso/t2/img12.png', alt='')
      .col-lg-9.col-md-12.col-sm-12

        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Entrevista estructurada o semiestructurada")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p Cualquiera que sea la metodología debe llevar un formato de grabación audio y/o visual o escrito.
          .row.col-xl-11.m-auto(titulo="Encuestas")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-2 Implementación de formato estructurado de preguntas abiertas o cerradas, a fin de lograr información de un grupo determinado.
                p Tanto en la entrevista como en la encuesta, es supremamente importante saber formular las preguntas, las cuales deben ir claramente articuladas con el objeto de la técnica a implementar.
          .row.col-xl-11.m-auto(titulo="Observación")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-2 Va implícito en la entrevista, el observador se involucra en el contexto observado o se excluye del mismo, esto depende del objeto de la observación y del rol que desempeñe. El diario de campo es una herramienta común para el registro de información, en esta técnica.
          .row.col-xl-11.m-auto(titulo="Panel de expertos o técnica Delphi")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-2 Igual que las técnicas mencionadas, es necesario tener claridad de las preguntas apropiadas y articuladas al tema estudiado, además de tener conocimiento básico del tema y dinamizar el panel.
    
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-auto.bgrosado.borde-redondo
        h3.px-1.pt-1.pb-0.mb-1 Registro de información indirecta
    
    .row
      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bgazulconpuntos11.p-4
          .row.justify-content-center.mb-4
            .col-auto
              img(src='@/assets/curso/t2/tar2-1.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-lg-10
              h3.text-center.bgblanco.px-1 Fichas bibliográficas o de contenido específico
          p.px-3.mt-2.mb-0.text-center En el caso de consulta de libros, ensayos, artículos, entre otros documentos, se opta por utilizar fichas que ordenan la información. Estas se enumeran y se citan las fuentes, de manera que puedan ser consultadas en cualquier momento.

      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bgazulconpuntos21.p-4
          .row.justify-content-center.mb-4
            .col-auto
              img(src='@/assets/curso/t2/tar2-2.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-lg-10
              h3.text-center.bgblanco.px-1 Mapas, gráficos, esquemas, flujogramas o diagramas
          p.px-3.mb-5.mt-2.text-center Son técnicas ya citadas en el tema uno y que aplican para el registro de información indirecta.
          br

      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.bgazulconpuntos31.p-4
          .row.justify-content-center.mb-4
            .col-auto
              img(src='@/assets/curso/t2/tar2-3.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-lg-10
              h3.text-center.bgblanco.px-1 El tomar nota, subrayar o resaltar y hacer resúmenes
          p.px-3.mb-5.mt-2.text-center Son técnicas apropiadas para registrar información relevante, pertinente y oportuna.
          br

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
