<template>
    <div class="ui-page">
        <ComponentBanner enName="Portfolio" nameHighlight="作品集" subtitle="UI / UX" />
        <div class="scrolling">
            <div class="ui-wrap padding-share">
                <div class="container-share">
                    <h3 class="block-desc">
                    以使用者為核心，結合視覺美感與功能性，打造直覺流暢的操作體驗。從使用者研究到介面設計，我皆參與討論與設計，確保每個細節符合使用者需求，提升產品價值與互動體驗。
                    </h3>
                    <div class="swiper ui-swiper">
                        <div class="swiper-wrapper ui-wrapper">
                            <div v-for="(item, index) in ui" :key="index" class="swiper-slide ui-slide">
                                <div class="img">
                                    <img :src="item.img" alt="" />
                                </div>
                                <div class="content">
                                    <h3 class="title">{{ item.title }} <span>{{ item.date }}</span> </h3>
                                    <h4 class="subtitle">{{ item.subtitle }}</h4>
                                    <div class="desc">
                                        <div class="item" v-for="(descItem, i) in item.descList" :key="i">
                                            <p class="item-title title-small-share">{{ descItem.title }}</p>
                                            <p class="item-desc">{{ descItem.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
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
import { onMounted, nextTick } from "vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

export default {
    data() {
        return {
            ui: [
                {
                    img: '/UI/鑫創.png',
                    title: '鑫創電子股份有限公司',
                    date: '2023/10',
                    subtitle: '本網站以「科技感 × 工業應用」為設計核心，透過視覺想要傳達 SINTRONES 專注於車載運算、智慧工業與 AI 解決方案的專業形象。',
                    descList: [
                        {
                            title: '科技未來感的視覺主軸',
                            desc: '以深色基調搭配科技感為首頁視覺圖，展現出智慧運輸與高階計算的未來場景。'
                        },
                        {
                            title: '明確的資訊架構',
                            desc: '版面以清晰的區塊設計，傳遞「核心技術」、「應用場域」、「產品分類」等重點資訊。使用大量留白與平衡的對齊排版，讓使用者在瀏覽時不會有視覺疲勞。'
                        },
                        {
                            title: '品牌色彩與圖像應用',
                            desc: '選用黑、白、橙三色為品牌主色，橙色作為點綴色，增加科技感與辨識度。搭配科技感素材，傳遞專業與可信賴的形象。'
                        },
                        {
                            title: '互動式內容呈現',
                            desc: '輪播互動的設計，表現出使用者導向的 UX 思維。影音與部落格區塊則帶出動態與知識傳遞的品牌溝通方式，提升網站的活潑度與停留率。'
                        },
                    ]
                },
                {
                    img: '/UI/加賀屋.png',
                    title: '加賀屋',
                    date: '2023/10',
                    subtitle: '本網站以「科技感 × 工業應用」為設計核心，透過視覺想要傳達 SINTRONES 專注於車載運算、智慧工業與 AI 解決方案的專業形象。',
                    descList: [
                        {
                            title: '科技未來感的視覺主軸',
                            desc: '以深色基調搭配科技感為首頁視覺圖，展現出智慧運輸與高階計算的未來場景。'
                        },
                        {
                            title: '明確的資訊架構',
                            desc: '版面以清晰的區塊設計，傳遞「核心技術」、「應用場域」、「產品分類」等重點資訊。使用大量留白與平衡的對齊排版，讓使用者在瀏覽時不會有視覺疲勞。'
                        },
                        {
                            title: '品牌色彩與圖像應用',
                            desc: '選用黑、白、橙三色為品牌主色，橙色作為點綴色，增加科技感與辨識度。搭配科技感素材，傳遞專業與可信賴的形象。'
                        },
                        {
                            title: '互動式內容呈現',
                            desc: '輪播互動的設計，表現出使用者導向的 UX 思維。影音與部落格區塊則帶出動態與知識傳遞的品牌溝通方式，提升網站的活潑度與停留率。'
                        },
                    ]
                },
            ]
        };
    },

    mounted() {
        const swiper = new Swiper(".ui-swiper", {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 30,
            mousewheel: {
                forceToAxis: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                0: {
                    direction: "horizontal",
                },
                1024: {
                    direction: "vertical",
                },
            },
        });

        // ✅ 阻止 .img 區塊的 mousewheel 傳給 Swiper
        const imgScrolls = document.querySelectorAll(".img");
        imgScrolls.forEach((img) => {
            img.addEventListener(
                "wheel",
                (e) => {
                    const isScrollable = img.scrollHeight > img.clientHeight;
                    const atTop = img.scrollTop === 0;
                    const atBottom = img.scrollTop + img.clientHeight >= img.scrollHeight;

                    if (
                        (e.deltaY < 0 && !atTop) || // scrolling up but not at top
                        (e.deltaY > 0 && !atBottom) // scrolling down but not at bottom
                    ) {
                        e.stopPropagation(); // prevent triggering Swiper
                    }
                },
                { passive: false }
            );
        });
    },
};
</script>

<style lang="scss">
.ui-page {
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
    }

    .block-desc {
        padding-bottom: 80px;
        margin: auto;

        @include bp.media-down(lg) {
            padding-bottom: 40px;
        }
    }

    .ui-swiper {
        width: 100%;
        height: 720px;
        overflow: hidden;
        border-radius: 80px;
        border: 1px solid #000;
        background: rgba(255, 255, 255, 0.5);

        @include bp.media-down(lg) {
            height: 100%;
            border-radius: 0;
            border: none;
            background: inherit;
            overflow: auto;
        }

        .swiper-pagination {
            flex-direction: column;
            gap: 5px;
            margin-right: 10px;

            @include bp.media-down(lg) {
                flex-direction: row;
            }

            .swiper-pagination-bullet {
                width: 10px;
                height: 10px;

                &.swiper-pagination-bullet-active::after {
                    top: -3px;
                    left: -3px;
                    width: 16px;
                    height: 16px;
                }
            }
        }

        .ui-wrapper {
            width: 100%;
            height: 100%;

            .ui-slide {
                @include mix.d-flex(center, flex-start);
                width: 100%;
                overflow: hidden;
                display: flex;
                height: 100%;

                @include bp.media-down(lg) {
                    flex-direction: column;
                    gap: 30px;
                }

                @include bp.media-down(sm) {
                    gap: 20px;
                }

                .img {
                    width: 55%;
                    height: 100%;
                    margin-right: auto;
                    overflow-y: auto;

                    @include bp.media-down(xxl) {
                        width: 50%;
                    }

                    @include bp.media-down(lg) {
                        width: 100%;
                        height: 350px;
                        border-radius: 40px;
                        border: 1px solid #000;
                    }

                    @include bp.media-down(sm) {
                        border-radius: 30px;
                    }

                    img {
                        width: 100%;
                    }
                }

                .content {
                    width: 45%;
                    padding: 40px 65px;
                    overflow: visible;

                    @include bp.media-down(xxl) {
                        width: 50%;
                    }

                    @include bp.media-down(lg) {
                        padding: 20px 30px;
                        width: 100%;
                        height: 100%;
                    }

                    @include bp.media-down(sm) {
                        padding: 15px;
                    }

                    .title {
                        @include mix.d-flex(space-between,end);
                        color: var(--color-black);
                        @include mix.ls(0.48, 24);
                        font-size: 24px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 30px;
                        padding-left: 25px;
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

                    .subtitle {
                        color: #000;
                        font-size: 18px;
                        @include mix.ls(0.36, 18);
                        font-style: normal;
                        font-weight: 400;
                        line-height: 30px;
                        letter-spacing: 0.36px;
                        padding-top: 22px;

                        @include bp.media-down(sm) {
                            padding-top: 20px;
                        }
                    }

                    .desc {
                        padding: 35px 0 0 0 ;
                        text-align: left;
                        display: grid;
                        gap: 20px;
                        grid-template-columns: repeat(1, 1fr);

                        @include bp.media-down(sm) {
                            padding-top: 20px;
                        }

                        .item-desc {
                            color: var(--color-sec);
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 26px;
                            letter-spacing: 0.36px;
                            padding-top: 5px;
                        }
                    }
                }
            }
        }
    }
}
</style>
