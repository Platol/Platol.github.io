<template>
    <div>
        <h1 class="title">{{title}}</h1>
        <h4 class="sub-title">{{subTitle}}</h4>
        <div class="date-and-tags">
            <span>日期： {{date}}</span>
            <span>标签：
                <span
                    v-for="(tag, idx) in tags"
                    :key="idx"
                >
                    <span v-if="idx">，</span>
                    <router-link to="">{{tag}}</router-link>
                </span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'subTitle', 'date', 'tags']
}
</script>

<style lang="stylus" scoped>
    .title
        margin 0 0 12px 0
        padding 16px 0 12px 0
        line-height 1
        border-bottom 1px solid #666

    .sub-title
        font-weight bold
        line-height 1
        margin 0

    .date-and-tags
        display flex
        flex-direction column
        margin 20px 0 36px 0
        color #666

        span
            line-height 24px
            font-size 14px

    a:hover
        text-decoration underline
</style>