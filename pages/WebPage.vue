<template>
    <div class="web-page">
        <ComponentBanner enName="Portfolio" nameHighlight="作品集" subtitle="Web Design" />
        <div class="scrolling">
            <div class="web-page-wrap padding-share">
                <div class="container-share">
                    <h3 class="block-desc">我具備網站前端切版與 WordPress 串接的實作經驗，熟悉 HTML、CSS、JavaScript，並能運用 ACF（Advanced Custom
                        Fields）製作彈性後台，提升網站的維護效率與編輯體驗。</h3>
                    <div class="item-wrap">
                        <div v-for="(item, index) in web" :key="index" class="item">
                            <a :href="item.link" class="item-img img-cover" target="_blank">
                                <img :src="item.img" alt="">
                            </a>
                            <div class="item-content">
                                <h3 class="item-title">{{ item.title }}<span>{{ item.date }}</span> </h3>
                                <p class="item-type">類型：{{ item.type }}</p>
                                <p class="item-skill">選用技術：{{ item.skill }}</p>
                                <p class="item-desc">{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter />
            <div class="circle-blue-b"></div>
            <div class="circle-yellow-b"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            web: [
                {
                    img: '/web/DigitSpark.png',
                    title: 'Digit Spark',
                    date: '2025/02',
                    type: '客製化官網',
                    skill: 'JavaScript / SCSS / HTML / WordPress / ACF / REST API ',
                    desc: '負責網站整體切版與前端互動開發，採用 HTML5、SCSS 與 jQuery 建置響應式版型，並串接 REST API實現資料即時載入。後台結合 ACF 模組化管理內容，搭配多層分類與篩選功能，提升前後端操作效率。',
                    link: 'https://digitspark.co/',
                },
                {
                    img: '/web/樂憶.png',
                    title: '樂憶國際旅行社',
                    date: '2024/10',
                    type: '客製化官網',
                    skill: 'jQuery / SCSS / HTML / WordPress / ACF / REST API ',
                    desc: '負責全站前端切版與互動功能開發，使用 HTML、SCSS 建構響應式頁面。透過 jQuery 實作選單展開、頁面切換、動畫效果等互動功能，提升整體使用者流暢性。後台搭配 ACF（Advanced Custom Fields）實作模組化內容管理，提供非技術人員易於操作的後台介面。並透過 REST API 串接前後端資料，實現資料即時載入與動態內容更新。',
                    link: 'https://www.lovelytravel.com.tw/',
                },
            ]
        };
    },
};
</script>

<style lang="scss">
.web-page {
    position: relative;

    .scrolling {
        @include mix.bg;
        height: auto !important;
        position: absolute;
        z-index: 10;
        margin-top: 332px;
        overflow: hidden;

        @include bp.media-down(jumbo) {
            margin-top: 250px;
        }

        @include bp.media-down(lg) {
            margin-top: 326px;
        }

        @include bp.media-down(sm) {
            margin-top: 283px;
        }

        .container-share {
            @include mix.d-flex(center, center, column);
        }
    }

    .block-desc {
        padding-bottom: 80px;
        margin: auto;

        @include bp.media-down(lg) {
            padding-bottom: 40px;
        }
    }

    .item-wrap {
        max-width: 1250px;
        width: 100%;
        height: 100%;
        @include mix.d-flex(center, center, column);
        gap: 60px;

        @include bp.media-down(sm) {
            gap: 30px;
        }

        .item {
            @include mix.d-flex(space-around, start);
            gap: 60px;
            width: 100%;

            @include bp.media-down (lg) {
                flex-direction: column;
                gap: 30px;
            }

            @include bp.media-down (sm) {
                gap: 20px;
            }

            &:nth-child(even) {
                flex-direction: row-reverse;

                @include bp.media-down (lg) {
                    flex-direction: column;
                }
            }

            .img-cover {
                border-radius: 30px;
                overflow: hidden;
                width: 45%;
                padding-top: calc(560px / 1.89);
                position: relative;

                @include bp.media-down (lg) {
                    width: 100%;
                }

                @include bp.media-down (sm) {
                    border-radius: 20px;
                    padding-top: calc(420px / 1.89);
                }

                &:hover::after {
                    opacity: 1;
                    overflow: visible;
                }

                &:hover::before {
                    opacity: 1;
                    overflow: visible;
                }

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.50);
                    opacity: 0;
                    overflow: hidden;
                    transition: all .3s ease-in-out;
                }

                &::before {
                    content: '';
                    @include mix.poa-center;
                    background-image: url(/public/images/link.svg);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 70px;
                    height: 70px;
                    z-index: 1;
                    opacity: 0;
                    overflow: hidden;
                    transition: all .3s ease-in-out;
                }
            }

            .item-content {
                width: 55%;
                max-width: 630px;

                @include bp.media-down (lg) {
                    width: 100%;
                }
            }

            .item-title {
                @include mix.d-flex(space-between, end);
                color: var(--color-black);
                @include mix.ls(0.48, 24);
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: 30px;
                padding-left: 25px;
                margin-bottom: 15px;
                border-left: 8px solid var(--color-main);

                >span {
                    font-size: 14px;
                    color: var(--color-white);
                    font-weight: 400;
                    padding: 0 15px;
                    background: var(--color-sec);
                    border-radius: 50rem;
                    word-break: keep-all;
                }

                @include bp.media-down(sm) {
                    font-size: 22px;
                    padding-left: 15px;
                }
            }

            .item-type,
            .item-skill {
                color: var(--color-black);
                font-size: 18px;
                @include mix.ls(0.36, 18);
                font-weight: 400;
                line-height: 30px;
            }

            .item-desc {
                padding-top: 15px;
                font-size: 16px;
                color: var(--color-sec);
            }
        }
    }
}
</style>