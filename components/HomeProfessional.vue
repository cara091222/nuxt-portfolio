<template>
    <div class="home-professional ">
        <div class="container-share">
            <div class="home-professional-wrap">
                <div class="title-share">
                    <h3 class="title-en">Skill</h3>
                    <h2 class="title-main-share">專業技能</h2>
                </div>
                <div class="skill">
                    <div v-for="(item, index) in skill" :key="index" class="item">
                        <p class="title">{{ item.title }}</p>
                        <div class="bar-wrapper">
                            <div class="bar" :data-width="item.width"></div>
                            <div class="bar-percent">{{ item.percent }}</div>
                        </div>
                    </div>

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
            skill: [
                {
                    title: 'photoshop',
                    width: '85%',
                    percent: '85%',
                },
                {
                    title: 'ILLUSTRATOR',
                    width: '75%',
                    percent: '75%',
                },
                {
                    title: 'figma',
                    width: '80%',
                    percent: '80%',
                },
                {
                    title: 'JAVASCRIPT',
                    width: '80%',
                    percent: '80%',
                },
                {
                    title: 'HTML & CSS',
                    width: '85%',
                    percent: '85%',
                },
                {
                    title: 'WordPress',
                    width: '70%',
                    percent: '70%',
                },
            ]
        }
    },

    mounted() {
        const $ = jQuery;

        // 技能進度條動畫（scroll 觸發）
        let animated = false;

        function animateSkills() {
            if (animated) return;

            const skillSection = $(".home-professional");
            if (skillSection.length === 0) return;

            const windowBottom = $(window).scrollTop() + $(window).height();
            const sectionTop = skillSection.offset().top;

            if (windowBottom > sectionTop + 100) {
                animated = true;

                $(".bar").each(function () {
                    const $bar = $(this);
                    const targetPercent = parseInt($bar.attr("data-width"));
                    $bar.css("width", "0");

                    $bar.animate(
                        { width: targetPercent + "%" },
                        {
                            duration: 1500,
                            step: function (now) {
                                $bar.siblings(".bar-percent").text(Math.round(now) + "%");
                            },
                        }
                    );
                });
            }
        }

        // 滾動事件監聽
        $(window).on("scroll", animateSkills);
        animateSkills(); // 頁面載入時也執行一次
    },
};
</script>


<style lang="scss">
.home-professional {
    margin: 50px 0;
    position: relative;
    z-index: 2;

    @include bp.media-down(sm) {
            margin: 30px 0;
    }

    &-wrap {
        @include mix.d-flex(center, center, column);
        border-radius: 80px;
        border: 1px solid #000;
        background: rgba(255, 255, 255, 0.50);
        padding: 100px;

        @include bp.media-down(lg) {
            padding: 80px;
        }

        @include bp.media-down(sm) {
            padding: 30px;
            border-radius: 35px;
        }
    }

    .skill {
        width: 840px;
        margin: auto;

        @include bp.media-down(xl) {
            width: 100%;
        }

        .item {
            @include mix.d-flex(start, center);
            gap: 35px;

            @include bp.media-down(xl) {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }

            .title {
                @include mix.en-fontF;
                color: var(--color-black);
                font-size: 20px;
                font-weight: 300;
                line-height: normal;
                text-transform: uppercase;
                max-width: 180px;
                width: 100%;
                text-align: right;

                @include bp.media-down(xl) {
                    text-align: left;
                }
            }

            .bar-wrapper {
                @include mix.d-flex(start, center);
                gap: 35px;
                width: 70%;
                position: relative;
                overflow: hidden;

                @include bp.media-down(xl) {
                    width: 100%;
                    gap: 20px;
                }
            }

            .bar {
                height: 100%;
                height: 20px;
                width: 0%;
                background: linear-gradient(116deg, rgba(50, 238, 255, 0.50) 16.25%, rgba(49, 255, 193, 0.50) 83.75%);
            }

            .bar-percent {
                word-break: keep-all;
                font-size: 20px;
            }
        }

        .item+.item {
            padding-top: 35px;

            @include bp.media-down(sm) {
                padding-top: 20px;
            }
        }
    }
}
</style>