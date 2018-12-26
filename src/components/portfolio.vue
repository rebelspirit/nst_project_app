<template>
  <div class="portfolio" id="portfolio">
    <div class="portfolio-container">
      <div class="portfolio-container__name">
        <p class="portfolio-container__name--item">Портфолио</p>
        <p class="portfolio-container__name--item"><span>p</span>ortfolio</p>
      </div>
      <div class="portfolio-container__items">
        <v-touch class="item active" v-on:swipeleft="onSwipeLeft()" v-on:swiperight="onSwipeRight()">
          <div class="item__name">suitable <span>shoes</span></div>
          <img src="../assets/img1.png" alt="" class="item__img">
          <div class="item__button">
            <router-link to="/portfolioItem" class="button">читать дальше<i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i></router-link>
          </div>
        </v-touch>
        <v-touch class="item" v-on:swipeleft="onSwipeLeft()" v-on:swiperight="onSwipeRight()">
          <div class="item__name">Stylish <span>bags</span></div>
          <img src="../assets/img1.png" alt="" class="item__img">
          <div class="item__button">
            <router-link to="/portfolioItem" class="button">читать дальше<i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i></router-link>
          </div>
        </v-touch>
        <v-touch class="item" v-on:swipeleft="onSwipeLeft()" v-on:swiperight="onSwipeRight()">
          <div class="item__name">favorite <span>jeans</span></div>
          <img src="../assets/img1.png" alt="" class="item__img">
          <div class="item__button">
            <router-link to="/portfolioItem" class="button">читать дальше<i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i></router-link>
          </div>
        </v-touch>
        <v-touch class="item" v-on:swipeleft="onSwipeLeft()" v-on:swiperight="onSwipeRight()">
          <div class="item__name">suitable <span>shoes</span></div>
          <img src="../assets/img1.png" alt="" class="item__img">
          <div class="item__button">
            <router-link to="/portfolioItem" class="button">читать дальше<i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i></router-link>
          </div>
        </v-touch>
        <v-touch class="item" v-on:swipeleft="onSwipeLeft()" v-on:swiperight="onSwipeRight()">
          <div class="item__name">Stylish <span>bags</span></div>
          <img src="../assets/img1.png" alt="" class="item__img">
          <div class="item__button">
            <router-link to="/portfolioItem" class="button">читать дальше<i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i></router-link>
          </div>
        </v-touch>
        <v-touch class="item" v-on:swipeleft="onSwipeLeft()" v-on:swiperight="onSwipeRight()">
          <div class="item__name">favorite <span>jeans</span></div>
          <img src="../assets/img1.png" alt="" class="item__img">
          <div class="item__button">
            <router-link to="/portfolioItem" class="button">читать дальше<i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i></router-link>
          </div>
        </v-touch>
      </div>

      <div class="navigation">
        <div class="dots  current" v-on:click="currentSlide(1)"></div>
        <div class="dots" v-on:click="currentSlide(2)"></div>
        <div class="dots" v-on:click="currentSlide(3)"></div>
        <div class="dots" v-on:click="currentSlide(4)"></div>
        <div class="dots" v-on:click="currentSlide(5)"></div>
        <div class="dots" v-on:click="currentSlide(6)"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import Menu from '@/components/Menu';

export default {
  name: 'portfolio',
  components: {

  },
  data () {
    return {
      slideIndex: 1
    };
  },
  methods: {
    showSlides: function (n) {
      let i;
      let slides = document.getElementsByClassName("item");
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .portfolio-container {
    width: 100%;
  }
  .portfolio-container__name {
    position: relative;
    width: 470px;
    height: 70px;
    background-color: #ffd7c0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }
  .portfolio-container__name--item {
    position: absolute;
    width: 210px;
  }
  .portfolio-container__name--item:nth-child(1) {
    left: 15%;
    bottom: 40%;
    font-family: OpenSans, sans-serif;
    font-size: 44px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: normal;
    color: #232323;
  }
  .portfolio-container__name--item:nth-child(2) {
    top: 20%;
    left: 32%;
    font-family: Rosa Marena;
    font-size: 60px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #232323;
  }
  .portfolio-container__name--item:nth-child(2) > span {
    color: #ff8447;
  }
  .portfolio-container__items {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 965px;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }
   .item {
    /*display: block;*/
    width: 100%;
    max-width: 300px;
    margin-bottom: 40px;
  }
  .item__name {
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
    filter: grayscale(90%)
  }
  .item__img:hover {
    filter: grayscale(0%)
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
    font-family: Oswald;
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
  @media (min-width: 320px) and (max-width: 425px) {
    .portfolio {
      position: relative;
      top: 0;
    }
    .portfolio-container__name {
      width: 100%;
    }
    .portfolio-container__name--item:nth-child(1) {
      left: 6%;
    }
    .portfolio-container__name--item:nth-child(2) {
      left: 27%;
    }
    .portfolio-container__items {
      justify-content: space-around;
    }
    .item {
      display: none;
      position: relative;
    }
    .item__button {

      right: 0;
    }
    .active {
      display: block;
    }
    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 50px;
      margin: 0 auto;
    }
    .dots {
      width: 5px;
      height: 5px;
      border-radius: 2px;
      background-color: #919191;
    }
    .current {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #232323;
    }
  }
  @media (min-width: 425px) and (max-width: 728px) {
    .portfolio {
      position: relative;
      top: 0;
    }
    .portfolio-container__name {
      width: 100%;
    }
    .portfolio-container__name--item:nth-child(1) {
      left: 6%;
    }
    .portfolio-container__name--item:nth-child(2) {
      left: 27%;
    }
    .portfolio-container__items {
      justify-content: space-around;
    }
    .item {
      display: none;
      position: relative;
    }
    .item__button {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .active {
      display: block;
    }
    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 50px;
      margin: 0 auto;
    }
    .dots {
      width: 5px;
      height: 5px;
      border-radius: 2px;
      background-color: #919191;
    }
    .current {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #232323;
    }
  }
  @media (min-width: 728px) and (max-width: 1025px) {
    .portfolio {
      position: relative;
      top: 13rem;
    }
    .portfolio-container__name {
      width: 470px;
    }
    .portfolio-container__name--item:nth-child(1) {
      left: 10%;
    }
    .portfolio-container__name--item:nth-child(2) {
      left: 40%;
    }
    .portfolio-container__items {
      justify-content: space-around;
    }
    .item {
      display: none;
      position: relative;
    }
    .item__button {
      position: unset;
    }
    .active {
      display: block;
    }
    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 50px;
      margin: 0 auto;
    }
    .dots {
      width: 5px;
      height: 5px;
      border-radius: 2px;
      background-color: #919191;
    }
    .current {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #232323;
    }
  }
</style>
