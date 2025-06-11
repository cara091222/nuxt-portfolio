<template>
    <div class="landing-page">
        <div class="container-share">
            <div class="block-title">
                <h2 class="en-title">Landing Page</h2>
            </div>
            <h3 class="block-desc">
                Landing Page除了視覺統一，我有時也會親自拍攝商品，確保畫面的一致性。
                詳情頁面設計以引導使用者操作為重點，可以清楚了解商品的調性與用途。
            </h3>
        </div>
        <div class="landing-page-wrap">
            <!-- mockup swiper -->
            <div class="mockup-frame">
                <div class="swiper mockup-swiper">
                    <div class="swiper-wrapper mockup-wrapper">
                        <div v-for="(item, index) in gallery" :key="index" class="swiper-slide mockup-slide">
                            <img :src="item.img" :alt="item.title" />
                        </div>
                    </div>
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>
            <!-- gallery swiper -->
            <div class="swiper gallery-swiper">
                <div class="swiper-wrapper gallery-wrapper">
                    <div v-for="(item, index) in gallery" :key="index" class="swiper-slide gallery-slide"
                        @click="onGalleryClick(index)">
                        <div class="img">
                            <img :src="item.img" :alt="item.title" />
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
                { img: '/landingPage/01_orig.jpg', title: '小米', date: '2020/11', subtitle: '拓牛智能垃圾桶 T3' },
                { img: '/landingPage/222_orig.jpg', title: '雲城', date: '2021/03', subtitle: 'Switch手把' },
                { img: '/landingPage/333_orig.jpg', title: '小米', date: '2021/03', subtitle: '米家感應夜燈' },
                { img: '/landingPage/444_orig.jpg', title: '小米', date: '2020/12', subtitle: '藍牙耳幾超級版' },
                { img: '/landingPage/555_orig.jpg', title: 'imos', date: '2020/11', subtitle: 'iPhone12 霧面玻璃手感' },
                { img: '/landingPage/12-orig-orig_orig.jpg', title: '蝦皮網拍', date: '2020/11', subtitle: '奈米透氣內褲' },
                { img: '/landingPage/picture_orig.jpg', title: 'imos', date: '2020/11', subtitle: 'iPhone12 玻璃保護貼' },
                { img: '/landingPage/picture-2_orig.jpg', title: 'Alesoi 美研所', date: '2021/01', subtitle: '好想牽愛爾蘭薔薇護手霜' },
            ],
            mockupSwiper: null,
        };
    },

    methods: {
        onGalleryClick(index) {
            if (this.mockupSwiper) {
                this.mockupSwiper.slideTo(index);
            }
        },
    },

    mounted() {
        const mockupSwiper = new Swiper('.mockup-swiper', {
            direction: 'vertical',
            speed: 1000,
            slidesPerView: 'auto',
            freeMode: true,
            mousewheel: true,
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
                hide: false,
            },
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
                0: { slidesPerView: 1.5, spaceBetween: 25 },
                768: { slidesPerView: 2, spaceBetween: 35 },
                1280: { slidesPerView: 3.5, spaceBetween: 55 },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        nextTick(() => {
            this.mockupSwiper = mockupSwiper;
        });
    },
};
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

    &-wrap {
        @include mix.d-flex(space-between, center);
        // padding-top: 80px;

        @include bp.media-down(jumbo) {
            padding-top: 40px;
        }

        @include bp.media-down(md) {
            flex-direction: column;
            gap: 10px;
            // padding-top: 0;
        }
    }

    // mockup
    .mockup-frame {
        position: relative;
        max-width: 430px;
        width: 100%;
        height: 700px;
        margin: auto;

        @include bp.media-down(lg) {
            height: 500px;
        }

        @include bp.media-down(md) {
            height: 400px;
        }

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url(/images/phone_02.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            z-index: 2;
            pointer-events: none;
        }

        .swiper-scrollbar {
            position: absolute;
            right: 5px;
            top: 0;
            bottom: 0;
            width: 6px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            z-index: 10;

            @include bp.media-down(lg) {
                right: 3px;
            }

            @include bp.media-down(md) {
                right: 1px;
            }
        }

        .swiper-scrollbar-drag {
            background: rgba(0, 0, 0, 0.5);
            border-radius: 3px;
        }

        .mockup-swiper {
            width:320px;
            @include mix.poa-center;
            z-index: 1;
            height: 95%;
            border-radius: 50px;
            overflow: hidden;

            @include bp.media-down(lg) {
                width: 230px;
                border-radius: 40px;
                height: 96%;
            }

            @include bp.media-down(md) {
                width: 180px;
                border-radius: 30px;
            }
        }

        .mockup-wrapper {
            height: auto;
        }

        .mockup-slide {

            img {
                width: 100%;
                height: 100%;
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

            @include bp.media-down(md) {
                margin-left: 0;
            }

            .gallery-slide {
                border-radius: 20px;
                overflow: hidden;
                height: 450px;
                width: auto;
                position: relative;

                @include bp.media-down(jumbo) {
                    height: 350px;
                }

                // @include bp.media-down(sm) {
                //     height: 320px;
                // }

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
                    pointer-events: none;

                    @include bp.media-down(sm) {
                        position: absolute;
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