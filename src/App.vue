<template>
    <div id="app">
        <header></header>
        <router-view />
    </div>
</template>

<style lang="stylus" scoped>
    #app
            // background-color #fff
            min-height 100%

    @media screen and (min-width 768px)
        #app
            width 720px
            margin 0 auto
            // box-shadow 0 0 10px 5px rgba(0,0,0,.05)
    
</style>
