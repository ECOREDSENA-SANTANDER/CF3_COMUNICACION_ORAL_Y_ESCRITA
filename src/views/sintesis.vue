<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El arte del relacionamiento en el proceso lectoescritor es una competencia clave que permite al lector o escritor enlazar conocimientos, ideas y estructuras con un propósito comunicativo claro. Va más allá de la decodificación de palabras, al integrar comprensión profunda, lógica discursiva, y el uso de recursos cohesivos y semánticos para construir sentidos complejos. Incluye también una dimensión semiótica e interpretativa que facilita inferencias y análisis críticos desde el contexto cultural, ajustando los contenidos según la intención comunicativa. Desarrollar esta habilidad fortalece la producción textual y favorece una comunicación efectiva en ámbitos académicos, profesionales y personales. 
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.png", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
