<template>
  <b-container class="bv-example-row content">
  <b-col class="product">
      <b-card-group deck>
         <div v-for="item in products" v-bind:key="item.id">
          <ProductCard
            :name="item.title"
            :img="API_URL+item.poster"
            :prise="item.prise"
            :url="item.url"
            :bay_url="item.pay_url"
          />
        </div>
      </b-card-group>
  </b-col>
</b-container>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'

export default {
  props: {
    start:    {type: Number, default: 0},
    category: {type: String, default: ""}
  },
  data: () => ({
    API_URL: process.env.API_URL+'/',
    products: "",
    data: "",
  }),
  methods: {
    GetProduct: function () {
      // var _start = this.start, _cat = '';
      // if(this.category != ""){
      //    _cat = `&category=${this.category}`;
      // }
      // if(this.start <= 10){
      //   _start = 0;
      // }
      // this.$axios.$get(`${process.env.API_URL}/Products?_start=${_start}&_limit=24${_cat}`)
      // .then((res) => {
      //   this.products = [];
      //   this.products = res;
      //
      // })
    }
  },
  created: function() {
  //  this.GetProduct();

  },
  components: {
    ProductCard
  }
}
</script>
