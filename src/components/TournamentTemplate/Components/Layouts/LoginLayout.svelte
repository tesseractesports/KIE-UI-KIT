<script>
</script>

<div class="flex flex-col md:flex-row h-screen">
<!-- Left Panel (Image) for Desktop Only -->
  <img class="hidden md:block md:w-1/2 h-auto object-cover object-top" src="/images/bgmi-logo1.png" alt="player-Journey" />
<!-- Right Panel (Login Form) -->
  <div class="w-full md:w-1/2 h-full flex flex-col justify-start items-start p-6 sm:p-12 lg:px-32 lg:py-16 gap-10 sm:gap-16 lg:gap-20 bg-Charcoal/900 overflow-auto landscape:h-auto">
    <div class="flex justify-start items-center h-10">
      <img src="/images/krafton-logo.svg" alt="Krafton Logo" class="w-[128px] h-10" />
    </div>
    <div class="w-full flex-grow flex flex-col justify-start items-start">
      <div class=" md:max-w-xl w-full h-full">
        <slot />
      </div>
    </div>
  </div>
</div>



