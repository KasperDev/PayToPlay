<template>
  <b-container class="bv-example-row content">
  <b-col class="product">
    <Loader v-if="loading" />
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
      <div class="pagination">
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="total" v-model="currentPage" />
      </div>
</b-col>
</b-container>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
import Loader from '~/components/Loader.vue'
import api from '@/plugins/api'

export default {
  validate({ params }) {
   return !isNaN(+params.id)
  },
  data: () => ({
    API_URL: process.env.API_URL+'/'
  }),
  async asyncData({ $axios, params, error }) {
    var start = (Number(params.id)*10);
    var currentx = Number(params.id);
    const {products, total} = await api.Product(start, currentx,  params.name);
      if((params.id-1) > Number(total)){
        return error({ statusCode: 404, message: 'Post not found' })
      }
    return {
      API_URL: process.env.API_URL+'/',
      products: products,
      currentPage: currentx,//текущая страничка
      total: Number(total)//макс каличество
    }
  },
  data: () => ({
    loading: false
  }),
  created() {
  },
  methods: {
    linkGen (pageNum) {
      return {
        path: `/category/${this.$route.params.name}/` + pageNum
      }
    }
  },
  head() {
    return {
      title: `Купить игры ${this.$route.params.name} Категория ${this.$route.params.name} `
    }
  },
  components: {
    ProductCard,
    Loader
  }
}
</script>
