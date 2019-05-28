<template>
  <div class="product-name">
    <div class="blure_bg">
      <div class="bg" :style="bg"></div>
    </div>
    <b-container class="bv-example-row item">
      <h1 itemprop="name">{{ product.title }}</h1>
        <b-row class="text-center prod-row">
            <b-col>
              <b-list-group itemprop="description">
                <b-list-group-item>{{ product.type }}</b-list-group-item>
                <b-list-group-item>{{ product.region }}</b-list-group-item>

              </b-list-group>
            </b-col>
            <b-col cols="5">
              <img itemprop="image" :src="API_URL+'/'+product.poster" :title="product.title" :alt="product.title"/>
            </b-col>
            <b-col>
              <b-list-group-item itemprop="price">{{ product.prise }} RUB</b-list-group-item>
              <b-button class="full" variant="primary" :href="product.pay_url" target="_blank">Купить</b-button>
              <b-list-group-item v-if="product.reiting > 1">
                <h5 class="reithin">
                  <b-badge>Рейтинг: {{product.reiting}}</b-badge>
                <i class="fas fa-star-half-alt"></i>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 45.186 45.186" style="enable-background:new 0 0 45.186 45.186;" xml:space="preserve" width="512px" height="512px" class=""><g><g>
                	<path d="M45.112,17.412c-0.236-0.858-1.039-1.468-1.93-1.468c-4.759,0-9.518,0-14.277,0   c-1.36-4.185-2.72-8.37-4.079-12.555c-0.103-0.313-0.203-0.626-0.306-0.938c-0.002-0.005-0.005-0.009-0.006-0.015   c-0.149-0.484-0.485-0.908-0.923-1.17c-0.009-0.006-0.018-0.013-0.027-0.018c-0.084-0.049-0.173-0.087-0.263-0.123   c-0.037-0.015-0.072-0.031-0.11-0.043c-0.022-0.008-0.044-0.021-0.067-0.027c-0.045-0.012-0.088-0.013-0.132-0.022   c-0.07-0.015-0.141-0.029-0.213-0.036c-0.054-0.005-0.106-0.005-0.16-0.006c-0.08-0.001-0.16,0-0.241,0.009   c-0.045,0.005-0.088,0.014-0.132,0.022c-0.061,0.011-0.122,0.014-0.184,0.031C22.029,1.062,22,1.079,21.968,1.09   c-0.01,0.003-0.02,0.008-0.03,0.012c-0.602,0.214-1.079,0.728-1.266,1.333c-0.002,0.006-0.005,0.011-0.007,0.017   c-1.462,4.498-2.922,8.996-4.385,13.493c-4.431,0-8.861,0-13.292,0c-0.329,0-0.657,0-0.986,0c-0.89,0-1.692,0.61-1.929,1.468   c-0.256,0.931,0.184,1.724,0.919,2.259c3.797,2.758,7.593,5.516,11.39,8.274c-1.379,4.245-2.758,8.49-4.139,12.735   c-0.101,0.312-0.203,0.625-0.305,0.938c-0.515,1.584,1.506,3.299,2.939,2.258c3.906-2.838,7.811-5.675,11.717-8.513   c3.64,2.646,7.28,5.289,10.92,7.935c0.266,0.192,0.531,0.385,0.797,0.578c1.434,1.041,3.453-0.674,2.938-2.258   c-1.48-4.559-2.963-9.116-4.444-13.675c3.53-2.564,7.061-5.129,10.592-7.694c0.266-0.193,0.531-0.386,0.797-0.58   C44.929,19.136,45.368,18.343,45.112,17.412z M23.602,31.177c-0.521-0.379-1.497-0.379-2.02,0c-2.64,1.919-5.28,3.837-7.92,5.755   c0.896-2.758,1.792-5.515,2.688-8.272c0.102-0.312,0.203-0.625,0.305-0.938c0.296-0.91-0.211-1.744-0.919-2.258   c-2.532-1.84-5.064-3.679-7.597-5.519c2.868,0,5.736,0,8.604,0c0.329,0,0.657,0,0.986,0c0.921,0,1.651-0.616,1.929-1.468   c0.978-3.009,1.956-6.02,2.934-9.029c0.875,2.697,1.751,5.393,2.628,8.089c0.102,0.313,0.202,0.625,0.305,0.938   c0.277,0.852,1.008,1.468,1.929,1.468c3.197,0,6.394,0,9.59,0c-2.266,1.646-4.531,3.292-6.797,4.938   c-0.267,0.193-0.532,0.387-0.799,0.58c-0.708,0.516-1.216,1.348-0.919,2.258c0.997,3.071,1.995,6.141,2.993,9.211   c-2.374-1.725-4.749-3.449-7.122-5.174C24.134,31.563,23.869,31.37,23.602,31.177z" data-original="#010002" class="active-path" data-old_color="#FF0068" fill="#fc7d00"/>
                </g></g> </svg>
                </h5>
              </b-list-group-item>
            </b-col>
        </b-row>
        <b-card v-if="product.description != product.title" class="item-deteils" no-body>
         <b-tabs card v-model="tabIndex">
           <b-tab title="Видео" :title-link-class="linkClass(0)">
             <div id="video">
               <vue-plyr>
                  <video :src="product.video" type="video/webm">
                    <source :src="product.video" type="video/webm" size="1080">
                  </video>
                </vue-plyr>
            </div>
           </b-tab>
           <b-tab title="Описаия" :title-link-class="linkClass(1)">
             {{ product.description }}
           </b-tab>
         </b-tabs>
       </b-card>
    </b-container>
  </div>
