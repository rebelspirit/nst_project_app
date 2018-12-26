<template>
  <div class="MenuMobile" id="MenuMobile">
    <nav>
      <btn color="2c3e50" @click.native="goToScroll(650, 0)">обо мне</btn>
      <btn color="2c3e50" @click.native="goToScroll(1400, 0)">услуги</btn>
      <btn color="2c3e50" @click.native="goToScroll(6100, 0)">Блог</btn>
      <btn color="2c3e50" @click.native="goToScroll(11500, 0)">Контакты</btn>

      <div class="menu-socialIcon__item">
        <a class="icon-yt" href="https://www.youtube.com/channel/UCboLlZFp14ZYkz4up1Sml4Q" target="_blank"></a>
        <a class="icon-insta" href="https://www.instagram.com/yablonskaya.alyona.stylist/" target="_blank"></a>
      </div>
    </nav>
  </div>
</template>

<script>
  import { Btn } from 'mdbvue';

export default {
  name: 'Main',
  components: {
    Btn,
  },
  data () {
    return {

    };
  },
  methods: {
    goToScroll: function(x, y) {
      // let mobileMenu = document.getElementById("MenuMobile");
      // mobileMenu.style.display = "none";
      this.$router.push('/');
      setTimeout(function () {
        window.scroll({top: x, left: y, behavior: 'smooth'});
      }, 0)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MenuMobile {
  display: none;
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  height: 330px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  min-height: 280px;
  padding: 10px 40px;
}
nav > .btn {
  font-family: Oswald;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  text-transform: uppercase;
  line-height: normal;
  letter-spacing: normal;
  color: #232323;
  cursor: pointer;
  box-shadow: unset !important;
  margin: 0 !important;
  padding: 0 !important;
  background-color: unset !important;
}
nav > .btn:nth-child(1) {
  color: #ff8447;
}
.menu-socialIcon__item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 80px;
  margin-top: 25px;
}
.icon-yt {
  display: block;
  width: 30px;
  height: 30px;
  background-image: url(../assets/youtube-black.svg);
}
.icon-yt:hover {
  background-image: url(../assets/youtube-1.svg);
}
.icon-insta {
  display: block;
  width: 30px;
  height: 30px;
  background-image: url(../assets/insta-black.svg);
}
.icon-insta:hover {
  width: 30px;
  height: 30px;
  background-image: url(../assets/insta-1.svg);
}
.active {
  display: block;
}
@media (min-width: 728px) and (max-width: 1025px) {
  .menu-socialIcon__item {
    display: none;
  }
  nav {
    min-height: 230px;
  }
}  
</style>
