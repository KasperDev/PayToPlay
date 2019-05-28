<template>
  <div class="header">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">PAY TO PLAY</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
            <b-nav-item :href="'/category/steam/1'">
              Steam
            </b-nav-item>
            <b-nav-item :href="'/category/steam (gift)/1'">
              Steam Gift
            </b-nav-item>
            <!-- <b-nav-item :href="'/category/Battle.net/1'">
              Battle.net
            </b-nav-item>
            <b-nav-item :href="'/category/Bethesda.net/1'">
              Bethesda.net
            </b-nav-item> -->
            <b-nav-item :href="'/category/Uplay/1'">
             Uplay
            </b-nav-item>
            <b-nav-item :href="'/category/Origin/1'">
             Origin
            </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="RUB" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>


export default {
  data: () => ({
    select1:'fas fa-ruble-sign',
    options1:[
      {text:'RUB', value:'fas fa-ruble-sign',},
      {text:'UAH', value:'fas fa-hryvnia',},
      {text:'USD', value:'fas fa-dollar-sign',},
      {text:'EUR', value:'fas fa-euro-sign',}
    ]
  }),

  created: async function() {

  }
}

</script>
