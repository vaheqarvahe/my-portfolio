<template>
    <div v-show="!this.show" class="a">
            <button @click="open()" class="contact"> 
                <img style="width: 30px;" src="../images/phone-solid.svg" alt="Contact">
            </button>
    </div>
        <div class="b" v-show="this.show">
            <button class="contact"> 
                <img style="width: 30px;" src="../images/twitter-brands-solid.svg" alt="Contact">
            </button>
            <br>
            <br>
            <button class="contact"> 
                <img style="width: 30px;" src="../images/telegram-brands-solid.svg" alt="Contact">
            </button>
            <br>
            <br>
            <button class="contact"> 
                <img style="width: 30px;" src="../images/phone-solid.svg" alt="Contact">
            </button>
            <br>
            <br>
            <button @click="open()" class="contact"> 
                <img style="width: 30px;" src="../images/xmark-solid.svg" alt="Contact">
            </button>
        </div>


</template>
<script>
export default{
    data(){
        return{
            show: false
        }
    },
    methods:{
        open(){
            this.show = !this.show
        }

    }
}
</script>
<style scoped>
.a {
    background: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.b {
    background: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    max-height: 600px;
}


.contact {
    background-color: #007bff;     
    border: none;                   
    border-radius: 50%;            
    padding: 10px;                  
    cursor: pointer;                
    outline: none;                  
    transition: background-color 0.3s, transform 0.2s; 
    min-width: 90px; 
    min-height: 90px;  
}

.contact:hover {
    background-color: #0056b3; 
    transform: scale(1.1);    
}


.contact img {
    width: 50px; 
    height: 50px;               
}


.contact:focus {
    box-shadow: 0 0 0 2px #0056b3; 
}
</style>
