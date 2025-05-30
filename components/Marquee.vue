<template>
    <div class="marquee">
        <div class="marquee_wrap">
            <span v-for="(item, index) in repeatedItems" :key="index">
                {{ item }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseItems: ["UI", "UX", "Graphic Design", "Ｗeb Design"],
            repeatCount: 10 // 重複幾次修改這個數字
        };
    },
    computed: {
        repeatedItems() {
            return Array.from({ length: this.repeatCount })
                .flatMap(() => this.baseItems);
        }
    }
};
</script>


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
