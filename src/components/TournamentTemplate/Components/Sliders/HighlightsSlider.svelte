<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import CardSlider from "./CardSlider.svelte";


    const tournaments = [
        { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
        { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
        { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
        { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
        { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
        { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
        { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
        { name: "Summer Showdown", isInviteOnly: false, thumbnail: "../images/VideoThumb.png" }
    ];
    


    const splideOptions = {
        arrowPath: "",
        gap: '22px',
        autoplay: false,
        pagination: false,
        arrows: true,
        perMove: 1,
        focus    : 'left',
        autoWidth: true,
        type: 'loop',
    };

</script>
<div class="video-slider-custom mb-16">
    <div class="py-10 flex-col justify-center items-end gap-5 inline-flex">
        <div class="self-stretch h-6 text-amber-400 text-lg font-semibold font-['Inter'] uppercase leading-normal tracking-wide">HIGHLIGHTS</div> 
        </div>
    <CardSlider options={splideOptions}>
        {#each tournaments as tournament}
            <SplideSlide>
                <div class="flex flex-grow flex-col items-start justify-center gap-y-3 rounded-xl max-w-[238px] lg:max-w-[387px] transition duration-300 border border-transparent hover:border-[color:var(--Gold-800,#63542D)] bg-[var(--Charcoal-900,#111)]">
                    <div class=" relative">
                        <img alt=""
                            src="/images/HeroThumbnail.png"
                            loading="lazy"
                            class="h-48 w-full flex-shrink-0 rounded-md object-cover object-center"
                        />
                        <div class=" absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black/20 backdrop-blur rounded-full flex items-center justify-center">
                            <img src="/images/PlayBTN.svg" alt="play" class=" w-4 h-4">
                        </div>
                    </div>
                    
                    <div class="flex items-start self-stretch text-lg font-semibold leading-7 text-white" >
                      <p>
                        Battlegrounds Mobile India Series of 2024 concludes in
                        Hyderabad
                      </p>
                    </div>
                  </div>
            </SplideSlide>
        {/each}
        
    </CardSlider>
</div>
    


    <style>
        .video-slider-custom :global( .splide__arrow) {
            border-radius: 0 !important;
            opacity: 1 !important;
            bottom: -60px !important;
            outline: none !important;
            border-radius: 50% !important;
            display: flex !important;
            width: 32px !important;
            height: 32px !important;
            border-radius: 16px;
            opacity: 0.4;
            background: var(--Charcoal-700, #000000) !important;
        }

        .video-slider-custom :global(.splide__arrow--prev) {
            left: auto !important;
            right: 60px !important;
        }
        .video-slider-custom :global(.splide__arrow--next) {
            right: 15px !important;
        }

        .video-slider-custom :global(.splide__pagination) {
            bottom: auto !important;
        }

        .video-slider-custom :global(.splide__arrow) {
            z-index: 2 !important;
        }

        .video-slider-custom :global(.splide__arrows) {
            position: absolute;
            max-width: 1920px;
            margin: 0 auto;
            width: 100%;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
        }

        .video-slider-custom :global(.splide__arrow svg) {
            fill:#ffffff !important;
            width: 20px !important;
            height: 20px !important;
            color: #1D1D1D;
        }


        @media (max-width: 992px) {
            .video-slider-custom :global(.splide__arrows){
                display: none !important;
            }
        }


    </style>