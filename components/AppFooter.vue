<template>
    <div class="app-footer">
        <p>© 2025 by Cara Lin</p>
    </div>
</template>

<style lang="scss">
.app-footer {
    @include mix.d-flex(center, center);
    margin: auto;
    max-width: 800px;
    height: 100%;
    border-radius: 70px 70px 0px 0px;
    background: var(--color-black);
    color: var(--color-white);
    padding: 10px 50px;

    @include bp.media-down(sm) {
        border-radius: 50px 50px 0px 0px;
    }
}
</style>