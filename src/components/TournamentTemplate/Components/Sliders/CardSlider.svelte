<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    export let options = {};
  </script>
  
  <svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">
  </svelte:head>
  
  <div class="video-slider">
    <Splide aria-label="Carousel" options={options}>
      <slot></slot>
    </Splide>
  </div>
  