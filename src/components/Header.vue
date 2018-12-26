<template>
  <header>
    <div class="header-container">
      <Menu @open="openModalListener"/>
    </div>
    <div class="header-bcg"></div>
    <div class="header-mob-feedback">
      <btn color="ffffff" class="menu-button" @click.native="openModalListener">оставить запрос</btn>
      <div class="flower"></div>
    </div>
    <div class="triangle">
      <div class="lines"></div>
    </div>
  </header>
</template>

<script>
  import Menu from '@/components/Menu';
  import {Btn} from 'mdbvue';

  export default {
    name: 'Header',
    components: {
      Menu, Btn,
    },
    data() {
      return {
      };
    },
    methods: {
      openModalListener : function () {
        this.$emit('open');
      },
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    overflow: hidden;
    position: relative;
    min-height: 1075px;
  }
  .header-container {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }
  .header-bcg {
    position: relative;
    display: block;
    width: 100%;
    min-height: 1100px;
    z-index: -3;
    top: -4rem;
    background: url(../assets/background.png) no-repeat center/cover;
  }
  .header-mob-feedback {
    display: none;
  }
  .triangle {
    position: absolute;
    display: block;
    height: 300px;
    width: 200%;
    background: #fff;
    bottom: 0;
    right: 0;
    transform: rotate(5deg);
    z-index: 0;
  }
  .lines {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .lines:before {
    position: absolute;
    top: 65px;
    transform: translateX(75%);
    display: block;
    width: 111%;
    height: 5px;
    background: #ff8447;

    content: '';
  }
  .lines:after {
    position: absolute;
    top: 25px;
    display: block;
    width: 100%;
    height: 15px;
    background: #323232;

    content: '';
  }
  .menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Oswald;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-transform: uppercase;
    color: #000000;
    width: 280px;
    height: 60px;
    background-color: #fff;
    border-radius: 50px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
  }
  .menu-button:hover {
    background-color: #f68d59 !important;
  }
  .menu-button:active {
    background-color: #ff8447 !important;
  }
  .flower {
    width: 23px;
    height: 14px;
    object-fit: contain;
    background-image: url(../assets/flower.png);
    background-size: cover;
    margin: 10px auto;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    header {
      min-height: 665px;
    }
    .header-bcg {
      width: 100%;
      height: 665px;
      min-height: 600px;
      background-size: cover;
      background-position: center;

    }
    .header-mob-feedback {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      bottom: 5rem;
      width: 100%;
      padding-top: 40px;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 0;
    }
    .header-container {
      z-index: 1;
    }
    .triangle {
      right: -15px;
      height: 65px;
      bottom: 50px;
    }
    .lines:after {
      display: none;
    }
    .lines:before {
      top: 20px;
      height: 10px;
      transform: translateX(40%);
    }
  }
  @media (min-width: 425px) and (max-width: 728px) {
    header {
      min-height: 670px;
    }
    .header-bcg {
      width: 100%;
      height: 670px;
      min-height: 600px;
      background-size: cover;
      background-position: center;
    }
    .header-mob-feedback {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      bottom: 4rem;
      width: 100%;
      padding-top: 40px;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 0;
    }
    .header-container {
      z-index: 1;
    }
    .triangle {
      right: -15px;
      height: 65px;
      bottom: 63px;
    }
    .lines:after {
      display: none;
    }
    .lines:before {
      top: 20px;
      height: 10px;
      transform: translateX(40%);
    }
    .flower {
      margin-bottom: 60px;
    }
  }
  @media (min-width: 728px) and (max-width: 1025px) {
    header {
      min-height: 950px;
    }
    .header-bcg {
      width: 100%;
      height: 950px;
      min-height: 950px;
      background-size: cover;
      background-position: center;

    }
    .header-mob-feedback {
      display: none;
    }
    .header-container {
      z-index: 1;
    }
    .triangle {
      right: -15px;
      height: 95px;
      bottom: 63px;
    }
    .lines:after {
      display: none;
    }
    .lines:before {
      top: 20px;
      height: 10px;
      transform: translateX(40%);
    }
    .flower {
      margin-bottom: 100px;
    }
  }
</style>
