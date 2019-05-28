<template>
  <div id="slider">
    <b-container class="bv-example-row">
    <h1>Pay To Pay - Игры по Top цене</h1>
    <b-row>
      <b-col>
        <b-img thumbnail fluid src="https://api.paytoplay.xyz/uploads/product/PaytoPlay-playerunknowns-battlegrounds.jpg" alt="Image 1" />
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://api.paytoplay.xyz/uploads/product/PaytoPlay-playerunknowns-battlegrounds.jpg" alt="Image 2" />
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://api.paytoplay.xyz/uploads/product/PaytoPlay-playerunknowns-battlegrounds.jpg" alt="Image 3" />
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
  props: [
    'slider'
  ],
  data () {
    return {
      API_URL: process.env.API_URL,
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = false
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  components: {
    ProductCard
  }
}
</script>
