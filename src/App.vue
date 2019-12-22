<template>
    <div id="app">
        <!-- <header></header> -->
        <div id="app-container">
            <router-view />
        </div>
        
</div>


</template>

<script>


export default {
    data() {
        return {
            
        }
    },
    watch:{
        '$route'(to, from){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
  }
    
}
</script>

<style lang="stylus" scoped>
    #app
        // background-color #fff
        // min-height 100%

        header
            height 48px
            background #000
            position sticky
            top 0

    @media screen and (min-width 768px)
        #app-container
            width 720px
            margin 0 auto
            padding 16px 0
    @media screen and (max-width 767px)
        #app-container
            padding 16px
            
    
</style>
