<style lang="scss" scrope>
    @import './css/main';
    #default{
        height: 100%;
    }
</style>

<template>
    <div id='default'>
        <div class="showView">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
         data(){
             return{
          
             }
         },
         components:{
        
         }
    }
</script>
