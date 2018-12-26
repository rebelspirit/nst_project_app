<template>
  <div class="service" id="service">
    <div class="background"></div>
    <main>
      <div class="aboutMe-container">
        <div class="aboutMe-container__name">
          <p class="aboutMe-container__name--item">обо мне</p>
          <p class="aboutMe-container__name--item">about <span>me</span></p>
        </div>
        <div class="aboutMe-container__image"></div>
        <div class="aboutMe-container__text">
          <p><span>Привет!</span> <br><br>Я стилист, живу в Киеве.
            Мне нравится считать себя художником, воплощающим эмоции и идеи в реальность с помощью стилизации.
            Работа персонального стилиста позволяет заниматься тем, что люблю больше всего: модой, покупками и помощью
            людям выглядеть классно.
            <br>
            <br>
            Магистр по маркетингу с 7-летним опытом в маркетинге и управлении людьми, я хорошо понимаю важность
            правильного образа для создания нужного впечатления.
            <br>
            <br>
            Образование в сфере моды и стайлинга получала на различных онлайн и офлайн курсах, но большинство моих
            знаний - результат страстной любви к моде.
            Люблю экспериментировать со стилями, сочетаниями, тканями.
            Даю комплексное решение задач, глубоко их проработав.
            <br>
            <br>
            Мои сайт и инстаграм посвящены любви к стилю и моде!
          </p>
          <btn color="000000" @click.native="openModal" class="button first">связаться со мной</btn>
        </div>
      </div>
      <div class="consultation-container">
        <div class="consultation-container__service">
          <p class="consultation-container__service--item">Услуги</p>
          <p class="consultation-container__service--item"><span>s</span>ervices</p>
        </div>
        <div class="consultation-container__image"></div>
        <div class="consultation-container__description">
          <div class="consultation-container__description__block">
            <h2>Личная
              <div class="dot"></div>
              Консультация
            </h2>
            <p>Личная встреча в Киеве или скайп-звонок, во время которого мы обсудим Ваши цели,
              задачи и ожидания от сотрудничества со мной. </p>
            <div class="flower"></div>
            <p>Построим стратегию комфортной Вам
              работы, запланируем следующие активности.
            </p>
            <div class="buttons-container">
              <div class="price-container">
                <div class="price-container__price">500 <span>грн</span></div>
                <div class="price-container__line"></div>
                <div class="price-container__description">бесплатно при заказе дополнительной услуги</div>
              </div>
              <btn color="000000" @click.native="openModal" class="button second">заказать услугу</btn>
            </div>
          </div>
        </div>
      </div>
      <div class="load-more show" id="first-button" v-on:click="loadMore('first', 'first-button', 'second-button')">
        загрузить еще
      </div>
      <div class="cardStyle-container" id="first">
        <div class="cardStyle-container__image"></div>
        <div class="cardStyle-container__description">
          <div class="cardStyle-container__description__block">
            <h2>Индивидуальная
              <div class="dot"></div>
              Карта
              <div class="dot"></div>
              Стиля
            </h2>
            <p>После онлайн общения или личной встречи,
              клиент получает презентацию с готовым решением задач:</p>
            <div class="flower"></div>
            <p>
            <ul>
              <li>Подходящая цветовая палитра и типы одежды</li>
              <li>Рекомендации по общему стилю</li>
              <li>Примеры комплектов одежды для разных жизненных ситуаций с комментариями</li>
              <li>Рекомендации по прическе и макияжу</li>
            </ul>
            </p>
            <div class="buttons-container">
              <div class="price-container">
                <div class="price-container__price">2500 <span>грн</span></div>
                <div class="price-container__line"></div>
                <div class="price-container__description">Презинтация на 15-20 слайдов</div>
              </div>
              <btn color="000000" @click.native="openModal" class="button second">заказать услугу</btn>
            </div>
          </div>
        </div>
      </div>
      <div class="load-more" id="second-button" v-on:click="loadMore('second', 'second-button', 'third-button')">
        загрузить еще
      </div>
      <div class="revision-container" id="second">
        <div class="revision-container__image"></div>
        <div class="revision-container__description">
          <div class="revision-container__description__block">
            <h2>Ревизия
              <div class="dot"></div>
              гардероба
            </h2>
            <p>Услуга проводится в 3 этапа</p>
            <div class="flower"></div>
            <p>
            <ol>
              <li>Я отправляю Вам на электронную почту анкету, прошу её заполнить,
                и запрашиваю у Вас портретное фото и фото в полный рост. 
                Мы согласовываем время моего визита на разбор гардероба.
              </li>
              <li>Приезжаю к Вам домой для разбора гардероба
                (ориентировочное время - до 5 часов).
                Процесс разбора я комментирую, Вы можете записывать эти рекомендации.
              </li>
              <li>После разбора гардероба, я высылаю Вам шопинг-лист с фотографиями
                недостающих вещей, и фото 20-25 готовых образов из Вашего гардероба
                (с участием одежды, обуви, аксессуаров, бижутерии одного сезона)
              </li>
            </ol>
            </p>
            <div class="buttons-container">
              <div class="price-container">
                <div class="price-container__price">5000 <span>грн</span></div>
                <div class="price-container__line"></div>
                <div class="price-container__description">разбор гардероба на один сезон</div>
              </div>
              <btn color="000000" @click.native="openModal" class="button second">заказать услугу</btn>
            </div>
          </div>
        </div>
      </div>
      <div class="load-more" id="third-button" v-on:click="loadMore('third', 'third-button', 'fourth-button')">загрузить
        еще
      </div>
      <div class="personalShoping-container" id="third">
        <div class="personalShoping-container__image"></div>
        <div class="personalShoping-container__description">
          <div class="personalShoping-container__description__block">
            <h2>Персональный
              <div class="dot"></div>
              шопинг
            </h2>
            <p>Сопровождение при подборе и покупке недостающих гардеробу вещей.
            </p>
            <div class="flower"></div>
            <p>До нашей встречи знакомлюсь с ассортиментом, откладываю вещи, которые могут подойти, составляю наш
              шопинг-маршрут.
              Магазины и бренды выбираю исходя из Ваших целей,
              бюджета и предпочтений</p>
            <div class="buttons-container">
              <div class="price-container">
                <div class="price-container__price">1000 <span>грн</span></div>
                <div class="price-container__line"></div>
                <div class="price-container__description">1 час</div>
              </div>
              <btn color="000000" @click.native="openModal" class="button second">заказать услугу</btn>
            </div>
          </div>
        </div>
      </div>
      <div class="load-more" id="fourth-button" v-on:click="loadMore('fourth', 'fourth-button', 'fives-button')">
        загрузить еще
      </div>
      <div class="capsule-container" id="fourth">
        <div class="capsule-container__image"></div>
        <div class="capsule-container__description">
          <div class="capsule-container__description__block">
            <h2>Создание
              <div class="dot"></div>
              капсулы
            </h2>
            <p>Услуга максимально полезна перед путешествием.
              Соберу комплект одежды из 5-6 образов,
              учитывая план поездки, комфорт, погоду, и Ваши пожелания.
            </p>
            <div class="flower"></div>
            <div class="buttons-container">
              <div class="price-container">
                <div class="price-container__price">3000 <span>грн</span></div>
                <div class="price-container__line"></div>
                <div class="price-container__description">6 законченных образов</div>
              </div>
              <btn color="000000" @click.native="openModal" class="button second">заказать услугу</btn>
            </div>
          </div>
        </div>
      </div>
      <div class="load-more" id="fives-button" v-on:click="loadMore('five', 'fives-button')">загрузить еще</div>
      <div class="giftCard-container" id="five">
        <div class="giftCard-container__image"></div>
        <div class="giftCard-container__description">
          <div class="giftCard-container__description__block">
            <h2>Подарочный
              <div class="dot"></div>
              сертификат
            </h2>
            <p>Помогу дорогому Вам человеку стать более стильным и уверенным в себе.
              Просто напишите, и мы обсудим варианты идеального подарка
            </p>
            <div class="flower"></div>
            <div class="buttons-container last">
              <btn color="000000" @click.native="openModal" class="button second">заказать услугу</btn>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="background-second"></div>
  </div>
