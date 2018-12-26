<template>
  <div class="modalFeedback">
    <modal>
      <modal-header @click.native="closeModal">
        <modal-title>Оставь заявку и я свяжусь с тобой!</modal-title>
      </modal-header>
      <div class="flower"></div>
      <modal-body>
        <div class="input_block_name"><input  @keyup="checkName()" type="text" class="name" id="nameFeedback" placeholder="Write your name" required><div class="check_name" id="check_nameFeedback"></div><div class="warning_name" id="warning_nameFeedback"></div></div>
        <div class="input_block_phone"><input @keyup="checkPhone()" type="tel" class="phone" id="phoneFeedback" pattern="^[ 0-9]+$" placeholder="Write your number" required="" minlength="10" maxlength="12"><div class="check_phone" id="check_phoneFeedback"></div><div class="warning_phone" id="warning_phoneFeedback"></div></div>
        <div class="input_block_email"><input @keyup="checkEmail()" type="email" class="email" id="emailFeedback" placeholder="Write your Email" required=""><div class="check_email" id="check_emailFeedback"></div><div class="warning_email" id="warning_emailFeedback"></div></div>
      </modal-body>
      <modal-footer>
        <btn color="black" class="footer-button" @click.native="checkForm()">оставить запрос</btn>
        <div class="flower"></div>
      </modal-footer>
    </modal>
  </div>
</template>

<script>
  import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Btn } from 'mdbvue';

export default {
  name: 'modalFeedback',
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
      name: null,
      tel: null,
      email: null
    };
  },
  methods: {
    closeModal: function() {
      this.$emit('close')
    },
    feedbackClick: function() {
        this.$emit('open')
    },
    checkName: function () {
      let name = document.getElementById("nameFeedback");
      let chekedName = document.getElementById("check_nameFeedback");
      let warningName = document.getElementById("warning_nameFeedback");

      warningName.style.display = "none";
      name.style.borderColor = "#232323";

      if(name.checkValidity()) {
        chekedName.style.display = "block";
        this.name = true
      } else {
        warningName.style.display = "block";
        name.style.borderColor = "#ea5a5a";
      }
    },
    checkPhone: function () {
      let phone = document.getElementById("phoneFeedback");
      let chekedPhone = document.getElementById("check_phoneFeedback");
      let warningPhone = document.getElementById("warning_phoneFeedback");

      warningPhone.style.display = "none";
      phone.style.borderColor = "#232323";

      if(phone.checkValidity()) {
        chekedPhone.style.display = "block";
        this.phone = true
      } else {
        warningPhone.style.display = "block";
        phone.style.borderColor = "#ea5a5a";
      }
    },
    checkEmail: function () {
      let email = document.getElementById("emailFeedback");
      let chekedEmail = document.getElementById("check_emailFeedback");
      let warningEmail = document.getElementById("warning_emailFeedback");

      warningEmail.style.display = "none";
      email.style.borderColor = "#232323";

      if(email.checkValidity()) {
        chekedEmail.style.display = "block"
        this.email = true
      } else {
        warningEmail.style.display = "block";
        email.style.borderColor = "#ea5a5a";
      }
    },
    checkForm: function () {
      let name = document.getElementById("nameFeedback");
      let phone = document.getElementById("phoneFeedback");
      let email = document.getElementById("emailFeedback");
      let warningName = document.getElementById("warning_nameFeedback");
      let warningPhone = document.getElementById("warning_phoneFeedback");
      let warningEmail = document.getElementById("warning_emailFeedback");

      if(this.name && this.phone && this.email) {
        this.feedbackClick();
      } else {
        warningName.style.display = "block";
        name.style.borderColor = "#ea5a5a";
        warningPhone.style.display = "block";
        phone.style.borderColor = "#ea5a5a";
        warningEmail.style.display = "block";
        email.style.borderColor = "#ea5a5a";
      }
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
    padding-right: 15px;
    outline: none;
    margin-bottom: 11px;
  }
  .modal-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-button {
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
    color: #000000;
    width: 140px;
    height: 30px;
    border-radius: 50px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
    margin: 10px auto !important;
    padding: 0 !important;
    padding-bottom: 3px !important;
  }
  .footer-button:hover {
    background-color: #f68d59 !important;
  }
  .footer-button:active {
    background-color: #ff8447 !important;
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
  .input_block_name {
    position: relative;
  }
  .input_block_phone {
    position: relative;
  }
  .input_block_email {
    position: relative;
  }
  .check_name {
    position: absolute;
    top: -4px;
    right: 1px;
    display: none;
    width: 14px;
    height: 14px;
    background-image: url(../assets/check.svg);
  }
  .check_phone {
    position: absolute;
    top: -4px;
    right: 1px;
    display: none;
    width: 14px;
    height: 14px;
    background-image: url(../assets/check.svg);
  }
  .check_email {
    position: absolute;
    top: -4px;
    right: 1px;
    display: none;
    width: 14px;
    height: 14px;
    background-image: url(../assets/check.svg);
  }
  .warning_name {
    position: absolute;
    top: -4px;
    right: 1px;
    display: none;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 7px;
    background-image: url(../assets/warning.svg);
  }
  .warning_phone {
    position: absolute;
    top: -4px;
    right: 1px;
    display: none;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 7px;
    background-image: url(../assets/warning.svg);
  }
  .warning_email {
    position: absolute;
    top: -4px;
    right: 1px;
    display: none;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 7px;
    background-image: url(../assets/warning.svg);
  }
  input:focus {
    border-color: #ff8447;
  }
  input:valid:not(:placeholder-shown) {
    border-color: #323232;
  }
  input:invalid:not(:placeholder-shown) {
    border-color: #ea5a5a;
  }
</style>
