<script>
    import CardSlider from './CardSlider.svelte';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  
    const splideOptions = {
      arrowPath: "M24 8L21.18 10.82L32.34 22H8V26H32.34L21.18 37.18L24 40L40 24L24 8Z",
      gap: '2rem',
      pagination: true,
      autoplay: 'pause',
      arrows: false,
      perPage: 1,
      
    };
  
    // Array of banner data for looping
    const banners = [
      {
        title: "Winners Concluded",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        image: "/images/Group-1116601973.svg",
        button1: { text: "Watch Live", icon: "/images/video-camera.svg" },
        button2: { text: "Tournament details" },
        icon: "/images/Union.svg",
      },
      {
        title: "BGIS 2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        image: "/images/Group-1116601973.svg",
        button1: { text: "Watch Live", icon: "/images/video-camera.svg" },
        button2: { text: "Tournament details" },
        icon: "/images/Union.svg"
      },
      // Additional slides here...
    ];
  </script>
  
  <CardSlider options={splideOptions}>
    {#each banners as banner}
      <SplideSlide>
        <div class="flex items-start w-full">
          <div class="h-full w-full">
            <div class="bg-image flex max-h-full max-w-full flex-col bg-no-repeat">
              <div class="z-0 flex flex-col justify-end gap-y-4 bg-cover bg-center pb-16 lg:pb-28 pt-[320px] lg:pt-[420px] w-f">
                <img src={banner.image} alt="" class="z-10 h-[120px] w-24 flex-shrink-0">
                <div class="flex items-end pt-2">
                  <div class="font-manrope flex-grow text-[56px] font-extrabold leading-[normal] text-yellow-400">
                    {banner.title}
                  </div>
                </div>
                <div class="flex items-end pt-1 w-full">
                  <div class="flex flex-grow items-end text-lg leading-8 text-white">
                    <p class="max-w-lg">{banner.description}</p>
                  </div>
                </div>
                <div class="flex flex-wrap items-end justify-between gap-x-6 gap-y-5 ">
                  <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-5 leading-6 ">
                    <a href="" class="flex items-center justify-center gap-x-3 rounded-md border border-solid border-neutral-600 bg-neutral-800 px-3 py-2 drop-shadow-lg">
                      <img alt="" src={banner.button1.icon} class="h-4 w-4 flex-shrink-0" />
                      <div class="text-[silver]">{banner.button1.text}</div>
                    </a>
                    <a href="" class="rounded-md bg-yellow-400 px-3 py-2 text-center text-neutral-900 drop-shadow-lg">
                      {banner.button2.text}
                    </a>
                  </div>
                  <button class="flex h-12 w-12 flex-shrink-0 flex-col items-center absolute top-6 right-6 md:relative justify-center rounded-full bg-neutral-800 p-3 ml-3"> 
                    <img alt="" src={banner.icon} class="h-6 w-6 flex-shrink-0" />
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    {/each}
  </CardSlider>
  

  <style>
    /* Custom pagination dot colors */
    :global(.splide__pagination__page) {
      background-color: #B9B8B8 !important; /* Change to your desired color */
    }
  
    /* Active dot color */
    :global(.splide__pagination__page.is-active) {
      background-color: #FFD700 !important; /* Change to active color */
    }
  </style>