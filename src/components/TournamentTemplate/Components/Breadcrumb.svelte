<!-- <script>
    export let items = []; 
  </script>
  
  <div class="w-full border-t border-gray-800"></div>  
  <div class="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-12">
    <div class="w-full py-3 bg-Charcoal/800 flex items-center gap-3">
      {#each items as item, index}
        <div class="text-sm" style="color: {index === items.length - 1 ? 'white' : 'Charcoal/100'}">
          <a href="{item.href}">{item.text}</a>
        </div>
        
        {#if index < items.length - 1}
          <div class="w-5 h-5 flex-shrink-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.21967 5.21967C8.51256 4.92678 8.98744 4.92678 9.28033 5.21967L13.5303 9.46967C13.8232 9.76256 13.8232 10.2374 13.5303 10.5303L9.28033 14.7803C8.98744 15.0732 8.51256 15.0732 8.21967 14.7803C7.92678 14.4874 7.92678 14.0126 8.21967 13.7197L11.9393 10L8.21967 6.28033C7.92678 5.98744 7.92678 5.51256 8.21967 5.21967Z"
                fill="Charcoal/100"/>
            </svg>
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <div class="w-full border-t border-gray-800"></div>  

  
  <style>
    .breadcrumb-item {
      color: #888888;
    }
  </style>
   -->

   <script>
    export let items = []; // Array of breadcrumb items
  </script>
 
  <div class="w-full border-t border-Charcoal/500"></div>  
  <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
    <div class="w-full py-3  bg-Charcoal/800 flex items-center gap-3">
      {#each items as item, index}
        <div class="text-sm" style="color: {index === items.length - 1 ? 'white' : '#888888'}">
          <a href="{item.href}">{item.text}</a>
        </div>
       
        {#if index < items.length - 1}
          <div class="w-5 h-5 flex-shrink-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.21967 5.21967C8.51256 4.92678 8.98744 4.92678 9.28033 5.21967L13.5303 9.46967C13.8232 9.76256 13.8232 10.2374 13.5303 10.5303L9.28033 14.7803C8.98744 15.0732 8.51256 15.0732 8.21967 14.7803C7.92678 14.4874 7.92678 14.0126 8.21967 13.7197L11.9393 10L8.21967 6.28033C7.92678 5.98744 7.92678 5.51256 8.21967 5.21967Z"
                fill="#888888"/>
            </svg>
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <div class="w-full border-t border-Charcoal/500"></div>  
 
 
  <style>
    .breadcrumb-item {
      color: #888888;
    }
  </style>
 