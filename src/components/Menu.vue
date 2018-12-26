<template>
  <div class="menu">
    <MenuMobile/>
    <nav class="menu-container">
      <btn color="2c3e50" @click.native="goToScroll(900, 0)" class="menu-container--item">обо мне</btn>
      <btn color="2c3e50" @click.native="goToScroll(1550, 0)" class="menu-container--item">услуги</btn>
      <btn color="2c3e50" @click.native="goToScroll(5900, 0)" class="menu-container--item">Блог</btn>
      <btn color="2c3e50" @click.native="goToScroll(6200, 0)" class="menu-container--item">Контакты</btn>
    </nav>
    <div class="menu-burger" id="menu-burger" v-on:click="openMobileMenu()"></div>
    <router-link to="/" class="menu-logo"></router-link>
    <div class="menu-socialIcon__item">
      <a class="icon-yt" href="https://www.youtube.com/channel/UCboLlZFp14ZYkz4up1Sml4Q" target="_blank"></a>
      <a class="icon-insta" href="https://www.instagram.com/yablonskaya.alyona.stylist/" target="_blank"></a>
      <btn color="ffffff" @click.native="openModal" class="menu-button">оставить запрос</btn>
    </div>
  </div>
</template>

<script>
  import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Btn } from 'mdbvue';
  import MenuMobile from '@/components/MenuMobile';

export default {
  name: 'Menu',
  components: {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    Btn,
    MenuMobile,
  },
  data () {
    return {
    };
  },
  methods: {
    openModal: function() {
      this.$emit('open');
    },
    goToScroll: function(x, y) {
      this.$router.push('/')
      setTimeout(function () {
        window.scroll({top: x, left: y, behavior: 'smooth'});
      }, 0)
    },
    openMobileMenu: function () {
      let burger = document.getElementById("menu-burger");
      let mobileMenu = document.getElementById("MenuMobile");

      mobileMenu.classList.toggle("active");
      burger.classList.toggle("cross")
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  padding-top: 18px;
  padding-bottom: 18px;
}
.menu-container {
  display: flex;
  justify-content: space-between;
  font-family: Oswald, sans-serif;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-transform: uppercase;
  width: 100%;
  max-width: 210px;
  height: 24px;
}
.menu-container--item {
  color: #ffffff;
  background-color: unset !important;
  box-shadow: unset !important;
  padding: 0 !important;
  padding-bottom: 3px !important;
  margin: 0 !important;
  border-radius: 0 !important;
}
.btn-default, .menu-container--item:active {
  background-color: unset !important;
}
.menu-container--item:hover {
  border-bottom: 1px solid #ffffff;
}
.menu-logo {
  display: block;
  width: 54px;
  height: 54px;
  background-image: url(../assets/logo.png);
  background-size: contain;
  margin: 0 auto;
}
.menu-logo-black {
  width: 87px;
  height: 87px;
  background-image: url(../assets/logo-black.png);
  margin: 0 auto;
}
.menu-socialIcon__item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 240px;

}
.icon-yt {
  display: block;
  width: 30px;
  height: 30px;
  background-image: url(../assets/youtube.svg);
}
.icon-yt:hover {
  background-image: url(../assets/youtube-1.svg);
}
.icon-insta {
  display: block;
  width: 30px;
  height: 30px;
  background-image: url(../assets/insta.svg);
}
.icon-insta:hover {
  width: 30px;
  height: 30px;
  background-image: url(../assets/insta-1.svg);
}
.menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Oswald;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-transform: uppercase;
  color: #000000 !important;
  width: 140px;
  height: 30px;
  border-radius: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
  padding: 0 !important;
  margin: 0 !important;
}
.menu-button:hover {
  background-color: #f68d59 !important;
}
.menu-button:active {
  background-color: #ff8447 !important;
}
.menu-burger {
  display: none;
  width: 28px;
  height: 24px;
  background-image: url(../assets/burger.svg);
}
.cross {
  height: 28px;
  background-image: url(../assets/cross.png);
  background-size: cover;
}
.flower {
  width: 23px;
  height: 14px;
  object-fit: contain;
  background-image: url(../assets/flower.png);
  background-size: cover;
  margin: 5px auto;
}
@media (min-width: 320px) and (max-width: 425px) {
  .menu {
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
  }
  .menu-container {
    display: none;
  }
  .menu-logo {
    margin: 0;
  }
  .menu-socialIcon__item {
    display: none;
  }
  .menu-burger {
    display: block;
  }
}
@media (min-width: 425px) and (max-width: 728px) {
  .menu {
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
  }
  .menu-container {
    display: none;
  }
  .menu-logo {
    margin: 0;
  }
  .menu-socialIcon__item {
    display: none;
  }
  .menu-burger {
    display: block;
  }
}
@media (min-width: 728px) and (max-width: 1025px) {
  .menu {
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
  }
  .menu-container {
    display: none;
  }
  .menu-logo {
    margin: 0;
    order: 2;
  }
  .menu-socialIcon__item {
    display: flex;
    order: 1;
  }
  .menu-burger {
    display: block;
  }
}
</style>
