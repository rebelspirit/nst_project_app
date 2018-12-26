<template>
  <div class="portfolioItem">
    <div class="menu-container">
      <Menu @open="topOpenModal"/>
    </div>
    <div class="portfolioItem-container">
      <div class="portfolioItem-container__content">
        <img src="../assets/img7.png" alt="img" class="portfolioItem-container__content--image">
        <h2 class="portfolioItem-container__content--name">suitable shoes</h2>
        <p class="portfolioItem-container__content--text">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
          По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
          <br>
          <br>
          По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
          <br>
          <br>
          По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
          <br>
          <br>
          По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых.
        </p>
        <div class="portfolioItem-container__content__slider">
          <v-touch class="swipe-container active" v-on:swipeleft="onSwipeLeft()" v-on:swiperight="onSwipeRight()">
            <img src="../assets/img8.png" alt="img" class="portfolioItem-container__content__slider--item w-100 h-100">
          </v-touch>
          <v-touch class="swipe-container" v-on:swipeleft="onSwipeLeft()" v-on:swiperight="onSwipeRight()">
            <img src="../assets/image-7.png" alt="img" class="portfolioItem-container__content__slider--item w-100 h-100">
          </v-touch>
          <v-touch class="swipe-container" v-on:swipeleft="onSwipeLeft()" v-on:swiperight="onSwipeRight()">
            <img src="../assets/img8.png" alt="img" class="portfolioItem-container__content__slider--item  w-100 h-100">
          </v-touch>
          <v-touch class="swipe-container" v-on:swipeleft="onSwipeLeft()" v-on:swiperight="onSwipeRight()">
            <img src="../assets/image-7.png" alt="img" class="portfolioItem-container__content__slider--item  w-100 h-100">
          </v-touch>

          <div class="navigation">
            <div class="dots current" v-on:click="currentSlide(1)"></div>
            <div class="dots" v-on:click="currentSlide(2)"></div>
            <div class="dots" v-on:click="currentSlide(3)"></div>
            <div class="dots" v-on:click="currentSlide(4)"></div>
          </div>
        </div>
      </div>
      <div class="portfolioItem-container__suggestion">
        <div class="portfolioItem-container__suggestion--item">
          <div class="item__name">favorite <span>jeans</span></div>
          <img src="../assets/img11.png" alt="" class="item__img">
          <div class="item__button">
            <router-link to="/portfolioItem" class="button">читать дальше<i class="fa fa-long-arrow-right ml-3" aria-hidden="true"></i></router-link>
          </div>
        </div>
        <div class="portfolioItem-container__suggestion--item">
          <div class="item__name"><div class="insta"></div><span>insga</span>gram</div>
          <img src="../assets/img12.png" alt="" class="item__img">
          <div class="item__button">
            <a href="https://www.instagram.com/yablonskaya.alyona.stylist/" target="_blank" class="button">перейти на страницу<i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i></a>
          </div>
        </div>
        <div class="portfolioItem-container__socialNetwork">
          <p>Следить</p>
          <div class="portfolioItem-container__socialNetwork--links">
            <a href="https://www.facebook.com/alyona.jablonskaja" target="_blank" class="facebook"></a>
            <a href="https://www.instagram.com/yablonskaya.alyona.stylist/" target="_blank" class="instagram"></a>
          </div>
        </div>
        <div class="portfolioItem-container__suggestion--item">
          <div class="item__name">Stylish <span>bags</span></div>
          <img src="../assets/img13.png" alt="" class="item__img">
          <div class="item__button">
            <router-link to="/portfolioItem" class="button">читать дальше<i class="fa fa-long-arrow-right ml-3" aria-hidden="true"></i></router-link>
          </div>
        </div>
        <div class="portfolioItem-container__suggestion--item">
          <div class="item__name">Stylish <span>bags</span></div>
          <img src="../assets/img14.png" alt="" class="item__img">
          <div class="item__button">
            <router-link to="/portfolioItem" class="button">читать дальше<i class="fa fa-long-arrow-right ml-3" aria-hidden="true"></i></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="background-second"></div>
    <Footer/>
    <modalFeedback v-if="modalFeedback" @close="modalFeedback = false" centered @open="feedbackHeader()"/>
    <modalThx v-if="modalThx" @close="modalThx = false"/>
