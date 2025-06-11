<template>
    <div class="home-about padding-small-share" id="HomeAbout">
        <div class="container-share">
            <div class="home-about-wrap">
                <div class="content">
                    <div class="title">
                        <h2 class="title-main-share">關於我</h2>
                        <h3 class="title-en animation__el fadeLeft delay__750">About</h3>
                    </div>
                    <p v-for="(item, index) in desc" :key="index" class="desc">{{ item.text }}</p>
                </div>
                <div class="img">
                    <img src="/images/tool.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jQuery from "jquery";

export default {

    data() {
        return {
            desc: [
                {
                    text: '我是一位具備七年設計經驗的網頁設計師，從平面設計起步，熟悉商品頁設計、行銷視覺製作與品牌形象建構。在實務中我深刻體會到設計不僅是美觀，更需要與行銷策略結合，讓視覺有效傳遞產品價值。',
                },
                {
                    text: '2021 年起，我加入震豪網路媒體，開始接觸網頁設計與前端技術。透過自學與實務操作，我熟悉 HTML、CSS、jQuery 並能運用 WordPress進行網站製作與後台串接，逐漸跨足前端工程的領域。',
                },
                {
                    text: '雖非科班出身，但我樂於學習、積極進修，努力朝全方位工程師的目標邁進。我相信設計是連結用戶與品牌的重要橋樑，我也希望將自身的美感、邏輯與技術整合，創造更多兼具美觀與實用的數位體驗。',
                },
            ]
        }
    },

    mounted() {
        const el = this.$el.querySelector('.animation__el')
        if (el) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in')
                        observer.unobserve(entry.target)  // 只加一次
                    }
                })
            }, {
                threshold: 0.1,
            })
            observer.observe(el)
        }
    }
}
</script>


<style lang="scss">
.home-about {
    position: relative;
    z-index: 1;

    .container-share {
        max-width: 1350px;
    }

    &-wrap {
        @include mix.d-flex(space-between, center);
        gap: 120px;

        @include bp.media-down(lg) {
            flex-direction: column;
            gap: 40px;
        }

        .content {
            @include mix.d-flex(start, start, column);
            max-width: 760px;

            .title {
                @include mix.d-flex(start, baseline);
                width: 100%;
                border-bottom: 1px dashed var(--color-black);
                padding-bottom: 30px;
                margin-bottom: 30px;

                // @include bp.media-down(sm) {
                //     padding-bottom: 15px;
                //     margin-bottom: 15px;
                // }

                .title-en {
                    margin-left: -3rem;
                }
            }

            .desc {
                color: var(--color-sec);
            }

            .desc+.desc {
                padding-top: 15px;
            }
        }

        .img {
            max-width: 375px;
            padding: 30px;
            width: 100%;
            height: 100%;

            @include bp.media-down(sm) {
                width: 85%;
            }
        }
    }
}
</style>