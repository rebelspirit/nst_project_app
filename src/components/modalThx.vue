<template>
  <div class="modalThx">
    <modal>
      <modal-header @click.native="closeModal">
        <modal-title class="modal-title-thx">Спасибо!</modal-title>
      </modal-header>
      <modal-body class="modal-body-thx">
        <p>Заявка отправлена!</p>
        <div class="flower"></div>
        <p>В ближайшее время я свяжусь с тобой! ;)</p>
      </modal-body>
      <modal-footer>
        <div class="menu-logo-black"></div>
      </modal-footer>
    </modal>
  </div>
</template>

<script>
  import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Btn } from 'mdbvue';

export default {
  name: 'modalThx',
  components: {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
    Btn
  },
  data () {
    return {
    };
  },
  methods: {
    closeModal: function() {
      this.$emit('close')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal-header, .modal-footer {
    border: none !important;
  }
  .modal-header {
    font-family: OpenSans, sans-serif;
    color: #232323 !important;
    text-align: center;
  }
  .modal-title {
    position: relative;
    font-size: 16px !important;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .modal-title:before {
    content: " ";
    position: absolute;
    right: -17px;
    top: 8px;
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #232323;
    border-radius: 3px;
  }
  .modal-title:after {
    content: " ";
    position: absolute;
    left: -17px;
    top: 8px;
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #232323;
    border-radius: 3px;
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modal-body-thx {
    padding-top: 0;
  }
  input {
    width: 230px;
    height: 30px;
    border: 1px solid #232323;
    border-radius: 50px;
    background-color: #ffffff;
    font-family: OpenSans, sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #7b7c7d;
    padding-left: 15px;
    outline: none;
    margin-bottom: 11px;
  }
  .modal-content {
    border-radius: 10px !important;
    width: 100% !important;
  }
  .dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #000000;
    border-radius: 3px;
    margin: 7px;
  }
  .flower {
    width: 23px;
    height: 14px;
    object-fit: contain;
    background-image: url(../assets/flower.png);
    background-size: cover;
    margin: 10px auto;
  }
</style>
