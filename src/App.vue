<template>
    <div id="app">
        <!-- <header></header> -->
        <router-view />
        
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
        min-height 100%
        padding 16px
        box-sizing border-box
        background-color #fff
        // border 1px solid #eee

    @media screen and (min-width 768px)
        #app
            width 720px
            margin 0 auto
            
    
</style>
