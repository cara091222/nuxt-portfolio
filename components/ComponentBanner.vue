<template>
    <div class="component-banner">
        <div class="container-share content-wrap">
            <div class="content">
                <h1 class="en-name">{{ enName }}<span>{{ nameHighlight }}</span></h1>
                <h2 class="subtitle">{{ subtitle }}</h2>
            </div>
            <information />
        </div>
        <Marquee />
        <div class="circle-yellow"></div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        enName: {
            type: String,
            required: true
        },
        nameHighlight: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.component-banner {
    position: fixed;
    height: auto !important;
    z-index: 3;
    @include mix.bg;
    overflow: hidden;
    z-index: 1;

    .content-wrap {
        padding: 60px 50px;
        @include mix.d-flex(space-between, flex-end);

        @include bp.media-down(jumbo) {
            padding: 30px;
        }

        @include bp.media-down(lg) {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
        }
    }

    .content {
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

                @include bp.media-down(sm) {
                    display: none
                }
            }
        }

        .subtitle {
            @include mix.en-fontF;
            font-size: 27px;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0;

            @include bp.media-down(sm) {
                font-size: 22px;
            }
        }
    }

    .circle-yellow {
        position: absolute;
        width:350px;
        height: 350px;
        border-radius: 350px;
        background: linear-gradient(147deg, rgba(255, 154, 0, 0.50) 13.74%, rgba(255, 245, 49, 0.50) 90.25%);
        filter: blur(50px);
        top: -9rem;
        left: 25%;
        z-index: -1;
        animation: floatUp 4s ease-in-out infinite;

        @include bp.media-down(jumbo) {
            width:260px;
            height: 260px;
        }

        @keyframes floatUp {
        0% {
            top: -9rem;
        }

        50% {
            top: -3rem;
        }

        100% {
            top: -9rem;
        }
    }
    }

}
</style>