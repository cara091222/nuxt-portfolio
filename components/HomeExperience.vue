<template>
    <div class="home-experience padding-share animation__el fadeUp" id="HomeExperience">
        <div class="container-share">
            <div class="title-share">
                <h3 class="title-en animation__el fadeUp delay__750">Experience</h3>
                <h2 class="title-main-share">工作經歷</h2>
            </div>
            <div class="home-experience-wrap">
                <!-- timeline -->
                <div class="swiper timeline-swiper">
                    <div class="swiper-wrapper timeline-wrapper">
                        <div v-for="(item, index) in years" :key="index" class="swiper-slide timeline-slide">
                            <p class="timeline-slide-year">{{ item.year }}</p>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="line"></div>
                </div>
                <!-- 經歷 -->
                <div class="swiper content-swiper">
                    <div class="swiper-wrapper content-wrapper">
                        <div v-for="(item, index) in content" :key="index" class="swiper-slide content-slide">
                            <div class="info">
                                <div class="logo">
                                    <img :src="item.logo" alt="">
                                </div>
                                <div class="company">
                                    <h2 class="title-medium-share">{{ item.company }}</h2>
                                    <p class="year">{{ item.date }}</p>
                                </div>
                            </div>
                            <div class="content">
                                <h3 class="title-small-share">{{ item.title }}</h3>
                                <ul>
                                    <li v-for="(line, i) in item.text" :key="i">{{ line }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default {
    data() {
        return {
            years: [
                {
                    year: '2025',
                },
                {
                    year: '2021',
                },
                {
                    year: '2019',
                },
                {
                    year: '2018',
                },
            ],

            content: [
                {
                    logo: '/logo/digit_spark.png',
                    company: '震豪網路媒體股份有限公司',
                    date: '2021年 - 2025年',
                    title: '網頁設計師 / 網頁前端工程師',
                    text: [
                        '負責專案網站的設計與前端開發，提供兼具美感與使用者體驗的網頁介面設計。',
                        '使用 WordPress架站，結合 ACF（Advanced Custom Fields） 與自訂後台欄位，提升內容管理效率與彈性。',
                        '與團隊協作，實作 WordPress 客製化主題與模板，並串接資料動態顯示功能。',
                        '熟悉 HTML、SCSS、jQuery，能獨立完成 RWD 響應式網頁與互動動態效果。',
                        '結合 GSAP、Swiper 等前端函式庫，優化頁面動畫與使用者操作體驗。',
                    ]
                },
                {
                    logo: '/logo/goshop.png',
                    company: 'Goshop嚴選研究室',
                    date: '2020年 - 2021年',
                    title: '平面設計師',
                    text: [
                        'GOSHOP 為 2011 年成立的新創電子商務公司，主力銷售電子周邊商品與自有品牌產品。',
                        '負責各大電商平台所需的設計素材，包含商品詳情頁、行銷活動圖、廣告橫幅等。 Custom Fields） 與自訂後台欄位，提升內容管理效率與彈性。',
                        '與團隊成員（商品企劃、攝影、行銷）密切合作，確保每個商品專案具備完整且一致的視覺呈現。',
                    ]
                },
                {
                    logo: '/logo/86shop.png',
                    company: '美合國際實業股份有限公司（86小舖）',
                    date: '2018年 - 2019年',
                    title: '平面設計師',
                    text: [
                        '首次進入電子商務領域，參與保養品與美妝類產品的視覺設計工作。',
                        '負責設計日常行銷素材、活動主視覺與社群廣告素材。',
                        '與企劃團隊密切討論設計方向，強化產品視覺表現，提升品牌識別度與轉換率。 ',
                    ]
                },
                {
                    logo: '/logo/大洋電子.png',
                    company: '大洋國際電子',
                    date: '2015年 - 2018年',
                    title: '平面設計師',
                    text: [
                        '負責商品拍攝、圖片後製與多樣平面素材設計，如商品圖、網站 Banner、海報、EDM、產品文宣等。',
                        '維護品牌在各大電商平台（如 PChome、Yahoo 購物、蝦皮等）後台的商品上架與圖片更新。',
                        '協助製作銷售報表、處理基本客服事務，使工作內容更加多元並提升問題解決能力。 ',
                    ]
                },
            ]
        }
    },

    setup() {
        onMounted(() => {
            // 初始化 timeline swiper
            const timelineSwiper = new Swiper('.timeline-swiper', {
                slidesPerView: 1,
                centeredSlides: true,
                speed: 1500,
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });

            // 初始化 content swiper
            const contentSwiper = new Swiper('.content-swiper', {
                slidesPerView: 1,
                centeredSlides: true,
                speed: 1500,
                spaceBetween: 150,
            });

            // 同步兩個 Swiper 的索引
            function syncTimelineSwiper(index) {
                timelineSwiper.slideToLoop(index);
            }

            function syncContentSwiper(index) {
                contentSwiper.slideToLoop(index);
            }

            // 當 contentSwiper 改變時，手動更新 timelineSwiper
            contentSwiper.on('slideChange', () => {
                const realIndex = contentSwiper.realIndex;
                syncTimelineSwiper(realIndex);
            });

            // 當 timelineSwiper 改變時，手動更新 contentSwiper
            timelineSwiper.on('slideChange', () => {
                const realIndex = timelineSwiper.realIndex;
                syncContentSwiper(realIndex);
            });

            // 初始化時同步兩邊
            syncTimelineSwiper(contentSwiper.realIndex);
        });
    },
};
</script>


<style lang="scss">
.home-experience {
    .container-share {
        max-width: 1350px;
        @include mix.d-flex(center, center, column);
    }

    &-wrap {
        width: 100%;
    }

    // 年份
    .timeline-swiper {
        width: 100%;

        .timeline-slide {
            width: 100%;
            padding-bottom: 75px;

            @include bp.media-down(xxl) {
                padding-bottom: 55px;
            }

            &-year {
                color: var(--color-black);
                @include mix.en-fontF;
                @include mix.ls(4, 180);
                font-size: 180px;
                font-weight: 700;
                line-height: normal;
                text-align: center;

                @include bp.media-down(xxl) {
                    font-size: 100px;
                }

                @include bp.media-down(sm) {
                    font-size: 76px;
                }
            }
        }

        .swiper-pagination {
            @include mix.d-flex(center, center);
            gap: 200px;

            @include bp.media-down(lg) {
                gap: 180px;
            }

            @include bp.media-down(sm) {
                gap: 50px;
            }

            .swiper-pagination-bullet {
                position: relative;
                width: 15px;
                height: 15px;
                background: var(--color-main);
                border-radius: 50%;
                opacity: 1;
                transition: all 0.3s ease-in-out;

                &.swiper-pagination-bullet-active::after {
                    content: "";
                    position: absolute;
                    top: -6px;
                    left: -6px;
                    width: 27px;
                    height: 27px;
                    border: 1px solid var(--color-main);
                    border-radius: 50%;
                    box-sizing: border-box;
                    animation: pulseRing 2s infinite ease-in-out;
                }

                @keyframes pulseRing {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }

                    50% {
                        transform: scale(1.2);
                        opacity: 0.5;
                    }

                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            }
        }

        .line {
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, rgba(49, 255, 193, 0.00) 0%, #31FFC1 50.3%, rgba(49, 255, 193, 0.00) 100%);
            position: absolute;
            content: '';
            bottom: 15px;
            left: 0;
        }
    }

    // 內容
    .content-swiper {
        width: 100%;
        padding-top: 35px;

        @include bp.media-down(lg) {
            padding-top: 20px;
        }

        .content-slide {
            @include mix.d-flex(flex-start, center);
            gap: 100px;

            @include bp.media-down(lg) {
                flex-direction: column;
                gap: 10px;
                justify-content: flex-start;
            }

            .info {
                @include mix.d-flex(center, center, column);


                @include bp.media-down(lg) {
                    flex-direction: row;
                    gap: 30px;
                }

                @include bp.media-down(sm) {
                    justify-content: flex-start;
                    width: 100%;
                    gap: 15px;
                }


                .logo {
                    width: 100%;
                    max-width: 150px;
                    height: 100%;

                    @include bp.media-down (sm) {
                        max-width: 120px;
                    }
                }

                .company {
                    @include mix.d-flex(center, center, column);
                    text-align: center;
                    position: relative;

                    @include bp.media-down (lg) {
                        padding-left: 30px;
                        border-left: 1px solid var(--color-black);
                        text-align: left;
                        align-items: flex-start;
                    }

                    @include bp.media-down (sm) {
                        padding-left: 15px;
                    }
                }

                .year {
                    padding-top: 5px;

                }
            }

            .content {
                max-width: 810px;
                width: 100%;

                @include bp.media-down(sm) {
                    .title-small-share {
                        background: var(--color-white);
                        padding: 10px;
                        border-radius: 50px;
                        text-align: center;
                    }
                }

                ul {
                    padding: 20px 0 0 30px;
                }

                li {
                    color: var(--color-sec);
                    list-style: outside;
                    line-height: normal;
                }

                li+li {

                    padding-top: 10px;
                }
            }
        }
    }
}
</style>
