<script>
  import { Route, router, active } from "tinro";
    import AuthService from "./../Components/Services/AuthService";
    
    let meta = router.meta();
    $: currentRoute = meta.url;

    let user = AuthService.getUser();
    let profileMenuToggle = false;
    let mobileMenuOpen = false;
    let container;
 
    function onWindowClick(e) {
        if (container && !container.contains(e.target)) {
            profileMenuToggle = false;
        }
    }
 
    // Watch mobileMenuOpen and add/remove body class
    $: if (mobileMenuOpen) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
</script>
 
<svelte:window on:click={onWindowClick} />
<div class="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-12 ">
    <div class="flex py-7 items-center justify-between">
        <!-- Logo and Main Links -->
        <div class="flex items-center gap-3">
            <div class="flex-shrink-0">
                <a href="/"><img src="/images/krafton-logo.svg" alt="krafton_logo" class="" /></a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
                <path d="M0.896973 0V40" stroke="#272727"/>
              </svg>
            <img src="/images/BGMI logo 2 1.svg" alt="bgmi_logo" class=" px-5" />
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
                <path d="M0.896973 0V40" stroke="#272727"/>
              </svg>
            <div class="hidden lg:block">
                <div class="flex space-x-4 md:ml-4">
                    <a use:active active-class="active-link" href="/globalTournaments"
                        class="text-sm uppercase font-semibold  text-Charcoal/100 active:text-yellow-400 px-1 lg:px-4 py-2 rounded-md active:bg-charcoal/500 hover:bg-Charcoal/500 bg-cha hover:text-yellow-400 focus:outline-none" active={currentRoute==="/tournaments" }>Tournaments</a>
                    <a use:active active-class="active-link" href="/globalTeams"
                        class="text-sm uppercase font-semibold  text-Charcoal/100 active:text-yellow-400 px-1 lg:px-4 py-2 rounded-md active:bg-charcoal/500 hover:bg-Charcoal/500 hover:text-yellow-400 focus:outline-none" active={currentRoute==="/globalTeams" }>Teams</a>
                    <a use:active active-class="active-link" href="/globalPlayers"
                        class="text-sm uppercase font-semibold  text-Charcoal/100 active:text-yellow-400 px-1 lg:px-4 py-2 rounded-md active:bg-charcoal/500 hover:bg-Charcoal/500 hover:text-yellow-400 focus:outline-none" active={currentRoute==="/globalPlayers" }>Players</a>
                    <a use:active active-class="active-link" href="/globalVideos"
                        class="text-sm uppercase font-semibold  text-Charcoal/100 active:text-yellow-400 px-1 lg:px-4 py-2 rounded-md active:bg-charcoal/500 hover:bg-Charcoal/500 hover:text-yellow-400 focus:outline-none" active={currentRoute==="/videos" }>Videos</a>
                </div>
            </div>
        </div>
 
        <!-- Profile and Mobile Hamburger Menu -->
        <div class="hidden lg:flex items-center">
            <!-- Profile Section -->
            <div class="flex items-center gap-2 py-2 rounded-md relative" bind:this={container}>
                {#if user}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g clip-path="url(#clip0_1511_9046)">
                            <rect width="32" height="32" rx="16" fill="#888888" />
                            <path
                                d="M32 27.9923V32.0017H0V28.007C1.86127 25.5196 4.27721 23.5008 7.05572 22.1111C9.83423 20.7213 12.8987 19.9991 16.0053 20.0017C22.544 20.0017 28.352 23.1403 32 27.9923ZM21.336 12.0003C21.336 13.4148 20.7741 14.7714 19.7739 15.7716C18.7737 16.7718 17.4172 17.3337 16.0027 17.3337C14.5882 17.3337 13.2316 16.7718 12.2314 15.7716C11.2312 14.7714 10.6693 13.4148 10.6693 12.0003C10.6693 10.5858 11.2312 9.22928 12.2314 8.22909C13.2316 7.2289 14.5882 6.66699 16.0027 6.66699C17.4172 6.66699 18.7737 7.2289 19.7739 8.22909C20.7741 9.22928 21.336 10.5858 21.336 12.0003Z"
                                fill="#323232" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1511_9046">
                                <rect width="32" height="32" rx="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
   
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="flex justify-center items-center gap-1 cursor-pointer" on:click={()=> (profileMenuToggle =
                        !profileMenuToggle)}>
                        <div class=" text-Charcoal/100 text-sm font-medium leading-tight">
                            {user?.firstName || "User"}
                        </div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5.21967 8.21967C5.51256 7.92678 5.98744 7.92678 6.28033 8.21967L10 11.9393L13.7197 8.21967C14.0126 7.92678 14.4874 7.92678 14.7803 8.21967C15.0732 8.51256 15.0732 8.98744 14.7803 9.28033L10.5303 13.5303C10.3897 13.671 10.1989 13.75 10 13.75C9.80109 13.75 9.61032 13.671 9.46967 13.5303L5.21967 9.28033C4.92678 8.98744 4.92678 8.51256 5.21967 8.21967Z"
                                    fill="#888888" />
                            </svg>
                        </button>
   
                        <!-- Profile Dropdown -->
                        {#if profileMenuToggle}
                        <div
                            class="absolute right-0 mt-32 w-32 origin-top-right rounded-md bg-gray-800 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none z-10">
                            <a href="/profile"
                                class="block px-3 py-1 text-sm leading-6 text-white hover:bg-gray-700">Profile</a>
                            <a href="/logout"
                                class="block px-3 py-1 text-sm leading-6 text-white hover:bg-gray-700">Logout</a>
                        </div>
                        {/if}
                    </div>
                    {:else}
                    <div class="h-9 px-3 py-2 bg-[#212121] rounded-md shadow border border-[#272727] justify-center items-center inline-flex cursor-pointer"
                        on:click={() => router.goto('/login')}
                    >
                        <div class="text-[#b8b8b8] text-base font-medium font-['Inter'] leading-normal">
                            Login
                        </div>
                    </div>
                    <div class="h-9 px-3 py-2 bg-amber-400 rounded-md shadow justify-center items-center inline-flex cursor-pointer"
                        on:click={() => router.goto('/signup')}
                    >
                        <div class="text-[#151515] text-base font-medium font-['Inter'] leading-normal">
                            Sign up
                        </div>
                    </div>
                {/if}
            </div>
        </div>
 
        <!-- Hamburger Menu Button -->
        <div class="-mr-2 flex lg:hidden">
            <button type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                on:click={()=> (mobileMenuOpen = !mobileMenuOpen)}
                >
                <span class="sr-only">Open main menu</span>
                {#if !mobileMenuOpen}
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {:else}
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {/if}
            </button>
        </div>
    </div>
 
    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
    <div class="lg:hidden fixed top-24 left-0 right-0 w-full h-full z-50 bg-Charcoal/800" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3">
            <a href="/globalTournaments"
                class="block text-sm font-semibold  text-Charcoal/100 hover:bg-charcoal/500 hover:bg-Charcoal/500 hover:text-yellow-400 px-4 py-2 rounded-md">Tournaments</a>
            <a href="/globalTeams"
                class="block text-sm font-semibold  text-Charcoal/100 hover:bg-charcoal/500 hover:bg-Charcoal/500 hover:text-yellow-400 px-4 py-2 rounded-md">Teams</a>
            <a href="/globalPlayers"
                class="block text-sm font-semibold  text-Charcoal/100 hover:bg-charcoal/500 hover:bg-Charcoal/500 hover:text-yellow-400 px-4 py-2 rounded-md">Players</a>
            <a href="/globalVideos"
                class="block text-sm font-semibold  text-Charcoal/100 hover:bg-charcoal/500 hover:bg-Charcoal/500 hover:text-yellow-400 px-4 py-2 rounded-md">Videos</a>
 
            <!-- Profile Dropdown for Mobile -->
            <div class="mt-4">
                <a href="/profile"
                    class="block px-4 py-2 text-sm font-semibold  text-Charcoal/100 hover:bg-charcoal/500 hover:bg-Charcoal/500 hover:text-yellow-400 rounded-md">Profile</a>
                <a href="/logout"
                    class="block px-4 py-2 text-sm font-semibold  text-Charcoal/100 hover:bg-charcoal/500 hover:bg-Charcoal/500 hover:text-yellow-400 rounded-md">Logout</a>
            </div>
        </div>
    </div>
    {/if}
  </div>
<style>
    :global(.active-link) {
        border-radius: 6px;
        background: var(--Charcoal-500, #272727);
        color: var(--yellow-400, #FBBF24);
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.35px;
        text-transform: uppercase;
    }
</style>