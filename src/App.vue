<template>
    <div id="app">
        <header></header>
        <router-view />
    </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    components: {
    
    }
}
</script>

<style lang="stylus" scoped>
    #app
        min-height 100%

    @media screen and (min-width 768px)
        #app
            width 720px
            margin 0 auto
    
</style>
