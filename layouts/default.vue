<template>
  <div>
<meta name="google-site-verification" content="6fjjkplypVF5A26NmRJwzonYh19zizPV_tvUSS6cu0s" />
<meta name="yandex-verification" content="206e00d8ccea51bf" />
    <Header/>
      <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  data: () => ({
    category: []
  }),
  created: async function() {
    //this.category = await api.Category();
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style>


</style>