</template>


<script>
export default {
  async asyncData({ $axios, params, $route, error }) {
    const data = await $axios.$get(`${process.env.API_URL}/products?_limit=1&url=${params.name}`)
    if(data == ''){
      return error({ statusCode: 404, message: 'Post not found' })
    }
    var product = data[0];
    var API = process.env.API_URL;
    var bg = `background: url(${process.env.API_URL}/${product.poster}) no-repeat;`;
    return { product, params, bg, $route, API }
  },
  head() {
    const Name = this.product.title;
    const Category = this.product.category.name;
    var descript = `Купить ${Name} - ключ ${Category} - купить лицензионный ключ 🔑 со скидкой, 🎮 активация для платформы ${Category}, Мгновенная доставка на ваш Email 📧. Зачем платить больше ? Покупайте: ${Name} дешево и быстро для себя или друзьям в подарок 🎁. Безопасно и просто в несколько кликов !!!`;
    return {
      title: `Купить ${Name} - ключ ${Category} | ${Name} дешево по скидке`,
      meta: [
        { name: 'keywords', content: `Купить ${Name}, Ключ ${Name} Купить, ${Name} ${Category} Купить, Ключ ${Name}, ${Category} ключь ${Name} купить, игра ${Name}, Скидка ${Name}, Купить в подарок ${Name}, активация ${Name} в ${Category}` },
        { name: 'description', content: descript},
        { property: 'og:image', content: `${this.API}/${this.product.poster}`},//`/${this.product.poster}` },
        { property: 'og:title', content: Name },
        { property: 'og:description', content: descript },
        { property: 'og:type', content: 'product' },
        { property: 'og:url', content: `https://paytoplay.xyz${this.$route.path}`}
      ]
    }
   },
//
// <meta property="og:image" content="https://steampay.com/goods/rust.jpg" />
// <meta property="og:title" content="RUST" />
// <meta property="og:description" content="Вы можете купить лицензионный ключ RUST по доступной цене, активация игры происходит в сервисе STEAM. Мгновенная доставка на электронный адрес, играйте легально!" />
// <meta property="og:type" content="product" />
// <meta property="og:url" content="https://steampay.com/game/rust" />
  data: () => ({
    API_URL: process.env.API_URL,
    loader: true,
    tabIndex: 0,
    category: "Категория",
    items: []
  }),
  methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    }
  },
  created(){

  }
}
</script>

<style>
/* .bv-example-row.content.container {
    background: none;
} */
.bg {
  background-size: 100% !important;
  position: fixed;
  width: 100%;
  height: 100%;
  /* top: 5px;
  filter: blur(17px); */
}
/* .bg img{
  background-repeat: no-repeat;
  background-size: 100%;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  filter: blur(17px);
  box-shadow: 0 0 8px 24px black;
  z-index: -1;
} */

a.btn.btn-primary.full {
    width: 97%;
    margin-top: 6px;
    border-radius: 0;
}
.list-group-item h5 {
    text-align: right;
}
#colum .vs-col {
  background: #090d17;
  min-width: 310px;
  min-height: 128px;
  padding: 7px;
  border-radius: 3px;
}
.vs-list--item {
    border-bottom: none;
    padding: 5px;
    box-shadow: 0px 1px 0px 0px #1f74ff;
    /* max-width: 265px; */
    /* margin: 13px 0; */
    color: #fff;
}

div#prise {
    width: 90%;
    text-align: center;
}

.center-info {
    padding: 0px !important;
    margin: -17px 0 0 0;
}

.center-info img {
    z-index: 1;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    border-radius: 5px;
    width: 100%;
}
.inform {
    background: #090d17;
    box-shadow: 0 2px 4px 1px rgba(0,0,0,0.5);
    margin-top: 22px;
    height: 270px;
    border-radius: 5px;
}
.prod-row img{
  width: 100%
}
.card {
    background-color: #090d17;
    border: 1px solid rgb(1, 65, 128);
}

h4.card-title {
    text-align: center;
    font-size: 18px;
}

article.card.mb-2 {
    min-height: 20rem;
}

img {
    width: 100%;
}

.prod-row .col {
  background: #090d17;
  color: white;
  margin-top: auto;
  margin-bottom: auto;
  min-height: 160px;
  min-width: 300px;
}

.prod-row .col-5 {
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
}

.list-group {
}

.list-group-item {
    padding: 0.75rem 1.25rem;
    margin-bottom: 1px;
    background-color: #090d17;
    border: none;
    border-radius: 0px;
    box-shadow: 0 5px 0px -4px rgb(56, 96, 194);
}
.product-name {
    width: 100%;
    min-height: 600px;
    /* margin-top: 90px; */
}

.card-body {
    flex: 1 1 auto;
    padding: 0;
}

.blure_bg {
  background: transparent;
  width: 100%;
  height: 100%;
  filter: blur(18px);
  position: fixed;
  display: block;
  box-shadow: 0 0 19px 19px black;
  z-index: -1;
}
.item {
  padding-top: 60px;
}
</style>
