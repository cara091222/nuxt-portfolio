<template>
    <div class="home-portfolio" id="HomePortfolio">
        <div class="title-share">
            <h3 class="title-en">Portfolio</h3>
            <h2 class="title-main-share">作品集</h2>
        </div>
        <div class="swiper portfolio-swiper">
            <div class="swiper-wrapper portfolio-wrapper">
                <a v-for="(item, index) in portfolio" :key="index" class="swiper-slide portfolio-slide"
                    :href="item.link">
                    <div class="img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="title-wrap">
                        <p class="title">{{ item.title }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="black" />
                            <path d="M15.1666 12.8335L19.8333 17.5002L15.1666 22.1668" fill="black" />
                            <path d="M15.1666 12.8335L19.8333 17.5002L15.1666 22.1668" stroke="white"
                                stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </a>
            </div>
            <div class="button-wrap">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
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
        const base = [
            {
                img: '/images/graphic_design_cover.png',
                title: 'Graphic Design',
                link: '/GraphicDesignPage',
            },
            {
                img: '/images/ui_cover.png',
                title: 'UI / UX',
                link: '/UIUXPage',
            },
            {
                img: '/images/web_cover.png',
                title: 'Web Design',
                link: '/WebPage',
            },
        ];

        return {
            portfolio: [...base, ...base], // 複製一次，變成 6 個
        };
    },

    setup() {
        onMounted(() => {
            const portfolioSwiper = new Swiper('.portfolio-swiper', {
                direction: 'horizontal',
                loop: true,
                effect: 'coverflow',
                centeredSlides: 'auto',
                slidesPerView: 'auto',
                // spaceBetween: 30,
                coverflowEffect: {
                    rotate: 0, // 滑塊旋轉角度，根據需要調整
                    stretch: 20, // 滑塊之間的拉伸距離
                    depth: 500, // 滑塊的深度效果
                    modifier: 1, // 效果倍增器
                    slideShadows: false,
                },
                speed: 2000,
                initialSlide: 0,
                autoplay: {
                    delay: 3000,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
            });
        });
    },
};
</script>

<style lang="scss">
.home-portfolio {
    padding: 50px 0 100px 0;
    @include mix.d-flex(center, center, column);

    @include bp.media-down(lg) {
        padding: 30px 0 80px 0;
    }

    @include bp.media-down(sm) {
        padding: 30px 0 50px 0;
    }

    .title-share {
        border: 0;
        margin-bottom: 0;
    }

    .portfolio-swiper {
        height: 100%;
        max-width: 100%;
    }

    .portfolio-wrapper {
        max-width: 100%;
    }

    .portfolio-slide {
        padding: 60px 0;
        width: 560px;
        height: auto;
        @include mix.d-flex(center, center, column);

        &:not(.swiper-slide-active) {
            filter: blur(15px);
        }

        // 只有 active 有 drop shadow 且無模糊
        &.swiper-slide-active .img {
            filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.24));
        }

        @include bp.media-down(jumbo) {
            width: 360px;
            padding: 30px 0;
        }

        @include bp.media-down(sm) {
            width: 320px;
        }

        .img {
            width: 100%;
            height: 100%;
            border-radius: 30px;
            overflow: hidden;
            transition: filter 0.5s ease;

            @include bp.media-down(sm) {
                border-radius: 20px;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }

        .title-wrap {
            @include mix.d-flex(center, center);
            gap: 15px;
            padding: 8px 15px 8px 35px;
            background: var(--color-white);
            border-radius: 50px;
            border: 1px solid var(--color-black);
            position: relative;
            z-index: 2;
            margin-top: -30px;

            .title {
                color: var(--color-black);
                text-align: center;
                font-size: 27px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

                @include bp.media-down(jumbo) {
                    font-size: 24px;
                }

                @include bp.media-down(jumbo) {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>