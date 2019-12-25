<template>
    <span>
        标签：
        <span
            v-for="(tag, index) in tags"
            :key="index"
        >{{index ? ' / ' : ''}}<router-link to="">{{tag}}</router-link>
        </span>
    </span>
</template>

<script>
export default {
    props: ['tags']
}
</script>

<style lang="stylus" scoped>
    a:hover
        background-color #37a
        color: #fff
</style>