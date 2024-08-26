<template>
  <div>
    <HomeTop />
    <div class="main1">
      <CallDesigner v-if="designer_show" @close="closeDesigner" />
      <h1>Добро пожаловать в наш мебельный магазин</h1>
      <p>Откройте для себя красоту и комфорт нашей эксклюзивной коллекции мебели.</p>
      <UserContact />
      <button @click="show_designer_component" class="designer">
        invite designer
        <img src="../images/arrow-right-solid.svg" />
      </button>
    </div>
    <div v-if="designer_show" class="overlay"></div>
  </div>
  <div :style="style" class="inner">
    <div class="cards" v-for="(card, index) in cards" :key="index">
      <img :src="card" alt="">
      <h2></h2>
      <RouterLink class="styled-link" :to="{ name: 'store', params: { id: index } }"> Узнать больше </RouterLink>
    </div>
  </div>
  <div class="buttons">
    <button class="btn" @click="preview"><img style="width: 30px" src="../images/arrow-left-solid.svg"></button>
    <button class="btn" @click="next"><img style="width: 30px" src="../images/arrow-right-solid.svg"></button>
  </div>
</template>

<script>
import UserContact from '@/components/UserContact.vue';
import HomeTop from '../components/HomeTop.vue';
import CallDesigner from '@/components/CallDesigner.vue';
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      designer_show: false,
      cards: [
      require('../images/furniture/1.jpg',),
      require('../images/furniture/2.jpg',),
      require('../images/furniture/31.jpg')
    ],
      leftPosition: -1100,
      x: 1100
    };
  },
  components: {
    HomeTop,
    UserContact,
    CallDesigner
  },
  methods: {
    show_designer_component() {
      this.designer_show = !this.designer_show;
      document.body.style.backgroundColor = this.designer_show ? 'rgba(0, 0, 0, 0.5)' : '';
      document.body.style.overflow = this.designer_show ? 'hidden' : 'auto';
    },
    closeDesigner() {
      this.designer_show = false;
      document.body.style.backgroundColor = '';
      document.body.style.overflow = 'auto';
    },
    next(){
      if (this.leftPosition < -this.x) {
        this.leftPosition = this.x
        console.log(this.leftPosition,this.x);
      }
      this.leftPosition = this.leftPosition-this.x
      console.log(this.leftPosition,this.x);
    },
    preview(){
      if (this.leftPosition >  -this.x) {
        this.leftPosition = -3 * this.x
      }
      console.log(this.leftPosition,this.x);
      this.leftPosition = this.leftPosition+this.x
    },
    ...mapActions(["get_user"]),

  },
  computed:{
    ...mapState(["user"]),
    style(){
      return{
        'left': this.leftPosition + "px"
      }
    }
  },
  mounted(){
      this.get_user()
      console.log(this.user);
  }
}

</script>


<style scoped>

.main1 {
  background-image: url('../images/hero.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 800px;
  text-align: center;
  backdrop-filter: rgba(0, 0, 0, 0.5);
  padding: 20px;
  position: relative;
}

h1 {
  font-size: 4em;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

p {
  font-size: 1.8em;
  margin-bottom: 25px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.designer {
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 25px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.designer img {
  width: 50px;
  height: 25px;
  margin-left: 10px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Ensure it appears above other content */
}


.inner {
  display: flex;
  transition: transform 0.3s ease-in-out; /* Smooth transition for sliding effect */
  margin-top: 20px;
  position: relative;
  max-width: 100%;
  height: 500px;
  gap: 400px;
  margin-left: 406px;
}

.cards {
  min-width: 700px; /* Ensure each card takes up the same width */
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  display: flex;
  box-shadow: 10px 10px 20px grey;
  overflow: hidden;
  background-color: grey;
  z-index: 1;
}

.cards img {
  width: 450px;
  height: 100%;
  object-fit: conta;
  border-radius: 10px;
}

.carusel button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  width: 300px;
  height: 100px;
  margin-left: 575px;
  margin-top: -100px; 
}
.btn{
  background: none;
  border: none;
}
.styled-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  z-index: 100000000;
  position: relative;

  &:hover {
    color: #0056b3;
  }
}

</style>
