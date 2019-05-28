<template>
  <div class="cards-outside-container">
    <div class="cards-inner-container">
      <div class="left-col--main-card card-base">
        <img src="https://s3.amazonaws.com/design.assets/gaming.cards/bookmark-ico.svg" alt="" class="card-bookmark-icon">
        <div class="card-content content-lg">
          <div class="card-content--label label-lg label-blue">Shooter</div>
          <h1 class="card-content--title">5 big changes that are coming in Call of Duty: Black Ops 4</h1>
          <small>Activision</small>
        </div>
      </div>
      <div class="left-col--sm-card-one card-base card-left-gradient">
        <img src="https://s3.amazonaws.com/design.assets/gaming.cards/bookmark-ico.svg" alt="" class="card-bookmark-icon icon-sm">
        <div class="card-content content-sm">
          <div class="card-content--label label-sm label-red">Shooter</div>
          <h4 class="card-content--title">Overwatch is getting Looking for Group, other social features</h4>
          <small class="small-sm">Blizzard Entertainment</small>
        </div>
      </div>
      <div class="left-col--sm-card-two card-base card-left-gradient">
        <img src="https://s3.amazonaws.com/design.assets/gaming.cards/bookmark-ico.svg" alt="" class="card-bookmark-icon icon-sm">
        <div class="card-content content-sm">
          <div class="card-content--label label-sm label-red">Shooter</div>
          <h4 class="card-content--title">Rainbow Six Siege: PRO LEAGUE skins on the way</h4>
          <small class="small-sm"> Ubisoft Montreal</small>
        </div>
      </div>
      <div class="right-col--side-card-one card-base card-left-gradient">
        <img src="https://s3.amazonaws.com/design.assets/gaming.cards/bookmark-ico.svg" alt="" class="card-bookmark-icon">
        <div class="card-content content-sm">
          <div class="card-content--label label-md label-yellow">Fighter</div>
          <h2 class="card-content--title">Rainbow Six Siege: PRO LEAGUE skins on the way</h2>
          <small> Ubisoft Montreal</small>
        </div>
      </div>
      <div class="right-col--side-card-two card-base card-left-gradient">
        <img src="https://s3.amazonaws.com/design.assets/gaming.cards/bookmark-ico.svg" alt="" class="card-bookmark-icon">
        <div class="card-content content-sm">
          <div class="card-content--label label-md label-yellow">Action Adventure</div>
          <h2 class="card-content--title">Rainbow Six Siege: PRO LEAGUE skins on the way</h2>
          <small> Ubisoft Montreal</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700");
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html, body {
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
}

body {
  background-image: url("https://s3.amazonaws.com/design.assets/gaming.cards/gaming-blur-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: steelblue;
  min-height: 100%;
  position: relative;
}
body::before {
  content: '';
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

a {
  text-decoration: none;
  color: inherit;
}

.card-left-gradient::before, .left-col--main-card::before {
  content: '';
  bottom: 0;
  border-radius: 8px;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}

.left-col--main-card, .left-col--sm-card-one, .left-col--sm-card-two, .right-col--side-card-one, .right-col--side-card-two {
  background-size: cover;
  background-repeat: no-repeat;
}

.card-base {
  background-color: #ccc;
  border-radius: 8px;
  box-shadow: 0 0 16px 11px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
}
.card-base:hover .card-content {
  -webkit-transform: translateX(10px);
          transform: translateX(10px);
}

.card-bookmark-icon {
  position: absolute;
  right: 30px;
  top: 30px;
}
.card-bookmark-icon.icon-sm {
  width: 18px;
  height: 18px;
}

.card-left-gradient::before {
  background: linear-gradient(270deg, rgba(1, 1, 1, 0) 0%, rgba(51, 51, 102, 0.8) 100%);
}

.cards-outside-container {
  padding: 60px;
  max-width: 1440px;
  margin: 0 auto;
}

.cards-inner-container {
  display: grid;
  grid-template-columns: 360px 360px 480px;
  grid-template-rows: 425px 155px 270px;
  grid-gap: 10px;
}

.left-col--main-card {
  background-image: url("https://s3.amazonaws.com/design.assets/gaming.cards/main-card-bg.png");
  grid-area: main;
  grid-column: 1/3;
  grid-row: 1/3;
}
.left-col--main-card::before {
  background: linear-gradient(180deg, rgba(1, 1, 1, 0) 0%, rgba(79, 80, 157, 0.4) 100%);
}

.left-col--sm-card-one {
  background-image: url("https://s3.amazonaws.com/design.assets/gaming.cards/sm-card-one-bg.png");
  grid-area: smone;
  grid-column: 1;
  grid-row: 3;
}

.left-col--sm-card-two {
  background-image: url("https://s3.amazonaws.com/design.assets/gaming.cards/sm-card-two-bg.png");
  grid-area: smtwo;
  grid-column: 2;
  grid-row: 3;
}

.right-col--side-card-one {
  background-image: url("https://s3.amazonaws.com/design.assets/gaming.cards/side-card-one-bg.png");
  grid-area: sideone;
  grid-column: 3;
  grid-row: 1/2;
}

.right-col--side-card-two {
  background-image: url("https://s3.amazonaws.com/design.assets/gaming.cards/side-card-two-bg.png");
  grid-area: sidetwo;
  grid-column: 3;
  grid-row: 2/4;
}

.label-lg {
  font-size: 14px;
  padding: 10px 30px;
}

.label-md {
  font-size: 13px;
  padding: 10px 26px;
}

.label-sm {
  font-size: 11px;
  padding: 8px 26px;
}

.label-blue {
  background-color: #4f509d;
  color: white;
}

.label-red {
  background-color: #ff5f5f;ru
  color: white;
}

.label-yellow {
  background-color: #f9e75e;
  color: #262626;
}

.card-content--label {
  font-weight: 700;
  border-radius: 50px;
  display: inline-block;
  text-transform: uppercase;
}

.card-content {
  color: white;
  width: 100%;
  position: absolute;
  bottom: 40px;
  left: 0;
  transition: -webkit-transform 300ms ease-in;
  transition: transform 300ms ease-in;
  transition: transform 300ms ease-in, -webkit-transform 300ms ease-in;
  will-change: transform;
}
.card-content.content-lg {
  padding: 0 100px 0 50px;
}
.card-content.content-sm {
  padding: 0 35px 0 25px;
}
.card-content .card-content--title {
  margin: 14px 0;
}
.card-content small {
  font-size: 16px;
  font-weight: 300;
}
.card-content small.small-sm {
  font-size: 12px;
}

</style>
