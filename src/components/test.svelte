<!-- src/components/Banner.svelte -->
<script>
    export let title = "Welcome!";
    export let description = "This is a reusable banner component.";
    import logo from "../assets/images/bgmi-logo1.png";
  </script>
  
  <div class="banner bg-cover bg-center text-white p-8 rounded-lg shadow-lg" style="background-image: url('../assets/images/recent-hero.jpg');">
    <img src="{logo}" alt="Logo" class="w-16 h-16 mb-4" />
    <h1 class="text-2xl font-bold">{title}</h1>
    <p class="mt-2">{description}</p>
  </div>
  
  <style>
    .banner {
      max-width: 400px;
    }
  </style>
  