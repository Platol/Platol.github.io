<template>
    <div id="home">
        <ul>
            <li
                v-for="(item, index) in posts"
                :key="index"
            >
                <router-link :to="item.path" class="link">
                    <h2>{{emoji[Math.floor(Math.random()*(emoji.length))]}} {{item.title}}</h2>
                    <h3>{{item.subTitle}}</h3>
                    <p v-if="item.summary">{{item.summary}}</p>
                </router-link>
                <div class="date-and-tags">
                    <span>{{item.date}} 发布</span>
                    <strong>
                        标签：
                        <span
                            v-for="(tag, idx) in item.tags"
                            :key="idx"
                        >
                            <i v-if="idx">，</i>
                            <b>{{tag}}</b>
                        </span>
                    </strong>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import posts from '../posts.json'


export default {
    data() {
        return {
            posts,
            emoji: [
                '👍', '💎', '⚡', '😋', '🚀', '😍', '👌', '👉', '💪', '🍉', '🚩', '🎨'
            ],
        }
    }
}
</script>

<style lang="stylus" scoped>
    li
        border-bottom 1px solid #eee
        padding-bottom 32px
        margin-bottom 32px
    .link
        display block

        h2, h3, p
            margin 0
            font-family "华文中宋"
            &:hover
                color blue
        h2
            color #111
            line-height 44px
        h3
            font-size 16px
            color #222
            line-height 28px
            margin 4px 0
        p
            font-size 14px
            color #444
            line-height 24px
            background-color #fafafa
            border 1px solid #eee
            padding 12px
            text-indent 2em
            &:first-letter
                font-size 20px

    .date-and-tags
        color #999
        line-height 20px
        margin-top 8px
        font-size 12px

        &>span
            font-style italic
            font-family "Times New Roman"
            margin-right 20px
        strong
            font-weight normal

            span
                i
                    font-style normal
                b
                    font-weight normal
                    color MidnightBlue
                    cursor pointer
                    &:hover
                        text-decoration underline
                        color blue

    
    @media screen and (max-width 767px)
        h2, h3, p
            pointer-events none     // 阻止移动端点击时触发 :hover

</style>