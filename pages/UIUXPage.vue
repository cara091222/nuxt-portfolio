<template>
    <div class="ui-page">
        <ComponentBanner enName="Portfolio" nameHighlight="作品集" subtitle="UI / UX" />
        <div class="scrolling">
            <div class="ui-wrap padding-share animation__el fadeUp">
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
                        <!-- <div class="button-wrap">
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div> -->
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
                    img: '/UI/中租.png',
                    title: '中租馬來西亞站',
                    date: '2024/02',
                    subtitle: '這次中租以馬來西亞為據點，當地消費市場以年輕族群為主，所以視覺上跳脫出以往的品牌色調，打造一個活潑且親切，同時穩定且值得信賴的品牌形象',
                    descList: [
                        {
                            title: '活潑現代的視覺色調，貼近當地年輕族群',
                            desc: '整體配色以清新明亮的漸層藍粉色為主軸，搭配留白與圓潤圖形，營造出輕鬆自在的氛圍。'
                        },
                        {
                            title: '延續中租品牌調性，呈現穩定與信任感',
                            desc: '雖然色彩風格較為年輕，但設計中仍保留中租品牌核心的穩定感與金融專業形象。有層次的資訊分區，以及俐落的圖示與字體選擇，使整體視覺依然保有「金融科技」的信賴基礎。'
                        },
                        {
                            title: '圖像與人物視覺強化親和力',
                            desc: '大量使用真人照片素材，添增親切感。人物的年齡層與表情設計也貼合年輕族群，間接傳遞「這是為你而設計的服務」。'
                        },
                        {
                            title: '流程簡潔明確，提升使用體驗',
                            desc: '網站結構上以「三步驟貸款流程」、「FAQ 常見問題」、「下載 APP CTA（行動呼籲）」為主軸，協助用戶快速理解服務機制並引導轉換。'
                        }
                    ]
                },
                {
                    img: '/UI/學究匯.png',
                    title: '學究匯',
                    date: '2024/01',
                    subtitle: '本次設計專為以國高中學生為主要受眾的補習班品牌量身打造，結合清晰的資訊架構與活潑的視覺，打造一個既具專業教育形象，又能與學生與家長產生親切感的數位介面。',
                    descList: [
                        {
                            title: '以品牌色為主軸，穩定中展現信任感',
                            desc: '整體色調以品牌藍為主，搭配大量白底與灰色輔助色，表現出穩重、專業、可靠的品牌印象。'
                        },
                        {
                            title: '資訊架構清晰，利於學生與家長快速導覽',
                            desc: '網站首頁針對不同受眾（學生、家長）所關心的重點資訊做出有層次的編排，從最新消息、學習影片、學習方法、升學制度到聯絡表單，皆以模組化設計呈現，強化導覽效率與行動引導。'
                        },
                        {
                            title: '運用小動畫增添互動性與趣味',
                            desc: '雖然整體視覺簡潔清楚，但搭配滑動與小動畫效果（如按鈕反應、滑動出現元素等），讓頁面更具互動性。'
                        },
                        {
                            title: '模組式設計易於後續內容維護',
                            desc: '透過模組化區塊設計（如 NEWS、VIDEO、STUDY、EDUCATION 等），不僅整體視覺統一，也讓後台維護更彈性，便於定期更新資訊。'
                        }
                    ]
                },
                {
                    img: '/UI/廣穎.png',
                    title: 'SP 廣穎電通',
                    date: '2023/12',
                    subtitle: '選用乾淨的留白與明確的區塊分隔，搭配科技感素材，傳達「效率、專業、整合」的企業形象，貼合 SP Integration 作為系統整合服務的品牌定位。',
                    descList: [
                        {
                            title: '品牌色強調（Brand Highlight）',
                            desc: '使用主色轉換亮眼區塊或按鈕，突出關鍵段落（如「立即聯繫」「下載簡介」），強化 CTA 能見度，也提升品牌辨識度。'
                        },
                        {
                            title: '區塊化資訊呈現',
                            desc: '網頁分為 Hero、核心服務三大區塊、客製方案亮點、聯絡表單等單元，清晰而有條理，方便閱覽者快速抓住重點；模組式設計也利於後續維護與更新。'
                        },
                        {
                            title: 'RWD 響應式設計',
                            desc: '網頁兼顧桌機與行動裝置解析度，流體排版與彈性圖片確保在不同螢幕下仍保持一致體驗 。'
                        },
                        {
                            title: '企業形象整體一致',
                            desc: '簡約、科技、專業的視覺風格統一貫通，加深印象，有助於在 B2B 領域建立品牌信任感。'
                        }
                    ]
                },
                {
                    img: '/UI/力致.png',
                    title: '力致科技',
                    date: '2023/09',
                    subtitle: '力致科技擁有近 30 年散熱與系統整合實力，設計上融合科技感元素（如線條、科技紋理、半透明素材）與綠色、能源意象，成功在視覺上呈現「高科技＋永續環保」形象。',
                    descList: [
                        {
                            title: '淡入淡出動態效果，提昇質感互動',
                            desc: '各區塊透過淡入淡出的方式顯示，讓使用者滑動時自然而然被引導瀏覽，提升體驗豐富度且避免資訊過於死板 。'
                        },
                        {
                            title: '模組化區塊＋場景串連',
                            desc: '每個模組皆清晰傳達力致技術與企業價值，同時方便未來使用者維護和更新。'
                        },
                        {
                            title: '強化 ESG / 綠能議題',
                            desc: '「創新與社會責任」區塊以綠色調或自然取向影像呈現，恰如其分地呼應公司對節能減排與永續發展承諾。'
                        },
                        {
                            title: '響應式優化+速度優化',
                            desc: '整體設計搭配 RWD 排版與素材延遲載入（Lazy Load），不僅保證手機、平板、桌機的良好顯示，也維持滾動順暢與轉換自然，以強化科技企業的專業形象。'
                        }
                    ]
                },
                {
                    img: '/UI/鑫創.png',
                    title: '鑫創電子股份有限公司',
                    date: '2023/05',
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
                    title: '北投日勝生加賀屋',
                    date: '2022/07',
                    subtitle: '本網站以「現代日式美學 × 頂級溫泉體驗」為設計理念，結合傳統與現代，呈現靜謐而高質感的溫泉旅宿氛圍，體現品牌優雅、專業與文化深度。',
                    descList: [
                        {
                            title: '沈穩禪風的視覺風格',
                            desc: '整體配色以深色搭配品牌色調，傳達溫潤靜謐的日式意象，搭配高品質場景攝影素材，營造沉浸式的視覺體驗。'
                        },
                        {
                            title: '直覺導向的資訊架構',
                            desc: '主選單分類清晰，涵蓋「關於」「客房」「餐飲」「湯屋」「交通」等核心內容，並支援多語系切換，讓國內外訪客能快速取得所需資訊。'
                        },
                        {
                            title: '品牌的一致性',
                            desc: '使用品牌專屬字體與一致色彩系統，搭配日式圖騰與典雅排版，讓網站視覺與實體飯店形象相互呼應，強化品牌印象與信賴度。'
                        },
                        {
                            title: '富有節奏的動態與互動',
                            desc: '首頁滑動視差、圖片輪播與最新消息模組，搭配懸浮動畫與滑入效果，提升互動性與流暢感，強化使用者在探索旅館魅力時的停留與參與。'
                        }
                    ]
                },
                {
                    img: '/UI/金鈺保險箱.png',
                    title: '金鈺保險箱',
                    date: '2022/06',
                    subtitle: '官網設計以「簡約大方、資訊清楚」為核心原則，搭配專業合成素材與現代化的排版結構，呈現出品牌在安全防護、消毒產品領域的技術實力與品牌信任感。',
                    descList: [
                        {
                            title: '簡潔專業，聚焦資訊傳達',
                            desc: '全站風格以白底與淺灰為基礎背景，結合品牌主色作為視覺強調色，避免干擾閱讀，讓訪客能快速聚焦內容。'
                        },
                        {
                            title: '合成圖強化品牌專業感',
                            desc: '有首圖與主視覺均為原創合成設計，融合產品特寫、應用情境與幾何素材，精準傳達產品應用場景與科技屬性。'
                        },
                        {
                            title: '產品區分類明確',
                            desc: '將多種產品按用途分類展示，輔以篩選設計，讓訪客可快速找到適合的解決方案。'
                        },
                        {
                            title: '響應式設計（RWD）',
                            desc: '無論在桌機、平板或手機上，排版與圖片比例皆經優化，保持一致的閱讀品質與點擊體驗。'
                        },
                    ]
                },
                {
                    img: '/UI/鈺創科技.png',
                    title: '鈺創科技',
                    date: '2022/04',
                    subtitle: '本網站以「科技專業 × 產業信賴」為設計核心，透過沉穩科技配色及明確資訊架構，展現出鈺創在記憶體晶片與系統整合領域的高可靠度形象。',
                    descList: [
                        {
                            title: '沉穩科技配色風格',
                            desc: '以白色搭配品牌綴色呈現專業感，搭配科技感素材圖，凸顯企業在晶片研發與技術深度的專業印象。'
                        },
                        {
                            title: '清晰且層級分明的資訊架構',
                            desc: '主選單以「Products」「Applications」「About」「Press」「Investors」……等分類，明確傳遞記憶體IC產品線、工業／車用應用及企業資訊，符合 B2B 導向用戶需求。'
                        },
                        {
                            title: '品牌與技術內容一致性呈現',
                            desc: '延續品牌形象的字體與色彩系統搭配技術論文排版風格，讓頁面內容有高度辨識度並凸顯技術可信度。'
                        },
                        {
                            title: '互動導覽與技術資源整合',
                            desc: '產品、應用模組有「Take Me There」按鈕引導查看專區。同時平台整合技術論文、產品推薦、搜尋功能，提升專業使用者操作效率與資源到達感。'
                        }
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

        // 阻止 .img 區塊的 mousewheel 傳給 Swiper
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

        // .button-wrap {
        //     @include mix.poa-center;
        //     top: 20rem;
        // }

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
                        padding: 20px 30px 60px 30px;
                        width: 100%;
                        height: 100%;
                    }

                    @include bp.media-down(sm) {
                        padding: 15px 15px 40px 15px;
                    }

                    .title {
                        @include mix.d-flex(space-between, end);
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
                            font-size: 20px;
                            padding-left: 15px;
                        }
                    }

                    .subtitle {
                        color: #000;
                        font-size: 18px;
                        @include mix.ls(0.36, 18);
                        font-style: normal;
                        font-weight: 400;
                        line-height: 28px;
                        letter-spacing: 0.36px;
                        padding-top: 22px;

                        @include bp.media-down(sm) {
                            padding-top: 20px;
                        }
                    }

                    .desc {
                        padding: 35px 0 0 0;
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
