<template>
    <div class="marquee">
        <div class="marquee_wrap">
            <span>UI</span>
            <span>UX</span>
            <span>Graphic Design</span>
            <span>Ｗeb Design</span>
            <span>UI</span>
            <span>UX</span>
            <span>Graphic Design</span>
            <span>Ｗeb Design</span>
            <span>UI</span>
            <span>UX</span>
            <span>Graphic Design</span>
            <span>Ｗeb Design</span>
            <span>UI</span>
            <span>UX</span>
            <span>Graphic Design</span>
            <span>Ｗeb Design</span>
            <span>UI</span>
            <span>UX</span>
            <span>Graphic Design</span>
            <span>Ｗeb Design</span>
            <span>UI</span>
            <span>UX</span>
            <span>Graphic Design</span>
            <span>Ｗeb Design</span>
        </div>
    </div>
</template>

<style lang="scss">
.marquee {
    position: relative;
    z-index: 2;
    overflow: hidden;
    background-color: var(--color-white);
    border-top: 1px solid var(--color-black);
    border-bottom: 1px solid var(--color-black);
    white-space: nowrap;
    padding: 15px 0;
    font-size: 22px;
    font-weight: 300;
    font-style: italic;

    @include bp.media-down(sm) {
        font-size: 18px;
        padding: 10px 0;
    }

    &_wrap {
        display: inline-block;
        white-space: nowrap;
        animation: marquee 20s linear infinite;

        >span {
            padding: 0 12px;

            @include bp.media-down(sm) {
                padding: 0 8px;
            }
        }
    }
}

@keyframes marquee {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-50%);
    }
}
</style>
