<template>
    <div class="appHeader">
        <div class="menu-overlay"></div>
        <div class="appHeader-container">
            <nav class="app-nav">
                <ul class="nav-wrap">
                    <li class="main-item"><a href="#HomeAbout">關於我</a></li>
                    <li class="main-item"><a href="">工作經歷</a></li>
                    <li class="main-item">
                        <a href="">作品集</a>
                        <ul class="nav-sec">
                            <li class="sec-item"><a href="">平面設計</a></li>
                            <li class="sec-item"><a href="">UI / UX</a></li>
                            <li class="sec-item"><a href="">網站設計</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="nav-hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <a href="#" class="page-top">
            <div class="img">
                <img src="/images/page_top.svg" alt="" />
            </div>
            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24"
                fill="none">
                <path d="M8.05208 0.552734L0.897461 9.24255H6.69067V23.7256H9.58728V9.24255H15.3805L8.05208 0.552734Z"
                    fill="black" />
            </svg>
        </a>
    </div>
</template>

<script>
import jQuery from "jquery";

export default {
    mounted() {
        const $ = jQuery;
        // 點擊 main-item 時切換 active
        jQuery(".main-item > a").on("click", function () {
            jQuery(".main-item").removeClass("active");
            jQuery(this).parent().addClass("active"); // 👈 把 active 加在 li 上
        });

        // 點擊漢堡選單
        jQuery(".nav-hamburger").on("click", function (e) {
            e.stopPropagation(); // 防止冒泡觸發到 body
            jQuery(".appHeader-container").addClass("menu-show");
            jQuery(".nav-hamburger").hide(); // 漢堡消失
            jQuery(".menu-overlay").fadeIn();
        });

        // 點擊 overlay 關閉選單
        jQuery(".menu-overlay").on("click", function () {
            jQuery(".appHeader-container").removeClass("menu-show");
            jQuery(".nav-hamburger").show(); // 漢堡出現
            jQuery(this).fadeOut();
        });

        // 避免點選 menu 內容時關閉
        jQuery(".appHeader-container").on("click", function (e) {
            e.stopPropagation();
        });

        // 點擊 page-top 回到頁面頂端
        jQuery(".page-top").on("click", function (e) {
            e.preventDefault(); // 阻止 <a href="#"> 的預設跳轉行為
            jQuery("html, body").animate({ scrollTop: 0 }, 600);
        });

        jQuery('a[href^="#"]').on('click', function (e) {
            const target = jQuery(this.getAttribute('href'));
            if (target.length) {
                e.preventDefault();
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - 300
                }, 600); // 600 毫秒滑動
            }
        });

    },
};
</script>

<style lang="scss">
.appHeader {
    position: fixed;
    z-index: 999;
    right: 0px;
    bottom: 10rem;
    max-width: 130px;
    width: 100%;
    height: auto;
    transition: all 0.5s ease;

    @include bp.media-down(xxl) {
        bottom: 8rem;
    }

    @include bp.media-down(xl) {
        bottom: 12rem;
        max-width: 125px;
    }

    .menu-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background: rgba(0, 0, 0, 0.3);
        z-index: 999;
    }

    &-container {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 20px 0px 0px 20px;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        border-left: 1px solid #000;
        background: #fff;
        padding: 40px 20px;
        transition: transform 0.4s ease-in-out;

        @include bp.media-between(md, lg) {
            bottom: 14rem !important;
            transform: translateX(0) !important;
        }

        @include bp.media-down(jumbo) {
            position: fixed;
            right: 0;
            bottom: 10rem;
            max-width: 130px;
            width: 100%;
            height: auto;
            padding: 20px;
            transform: translateX(100%);
            transition: transform 0.4s ease-in-out;
            z-index: 1000;

            &.menu-show {
                transform: translateX(0);
            }
        }

        @include bp.media-down(tiny) {
            bottom: 5.5rem;
        }
    }

    ul,
    li,
    a {
        color: var(--color-black);
    }

    .nav-wrap {
        @include mix.d-flex(start, start, column);
        gap: 10px;

        @include bp.media-down(xxl) {
            gap: 6px;
        }
    }

    .main-item a {
        font-weight: 700;
        padding: 5px 0;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(102deg, #32eeff 4.57%, #31ffc1 38.64%);
            transition: all 0.4s ease-in-out;
        }

        &:hover::after {
            width: 100%;
        }
    }

    .main-item.active a::after {
        width: 100%;
    }

    .nav-sec {
        margin-top: 10px;
        @include mix.d-flex(start, start, column);
        gap: 5px;

        @include bp.media-down(xxl) {
            gap: 0;
            margin-top: 5px;
        }
    }

    .sec-item {
        font-size: 14px;
        font-weight: 400;
        padding-left: 20px;
        position: relative;

        &::before {
            content: "";
            @include mix.poa-center;
            left: 8px;
            width: 6px;
            height: 1px;
            background: var(--color-black);
        }
    }

    // 漢堡選單
    .nav-hamburger {
        display: none;

        @include bp.media-down(jumbo) {
            display: block;
            transition: all 0.5s ease-in-out;
            position: relative;
            width: 50px;
            height: 50px;
            border-radius: 10px 0px 0px 10px;
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
            border-left: 1px solid #000;
            background: #fff;
            // border-radius: 100%;
            cursor: pointer;
            right: -5rem;
            top: 0rem;

            @include bp.media-down(sm) {
                top: 1rem;
            }

            >span {
                width: 20px;
                height: 4px;
                position: absolute;
                background: var(--color-black);
                right: 0;
                margin: auto;
                left: 0;
                border-radius: 50px;
                transition: all 0.5s cubic-bezier(0.5, 0, 0.1, 1.2);
                top: calc(50% - ((5.5px)) + -1px);
            }

            >span:nth-child(1) {
                top: calc(50% - ((5.5px)) + -3px);
            }

            >span:nth-child(2) {
                top: calc(50% - ((5.5px)) + 3px);
            }

            >span:nth-child(3) {
                top: calc(50% - ((5.5px)) + 9px);
            }
        }
    }

    // 打Ｘ效果
    .on>span:nth-child(1) {
        transform: rotate(45deg);
        width: 20px !important;
        top: calc(50% - (1.5px)) !important;
    }

    .on>span:nth-child(2) {
        left: 9px !important;
        opacity: 0;
    }

    .on>span:nth-child(3) {
        transform: rotate(-45deg);
        width: 20px !important;
        top: calc(50% - (1.5px)) !important;
    }

    // go top
    .page-top {
        display: inline-block;
        width: 100px;
        height: 100px;
        position: relative;
        bottom: -7.5rem;

        @include bp.media-down(xxl) {
            bottom: -5rem;
        }

        @include bp.media-between(md, lg) {
            bottom: -8rem !important;
        }

        @include bp.media-down(sm) {
            bottom: -10rem;
        }

        @include bp.media-down(xs) {
            width: 70px;
            height: 70px;
            right: -2rem;
        }

        @include bp.media-down(tiny) {
            bottom: -11.5rem;
        }

        .img {
            animation: spin 10s linear infinite;
            width: 100%;
            height: 100%;
        }

        .arrow {
            @include mix.poa-center;

            @include bp.media-down(xs) {
                width: 10px;
                height: 100%;
            }
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }
    }
}
</style>
