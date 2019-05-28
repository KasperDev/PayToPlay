<template>
  <div id="search">
    <b-row class="text-center">
      <b-col>
      <b-input-group prepend="По цене">
        <b-form-select v-model="selected" :options="options" />
      </b-input-group>
    </b-col>
    <b-col cols="5">
      <b-input-group class="search-gr">
      <b-form-group
            id="fieldset1"
            label-for="input1"
            :state="state"
        >
      <b-form-input id="input1" placeholder="Поиск" list="searchlist" :state="state" v-model.trim="SearchValue"></b-form-input>
      </b-form-group>
      <datalist id="searchlist">
        <option v-for="item in searchlist">{{item}}</option>
      </datalist>
        </b-input-group>
      </b-col>
      <b-col>
      <b-input-group prepend="Категория">
        <b-form-select v-model="selectedcat" :options="opcioncat" />
      </b-input-group>
    </b-col>
    </b-row>
  </div>
</template>
<script>
import api from '../plugins/api'

export default {

  data () {
    return {
      state: 'no',
      SearchValue: '',
      searchlist:[],
      selected: null,
      options: [
        { value: null, text: 'не выбрано' },
        { value: 'DESC', text: 'от дорогих к дешевым' },
        { value: 'ASC', text: 'от дешевым к дорогим' }
      ],
      selectedcat: null,
      opcioncat: [
        {
          value: null,
          text: 'Все'
        }
      ]
    }
  },
  methods:{
      sort: function () {
        const convertParams = {
          chena: '',
          category: '',
          SearchString: ''
        };
          if(this.selected != null){
            convertParams.chena = `&_sort=prise:${this.selected}`;
          }else {
            convertParams.chena = `&_sort=reiting:DESC`;
          }
          if(this.selectedcat!= null){
            convertParams.category = `&category=${this.selectedcat}`;
          }

          if (this.SearchValue.length > 3){
             this.state = true;
             convertParams.SearchString = `&title_contains=${this.SearchValue}`;
             this.$emit("StartSearch", `&title_contains=${this.SearchValue}`)
          }

          this.$emit("StartSearch", `${convertParams.chena+convertParams.category+convertParams.SearchString}`);
      }
  },
  watch: {
  async SearchValue(){
    if (this.SearchValue.length > 3){
      const { data } = await api.ProductSearch(0, 20, `&title_contains=${this.SearchValue}`);
      var map = data.map(item => {
        return item.title
      })
      this.searchlist = map;
      console.log("SearchValue: "+ data.length);
      this.sort();

      if(data.length <= 0){
        this.state = false;
      }else {
        this.state = true;
      }
    }else {
      this.state = false;
    }
    },
    selected(){
      this.sort();
    },
    selectedcat(){
      this.sort();
    }
  },
  created: async function() {
    const category = await api.Category();
    category.map(res => {
      this.opcioncat.push({
        value: res._id,
        text: res.name
      });
    })
  }
}
</script>
