<template>
<div>
<Slider :slider="slider" />
  <b-container class="bv-example-row content">
    <Search @StartSearch="StartSearch" />
      <b-card-group deck>
         <div v-for="item in product" v-bind:key="item.id">
          <ProductCard
            :name="item.title"
            :category="item.category.name"
            :img="API_URL+item.poster"
            :prise="item.prise"
            :url="item.url"
            :bay_url="item.pay_url"
          />
        </div>
      </b-card-group>
      <button :class="bclasLoader" @click="ButonLoad(false)">
        {{ buttonLoader}}
      </button>
  </b-col>
</b-container>
</div>
</template>

<script>
import products from '~/components/products.vue'
import Slider from '~/components/Slider.vue'
import ProductCard from '~/components/ProductCard.vue'
import Search from '~/components/Search.vue'
import api from '../plugins/api'

export default {
  async asyncData({ $axios, params, error }) {
    var { data }  = await api.ProductSearch(0, 24, '&_sort=reiting:DESC');
    return {
      product: data
    }
  },
  head() {
    return {
      title: 'Онлайн магазин Лицензионных ключей Steam, Uplay, Origin',
      meta: [
        { name: 'description', content: 'Магазин лучших цифровых кодов для Steam, Uplay, Origin, самых популярных игр по самым оптимальным ценам' },
        { name: 'keywords', content: 'купить ключи steam, купить компьютерные игры,купить ключи uplay, онлайн магазин игр,магазин компьютерных игр,лицензионные игры, купить ключ активации, купить игры на пк, купить ключ стимкупить ключи origin, купить steam, steam игры' }
      ]
    }
  },
  data: () => ({
    API_URL: process.env.API_URL+'/',
    slider: [],
    bclasLoader: 'cta js-button',
    user:'Tom',
    buttonLoader: 'Загрузить еще',
    params: ''
  }),
  created: async function() {
    this.slider = await api.Slider();
  },
  methods: {
    async StartSearch(params){
        this.params = params;
        var { data }  = await api.ProductSearch(0, 24, params);
        this.product = [];
        this.product.push(...data);
      },
    async ButonLoad(_status) {
        if(_status){
          this.bclasLoader = 'cta js-button';
          this.buttonLoader = 'Загрузить еще';
          return
        }
        this.bclasLoader = 'cta js-button -loading';
        this.buttonLoader = '';
        var start = this.product.length+24;
        var defolt = '';
        if(this.params != ''){
          defolt = this.params;
        }else {
          defolt = '&_sort=reiting:DESC';
        }
        var {data} = await api.ProductSearch(start, 24, defolt);
        this.product.push(...data);

        this.ButonLoad(true);
      }
  },
  components: {
    products,
    Slider,
    ProductCard,
    Search
  }
}
</script>
