'use strict';

import Axios from 'axios'

export default {
  Category: async () => {
    const get = await Axios.get(`${process.env.API_URL}/categories`);
    return get.data;
  },
  Slider: async () => {
    const get = await Axios.get(`${process.env.API_URL}/sliders`);
    return get.data;
  },
  Product: async (start, currentx, paramsName) => { //
    var category = await Axios.get(`${process.env.API_URL}/categories`);
    category = category.data;
    var catID = '';
    for (var i = 0; i < category.length; i++) {
      if (category[i].name.toUpperCase() == paramsName.toUpperCase()) {
        catID = category[i].id;
      }
    }
    var count = await Axios.get(`${process.env.API_URL}/Products/count?category=${catID}`);
    var total = (Number(count.data) / 10).toFixed(0) - 1;
    if (start <= 10) {
      start = 0;
    }

    var products = await Axios.get(`${process.env.API_URL}/Products?_start=${start}&_limit=24&category=${catID}`);
    products = products.data;
    return {
      products,
      total
    }
  },
  ProductSearch: async (start, limit, search) => {
    const {
      data
    } = await Axios.get(`${process.env.API_URL}/Products?_start=${start}&_limit=${limit}&prise_gt=1${search}`);

    return {
      data
    }
  }
}