</div>
</template>

<script>
  import Menu from '@/components/Menu';
  import Footer from '@/components/Footer';
  import modalFeedback from '@/components/modalFeedback';
  import modalThx from '@/components/modalThx';

export default {
  name: 'portfolioItem',
  components: {
    Menu, Footer, modalFeedback, modalThx
  },
  data () {
    return {
      modalFeedback: false,
      modalThx: false,
      slideIndex: 1
    };
  },
  methods: {
    feedbackHeader: function () {
      this.modalFeedback = false;
      this.modalThx = true;
    },
    topOpenModal: function () {
      this.modalFeedback = true;
    },
    showSlides: function (n) {
      let i;
      let slides = document.getElementsByClassName("swipe-container");
      let dots = document.getElementsByClassName("dots");

      if(n > slides.length) {
        this.slideIndex = 1
      }
      if(n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
      }
      for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("current", "")
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " current";
    },
    currentSlide: function (n) {
      this.showSlides(this.slideIndex = n)
    },
    pushSlides: function (n) {
      this.showSlides(this.slideIndex += n)
    },
    onSwipeLeft: function () {
      console.log("left");
      this.pushSlides(1)
    },
    onSwipeRight: function () {
      console.log("right")
      this.pushSlides(-1)
    }
  },
  mounted() {
    this.showSlides(this.slideIndex);
    window.scroll({top: 0, left: 0});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu-container {
    width: 100%;
    background-color: #232323;
    z-index: 1;
    margin-bottom: 40px;
  }
  .portfolioItem-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
  }
  .portfolioItem-container__content {
    width: 100%;
    max-width: 610px;
  }
  .portfolioItem-container__content--image {
    width: 606px;
    height: 440px;
    display: block;
    margin-bottom: 30px;
  }
  .portfolioItem-container__content--name {
    font-family: "OpenSans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: normal;
    color: #232323;
    margin-bottom: 30px;
  }
  .portfolioItem-container__content--text {
    font-family: OpenSans, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    text-align: justify;
    line-height: normal;
    letter-spacing: normal;
    color: #232323;
    margin-bottom: 40px;
  }
  .portfolioItem-container__content__slider {
    position: relative;
  }
  .portfolioItem-container__content__slider--item {
    display: block;
    margin-bottom: 110px;
    max-height: 440px;
    height: 440px;
  }
  .active {
    display: block;
  }
  .navigation {
    position: absolute;
    bottom: -30px;
    left: 46%;
    display: flex;
    width: 100%;
    max-width: 60px;
    justify-content: space-between;
  }
  .dots {
    width: 7px;
    height: 7px;
    background-color: #9f9f9f;
    border-radius: 3px;
  }
  .current {
    background-color: #ff8447;
  }
  .portfolioItem-container__suggestion {
    width: 100%;
    max-width: 300px;
  }
  .portfolioItem-container__suggestion--item {
    width: 100%;
    max-width: 300px;
    margin-bottom: 40px;
  }
  .item__name {
    position: relative;
    font-family: OpenSans, sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    background: #232323;
    padding: 12px 0;
  }
  .item__name > span {
    color: #ff8447;
  }
  .item__img {
    max-width: 300px;
    max-height: 240px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    background: #232323;
    box-shadow: 0 4px 15px 0 #9f9f9f;
    text-transform: uppercase;
    font-family: Oswald, sans-serif;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    margin-left: auto;
    margin-top: 10px;
  }
  .button:hover {
    background-color: #f68d59 !important;
  }
  .button:active {
    background-color: #ff8447 !important;
  }
  .portfolioItem-container__socialNetwork {
    width: 100%;
    max-width: 300px;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .portfolioItem-container__socialNetwork > p {
    font-family: Oswald;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    text-align: left;
    line-height: normal;
    letter-spacing: normal;
    color: #232323;
    margin-bottom: 5px;
  }
  .portfolioItem-container__socialNetwork--links {
    display: flex;
    justify-content: space-around;
    border: 1px solid #232323;
    padding: 17px 0;
  }
  .facebook {
    display: block;
    width: 97px;
    height: 30px;
    background-image: url(../assets/group-3.png);
    background-size: contain;
  }
  .facebook:before {
    content: "facebook";
    text-transform: uppercase;
    color: #ff8447;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    margin-right: 50px;
    font-size: 12px;
  }
  .instagram {
    display: block;
    width: 102px;
    height: 30px;
    background-image: url(../assets/group-4.png);
    background-size: contain;
  }
  .instagram:before {
    content: "instagram";
    text-transform: uppercase;
    color: #ff8447;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    margin-right: 50px;
    font-size: 12px;
  }
  .background-second {
    z-index: -1;
    position: relative;
    top: 50%;
    left: -50%;
    width: 125%;
    height: 351px;
    background-color: #f7f7f7;
    transform: rotate(33deg) translate(-10%, -240px);
  }
  .background-second:before {
    position: absolute;
    top: calc(100% + 150px);
    display: block;
    width: 100%;
    height: 10px;
    background: #ff8447;

    content: '';
  }
  .background-second:after {
    position: absolute;
    top: calc(100% + 40px);
    display: block;
    width: 100%;
    height: 25px;
    background: #323232;

    content: '';
  }
  .insta {
    position: absolute;
    top: 8px;
    left: 20px;
    height: 26px;
    width: 26px;
    background-image: url(../assets/inst.svg);
  }

  @media (min-width: 320px) and (max-width: 425px) {
    .portfolioItem {
      height: 1500px;
    }
    .menu-container {
      margin-bottom: 0;
    }
    .background-second {
      display: none;
    }
    .portfolioItem-container {
      flex-direction: column;
    }
    .portfolioItem-container__content--image, .portfolioItem-container__content__slider--item {
      width: 100%;
      height: auto;
      background-size: cover;
      background-position-x: center;
    }
    .portfolioItem-container__content--text {
      padding-right: 15px;
      padding-left: 15px;
    }
    .portfolioItem-container__suggestion {
      max-width: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    footer {
      top: 0 !important;
    }
    .swipe-container {
      height: 290px;
    }
    .portfolioItem-container__content {
      margin-bottom: 100px;
    }
  }
  @media (min-width: 425px) and (max-width: 728px) {
    .portfolioItem {
      height: 1500px;
    }
    .menu-container {
      margin-bottom: 0;
    }
    .background-second {
      display: none;
    }
    .portfolioItem-container {
      flex-direction: column;
      align-items: center;
    }
    .portfolioItem-container__content--image, .portfolioItem-container__content__slider--item {
      width: 100%;
      height: auto;
      background-size: cover;
      background-position-x: center;
    }
    .portfolioItem-container__content--text {
      padding-right: 15px;
      padding-left: 15px;
    }
    .portfolioItem-container__suggestion {
      max-width: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    footer {
      top: 0 !important;
    }
    .swipe-container {
      height: 290px;
    }
    .portfolioItem-container__content {
      margin-bottom: 100px;
    }
  }
  @media (min-width: 728px) and (max-width: 1025px) {
    .portfolioItem {
      height: 1500px;
    }
    .menu-container {
      margin-bottom: 0;
    }
    .background-second {
      display: none;
    }
    .portfolioItem-container {
      flex-direction: column;
      align-items: center;
    }
    .portfolioItem-container__content--image, .portfolioItem-container__content__slider--item {
      width: 100%;
      height: auto;
      background-size: cover;
      background-position-x: center;
    }
    .portfolioItem-container__content--text {
      padding-right: 15px;
      padding-left: 15px;
    }
    .portfolioItem-container__suggestion {
      max-width: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    footer {
      top: 0 !important;
    }
  }
</style>
