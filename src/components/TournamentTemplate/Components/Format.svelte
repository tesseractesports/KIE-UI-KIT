<script>
    import Section from "../components/Section.svelte";
    import { writable } from 'svelte/store';
  
    // Initialize a store to keep track of the index of the currently open item
    let openIndex = writable(null);
  
    // Function to toggle the display for a specific item, closing any previously open item
    function toggleContent(index) {
      openIndex.update((current) => (current === index ? null : index));
    }
  
    // Array of descriptions for each toggle item
    const descriptions = [
      "BATTLEGROUNDS MOBILE INDIA (BGMI) is an online multiplayer battle royale game developed and published by KRAFTON, INC for use on mobile phones.",
      "The game features various maps, weapons, and gameplay modes, providing a dynamic battle experience.",
      "Players can team up with friends, communicate in real-time, and strategize to win matches.",
      "Regular updates bring new features, events, and improvements, keeping the gameplay fresh and engaging.",
      "BGMI promotes responsible gaming and includes features to manage playtime and spending."
    ];
  </script>
  
  <Section>
    <div class="w-full py-7 flex-col justify-start items-start gap-3 inline-flex">
      {#each descriptions as description, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="self-stretch px-6 py-5 bg-[#111111] rounded-md border border-[#313131] flex-col justify-start items-start gap-3"
             on:click={() => toggleContent(index)}>
          <div class="flex justify-between items-center">
            <div class="grow text-[#888888] text-base font-semibold uppercase leading-normal tracking-tight">
              WHAT IS ROUND 1?
            </div>
            <button class="w-5 h-5" on:click={(event) => { event.stopPropagation(); toggleContent(index); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                <path
                  d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                  fill="#888888"
                />
              </svg>
            </button>
          </div>
          {#if $openIndex === index}
            <div class="text-[#888888] text-sm font-medium mt-2">
              {description}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </Section>
  