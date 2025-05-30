<template>
    <div class="home-about padding-small-share" id="HomeAbout">
        <div class="container-share">
            <div class="home-about-wrap">
                <div class="content">
                    <div class="title">
                        <h2 class="title-main-share">關於我</h2>
                        <h2 class="title-en">About</h2>
                    </div>
                    <p class="desc">我是一位具備七年設計經驗的設計師，從平面設計起步，歷經 86 小舖、GOSHOP
                        等電商公司，熟悉商品頁設計、行銷視覺製作與品牌形象建構。在實務中我深刻體會到設計不僅是美觀，更需要與行銷策略結合，讓視覺有效傳遞產品價值。<br><br>
                        2013 年曾赴澳洲打工遊學，那段時間讓我重新思考人生方向，也讓我確立了投入設計領域的決心。回台後，我一邊工作一邊進修，不斷累積實力。從商品攝影、Banner
                        製作、電商平台後台管理到與企劃協作，我逐步建立起電商視覺設計的完整能力。<br><br>
                        2021 年起，我加入震豪網路媒體，開始接觸網頁設計與前端技術。透過自學與實務操作，我熟悉 HTML、CSS、jQuery 並能運用 WordPress
                        進行網站製作與套版，逐漸跨足前端工程的領域。雖非科班出身，但我樂於學習、積極進修，努力朝全方位設計師的目標邁進。<br><br>
                        我相信設計是連結用戶與品牌的重要橋樑，我也希望將自身的美感、邏輯與技術整合，創造更多兼具美觀與實用的數位體驗。</p>
                </div>
                <div class="img">
                    <img src="/images/tool.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.home-about {
    position: relative;
    z-index: 1;

    .container-share {
        max-width: 1350px;
    }

    &-wrap {
        @include mix.d-flex(space-between, center);
        gap: 120px;

        @include bp.media-down(lg) {
            flex-direction: column;
            gap: 60px;
        }

        .content {
            @include mix.d-flex(start, start, column);
            max-width: 760px;

            .title {
                @include mix.d-flex(space-between, baseline);

                .title-en {
                    margin-left: -3rem;
                }
            }

            .desc {
                color: var(--color-sec);
                padding-top: 30px;
                margin-top: 30px;
                border-top: 1px dashed var(--color-black);

                @include bp.media-down(sm) {
                    padding-top: 15px;
                    margin-top: 15px;
                }
            }
        }

        .img {
            max-width: 375px;
            width: 100%;
            height: 100%;
        }
    }





}
</style>