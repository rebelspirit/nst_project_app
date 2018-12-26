<template>
  <div class="wrapper">
    <Header @open="topOpenModal"/>
    <service @open="handleOpenModal"/>
    <portfolio/>
    <Footer/>
    <modalService v-if="modalService" @close="modalService = false" centered @open="feedbackService()"/>
    <modalFeedback v-if="modalFeedback" @close="modalFeedback = false" centered @open="feedbackHeader()"/>
    <modalThx v-if="modalThx" @close="modalThx = false"/>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import service from '@/components/service';
  import portfolio from '@/components/portfolio';
  import Footer from '@/components/Footer';
  import modalService from '@/components/modalService';
  import modalFeedback from '@/components/modalFeedback';
  import modalThx from '@/components/modalThx';
  import portfolioItem from '@/components/portfolioItem';

  export default {
    name: 'Main',
    components: {
      Header, service, portfolio, Footer, modalService, modalFeedback, modalThx, portfolioItem
    },
    data() {
      return {
        modalService: false,
        modalFeedback: false,
        modalThx: false
      };
    },
    methods: {
      handleOpenModal: function() {
        this.modalService = true;
      },
      feedbackService: function () {
        this.modalService = false;
        this.modalThx = true;
      },
      feedbackHeader: function () {
        this.modalFeedback = false;
        this.modalThx = true;
      },
      topOpenModal: function () {
        this.modalFeedback = true;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @font-face {
    font-family: "Oswald";
    src: url("../fonts/Oswald-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Oswald - Bold";
    src: url("../fonts/Oswald-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Oswald - Medium";
    src: url("../fonts/Oswald-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: "Oswald - Light";
    src: url("../fonts/Oswald-Light.ttf") format("truetype");
  }

  @font-face {
    font-family: "Rosa Marena";
    src: url("../fonts/RosaMarena.ttf") format("truetype");
  }

  .wrapper {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    z-index: 0;
  }
</style>
