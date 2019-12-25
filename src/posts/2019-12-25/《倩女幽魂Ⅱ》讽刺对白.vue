<template>
    <div class="post">
        <post-header
            :title="post.title"
            :subTitle="post.subTitle"
            :date="post.date"
            :tags="post.tags"
        ></post-header>
        <p>……</p>
        <p>我和你一样，是人，命中注定要坐监，</p>
        <p>……</p>
        <p>这都怪祖先无眼，叫我追求学问，长大了，写书做博学士，<br>
        谁知道写游记，被人说我泄露国家机密；<br>
        写历史，说我借古讽今；<br>
        好，去注解兵法，又说我煽动造反；<br>
        那，写神话吧，又说我导人迷信；<br>
        最后只有帮人写传记，结果那个人被人抓了，说是乱党，结果我和他一起被判终身监禁。<br>
        你说是不是命中注定要坐监？</p>
        <p>……</p>
    </div>
</template>

<script>
import posts from '../../posts.json'
import PostHeader from '../../components/PostHeader'


export default {
    data() {
        return {
            post: posts.filter(item => item.title == '《倩女幽魂Ⅱ》讽刺对白')[0]
        }
    },
    components: {
        PostHeader
    }
}
</script>

<style lang="stylus" scoped>
    @import '../post.styl'

</style>