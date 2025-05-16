<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p El proceso lectoescritor no se limita únicamente a la comprensión y producción de textos; va mucho más allá al integrar la capacidad de relacionar conceptos, ideas y estructuras textuales de manera coherente y significativa. Una vez se han comprendido los fundamentos del lenguaje y la organización de los textos, se hace esencial dominar el arte del relacionamiento.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-7.col-md-12.col-sm-12
        .row.bgazulclaro.borde-redondo
          p.p-5 Este componente no solo fortalece las habilidades semióticas e interpretativas del lector o escritor, sino que también permite organizar la información de forma lógica y funcional, según la intención comunicativa. A través de este enfoque, se promueve una comunicación más efectiva y profunda, capaz de conectar los contenidos con el contexto, el propósito y el público receptor.
      .col-lg-5.col-md-8.col-12
        img(src='@/assets/curso/img_intro.png', alt='')

    .row.justify-content-center.align-items-center(data-aos="fade-left")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: XXX.

</template>

<script>
export default {
  name: 'Introduccion',
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
