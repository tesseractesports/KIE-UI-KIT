<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import CardSlider from "./CardSlider.svelte";
    import Devider from '../Devider.svelte';
    import RESTClient from '../../Utils/RESTClient';
    import { onMount } from "svelte";

    let tournamentType = "upcoming"; // Type of tournament
    let tournaments = [];
    // const tournaments = [
    //     { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
    //     { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
    //     { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
    //     { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
    //     { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
    //     { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
    //     { name: "Spring Invitational", isInviteOnly: true, thumbnail: "../images/VideoThumb.png" },
    //     { name: "Summer Showdown", isInviteOnly: false, thumbnail: "../images/VideoThumb.png" }
    // ];

    onMount(() => {
        getTournaments();
    });
    const getTournaments = async () => {
        const rest = new RESTClient("tournament");
        tournaments = await rest.get('/futuretournaments');
    }

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

    const getFormattedDate = (date) => {
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const suffix =day % 10 === 1 && day !== 11 ? "st" :
            day % 10 === 2 && day !== 12 ? "nd" :
            day % 10 === 3 && day !== 13 ? "rd" : "th";
        const month = dateObj.toLocaleString('default', { month: 'short' });
        const year = dateObj.getFullYear();
        return `${day}${suffix} ${month} ${year}`;
    };


</script>
<div class="video-slider-custom mb-16">
    <div class="flex flex-wrap items-center justify-between gap-x-5 gap-y-2.5 self-stretch text-yellow-400 " >
        <div class="flex-shrink-0 text-lg font-semibold uppercase leading-6 tracking-wider" >
            Featured Tournaments
        </div>
        <a href="#" class="text-sm leading-5 hidden md:block">View all tournaments</a>
    </div>

    <CardSlider options={splideOptions}>
        {#each tournaments as tournament}
            <SplideSlide>
                <a href="/ActiveTournaments" class="flex items-end w-[281px] md:w-[480px] lg:w-[668px]">
                    <div class="flex h-full w-full flex-shrink-0 flex-col justify-center overflow-clip py-5 transition-shadow duration-300 hover:shadow-[0px_6px_15px_0px_rgba(251,191,36,0.12)] hover:border-[color:var(--Gold-800,#63542D)]">
                        <div class="flex flex-col items-middle justify-center gap-y-3 rounded-xl border border-solid border-neutral-800 bg-neutral-950 p-5" >
                            <div class="bg-hero-section- flex items-start justify-end self-stretch rounded-md bg-cover bg-center pb-40 sm:pb-60 md:pb-80 pr-4 pt-4" style="background-image: url({tournament.logo}); background-size: 100% 100%; background-repeat: no-repeat;" >
                                <div class="flex items-center gap-x-1.5 rounded-xl bg-yellow-900 py-0.5 pl-2 pr-3" >
                                    <div class="text-sm leading-5 text-yellow-100">
                                        {tournamentType === 'upcoming' ? "Upcoming" : "Featured"}
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap items-center justify-between gap-y-6 w-full " >
                                <div class="flex flex-col items-start gap-y-1">
                                    <div class="leading-6 text-white">{tournament.name}</div>
                                    <div class="text-sm leading-5 text-[gray]">
                                        <!-- {tournament.isInviteOnly ? "Invite Only" : "Open"} -->
                                         {tournament.schedule.tournamentType}
                                    </div>
                                </div>
                                <div class="flex h-[60px] w-[60px] flex-shrink-0 flex-col items-center justify-center rounded-md bg-neutral-900 p-4">
                                    <img alt="" src="/images/Cube.svg" class="h-6 w-6 flex-shrink-0" />
                                </div>
                            </div>
                                <div class="hidden lg:block md:block text-[#888888] text-sm font-normal font-['Inter'] leading-tight">Dates</div>
                                <div class="hidden lg:block md:block text-white text-sm font-medium font-['Inter'] leading-tight mb-2"> {getFormattedDate(tournament.tournamentDate.startDate)} to {getFormattedDate(tournament.tournamentDate.endDate)}</div>
                            <!-- <Devider class="my-2" />  -->
                            <!-- only for small screens -->
                            <div class="mt-3 text-sm leading-5 text-white block md:hidden lg:hidden">
                                <div class="text-[#888888] text-sm font-normal font-['Inter'] leading-tight">Dates</div>
                                <div class="text-white text-sm font-medium font-['Inter'] leading-tight"> {getFormattedDate(tournament.tournamentDate.startDate)} to {getFormattedDate(tournament.tournamentDate.endDate)}</div>
                                <Devider class="my-2" /> 
                                <div class="flex  gap-2 mt-2">
                                    <!-- Watch Live Button -->
                                    <div class="h-9 px-3 py-2 bg-[#313131] rounded-md shadow border border-[#595959] flex items-center gap-2 w-40">
                                        <div class="w-4 h-4">
                                            <img src="\images\video-camera.svg" alt="icon">
                                        </div>
                                        <div class="text-[#b8b8b8] text-sm font-medium font-['Inter'] leading-tight whitespace-nowrap">Watch live</div>
                                    </div>
                                    <!-- Register Button -->
                                    <div class="h-9 px-3 py-2 bg-amber-400 rounded-md shadow flex items-center justify-center w-40 ">
                                        <div class="text-[#151515] text-sm font-medium font-['Inter'] leading-tight">Register</div>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </a>
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