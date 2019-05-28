<template>
  <div>
  <b-card @click="wiewGame"
          :title="name"
          :img-src="img"
          :img-alt="name"
          img-top
          tag="article"
          style="max-width: 260px;"
          class="mb-2">
    <p class="card-text">
      {{ prise }} RUB
    </p>
    <b-button :href="'/product/'+url" variant="primary">Купить </b-button>
  </b-card>
</div>
</template>

<script>
export default {
  props: {
    name: {type: String, default: "all"},
    category: {type: String, default: ""},
    img: {type: String, default: ""},
    prise: {type: Number, default: 0},
    url: {type: String, default: ""},
    bay_url: {type: String, default: ""}
  },
  methods: {
    wiewGame: function () {
      this.$router.push(`/product/${this.url}`)
    }
  }
}
</script>

<style scoped>
.vs-row.ProductCard {
  max-width: 280px;
  margin: 10px;
}
.con-vs-card.cardx.withHover {
  background: #0b152f;
  color: white;
}
.ProductCard h3 {
    display: block;
    font-size: 13px;
    text-align: center;
    font-weight: 600;
}

.ProductCard header.vs-card--header {
    min-height: 50px;
}
.con-vs-card.withHover:hover {
    -webkit-transform: translateY(4px);
    transform: translateY(0px);
    -webkit-box-shadow: 0 0 5px 0 rgba(0,0,0,.1);
    box-shadow: 0 0 4px 1px rgb(56, 110, 194);
}
.vs-row.content {
    background: none;
    margin: 9px;
    box-shadow: none;
}
a.title:hover {
    color: rgb(33, 149, 242) !important;
}
</style>
