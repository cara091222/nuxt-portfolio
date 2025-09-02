<template>
    <div class="web-page">
        <ComponentBanner enName="Portfolio" nameHighlight="作品集" subtitle="Web Design" />
        <div class="scrolling">
            <div class="web-page-wrap padding-share animation__el fadeUp">
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
                    img: '/web/國泰人壽_cover.png',
                    title: '國泰人壽新住民金融網頁',
                    date: '2025/08',
                    type: '客製化一頁式網頁',
                    skill: 'Vue2 / jQuery  / SCSS / HTML ',
                    desc: '負責網站整體切版與前端互動開發，採用 HTML5、SCSS 與 jQuery 建置響應式版型，並串接 REST API實現資料即時載入。後台結合 ACF 模組化管理內容，搭配多層分類與篩選功能，提升前後端操作效率。',
                    link: 'https://digitspark.co/',
                },
                {
                    img: '/web/DigitSpark.png',
                    title: 'Digit Spark',
                    date: '2025/02',
                    type: '客製化官網',
                    skill: 'jQuery  / SCSS / HTML / WordPress / ACF / REST API ',
                    desc: '負責網站整體切版與前端互動開發，採用 HTML5、SCSS 與 jQuery 建置響應式版型，並串接 REST API實現資料即時載入。後台結合 ACF 模組化管理內容，搭配多層分類與篩選功能，提升前後端操作效率。',
                    link: 'https://digitspark.co/',
                },
                {
                    img: '/web/欣厚.png',
                    title: '欣厚集團',
                    date: '2024/12',
                    type: '客製化官網',
                    skill: 'jQuery / SCSS / HTML / WordPress / ACF / REST API ',
                    desc: '負責全站前端切版與後台功能開發，使用 HTML、SCSS 建構響應式設計，後台搭配 ACF（Advanced Custom Fields）實作模組化內容管理，提供使用者易於操作的後台介面。並透過 REST API 串接前後端資料，實現資料即時載入與動態內容更新。',
                    link: 'https://www.hsihou.com.tw/',
                },
                {
                    img: '/web/樂憶.png',
                    title: '樂憶國際旅行社',
                    date: '2024/10',
                    type: '客製化官網',
                    skill: 'jQuery / SCSS / HTML / WordPress / ACF / REST API',
                    desc: '負責全站前端切版與互動功能開發，使用 HTML、SCSS 建構響應式頁面。透過 jQuery 實作選單展開、頁面切換、動畫效果等互動功能，提升整體使用者流暢性。後台搭配 ACF（Advanced Custom Fields）實作模組化內容管理，提供使用者易於操作的後台介面。並透過 REST API 串接前後端資料，實現資料即時載入與動態內容更新。',
                    link: 'https://www.lovelytravel.com.tw/',
                },
                {
                    img: '/web/新絲路.png',
                    title: '新絲路留遊學',
                    date: '2024/06',
                    type: '半客製官網',
                    skill: 'jQuery / SCSS / HTML / WordPress / ACF ',
                    desc: '網站採用 WordPress 作為內容管理系統，結合 ACF 彈性設計內容結構，方便後台維護與擴充。前端以 HTML5 架構搭配 SCSS 管理樣式，並運用 jQuery 實作互動與動畫效果，打造直覺流暢的使用體驗。整體設計重視 RWD 響應式表現，確保網站在各裝置上的一致性與穩定性。',
                    link: 'https://www.htiedu.tw/',
                },
                {
                    img: '/web/樂田興業.png',
                    title: '樂田興業',
                    date: '2024/04',
                    type: '客製化官網',
                    skill: 'Vue 2 / jQuery / SCSS / HTML ',
                    desc: ' 網站以 Vue 2 為主架構，輔以 jQuery 處理互動特效，搭配 SCSS 優化樣式管理，強化網站可維護性與一致性。整體採用 HTML5 架構規劃，結合動態導覽與視差效果，營造細緻的品牌體驗。專案整合 Vue 元件邏輯與既有 jQuery 插件，確保效能穩定並支援 RWD 響應式設計。',
                    link: 'https://joyfullandscraft.com/',
                },
                {
                    img: '/web/力致.png',
                    title: '力致科技',
                    date: '2024/02',
                    type: '客製化官網',
                    skill: 'Vue2 / jQuery / SCSS / HTML ',
                    desc: '力致科技網站採用 Vue 2 搭配 jQuery 打造動態互動效果，並以 SCSS 管理樣式，提高維護效率。網站結構使用 HTML5 語義化標籤，結合元件化設計與視差動畫，呈現流暢的使用體驗。Vue 與 jQuery 有效整合，兼顧現代框架與既有特效需求，並針對效能與 RWD 進行最佳化，提升跨裝置瀏覽體驗。',
                    link: 'https://www.forcecon.com/',
                },
                {
                    img: '/web/侯醫師.png',
                    title: '侯政宏醫生',
                    date: '2023/12',
                    type: '半客製官網',
                    skill: 'Vue2 / jQuery / SCSS / HTML  ',
                    desc: '負責網站前端製作，使用 Vue 2 架構開發，元件化的設計，能有效於網站的維護及擴充性。全站支援響應式設計，符合使用者閱讀習慣，確保在各種裝置上皆能穩定運行。 ',
                    link: 'https://chenghunghoumd.com/',
                },
                {
                    img: '/web/大福融資.png',
                    title: '大福融資',
                    date: '2023/09',
                    type: '半客製官網',
                    skill: 'Vue2 / JavaScript / SCSS / HTML / WordPress / ACF',
                    desc: '負責網切版與前端互動開發，網站前端使用 Vue 2 實現模組化開發，後端採 WordPress 作為 CMS，結合 REST API 與 ACF 自訂欄位進行內容串接，使後台維護更加彈性並降低使用者操作難度。',
                    link: 'https://dafu885.com.tw/',
                },
                {
                    img: '/web/精心牙醫聯盟.png',
                    title: '精心牙醫聯盟',
                    date: '2023/05',
                    type: '半客製官網',
                    skill: 'Vue2 / JavaScript / SCSS / HTML ',
                    desc: '本網站前端採用 Vue 2 架構開發，提供流暢的操作體驗。透過元件化設計，有效提升程式碼維護效率與網站效能，並具備良好的擴充性，方便後續內容更新與功能追加。全站支援響應式設計，確保在各種裝置上皆能穩定運行。',
                    link: 'https://cittaplus.tw/',
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
                    background-image: url(/images/link.svg);
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