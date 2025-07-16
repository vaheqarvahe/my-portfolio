<template>
<HomeTop/>
<br>
<div class="father">
    <div class="images" v-for="i in this.info" :key="i">
        <img :src="i.images[0]" alt="">
    </div>
</div>
</template>

<script>
import HomeTop from '@/components/HomeTop.vue';
import {info} from '@/constans'

export default{
    data(){
        return{
            info: info
        }
    },

    components:{
        HomeTop
    },
    mounted(){
    }
}
</script>
<style>
.father{
    height: 1000px;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content:space-evenly;
    margin-top: 100px;
    padding-top: 20px;
}
.images{
    width: 15%;
    height: 250px;
    z-index: 100px;
}
.images img{
    width: 100%;
    height: 100%;
}
</style>