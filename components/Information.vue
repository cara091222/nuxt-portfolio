<template>
    <div class="info">
        <div v-for="(item, index) in info" :key="index" class="info_items">
            <a :href="item.link" class="info_link">
                <div class="icon">
                    <img :src="item.icon" alt="">
                </div>
                <p class="text">{{ item.text }}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: [
                {
                    icon: '/素材/phone_svgrepo.com.svg',
                    text: '0968 - 915 - 912',
                    link: 'tel:0968915912',
                },
                {
                    icon: '/素材/email_svgrepo.com.svg',
                    text: 'cara091222@gmail.com',
                    link: 'mailto:cara091222@gmail.com',
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.info {
    @include mix.d-flex(start, start);
    flex-direction: column;

    &_items {
        display: inline-block;
    }

    &_link {
        @include mix.d-flex(start, center);
        gap: 10px;
        color: var(--color-black);

        .text {
            font-weight: bold;
        }
    }
}

.info_items + .info_items {
    padding: 5px 0 0 0;
}
</style>