</template>

<script>
  import {Btn} from 'mdbvue';
  import modalService from '@/components/modalService';

  export default {
    name: 'Main',
    components: {
      Btn, modalService
    },
    data() {
      return {
        services: [
          {
            imgSrc: '../assets/image-3.png',
            title: `Личная <div class="dot"></div>Консультация`,
            mainText: `<p>Личная встреча в Киеве или скайп-звонок, во время которого мы обсудим Ваши цели,
              задачи и ожидания от сотрудничества со мной. </p>
            <div class="flower"></div>
            <p>Построим стратегию комфортной Вам
              работы, запланируем следующие активности.
            </p>`
          }
        ],
      };
    },
    methods: {
      openModal: function() {
        this.$emit('open')
      },
      loadMore: function (item, button, nextButton) {
        let elem = document.getElementById(item);
        let loadMoreButton = document.getElementById(button);
        let loadMoreNextButton = document.getElementById(nextButton);
        // let portfolio = document.getElementById("portfolio");
        // let footer = document.getElementById("footer");
        let service = document.getElementById("service");

        if (button) {
          loadMoreButton.style.display = "none";
        }

        elem.style.display = "block";

        if (nextButton) {
          loadMoreNextButton.style.display = "flex";
        }
        switch (item) {
          case "first":
            service.style.height = "2610px";
            break;
          case "second":
            service.style.height = "3550px";
            break;
          case "third":
            service.style.height = "4340px";
            break;
          case "fourth":
            service.style.height = "4990px";
            break;
          case "five":
            service.style.height = "5500px";
            break;
        }
      },
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .service {
    position: relative;
    height: 4830px;
    z-index: 0;
  }

  main {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin-top: -165px;
  }

  .background {
    z-index: -1;
    position: relative;
    width: 200%;
    height: 500px;
    background-color: #f7f7f7;
    transform: rotate(-25deg) translate(-30%, 450px);
  }

  .background:before {
    position: absolute;
    bottom: calc(100% + 45px);
    display: block;
    width: 100%;
    height: 5px;
    background: #ff8447;

    content: '';
  }

  .background:after {
    position: absolute;
    bottom: calc(100% + 15px);
    display: block;
    width: 100%;
    height: 15px;
    background: #323232;

    content: '';
  }

  .aboutMe-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 900px;
    height: 550px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 200px;
  }

  .aboutMe-container__image {
    width: 100%;
    max-width: 530px;
    height: 100%;
    background-image: url(../assets/image-2.png);
    margin-left: auto;
    background-size: cover;
  }

  .aboutMe-container__name {
    position: relative;
    width: 100%;
    max-width: 70px;
    height: 100%;
    max-height: 470px;
    background: #ffd7c0;
  }

  .aboutMe-container__name--item {
    position: absolute;
    width: 220px;
    transform: rotate(-90deg);
  }

  .aboutMe-container__name--item:nth-child(1) {
    right: -40px;
    bottom: 45%;
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

  .aboutMe-container__name--item:nth-child(2) {
    right: -100px;
    bottom: 50%;
    font-family: Rosa Marena;
    font-size: 60px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #232323;
  }

  .aboutMe-container__name--item:nth-child(2) > span {
    color: #ff8447;
  }

  .aboutMe-container__text {
    position: absolute;
    width: 100%;
    max-width: 420px;
    min-height: 510px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 15px 0 rgba(162, 179, 188, 0.25);
    top: 70px;
    left: 100px;
    padding: 20px 31px 40px 31px;
  }

  .aboutMe-container__text > p {
    text-align: start;
    font-family: OpenSans, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: normal;
    color: #232323;
  }

  .aboutMe-container__text > p > span {
    font-weight: 600;
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
    padding: 0 !important;
  }
  .button:hover {
    background-color: #f68d59 !important;
  }
  .button:active {
    background-color: #ff8447 !important;
  }

  .first {
    position: absolute;
    bottom: -20px;
    left: 20px;
  }

  .consultation-container {
    position: relative;
    width: 100%;
    max-width: 780px;
    max-height: 640px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }

  .consultation-container__image {
    width: 100%;
    min-height: 418px;
    background-image: url(../assets/image-3.png);
    background-size: cover;
  }

  .consultation-container__service {
    position: absolute;
    top: -100px;
    right: -40px;
    width: 100%;
    max-width: 470px;
    height: 100%;
    max-height: 70px;
    background: #ffd7c0;
  }

  .consultation-container__service--item:nth-child(1) {
    position: absolute;
    top: -23px;
    left: 115px;
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

  .consultation-container__service--item:nth-child(2) {
    position: absolute;
    right: 160px;
    font-family: Rosa Marena;
    font-size: 60px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #232323;
  }

  .consultation-container__service--item:nth-child(2) > span {
    color: #ff8447;
  }

  .consultation-container__description {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 10%;
    top: 45%;
    width: 100%;
    max-width: 634px;
    min-height: 345px;
    border-radius: 10px;
    box-shadow: 0 4px 15px 0 rgba(162, 179, 188, 0.25);
    background-color: #ffffff;
    padding: 25px 25px 30px 25px;
  }

  .dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #000000;
    border-radius: 3px;
    margin: 7px;
  }

  .consultation-container__description__block {
    width: 100%;
  }

  .consultation-container__description__block > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: OpenSans, sans-serif;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 20px;
  }

  .consultation-container__description__block > p {
    width: 100%;
    max-width: 320px;
    font-family: OpenSans, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: normal;
    color: #000000;
    margin: 0 auto;
  }

  .flower {
    width: 23px;
    height: 14px;
    object-fit: contain;
    background-image: url(../assets/flower.png);
    background-size: cover;
    margin: 10px auto;
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 615px;
    margin-top: 60px;
  }

  .price-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 250px;
    height: 50px;
    border: 1px solid #000;
    padding: 11px 16px 11px 16px;
  }

  .price-container__price {
    font-family: OpenSans, sans-serif;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    width: 100%;
    max-width: 70px;
  }

  .price-container__price > span {
    font-size: 12px;
    text-transform: none;
  }

  .price-container__description {
    font-family: OpenSans, sans-serif;
    font-size: 10px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    max-width: 110px;
  }

  .price-container__line {
    position: absolute;
    left: 40%;
    transform: rotate(25deg);
    width: 1px;
    height: 54px;
    background: #000;
    margin-left: 7px;
    margin-right: 7px;
  }

  .cardStyle-container {
    position: relative;
    width: 100%;
    max-width: 780px;
    max-height: 640px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 110px;
  }

  .cardStyle-container__image {
    width: 100%;
    min-height: 418px;
    background-image: url(../assets/image-4.png);
    background-size: 133%;
    background-position-x: center;
  }

  .cardStyle-container__service--item:nth-child(2) > span {
    color: #ff8447;
  }

  .cardStyle-container__description {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 10%;
    top: 45%;
    width: 100%;
    max-width: 634px;
    min-height: 345px;
    border-radius: 10px;
    box-shadow: 0 4px 15px 0 rgba(162, 179, 188, 0.25);
    background-color: #ffffff;
    padding: 25px 25px 30px 25px;
  }

  .cardStyle-container__description__block {
    width: 100%;
  }

  .cardStyle-container__description__block > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: OpenSans, sans-serif;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 20px;
  }

  .cardStyle-container__description__block > p {
    width: 100%;
    max-width: 320px;
    font-family: OpenSans, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: normal;
    color: #000000;
    margin: 0 auto;
  }

  .cardStyle-container__description__block > p > ul > li {
    text-align: start;
  }

  .revision-container {
    position: relative;
    width: 100%;
    max-width: 780px;
    max-height: 650px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 90px;
  }

  .revision-container__image {
    width: 100%;
    min-height: 418px;
    background-image: url(../assets/image-5.png);
    background-size: cover;
  }

  .revision-container__service--item:nth-child(2) > span {
    color: #ff8447;
  }

  .revision-container__description {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 10%;
    top: 45%;
    width: 100%;
    max-width: 634px;
    min-height: 345px;
    border-radius: 10px;
    box-shadow: 0 4px 15px 0 rgba(162, 179, 188, 0.25);
    background-color: #ffffff;
    padding: 25px 25px 30px 25px;
  }

  .revision-container__description__block {
    width: 100%;
  }

  .revision-container__description__block > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: OpenSans, sans-serif;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 20px;
  }

  .revision-container__description__block > p {
    width: 100%;
    max-width: 520px;
    font-family: OpenSans, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: normal;
    color: #000000;
    margin: 0 auto;
  }

  .revision-container__description__block > p > ol > li {
    text-align: start;
    list-style-type: none;
  }

  .revision-container__description__block > p > ol {
    counter-reset: num;
  }

  .revision-container__description__block > p > ol > li::before {
    content: counter(num) ".";
    counter-increment: num;
    font-weight: bold;
    margin-right: 5px;
  }

  .personalShoping-container {
    position: relative;
    width: 100%;
    max-width: 780px;
    max-height: 640px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 70px;
  }

  .personalShoping-container__image {
    width: 100%;
    min-height: 418px;
    background-image: url(../assets/image-6.png);
    background-size: cover;
  }

  .personalShoping-container__service--item:nth-child(2) > span {
    color: #ff8447;
  }

  .personalShoping-container__description {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 10%;
    top: 45%;
    width: 100%;
    max-width: 634px;
    min-height: 345px;
    border-radius: 10px;
    box-shadow: 0 4px 15px 0 rgba(162, 179, 188, 0.25);
    background-color: #ffffff;
    padding: 25px 25px 30px 25px;
  }

  .personalShoping-container__description__block {
    width: 100%;
  }

  .personalShoping-container__description__block > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: OpenSans, sans-serif;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 20px;
  }

  .personalShoping-container__description__block > p {
    width: 100%;
    max-width: 420px;
    font-family: OpenSans, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: normal;
    color: #000000;
    margin: 0 auto;
  }

  .personalShoping-container, .buttons-container, .price-container__description {
    width: 100%;
    text-align: center;
  }

  .capsule-container {
    position: relative;
    width: 100%;
    max-width: 780px;
    max-height: 560px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }

  .capsule-container__image {
    width: 100%;
    min-height: 418px;
    background-image: url(../assets/image-7.png);
    background-size: cover;
  }

  .capsule-container__service--item:nth-child(2) > span {
    color: #ff8447;
  }

  .capsule-container__description {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 10%;
    top: 50%;
    width: 100%;
    max-width: 634px;
    min-height: 270px;
    border-radius: 10px;
    box-shadow: 0 4px 15px 0 rgba(162, 179, 188, 0.25);
    background-color: #ffffff;
    padding: 25px 25px 30px 25px;
  }

  .capsule-container__description__block {
    width: 100%;
  }

  .capsule-container__description__block > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: OpenSans, sans-serif;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 20px;
  }

  .capsule-container__description__block > p {
    width: 100%;
    max-width: 420px;
    font-family: OpenSans, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: normal;
    color: #000000;
    margin: 0 auto;
  }

  .giftCard-container {
    position: relative;
    width: 100%;
    max-width: 780px;
    max-height: 550px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }

  .giftCard-container__image {
    width: 100%;
    min-height: 418px;
    background-image: url(../assets/image-8.png);
    background-size: cover;
  }

  .giftCard-container__service--item:nth-child(2) > span {
    color: #ff8447;
  }

  .giftCard-container__description {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 10%;
    top: 50%;
    width: 100%;
    max-width: 634px;
    min-height: 270px;
    border-radius: 10px;
    box-shadow: 0 4px 15px 0 rgba(162, 179, 188, 0.25);
    background-color: #ffffff;
    padding: 25px 25px 30px 25px;
  }

  .giftCard-container__description__block {
    width: 100%;
  }

  .giftCard-container__description__block > h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: OpenSans, sans-serif;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 20px;
  }

  .giftCard-container__description__block > p {
    width: 100%;
    max-width: 560px;
    font-family: OpenSans, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: normal;
    color: #000000;
    margin: 0 auto;
  }

  .last {
    justify-content: center;
  }

  .background-second {
    z-index: -1;
    position: relative;
    top: 50%;
    width: 200%;
    height: 500px;
    background-color: #f7f7f7;
    transform: rotate(25deg) translate(-30%, 250px);
  }

  .background-second:before {
    position: absolute;
    top: calc(100% + 115px);
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

  .load-more {
    display: none;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    .service {
      height: 1740px;
    }

    .background {
      display: none;
    }

    .background-second {
      display: none;
    }

    .aboutMe-container__image {
      display: none;
    }

    .aboutMe-container {
      height: 400px;
      margin-bottom: 620px;
    }

    .aboutMe-container__name {
      max-width: none;
      max-height: 70px;
    }

    .aboutMe-container__name--item {
      transform: rotate(0deg);
    }

    .aboutMe-container__name--item:nth-child(1) {
      right: unset;
      left: 20%;
      font-size: 42px;
    }

    .aboutMe-container__name--item:nth-child(2) {
      right: 13%;
      bottom: -85%;
    }

    .aboutMe-container__text {
      max-width: none;
      min-height: 567px;
      left: 0;
      top: 17rem;
    }

    .first {
      left: 50%;
      transform: translateX(-50%);
    }

    .consultation-container {
      max-width: none;
      margin-bottom: 120px;
      height: 720px;
    }

    .consultation-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .consultation-container__service {
      max-width: none;
      left: 0;
      top: -80px;
    }

    .consultation-container__service--item:nth-child(1) {
      left: 100px;
    }

    .consultation-container__service--item:nth-child(2) {
      right: 40px;
    }

    .consultation-container__description {
      top: 40%;
      left: 0;
      max-width: none;
      padding: 25px 20px 30px 20px;
    }

    .buttons-container {
      flex-direction: column;
    }

    .price-container {
      margin-bottom: 30px;
    }

    .cardStyle-container {
      display: none;
      height: 800px;
      margin-bottom: 240px;
    }

    .cardStyle-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .cardStyle-container__description {
      left: 0;
      top: 45%;
    }

    h2 {
      flex-wrap: wrap;
    }

    .cardStyle-container__description__block > h2 > .dot {
      display: none;
    }

    .revision-container {
      display: none;
      height: 720px;
      margin-bottom: 290px;
    }

    .revision-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .revision-container__description {
      left: 0;
      top: 42%;
      max-width: none;
    }

    .revision-container__description__block > p > ol > li {
      text-align: justify;
    }

    .revision-container__description__block > p > ol {
      padding: 0;
    }

    .personalShoping-container {
      display: none;
      height: 800px;
      margin-bottom: 140px;
    }

    .personalShoping-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .personalShoping-container__description {
      left: 0;
      top: 40%;
      max-width: none;
      padding: 25px 17px 30px 17px;
    }

    .capsule-container {
      display: none;
      height: 800px;
      margin-bottom: 100px;
    }

    .capsule-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .capsule-container__description {
      left: 0;
      top: 40%;
      max-width: none;
    }

    .giftCard-container {
      display: none;
      height: 800px;
      margin-bottom: 80px;
    }

    .giftCard-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .giftCard-container__description {
      left: 0;
      top: 40%;
      max-width: none;
    }

    .giftCard-container__description__block > h2 > .dot {
      display: none;
    }
    .load-more {
      display: none;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      max-width: 135px;
      height: 50px;
      position: relative;
      font-family: OpenSans, sans-serif;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #232323;
      margin: 0 auto;
    }

    .load-more:before {
      position: absolute;
      top: 13px;
      left: -5px;
      display: block;
      width: 21px;
      height: 23px;
      background-image: url(../assets/loading.svg);

      content: "";
    }

    .show {
      display: flex;
    }

    .hide {
      display: none !important;
    }
  }

  @media (min-width: 425px) and (max-width: 728px) {
    .service {
      height: 1740px;
    }

    .background {
      display: none;
    }

    .background-second {
      display: none;
    }

    .aboutMe-container__image {
      display: none;
    }

    .aboutMe-container {
      height: 400px;
      margin-bottom: 620px;
    }

    .aboutMe-container__name {
      max-width: none;
      max-height: 70px;
    }

    .aboutMe-container__name--item {
      transform: rotate(0deg);
    }

    .aboutMe-container__name--item:nth-child(1) {
      right: unset;
      left: 20%;
      font-size: 42px;
    }

    .aboutMe-container__name--item:nth-child(2) {
      right: 13%;
      bottom: -85%;
    }

    .aboutMe-container__text {
      max-width: none;
      min-height: 567px;
      left: 0;
      top: 17rem;
    }

    .first {
      left: 50%;
      transform: translateX(-50%);
    }

    .consultation-container {
      max-width: none;
      margin-bottom: 120px;
      height: 720px;
    }

    .consultation-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .consultation-container__service {
      max-width: none;
      left: 0;
      top: -80px;
    }

    .consultation-container__service--item:nth-child(1) {
      left: 100px;
    }

    .consultation-container__service--item:nth-child(2) {
      right: 40px;
    }

    .consultation-container__description {
      top: 40%;
      left: 0;
      max-width: none;
      padding: 25px 20px 30px 20px;
    }

    .buttons-container {
      flex-direction: column;
    }

    .price-container {
      margin-bottom: 30px;
    }

    .cardStyle-container {
      display: none;
      height: 800px;
      margin-bottom: 240px;
    }

    .cardStyle-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .cardStyle-container__description {
      left: 0;
      top: 45%;
    }

    h2 {
      flex-wrap: wrap;
    }

    .cardStyle-container__description__block > h2 > .dot {
      display: none;
    }

    .revision-container {
      display: none;
      height: 720px;
      margin-bottom: 290px;
    }

    .revision-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .revision-container__description {
      left: 0;
      top: 42%;
      max-width: none;
    }

    .revision-container__description__block > p > ol > li {
      text-align: justify;
    }

    .revision-container__description__block > p > ol {
      padding: 0;
    }

    .personalShoping-container {
      display: none;
      height: 800px;
      margin-bottom: 140px;
    }

    .personalShoping-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .personalShoping-container__description {
      left: 0;
      top: 40%;
      max-width: none;
      padding: 25px 17px 30px 17px;
    }

    .capsule-container {
      display: none;
      height: 800px;
      margin-bottom: 100px;
    }

    .capsule-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .capsule-container__description {
      left: 0;
      top: 40%;
      max-width: none;
    }

    .giftCard-container {
      display: none;
      height: 800px;
      margin-bottom: 80px;
    }

    .giftCard-container__image {
      min-height: 295px;
      background-size: cover;
      background-position-x: center;
    }

    .giftCard-container__description {
      left: 0;
      top: 40%;
      max-width: none;
    }

    .giftCard-container__description__block > h2 > .dot {
      display: none;
    }
    .load-more {
      display: none;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      max-width: 135px;
      height: 50px;
      position: relative;
      font-family: OpenSans, sans-serif;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #232323;
      margin: 0 auto;
    }

    .load-more:before {
      position: absolute;
      top: 13px;
      left: -5px;
      display: block;
      width: 21px;
      height: 23px;
      background-image: url(../assets/loading.svg);

      content: "";
    }

    .show {
      display: flex;
    }

    .hide {
      display: none !important;
    }
  }

  @media (min-width: 435px) and (max-width: 728px) {
    .aboutMe-container__text {
      max-width: calc(100% - 34px);
    }
  }

  @media (min-width: 728px) and (max-width: 1025px) {
    .background {
      display: block;
      transform: rotate(-25deg) translate(-40%, 855px);
    }

    .background-second {
      display: none;
    }

    .aboutMe-container {
      height: 400px;
      margin-bottom: 650px;
      position: relative;
    }

    .aboutMe-container__name {
      max-width: 320px;
      max-height: 70px;
      margin-left: 17px;
      margin-right: auto;
      z-index: 1;
    }

    .aboutMe-container__name--item {
      transform: rotate(0deg);
    }

    .aboutMe-container__name--item:nth-child(1) {
      right: unset;
      left: 15%;
      font-size: 42px;
    }

    .aboutMe-container__name--item:nth-child(2) {
      right: 13%;
      bottom: -85%;
    }

    .aboutMe-container__text {
      max-width: 390px;
      min-height: 567px;
      left: 0;
      top: 17rem;
      margin-left: 17px;
      margin-right: 17px;
    }

    .aboutMe-container__image {
      display: block;
      max-width: 460px;
      height: 477px;
      position: absolute;
      left: 35%;
      top: 200px;
      z-index: 0;
    }

    .consultation-container {
      max-height: 640px;
      height: 100%;
      margin-bottom: 50px;
    }

    .consultation-container__image {
      min-height: 418px;
      background-size: cover;
      background-position-x: center;
    }

    .consultation-container__service {
      max-width: 320px;
      left: unset;
      right: 70px;
      top: -80px;
    }

    .consultation-container__service--item:nth-child(1) {
      left: 100px;
    }

    .consultation-container__service--item:nth-child(2) {
      right: 40px;
    }

    .consultation-container__description {
      top: 45%;
      max-width: 634px;
      left: 50%;
      transform: translateX(-50%);
      padding: 25px 20px 30px 20px;
    }

    .buttons-container {
      margin-left: auto;
      margin-right: auto;
    }

    .cardStyle-container {
      display: block;
      max-height: 640px;
      height: 100%;
      margin-bottom: 110px;
    }

    .cardStyle-container__image {
      min-height: 418px;
    }

    .cardStyle-container__description {
      max-width: 634px;
      left: 50%;
      transform: translateX(-50%);
      top: 45%;
    }

    h2 {
      flex-wrap: wrap;
    }

    .cardStyle-container__description__block > h2 > .dot {
      display: none;
    }

    .revision-container {
      display: block;
      max-height: 640px;
      height: 100%;
      margin-bottom: 100px;
    }

    .revision-container__image {
      min-height: 418px;
      background-size: cover;
      background-position-x: center;
    }

    .revision-container__description {
      max-width: 634px;
      left: 50%;
      transform: translateX(-50%);
      top: 45%;
    }

    .revision-container__description__block > p > ol > li {
      text-align: justify;
    }

    .revision-container__description__block > p > ol {
      padding: 0;
    }

    .personalShoping-container {
      display: block;
      max-height: 640px;
      height: 100%;
      margin-bottom: 80px;
    }

    .personalShoping-container__image {
      min-height: 418px;
      background-size: cover;
      background-position-x: center;
    }

    .personalShoping-container__description {
      max-width: 634px;
      left: 50%;
      transform: translateX(-50%);
      top: 45%;
      padding: 25px 17px 30px 17px;
    }

    .capsule-container {
      display: block;
      max-height: 555px;
      height: 100%;
      margin-bottom: 50px;
    }

    .capsule-container__image {
      min-height: 418px;
      background-size: cover;
      background-position-x: center;
    }

    .capsule-container__description {
      max-width: 634px;
      left: 50%;
      transform: translateX(-50%);
      top: 50%;
    }

    .giftCard-container {
      display: block;
      max-height: 520px;
      height: 100%;
      margin-bottom: 50px;
    }

    .giftCard-container__image {
      min-height: 418px;
      background-size: cover;
      background-position-x: center;
    }

    .giftCard-container__description {
      max-width: 634px;
      left: 50%;
      transform: translateX(-50%);
      top: 50%;
    }

    .giftCard-container__description__block > h2 > .dot {
      display: none;
    }

    .load-more {
      display: none;
    }

  }
</style>
