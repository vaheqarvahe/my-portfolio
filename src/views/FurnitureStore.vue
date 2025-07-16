<template>
    <HomeTop/>
    <br>
    <div class="image_container">
        <div class="furniture">
            <div class="inner">
                <button class="but" @click="preview()"> <img style="width: 50px" src="../images/left-long-solid.svg" /> </button>
                <img class="image" :src="image"  alt="">
                <button class="but" @click="next()"> <img style="width: 50px" src="../images/right-long-solid.svg" /> </button>
            </div>
        </div>
    </div>

<div>

</div>
</template>
<script>
import HomeTop from '@/components/HomeTop.vue';
import {info} from '../constans.js'
export default{
    data(){
        return{
            index: this.$route.params.id,
            firstImageIndex: parseInt(this.$route.params.id),
            image: null,
            image_index: 0,
            image_array: null
        }
    },
    components:{
        HomeTop,
    },
    methods: {
        next() {
            this.image_index++
            if (this.image_array[this.image_index]) {
                this.findImage()
            }else{
                this.image_index--
            }
        },
        preview() {
            this.image_index--
            if (this.image_array[this.image_index]) {
                this.findImage()
            }else{
                this.image_index++
            }
        },
        findImage(){
            for (let i=0; i<=info.length; i++){
                let im = info.find(elm => elm.id == this.index)
                this.image_array = im.images
                this.image = im.images[this.image_index]
                console.log("image",this.image);
            }
        }
    },
    mounted(){
        console.log("info",info)
        this.findImage()
    }
    
}



</script>
<style scoped>
.image{
    width: 800px;
    height: 595px;
    object-fit: cover;
}
.furniture{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;

}

.furniture button {
    background: none;
    border: none;
}
.image_container{
    margin-top: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 595px;
    background-color: cadetblue;
}

.inner {
 display: flex;
 justify-content: center;
 align-items: center;
 position: absolute;
 transition: left 0.7s; 
 gap: 100px;
}

.but{
    z-index: 1000;
}


</style>
