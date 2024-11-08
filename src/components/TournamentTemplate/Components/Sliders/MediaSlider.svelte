<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import CardSlider from "./CardSlider.svelte";
    import VideoCard from '../VideoCard.svelte';

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
        autoplay: true,
        pagination: false,
        arrows: true,
        perMove: 1,
        focus    : 'left',
        autoWidth: true,
        type: 'loop',
    };

</script>
<div class="video-slider-custom mb-16">
    <div class="flex flex-wrap items-center justify-between gap-x-5 gap-y-2.5 self-stretch text-yellow-400">
        <div class="flex-shrink-0 text-lg font-semibold uppercase leading-6 tracking-wider mb-5 ">Media</div> 
    </div>

    <CardSlider options={splideOptions}>
        {#each tournaments as tournament}
            <SplideSlide>
                <div class="flex flex-grow flex-col items-start justify-center gap-y-3 rounded-xl border border-solid border-Charcoal/600 p-5 max-w-[387px] transition-shadow duration-300 hover:shadow-[0px_6px_15px_0px_rgba(251,191,36,0.12)] hover:border-[color:var(--Gold-800,#63542D)]" >
                    <img alt=""
                      src="/images/HeroThumbnail.png"
                      loading="lazy"
                      class="h-48 w-[363px] flex-shrink-0 rounded-md object-cover object-center"
                    />
                    <div class="flex items-start self-stretch text-lg font-semibold leading-7 text-white" >
                      <p>
                        Battlegrounds Mobile India Series of 2024 concludes in
                        Hyderabad
                      </p>
                    </div>
                    <div class="flex flex-wrap items-center gap-x-10 gap-y-5 text-sm leading-5 min-[1526px]:flex-nowrap" >
                      <div>
                        <div class=" text-Charcoal/100">Source</div>
                        <div class="font-medium text-white">The Hindu</div>
                      </div>
                      <div>
                        <div class=" text-Charcoal/100">Published</div>
                        <div class="font-medium text-white">June 30, 2024</div>
                      </div>
                    </div>
                    <a href="" class="flex flex-wrap items-center gap-x-3 gap-y-2.5 min-[1526px]:flex-nowrap" >
                      <div class="text-sm leading-5 text-yellow-400">Read more</div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.21967 14.7798C5.51256 15.0727 5.98744 15.0727 6.28033 14.7798L13.5 7.56017V13.2495C13.5 13.6637 13.8358 13.9995 14.25 13.9995C14.6642 13.9995 15 13.6637 15 13.2495V5.74951C15 5.3353 14.6642 4.99951 14.25 4.99951H6.75C6.33579 4.99951 6 5.3353 6 5.74951C6 6.16372 6.33579 6.49951 6.75 6.49951H12.4393L5.21967 13.7192C4.92678 14.0121 4.92678 14.4869 5.21967 14.7798Z" fill="#FBBF24"/>
                      </svg>
                    </a>
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