<template>
    <div>
        <div class="home-page">
            <div class="home-top">
                <div class="content">
                    <div class="container-share content-wrap">
                        <h1 class="en-name">Cara<span>林佳慧</span></h1>
                        <h2 class="subtitle">Web Front End / Web Designer</h2>
                        <information />
                        <div class="img">
                            <img src="/images/pic_02.png" alt="" />
                        </div>
                    </div>
                </div>
                <Marquee />
                <div class="circle-yello-top"></div>
            </div>
            <div class="scrolling">
                <HomeAbout />
                <HomeProfessional />
                <HomeExperience />
                <HomePortfolio />
                <AppFooter />
                <div class="circle-blue"></div>
                <div class="circle-yello"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.home-page {
    // @include mix.bg;
    position: relative;

    .circle-blue {
        z-index: 0;
        position: fixed;
        left: -11rem;
        bottom: 10rem;
        width: 414px;
        height: 414px;
        border-radius: 414px;
        background: linear-gradient(143deg,
                rgba(50, 238, 255, 0.5) 8.32%,
                rgba(49, 255, 193, 0.5) 92.78%);
        filter: blur(50px);
        animation: floatUp 4s ease-in-out infinite;

        @include bp.media-down(jumbo) {
            width: 320px;
            height: 320px;
        }

        @include bp.media-down(sm) {
            width: 180px;
            height: 180px;
            left: -4rem;
        }
    }

    @keyframes floatUp {
        0% {
            bottom: 10rem;
        }

        50% {
            bottom: 13rem;
        }

        100% {
            bottom: 10rem;
        }
    }

    .circle-yello {
        z-index: 0;
        position: fixed;
        left: 6rem;
        bottom: 8rem;
        width: 223px;
        height: 223px;
        border-radius: 223px;
        transform: rotate(133.898deg);
        background: linear-gradient(147deg,
                rgba(255, 154, 0, 0.5) 13.74%,
                rgba(255, 245, 49, 0.5) 90.25%);
        filter: blur(50px);
        animation: floatDown 4s ease-in-out infinite;

        @include bp.media-down(jumbo) {
            width: 165px;
            height: 165px;
            left: 3rem;
        }

        @include bp.media-down(sm) {
            width: 100px;
            height: 100px;
            left: 4rem;
        }
    }

    @keyframes floatDown {
        0% {
            bottom: 8rem;
        }

        50% {
            bottom: 6rem;
        }

        100% {
            bottom: 8rem;
        }
    }

    .circle-yello-top {
        z-index: 0;
        position: fixed;
        right: 6rem;
        top: -3rem;
        width: 350px;
        height: 350px;
        border-radius: 350px;
        transform: rotate(-122.286deg);
        background: linear-gradient(147deg,
                rgba(255, 154, 0, 0.5) 13.74%,
                rgba(255, 245, 49, 0.5) 90.25%);
        filter: blur(50px);
        animation: floatDown-b 4s ease-in-out infinite;

        @include bp.media-down(jumbo) {
            width: 280px;
            height: 280px;
        }

        @include bp.media-down(sm) {
            width: 200px;
            height: 200px;
            right: 0;
        }
    }

    @keyframes floatDown-b {
        0% {
            top: -5rem;
        }

        50% {
            top: -1rem;
        }

        100% {
            top: -5rem;
        }
    }

    .home-top {
        position: fixed;
        height: auto !important;
        z-index: 10;
        @include mix.bg;
        overflow: hidden;

        .content {
            max-height: 445px;
            position: relative;
            z-index: 1;

            &-wrap {
                padding: 60px 50px 40px 50px;

                @include bp.media-down(jumbo) {
                    padding: 30px;
                }
            }

            .en-name {
                @include mix.en-fontF;
                @include mix.ls(2, 100);
                color: var(--color-black);
                line-height: normal;
                font-size: 100px;
                font-weight: 700;

                @include bp.media-down(jumbo) {
                    font-size: 82px;
                }

                @include bp.media-down(sm) {
                    font-size: 62px;
                }

                >span {
                    @include mix.d-fontF;
                    @include mix.ls(0.72, 36);
                    font-size: 36px;
                    font-weight: 700;
                    padding-left: 15px;
                }
            }

            .subtitle {
                @include mix.en-fontF;
                font-size: 27px;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0;
                padding-bottom: 60px;

                @include bp.media-down(sm) {
                    padding: 10px 0 40px 0;
                }
            }

            .info {
                &-link {
                    @include mix.d-flex(start, center);
                    gap: 10px;
                    color: var(--color-black);

                    .text {
                        font-weight: bold;
                    }
                }
            }

            .info+.info {
                padding: 5px 0 0 0;
            }
        }

        .img {
            position: absolute;
            width: 322px;
            height: 342px;
            right: 50px;
            bottom: 0;

            @include bp.media-down(jumbo) {
                width: 280px;
                height: auto;
            }

            @include bp.media-down(md) {
                display: none;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .scrolling {
        @include mix.bg;
        height: auto !important;
        position: absolute;
        z-index: 9;
        margin-top: 427px;

        @include bp.media-down(jumbo) {
            margin-top: 366px;
        }

        @include bp.media-down(sm) {
            margin-top: 358px;
        }
    }
}
</style>
