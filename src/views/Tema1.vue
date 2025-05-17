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


      .subt.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-md-auto.col-3
            img(src='@/assets/curso/t1/ico.png', alt='')
          .col-md-auto.col-9.ps-0
            h3.mb-0.text-black Siguiendo con la RAE, hay signos de puntuación y signos auxiliares


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
