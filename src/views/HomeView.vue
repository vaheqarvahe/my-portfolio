<template>
  <HomeTop />
  <div class="content">
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
  <div :style="style" class="inner">
      <div   class="cards" v-for="(card, index) in cards" :key="index" :style="{left: index===this.activeIndex ? 0 :   (this.activeIndex<index ? 1:-1)* Math.max(index-this.activeIndex,1) * this.windowWidth   + 'px' }">
        <div class="card_content">
        <img :src="card" alt="">
        <h2></h2>
        <RouterLink class="styled-link" :to="{ name: 'store', params: { id: index } }"> Узнать больше </RouterLink>
      </div>
    </div>
    <div class="buttons">
  <button v-if="activeIndex > 0" class="btn" @click="preview">
    <img style="width: 30px" src="../images/arrow-left-solid.svg" />
  </button>
  <button v-else class="btn">
    <img style="width: 30px" src="../images/arrow-left-solid.svg" />
  </button>
  <div class="circle_div">
    <div v-for="(card, i) in cards" :key="i">
      <img class="circle" :src="activeIndex === i ? require('../images/circle-solid.svg') : require('../images/circle-solid-1.svg')" />
    </div>
  </div>
  <button v-if="activeIndex < 4" class="btn" @click="next">
    <img style="width: 30px" src="../images/arrow-right-solid.svg" />
  </button>
  <button v-else class="btn">
    <img style="width: 30px; cursor: pointer" src="../images/arrow-right-solid.svg" />
  </button>
</div>
  </div>
</div>
</template>

<script>
import UserContact from '@/components/UserContact.vue';
import HomeTop from '../components/HomeTop.vue';
import CallDesigner from '@/components/CallDesigner.vue';
import { mapActions, mapState } from 'vuex';
import {info} from '@/constans'

export default {
  data() {
    return {
      activeIndex: 0,
      designer_show: false,
      cards: [
      require('../images/furniture/0.jpg'),
      require('../images/furniture/10.jpg'),
      require('../images/furniture/20.jpg'),
      require('../images/furniture/30.jpg'),
      require('../images/furniture/40.jpg'),
    ],
      windowWidth: window.innerWidth,
      index: 0
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
      this.activeIndex+=1
    },
    preview(){
      this.activeIndex-=1
    },
    ...mapActions(["get_user"]),
    router(){
      for (let i=0; i<=this.cards.length; i++){
        for (let j=0; j<=info.length; j++){
         const isIncluded= info[j]?.images.some(image => image===this.cards[i])
          if(isIncluded){
            console.log(info[j].id)
            this.index = info[j].id
          }
      }
      }
    }

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
      this.activeIndex=0
      // console.log(this.user);
      this.router()
  }
}

</script>


<style scoped>
.content{
  position: relative;
  overflow: auto;
  height: calc(100vh - 109px) ;
}
.main1 {
  background-image: url('../images/Dalle.webp');
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
  z-index: 10000;
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
  z-index: 1000!important; 
}



.inner {
display: flex;
width: 100%;
min-height: 1000px;
position: relative;
overflow: hidden;
background-image: url("../images/Backround.webp");
justify-content:end;
align-items: start;
background-repeat: no-repeat;
background-position: center;
background-size:cover;
z-index: 1;
}

.cards {
 margin-top: 50px;
 width: 100%;
 height: 350px;
 display: flex;
 justify-content: center;
 align-items: center;
 position: absolute;
 transition: left 0.7s; 
 z-index: 1;
}
.card_content{
  min-width: 600px;
  background-color: beige;
  gap: 5px;
  display: flex;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  position: absolute;
}


.cards img {
  width: 70%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100px;
  margin-top: -600px;
  z-index: 200;
  position: absolute;
  top: 1000px;
}
.btn{
  background: none;
  border: none;
}
.styled-link {
  width: 120px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  z-index: 1 !important;
  position: absolute;
  margin-right: 10px;
  right: 30px;
  text-align: end;
  &:hover {
    color: #0056b3;
  }
}

.circle_div{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 120px;
}
.circle{
  height: 10px;
}
</style>
