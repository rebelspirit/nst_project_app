<template>
  <footer id="footer">
    <div class="footer-container">
      <div class="active" id="active">
         <h6>Оставь заявку и я свяжусь с тобой!</h6>
         <div class="flower"></div>
          <div class="input_block_name"><input  @keyup="checkName()" type="text" class="name" id="name" placeholder="Write your name" required><div class="check_name" id="check_name"></div><div class="warning_name" id="warning_name"></div></div>
          <div class="input_block_phone"><input @keyup="checkPhone()" type="tel" class="phone" id="phone" pattern="^[ 0-9]+$" placeholder="Write your number" required="" minlength="10" maxlength="12"><div class="check_phone" id="check_phone"></div><div class="warning_phone" id="warning_phone"></div></div>
          <div class="input_block_email"><input @keyup="checkEmail()" type="email" class="email" id="email" placeholder="Write your Email" required=""><div class="check_email" id="check_email"></div><div class="warning_email" id="warning_email"></div></div>
          <a class="footer-button" v-on:click="checkForm()">оставить запрос</a>
          <div class="flower"></div>
          <h6>Или напиши мне лично</h6>
      </div>
      <div class="active-feedback" id="active-feedback">
        <h6>Спасибо!</h6>
        <p>Заявка отправлена!</p>
        <div class="flower"></div>
        <p>В ближайшее время я свяжусь с тобой! ;)</p>
        <div class="footer-logo"></div>
        <h6>Или напиши мне лично</h6>
      </div>
      <div class="footer-socialIcon__item">
        <a class="icon-yt" href="https://www.youtube.com/channel/UCboLlZFp14ZYkz4up1Sml4Q" target="_blank"></a>
        <a class="icon-insta" href="https://www.instagram.com/yablonskaya.alyona.stylist/" target="_blank"></a>
      </div>
      <p>yablonskaya.stylist@gmail.com</p>
    </div>
  </footer>
</template>

<script>
// import Menu from '@/components/Menu';

export default {
  name: 'Footer',
  components: {
    // Menu
  },
  data () {
    return {
      name: null,
      tel: null,
      email: null
    };
  },
  methods: {
    checkName: function () {
      let name = document.getElementById("name");
      let chekedName = document.getElementById("check_name");
      let warningName = document.getElementById("warning_name");

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
      let phone = document.getElementById("phone");
      let chekedPhone = document.getElementById("check_phone");
      let warningPhone = document.getElementById("warning_phone");

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
      let email = document.getElementById("email");
      let chekedEmail = document.getElementById("check_email");
      let warningEmail = document.getElementById("warning_email");

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
      let footerContainer = document.getElementById("active");
      let footerFeedbackContainer= document.getElementById("active-feedback");
      let name = document.getElementById("name");
      let phone = document.getElementById("phone");
      let email = document.getElementById("email");
      let warningName = document.getElementById("warning_name");
      let warningPhone = document.getElementById("warning_phone");
      let warningEmail = document.getElementById("warning_email");

      if(this.name && this.phone && this.email) {
        console.log('good');
        footerContainer.style.display = "none";
        footerFeedbackContainer.classList.add("active-feedback-display")
      } else {
        warningName.style.display = "block";
        name.style.borderColor = "#ea5a5a";
        warningPhone.style.display = "block";
        phone.style.borderColor = "#ea5a5a";
        warningEmail.style.display = "block";
        email.style.borderColor = "#ea5a5a";
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #232323;
    padding-top: 40px;
    z-index: 0;
  }
  .active {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .active-feedback {
    display: none;
    flex-direction: column;
    align-items: center;
  }
  .active-feedback > p {
    font-size: 16px;
    margin-bottom: 0;
  }
  .footer-logo {
    width: 87px;
    height: 87px;
    background-image: url(../assets/logo-white.svg);
    margin: 40px 0;
  }
  h6 {
    font-family: OpenSans, sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    margin: 0;
  }
  h6:before {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #ffffff;
    margin: 3px 7px;
    border-radius: 3px;
    content: "";
  }
  h6:after {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #ffffff;
    margin: 3px 7px;
    border-radius: 3px;
    content: "";
  }
  .flower {
    width: 23px;
    height: 14px;
    object-fit: contain;
    background-image: url(../assets/flower.png);
    margin: 10px auto;
    background-size: cover;
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
    background-color: #fff;
    border-radius: 50px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .footer-button:hover {
    background-color: #f68d59 !important;
  }
  .footer-button:active {
    background-color: #ff8447 !important;
  }
  .footer-socialIcon__item {
    display: flex;
    width: 100%;
    max-width: 80px;
    justify-content: space-between;
    margin: 20px 0;
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
  p {
    font-family: PTSans, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    margin-bottom: 30px;
  }
  .active-feedback-display {
    display: flex;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    footer {
      position: relative;
      top: 3rem;
    }
  }
  @media (min-width: 425px) and (max-width: 728px) {
    footer {
      position: relative;
      top: 3rem;
    }
  }
  @media (min-width: 728px) and (max-width: 1025px) {
    footer {
      position: relative;
      top: 16rem;
    }
  }
</style>
