<template>
    <div class="landing-page">
        <div class="container-share">
            <div class="title">
                <h2 class="en-title">Landing Page</h2>
            </div>
            <h3 class="desc ">
                Landing Page除了視覺統一，我有時也會親自拍攝商品，確保畫面的一致性。<br>
                詳情頁面設計以引導使用者操作為重點，可以清楚了解商品的調性與用途。
            </h3>
        </div>
        <div class="landing-page-wrap">
            <!-- mockup -->
            <div class="mockup-frame">
                <div class="swiper mockup-swiper">
                    <div class="swiper-wrapper mockup-wrapper">
                        <div class="swiper-slide mockup-slide">
                            <img src="/landingPage/01_orig.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- gallery -->
            <div class="swiper gallery-swiper">
                <div class="swiper-wrapper gallery-wrapper">
                    <div v-for="(item, index) in gallery" :key="index" class="swiper-slide gallery-slide">
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

    </div>
</template>

<script>
import { onMounted, nextTick } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default {
    data() {
        return {
            gallery: [
                {
                    img: '/landingPage/01_orig.jpg',
                    title: '小米',
                    date: '2020/11',
                    subtitle: '拓牛智能垃圾桶 T3',
                },
                {
                    img: '/landingPage/222_orig.jpg',
                    title: '雲城',
                    date: '2021/03',
                    subtitle: 'Switch手把',
                },
                {
                    img: '/landingPage/333_orig.jpg',
                    title: '小米',
                    date: '2021/03',
                    subtitle: '米家感應夜燈',
                },
                {
                    img: '/landingPage/444_orig.jpg',
                    title: '小米',
                    date: '2020/12',
                    subtitle: '藍牙耳幾超級版',
                },
                {
                    img: '/landingPage/555_orig.jpg',
                    title: 'imos',
                    date: '2020/11',
                    subtitle: 'iPhone12 霧面玻璃手感',
                },
                {
                    img: '/landingPage/12-orig-orig_orig.jpg',
                    title: '蝦皮網拍',
                    date: '2020/11',
                    subtitle: '奈米透氣內褲',
                },
                {
                    img: '/landingPage/picture_orig.jpg',
                    title: 'imos',
                    date: '2020/11',
                    subtitle: 'iPhone12 玻璃保護貼',
                },
                {
                    img: '/landingPage/picture-2_orig.jpg',
                    title: 'Alesoi 美研所',
                    date: '2021/01',
                    subtitle: '好想牽愛爾蘭薔薇護手霜',
                },
            ]
        }
    },

    setup() {
        onMounted(() => {
            const mockupSwiper = new Swiper('.mockup-swiper', {
                direction: "vertical",
                slidesPerView: "auto",
                freeMode: true,
                scrollbar: {
                    el: ".swiper-scrollbar",
                },
                mousewheel: true,
            });

            const gallerySwiper = new Swiper('.gallery-swiper', {
                centeredSlides: true,
                speed: 3000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.5,
                        spaceBetween: 25,
                    },

                    768: {
                        slidesPerView: 2,
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
.landing-page {
    padding: 50px 0 100px 0;

    @include bp.media-down(lg) {
        padding: 30px 0 80px 0;
    }

    @include bp.media-down(sm) {
        padding: 30px 0 50px 0;
    }

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
        @include mix.ls(0.4, 18);
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        line-height: 33px;

        @include bp.media-down(sm) {
            padding-top: 15px;
        }
    }


    &-wrap {
        @include mix.d-flex(space-between, center);
        // padding-top: 80px;

        // @include bp.media-down(lg) {
        //     padding: 40px;
        // }

        // @include bp.media-down(md) {
        //     flex-direction: column;
        // }
    }

    // mockup
    .mockup-frame {
        position: relative;
        max-width: 430px;
        width: 100%;
        margin: auto;

        // @include bp.media-down(md) {
        //     margin: 30px 0;
        // }

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url(/images/phone.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            z-index: 2;
            pointer-events: none;
        }

        .mockup-swiper {
            width: 78%;
            position: relative;
            z-index: 1;
            height: 700px;
            border-radius: 50px;
            overflow: hidden;

            @include bp.media-down(jumbo) {
                width: 68%;
                height: 600px;
            }

            @include bp.media-down(sm) {
                width: 88%;
                height: 400px;
                border-radius: 40px;
            }
        }

        .mockup-wrapper {
            height: auto;
        }

        .mockup-slide {
            img {
                width: 100%;
                display: block;
            }
        }
    }

    // gallery 
    .gallery-swiper {
        width: 100%;
        overflow: hidden;

        .gallery-wrapper {
            width: 100%;
            max-width: 1280px;
            margin-left: 50rem;
            padding-top: 5rem;

            @include bp.media-down(xxl) {
                margin-left: 30rem;
            }

            @include bp.media-down(lg) {
                margin-left: 20rem;
            }

            .gallery-slide {
                border-radius: 20px;
                overflow: hidden;
                height: 500px;
                width: auto;
                position: relative;

                @include bp.media-down(jumbo) {
                    height: 350px;
                }

                @include bp.media-down(sm) {
                    height: 250px;
                }

                img {
                    width: 100%;
                }

                &:nth-child(even) {
                    margin-top: 10rem;

                    @include bp.media-down(sm) {
                        margin-top: 5rem;
                    }
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
                    // pointer-events: none;

                    @include bp.media-down(sm) {
                        position: relative;
                        opacity: 1;
                        transform: translateY(0);
                    }

                    .top {
                        @include mix.d-flex(space-between, center);
                    }

                    .gallery-title {
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
            margin-left: auto;
            margin-top: 80px;
            margin-right: 40px;

            @include bp.media-down(lg) {
                margin-top: 30px;
                margin-right: 10px;
            }
        }
    }


}
</style>