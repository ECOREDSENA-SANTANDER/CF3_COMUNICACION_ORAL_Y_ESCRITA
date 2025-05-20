<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Semiótica y semiología

      .row.justify-content-center.mb-4
        .col-lg-12.col-md-12.col-sm-12
          .tarjeta--container.borde-recto.row
            .col-lg-9.tarjeta.bgverde(data-aos="fade-left")
              .row.bgazulclaro
                p.p-4.mt-2 Para desarrollar este componente, es fundamental comprender el concepto de semiótica, el cual, según el Diccionario filosófico (1965), se define como la “disciplina que estudia comparativamente los sistemas de signos, desde los más simples sistemas de señalización hasta los lenguajes naturales y los lenguajes formalizados propios de la ciencia”.
            .col-lg-3.tarjeta.color-primario(data-aos="fade-right")
              .row.justify-content-center.align-items-center
                .col-lg-9
                  img(src='@/assets/curso/t1/img1.png', alt='')

      .row.justify-content-center.align-items-center
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/ajM8atyLUxs?si=_cmMYLtgYB6MyvMm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video: Semiótica y Semiología.

      Separador  
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.1  Los signos en la actualidad y su aplicabilidad: puntuación, interrogación y admiración

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/t1/img2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-4 En articulación total con este curso, es fundamental recordar la importancia y aplicabilidad de los signos ortográficos, que, según la Real Academia Española (RAE, 2005), son “todas aquellas marcas gráficas que, no siendo números ni letras, aparecen en los textos escritos con el fin de contribuir a su correcta lectura e interpretación. Cada uno de ellos tiene una función propia y unos usos establecidos por convención”.
          br
          img.t50(src='@/assets/curso/t1/img13.png', alt='')
          br
          p En este sentido, un texto escrito con los signos ortográficos utilizados de manera precisa conduce a una interpretación adecuada, lo que influye de forma directa y significativa no solo en la escritura, sino también en la lectura.   


      .subt2.mb-5(data-aos="fade-right")
        .row.align-items-center
          .col-md-auto.col-3
            img(src='@/assets/curso/t1/ico.png', alt='')
          .col-md-auto.col-9.ps-0
            h3.mb-0.text-black Siguiendo con la RAE, hay signos de puntuación y signos auxiliares

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-md-6.col-12
          img(src='@/assets/curso/t1/img3.png', alt='')
        .col-lg-8.col-md-12.col-sm-12
          ul.lista-ul--color.fa-al
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-4 #[b Signos de puntuación:] sus funciones son marcar las pausas y la entonación con que deben leerse los enunciados, organizar el discurso y sus diferentes elementos para facilitar su comprensión, evitar posibles ambigüedades en textos que, sin su empleo, podrían tener interpretaciones diferentes, y señalar el carácter especial de determinados fragmentos de texto – citas, incisos, intervenciones de distintos interlocutores en un diálogo etc. La RAE, refiere como signos de puntuación los siguientes: coma, comillas, corchete, dos puntos, interrogación y exclamación, paréntesis, punto, puntos suspensivos, punto y coma y raya.
            li.mb-0
              i.fas.fa-check-circle
              span.mb-0 #[b Signos auxiliares:] sus funciones son muy variadas, algunos de estos son: apóstrofo, asterisco, barra, diéresis, guion y tilde.

      .row.align-items-center.mb-3(data-aos="fade-right")
        .col-auto.bgrosado.borde-redondo
          h3.px-1.pt-1.pb-0.mb-1 El punto

      p.mb-4.mt-4 Se utiliza al terminar una oración que no sea interrogativa, de admiración o exclamación. La primera palabra después de un punto empieza con mayúscula. El punto se utiliza en tres momentos de un escrito:

      .row
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bgazulconpuntos.p-4
            .row.justify-content-center.mb-4
              .col-auto
                img(src='@/assets/curso/t1/tar1-1.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center
              .col-auto
                h3.text-center.bgblanco.px-3 Punto seguido
            p.px-3.mb-4.mt-3.text-center Separa dos frases que se complementan en un mismo párrafo, es decir, hablan del mismo tema.

        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bgazulconpuntos.p-4
            .row.justify-content-center.mb-4
              .col-auto
                img(src='@/assets/curso/t1/tar1-1.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center
              .col-auto
                h3.text-center.bgblanco.px-3 Punto aparte
            p.px-3.mb-4.mt-3.text-center Representa el párrafo que ha terminado, el texto sigue con el inicio de un nuevo párrafo.

        .col-sm-6.col-lg-4.mb-4.mb-sm-0
          .tarjeta--boton.bgazulconpuntos.p-4
            .row.justify-content-center.mb-4
              .col-auto
                img(src='@/assets/curso/t1/tar1-1.png', alt='Texto que describa la imagen')
            .row.justify-content-center.align-items-center
              .col-auto
                h3.text-center.bgblanco.px-3 Punto final
            p.px-3.mb-5.mt-3.text-center Como lo menciona indica el final de escrito.
            br

      .row.align-items-center.mt-5.mb-4(data-aos="fade-right")
        .col-auto.bgrosado.borde-redondo
          h3.px-1.pt-1.pb-0.mb-1 La coma

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12.col-md-12.col-sm-12
          .tarjeta--container.borde-recto.row.justify-content-center
            .col-lg-2.col-md-3.col-4.tarjeta.color-primario(data-aos="fade-right")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  img.mt-2(src='@/assets/curso/t1/coma.png', alt='')
            .col-lg-10.col-md-12-.col-sm-12.tarjeta.bgazulclaro(data-aos="fade-left")
              .row.bgazulclaro
                p.px-4.mt-3 Es uno de los signos de puntuación más utilizado a fin de dar sentido a una oración, a la vez que separa elementos o apreciaciones y permite dar pausas en milésimas de segundo al momento de leer.
                p.px-4 Como se evidencia en la siguiente frase, la coma cambia totalmente el sentido a la frase:

      .row.justify-content-center.align-items-center.bgfondo1.mb-5.mt-5
        .col-lg-8.col-md-12.col-sm-12
          p.text-center #[b ¿Quieres salir a caminar?] 

          ImagenInfografica.color-acento-contenido
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/t1/info.png', alt='Texto que describa la imagen')

                .tarjeta.bgazulclaro2.p-3(x="13%" y="32%" numero="+")
                  p.mb-0 La oración es una negación ante la invitación a caminar.

                .tarjeta.bgazulclaro2.p-3(x="88%" y="40%" numero="+")
                  p.mb-0 La oración refiere que la persona va a caminar.

      .row.justify-content-center.align-items-center.mb-5
        p #[b Utilización de la coma:]
        p Es uno de los signos de puntuación más utilizado a fin de dar sentido a una oración, a la vez que separa elementos o apreciaciones y permite dar pausas en milésimas de segundo al momento de leer.
        p.mb-4 Como se evidencia en la siguiente frase, la coma cambia totalmente el sentido a la frase:
        .col-lg-10.col-md-12.col-sm-12
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-6.col-sm-12
              .row.bordeesp.mb-4
                .col-auto
                  img(src='@/assets/curso/t1/img5.png', alt='')
                p.mt-3 #[b 1. Separa elementos, personas o animales de una oración.]
              .row.bordeesp
                .col-auto
                  img(src='@/assets/curso/t1/img5.png', alt='')
                p.mt-3 #[b 2. Aclara o explica una apreciación.]
            .col-lg-6.col-md-6.col-sm-12
              .row.mb-4
                .col-auto
                  img(src='@/assets/curso/t1/img5.png', alt='')
                p.mt-3 #[b 3. Separa el nombre del sujeto del que se escribe.]
              .row
                .col-auto
                  img(src='@/assets/curso/t1/img5.png', alt='')
                p.mt-3 #[b 4. Se utiliza después de un conector, es decir, por ejemplo, dicho lo anterior.]

      .row.align-items-center.mb-3(data-aos="fade-right")
        .col-auto.bgrosado.borde-redondo
          h3.px-1.pt-1.pb-0.mb-1 Punto y coma

      p.mb-4.mt-4 Cuando se lee, se hace una pausa, mayor que la de la coma.

      .row.justify-content-center.align-items-center.bgfondo2.mb-5.mt-5
        .col-lg-3.col-md-6.col-sm-12
          img(src='@/assets/curso/t1/img6.png', alt='')
        .col-lg-7.col-md-12.col-sm-12

          .row.bgfondo3.align-items-center.p-4.py-5
            .col-lg-12.col-12.px-lg-5.px-4
              .row.justify-content-center

                .tarjeta.tarjeta--blanca.p-4.py-3(data-aos="fade-down")
                  SlyderA(tipo="b")
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p.mb-4 Se utiliza cuando la oración es larga y ya se ha utilizado la coma.
                        p.mb-4 #[b Ejemplos:] 
                        ol.lista-ol.fa-ol
                          li 
                            span.text-bold a) 
                            span Salimos de formación el domingo a las 6:00 de la tarde, tomamos un taxi que nos acercara a la estación de Transmilenio; pero la estación estaba cerrada.
                          li 
                            span.text-bold b) 
                            span En inglés, caballo se escribe horse; en francés, caballo; en alemán #[em pferd] y en portugués #[em horseman].
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p Se usa el punto y coma, cuando los elementos de una oración son de diferentes clases.
                        p.mb-4 #[b Ejemplo:] 
                        p En el SENA Distrito Capital hay una gran cantidad de programas de formación en diversas áreas del conocimiento, donde los aprendices estudian: algunos, producción; otros, química; algunos más, seguridad y salud en el trabajo; muchos, enfermería; y otros, finanzas, entre otros.
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        p Se utiliza para separar dos frases diferentes, pero que se complementan.
                        p.mb-4 #[b Ejemplo:] 
                        p Hoy es día de la independencia; esta tarde será el desfile.

      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-auto.bgrosado.borde-redondo
          h3.px-1.pt-1.pb-0.mb-1 Dos puntos

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
        .col-lg-3.col-md-5.col-12
          .row.bgazulclaro.borde-redondo-izq
            img.px-0(src='@/assets/curso/t1/img7.png', alt='')
        .col-lg-5.col-md-12.col-sm-12
          .row.bgazulclaro
            ul.lista-ul--color.fa-al.mt-5
              li.mb-2 
                i.fas.fa-check-circle
                span.mb-2 Se utilizan después del saludo de una carta, o en un texto.
              li.mb-2
                i.fas.fa-check-circle
                span.mb-2 Son apropiados antes de empezar una lista de elementos, características o apreciaciones.
              li.mb-2
                i.fas.fa-check-circle
                span.mb-2 También son útiles antes de mencionar lo que dice una persona.
              li.mb-2
                i.fas.fa-check-circle
                span.mb-4 Después de dos puntos se escribe minúscula, aunque hay algunas excepciones: después de un encabezado o saludo en un escrito, o si la palabra que sigue es nombre propio.
        .col-lg-4.col-md-6.col-12
          .row.bgrosadoclaro.justify-content-center
            img.p-2.mt-4.mb-4(src='@/assets/curso/t1/img8.png', alt='')

      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-auto.bgrosado.borde-redondo
          h3.px-1.pt-1.pb-0.mb-1 Puntos suspensivos

      .row.mb-5
        .col-sm-12.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
          .tarjeta--boton.bgazulconpuntospeq.p-5
            p.text-center.px-4.mb-4.mt-5 Se utilizan al final de una enumeración, cuando se pretende indicar que hay más elementos que hacen parte de la misma y que por extensión, no se mencionan, podría decirse que en este caso sustituye la palabra etcétera.
        .col-sm-12.col-lg-6.mb-4.mb-lg-0
          .tarjeta--boton.bgazulconpuntospeq.p-5(data-aos="fade-right")
            p.text-center.px-4.mt-5.mb-0 Los puntos suspensivos también se utilizan para interrumpir una oración y expresar sorpresa o duda.
            p.text-center.px-4.mb-0 #[b Ejemplo:]
            p.text-center.px-4.mb-4 El perro ladró… y nos asustó a todos.

      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-auto.bgrosado.borde-redondo
          h3.px-1.pt-1.pb-0.mb-1 Signos de interrogación y admiración

      .row.cursor-pointer.justify-content-center.mb-md-5.mt-5(data-aos="fade-down")
        .col-lg-4.mb-3.mb-md-0
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/t1/tar2-1.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
              h4.text-center.text-white.mb-0 Los signos de interrogación
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .px-4.text-center
                h5 Los signos de interrogación
                p.mb-0  Como su nombre lo indica, se utilizan al hacer una pregunta. Se abre la pregunta con el signo (¿) y se cierra con el signo (?).
        .col-lg-4.mb-3.mb-md-0
          .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .tarjeta-foto-hover__img: img(src='@/assets/curso/t1/tar2-2.png')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
              h4.text-center.text-white.mb-0 Los signos de admiración o exclamación
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .px-4.text-center
                h5 Los signos de admiración o exclamación
                p.mb-0 Se utilizan cuando el escritor estima resaltar una frase, según el contexto en el que se enuncie, por lo general expresan emociones. Se inicia la admiración o exclamación con el signo (¡) y se cierra con (!).
      
      Separador  

      .row.bgfondo4

        .row.mx-5
          #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
            h2 1.2 Conectores lógicos como elementos de cohesión

        .col-lg-9.col-md-12.col-sm-12
          p.mx-5.mb-5 En escritura, los conectores son herramientas que permiten unir de manera coherente y lógica partes de una frase o párrafos de un mismo escrito. Su uso es necesario, para articular ideas y crear textos coherentes y comprensibles.

          .row.align-items-center.mb-5(data-aos="fade-right")
            .col-auto.bgrosado.borde-redondo.mx-5
              h3.px-1.pt-1.pb-0.mb-1 Tipos de conectores y sus funciones
            
            .row.justify-content-center.align-items-center.mt-3
              .col-lg-5.col-md-7.col-12
                img.mx-5.mt-4(src='@/assets/curso/t1/img14.png', alt='')
              .col-lg-7.col-md-12.col-12
                ul.lista-ul--color.fa-al.px-5.mt-5
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 #[b Porque, ya que, debido a:] precisa la causa de una situación.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 #[b Por eso, así que, por lo tanto:] refiere la consecuencia de una situación.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 #[b Y, e, ni, tampoco:] une elementos similares.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 #[b O, u:] significa elección entre dos elementos, se utiliza dependiendo la palabra que sigue.
                
        .col-lg-3.col-md-5.col-12
          img(src='@/assets/curso/t1/img11.png', alt='')


      Separador  

      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.3  Diagramas, mapas, gráficos, esquemas y flujogramas

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/t1/img12.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 
            br
            br
            | La diversidad de herramientas para la organización de la información es amplia. En este apartado se considera necesario diferenciar las metodologías que permiten estructurar la información para su comprensión, análisis y socialización. De esta manera, debe utilizarse según la necesidad del aprendiz. Este tipo de herramientas puede elaborarse utilizando programas tecnológicos que se adaptan a la expectativa y utilidad esperadas, o bien de manera análoga o manual.
            br
            br
            br


      p.mb-5.text-center A continuación, describimos las más utilizadas con este propósito. Se aclara que algunas de las definiciones presentadas son paráfrasis de Castro (2009).

      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row.col-xl-11.m-auto(titulo="Diagrama")
          .row.justify-content-center.align-items-center
            .col-lg-2
              img(src='@/assets/curso/t1/acor1-0.png', alt='')
            .col-lg-10
              p Un diagrama es una representación gráfica que permite visualizar y organizar información de manera estructurada. Según la Real Academia Española (RAE), un diagrama es una “representación gráfica de datos o conceptos que muestra las relaciones entre ellos”. Estas representaciones facilitan la comprensión de procesos, estructuras o ideas complejas, al permitir identificar relaciones y jerarquías entre los elementos involucrados.
        .row.col-xl-11.m-auto(titulo="Mapa conceptual")
            .col-lg-2
              img(src='@/assets/curso/t1/acor1-1.png', alt='')
            .col-lg-10
              p Los mapas conceptuales son herramientas gráficas que permiten organizar y representar el conocimiento. Fueron desarrollados por Joseph D. Novak en la década de 1970, basándose en la teoría del aprendizaje significativo de David Ausubel. Según Novak y Gowin (1984), un mapa conceptual se compone de conceptos, generalmente encerrados en círculos o recuadros, y de relaciones entre esos conceptos, indicadas por una línea conectiva. Esta herramienta promueve el aprendizaje significativo al ayudar a los estudiantes a conectar conceptos nuevos con conocimientos previos, facilitando una comprensión más profunda del tema.
        .row.col-xl-11.m-auto(titulo="Mapa mental")
            .col-lg-2
              img(src='@/assets/curso/t1/acor1-2.png', alt='')
            .col-lg-10
              p El mapa mental es una técnica desarrollada por Tony Buzan que consiste en representar ideas, tareas u otros conceptos, dispuestos radialmente alrededor de una palabra clave o idea central. Según Buzan, los mapas mentales “son una forma eficaz de extraer y memorizar información, y una forma lógica y creativa de tomar notas y expresar ideas”. Esta herramienta potencia la creatividad y la memoria, al permitir una visualización clara y estructurada de la información.
        .row.col-xl-11.m-auto(titulo="Gráfico")
            .col-lg-2
              img(src='@/assets/curso/t1/acor1-3.png', alt='')
            .col-lg-10
              p Un gráfico es una representación visual de datos numéricos o cualitativos que facilita la interpretación y el análisis de la información. Según la RAE, un gráfico es una “representación de datos numéricos por medio de líneas, superficies o símbolos, para facilitar su interpretación”. Los gráficos son herramientas esenciales en diversas disciplinas, ya que permiten identificar patrones, tendencias y relaciones entre variables de manera eficiente.
        .row.col-xl-11.m-auto(titulo="Esquema")
            .col-lg-2
              img(src='@/assets/curso/t1/acor1-4.png', alt='')
            .col-lg-10
              p Un esquema es una representación gráfica o simbólica que resume y organiza las ideas principales de un texto o tema. Según la RAE, un esquema es un “conjunto de ideas o conceptos relacionados entre sí y dispuestos de forma lógica para facilitar su comprensión”. Esta herramienta es ampliamente utilizada en procesos de enseñanza y aprendizaje, ya que ayuda a los estudiantes a estructurar y sintetizar la información, facilitando su estudio y memorización.
        .row.col-xl-11.m-auto(titulo="Flujograma")
            .col-lg-2
              img(src='@/assets/curso/t1/acor1-5.png', alt='')
            .col-lg-10
              p Se puede entender como una forma de presentación que gráficamente da unas secuencias o evidencia un proceso, en esta representación se puede hacer uso de símbolos para facilitar el entendimiento y el análisis de la información que se recomienda organizar a manera de datos, se usa por lo general para mostrar oportunidades de mejora o resúmenes de información de una forma más cómoda de revisar y leer.






  </template>

<script>
export default {
  name: 'Tema1',
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
