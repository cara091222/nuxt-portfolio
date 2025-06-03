<template>
    <div class="graphic-design-page">
        <ComponentBanner enName="Portfolio" nameHighlight="作品集" subtitle="Graphic Design" />
        <div class="scrolling">
            <div class="banner padding-share">
                <div class="container-share">
                    <div class="title">
                        <h2 class="en-title">Banner</h2>
                    </div>
                    <h3 class="desc">
                        我常與不同的行銷單位合作，從主視覺到行銷宣傳，確保設計符合行銷目標。<br>
                        我擅長設計清晰有力的Banner與E-DM，有效傳達資訊，並提升點擊率與轉換效果。
                    </h3>
                </div>
                <div class="swiper banner-swiper">
                    <div class="swiper-wrapper banner-wrapper">
                        <div v-for="(item, index) in banner" :key="index" class="swiper-slide banner-slide">
                            <div class="img">
                                <img :src="item.img" alt="">
                            </div>
                            <div class="content">
                                <div class="top">
                                    <h3 class="banner-title">{{ item.title }}</h3>
                                    <span>{{ item.date }}</span>
                                </div>
                                <div class="line"></div>
                                <p class="subtitle">{{ item.subtitle }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="button-wrap">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
            <div class="circle-blue"></div>
            <div class="circle-yello"></div>
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
            banner: [
                {
                    img: '/banner/201807_banner_l.png',
                    title: '86小舖',
                    date: '2021/07',
                    subtitle: '商品廣告Banner',
                },
                {
                    img: '/banner/202008_banner.png',
                    title: '五匹',
                    date: '2020/08',
                    subtitle: '車架商品圖',
                },
                {
                    img: '/banner/201901_banner_l.png',
                    title: '86小舖',
                    date: '2019/01',
                    subtitle: '產品廣告活動banner',
                },
                {
                    img: '/banner/202010_banner.png',
                    title: '小米藍牙耳機',
                    date: '2020/10',
                    subtitle: '耳機產品圖',
                },
                {
                    img: '/banner/201902_banner_l.png',
                    title: '86小舖',
                    date: '2019/02',
                    subtitle: '產品廣告活動banner',
                },
                {
                    img: '/banner/202009_banner.png',
                    title: 'iPhone 12 保貼',
                    date: '2020/09',
                    subtitle: '手機保護貼產品圖',
                },
                {
                    img: '/banner/202105_banner_l.png',
                    title: '86小舖',
                    date: '2021/05',
                    subtitle: '生日慶商品活動banner',
                },
                {
                    img: '/banner/202011_banner.png',
                    title: 'Alesoi 美研所',
                    date: '2020/11',
                    subtitle: '護手霜廣告圖',
                },
                {
                    img: '/banner/202104_banner.png',
                    title: '維克官網',
                    date: '2021/04',
                    subtitle: '周年慶活動banner',
                },
                {
                    img: '/banner/202105_banner-1.png',
                    title: '維克官網',
                    date: '2021/05',
                    subtitle: '新商品活動banner',
                },
                {
                    img: '/banner/202111_banner_l.png',
                    title: '微星MSI',
                    date: '2021/11',
                    subtitle: '商品廣告圖',
                },
                {
                    img: '/banner/202105_banner.png',
                    title: 'Man4Power',
                    date: '2021/05',
                    subtitle: '商品廣告圖',
                },
                {
                    img: '/banner/202109_banner.png',
                    title: '人可和',
                    date: '2021/07',
                    subtitle: '雙11活動廣告Banner',
                },


            ]
        }
    },

    setup() {
        onMounted(() => {
            const bannerSwiper = new Swiper('.banner-swiper', {
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.5,
                        spaceBetween: 25,
                    },

                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 35,
                    },

                    1280: {
                        slidesPerView: 3.5,
                        spaceBetween: 55,
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
            });
        });
    }
}
</script>

<style lang="scss">
.graphic-design-page {
    position: relative;

    .scrolling {
        @include mix.bg;
        height: auto !important;
        position: absolute;
        z-index: 10;
        margin-top: 331px;

        @include bp.media-down(jumbo) {
            margin-top: 310px;
        }

        @include bp.media-down(lg) {
            margin-top: 386px;
        }

        @include bp.media-down(sm) {
            margin-top: 341px;
        }
    }

    // banner輪播
    .banner {

        .container-share {
            @include mix.d-flex(center, center, column);
        }

        .title {
            padding-bottom: 30px;
            border-bottom: 1px dashed var(--color-black);
            width: 100%;
            max-width: 450px;
            margin: auto;

            @include bp.media-down(sm) {
                padding-bottom: 15px;
            }

            .en-title {
                @include mix.en-fontF;
                color: var(--color--black);
                font-size: 56px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-align: center;

                @include bp.media-down(sm) {
                    font-size: 48px;
                }
            }
        }

        .desc {
            padding-top: 30px;
            max-width: 780px;
            width: 100%;
            color: var(--color-sec);
            @include mix.ls(0.4, 20);
            text-align: center;
            font-size: 20px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.4px;

            @include bp.media-down(sm) {
                padding-top: 15px;
            }
        }

        .banner-swiper {
            padding: 80px 0;

            @include bp.media-down(lg) {
                padding: 40px 0;
            }

            .banner-wrapper {
                margin: auto;

                .banner-slide {
                    border-radius: 20px;
                    overflow: hidden;
                    width: auto;
                    position: relative;

                    &:nth-child(even) {
                        margin-top: 60px;
                    }

                    &:hover .content {
                        transform: translateY(0);
                        opacity: 1;
                    }

                    .content {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        background: rgba(255, 255, 255, 0.95);
                        padding: 8px 18px;
                        transform: translateY(100%);
                        opacity: 0;
                        transition: transform 0.4s ease, opacity 0.4s ease;
                        pointer-events: none;

                        @include bp.media-down(sm) {
                            position: relative;
                            opacity: 1;
                            transform: translateY(0);
                        }

                        .top {
                            @include mix.d-flex(space-between, center);
                        }

                        .banner-title {
                            font-size: 18px;
                            @include mix.ls(0.36, 18);
                            font-weight: 500;
                            line-height: 33px;
                            letter-spacing: 0.36px;
                        }

                        span {
                            font-size: 14px;
                            color: var(--color-sec);
                        }

                        .line {
                            height: 3px;
                            width: 40px;
                            background: var(--color-main);
                            margin: 5px 0;
                        }
                    }

                    @media (hover: hover) and (pointer: fine) {
                        &:hover .content {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }
                }
            }

            .button-wrap {
                margin-right: auto;
                margin-top: 80px;
                margin-left: 40px;

                @include bp.media-down(lg) {
                    margin-top: 30px;
                    margin-left: 20px;
                }
            }
        }
    }
}
</style>
