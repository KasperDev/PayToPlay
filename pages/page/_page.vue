<template>
<div>
    <products :start="start" />
    <div class="pagination">
      <vs-pagination :total="total" v-model="currentx"></vs-pagination>
    </div>
</div>
</template>

<script>
import products from '~/components/products.vue'

export default {
  validate({ params }) {
    return !isNaN(+params.page)
  },
  async asyncData({ $axios, params, error }) {
    const start = (Number(params.page)*10);
    const currentx = Number(params.page);
    const count = await $axios.$get(`${process.env.API_URL}/Products/count?category=5c352bfe6aa99747da2389f6`);
    const total = (Number(count)/10).toFixed(0);
    return {
      data: count,
      start: start,
      currentx: currentx,//текущая страничка
      total: Number(total)//макс каличество
    }
  // try {
  //   } catch (e) {
  //     error({ message: 'User not found', statusCode: 404 })
  //   }
  },
  watch: {
    async currentx() {
       this.$router.push({params: { page: this.currentx }})
    }
  },
  methods: {
    nextpage: () => {
      this.currentx = this.currentx*10;
    }
  },
  components: {
    products
  }
}
</script>
