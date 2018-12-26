<template>
  <modal>
    <modal-header @click.native="closeModal">
      <modal-title>Заказ
        <div class="dot"></div>
        услуги
      </modal-title>
    </modal-header>
    <modal-body>
      <p><input type="checkbox" class="radio" id="radio1"><label for="radio1"></label>Личная консультация <span class="price">500 грн</span></p>
      <p><input type="checkbox" class="radio" id="radio2"><label for="radio2"></label>Индивидуальная карта стиля <span class="price">2500 грн</span></p>
      <p><input type="checkbox" class="radio" id="radio3"><label for="radio3"></label>Ревизия гардероба <span class="price">5000 грн</span></p>
      <p><input type="checkbox" class="radio" id="radio4"><label for="radio4"></label>Персональный шопинг <span class="price">1000 грн</span></p>
      <p><input type="checkbox" class="radio" id="radio5"><label for="radio5"></label>Создание капсулы <span class="price">3000 грн</span></p>
      <p><input type="checkbox" class="radio" id="radio6"><label for="radio6"></label>Подарочный сертификат <span class="price rosa-marena">write me</span></p>
    </modal-body>
    <modal-footer class="pt-0">
      <div class="flower"></div>
      <div class="input_block_name"><input  @keyup="checkName()" type="text" class="name" id="nameService" placeholder="Write your name" required><div class="check_name" id="check_nameService"></div><div class="warning_name" id="warning_nameService"></div></div>
      <div class="input_block_phone"><input @keyup="checkPhone()" type="tel" class="phone" id="phoneService" pattern="^[ 0-9]+$" placeholder="Write your number" required="" minlength="10" maxlength="12"><div class="check_phone" id="check_phoneService"></div><div class="warning_phone" id="warning_phoneService"></div></div>
      <div class="input_block_email"><input @keyup="checkEmail()" type="email" class="email" id="emailService" placeholder="Write your Email" required=""><div class="check_email" id="check_emailService"></div><div class="warning_email" id="warning_emailService"></div></div>
      <btn color="black" class="footer-button" @click.native="checkForm()"">оставить запрос</btn>
    </modal-footer>
  </modal>
</template>

<script>
  import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Btn } from 'mdbvue';

export default {
  name: 'modalService',
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
      let name = document.getElementById("nameService");
      let chekedName = document.getElementById("check_nameService");
      let warningName = document.getElementById("warning_nameService");

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
      let phone = document.getElementById("phoneService");
      let chekedPhone = document.getElementById("check_phoneService");
      let warningPhone = document.getElementById("warning_phoneService");

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
      let email = document.getElementById("emailService");
      let chekedEmail = document.getElementById("check_emailService");
      let warningEmail = document.getElementById("warning_emailService");

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
      let name = document.getElementById("nameService");
      let phone = document.getElementById("phoneService");
      let email = document.getElementById("emailService");
      let warningName = document.getElementById("warning_nameService");
      let warningPhone = document.getElementById("warning_phoneService");
      let warningEmail = document.getElementById("warning_emailService");

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
    display: flex;
    align-items: center;
    font-size: 20px !important;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 !important;
  }

  .modal-body > p {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #f9f9f9;
    padding: 10px 70px;
    text-align: left;
  }

  .price {
    display: block;
    margin-left: auto;
  }
  .modal-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name, .phone, .email  {
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
    z-index: 2;
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
  .rosa-marena {
    font-family: "Rosa Marena";
    font-size: 23px;
  }
  .radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin: 10px 0 0 7px;
  }
  .radio + label {
    position: relative;
    padding: 0 0 0 35px;
    cursor: pointer;
  }
  .radio + label:before {
    content: '';
    position: absolute;
    top: -3px;
    left: 0;
    width: 15px;
    height: 15px;
    border: 1px solid #232323;
    border-radius: 50%;
    background: #FFF;
  }
  .radio + label:after {
    content: '';
    position: absolute;
    top: 0;
    left: 3px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #232323;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.5);
    opacity: 0;
    transition: .2s;
  }
  .radio:checked + label:after {
    opacity: 1;
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
    right: 0;
    display: none;
    width: 14px;
    height: 14px;
    background-image: url(../assets/check.svg);
  }
  .check_phone {
    position: absolute;
    top: -4px;
    right: 0;
    display: none;
    width: 14px;
    height: 14px;
    background-image: url(../assets/check.svg);
  }
  .check_email {
    position: absolute;
    top: -4px;
    right: 0;
    display: none;
    width: 14px;
    height: 14px;
    background-image: url(../assets/check.svg);
  }
  .warning_name {
    position: absolute;
    top: -4px;
    right: 0;
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
    right: 0;
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
    right: 0;
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
  @media (min-width: 320px) and (max-width: 425px) {
    .modal-body > p {
      padding: 10px 20px;
    }
  }
  @media (min-width: 425px) and (max-width: 728px) {
    .modal-body > p {
      padding: 10px 35px;
    }
  }
  @media (min-width: 728px) and (max-width: 1025px) {
    .modal-body > p {
      padding: 10px 45px;
    }
  }
</style>
