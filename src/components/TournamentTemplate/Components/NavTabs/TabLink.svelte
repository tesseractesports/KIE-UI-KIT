<script>
  import { active } from "tinro";
  export let link;
  export let disabled = false;
</script>
 
<a
  href={link}
  use:active
  on:click
  active-class="tab-active"
  class="cursor-pointer px-3 py-2 text-xs text-Charcoal/100 md:py-3 md:text-sm lg:px-6 lg:py-4 lg:text-base font-semibold font-['Inter'] uppercase leading-tight tracking-tight border-b-2 border-transparent whitespace-nowrap"
  class:disabled={disabled}
>
  <slot />
  
</a>
 
<style>
  :global(.tab-active) {
    color: #FBBF24;
    border-bottom: 2px solid #FBBF24;
  }
 
  .disabled {
    pointer-events: none;
  }
 
</style>
 
 