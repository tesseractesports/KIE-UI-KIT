<script>
    import Section from "../../components/Section.svelte";
    import VideoSlider from "../../Components/Sliders/VideoSlider.svelte";
    import HighlightsSlider from "../../Components/Sliders/HighlightsSlider.svelte";
    import PrizePool from "../../Components/PrizePool.svelte";
</script>
  
    <div class="w-full px-4 md:px-16 lg:px-32 pt-10 pb-10 lg:pb-[72px] bg-[#151515] flex flex-col justify-center items-center gap-7">
        <div class="w-full flex flex-col md:flex-row justify-start items-center gap-4 md:gap-10">
          <div class="w-full flex flex-col justify-start items-start gap-3">
            <div class="text-amber-400 text-xs md:text-sm font-semibold font-['Inter'] uppercase leading-tight tracking-wide">ABOUT THIS TOURNAMENT</div>
            <div class="w-full flex flex-col justify-start items-start gap-5">
              <div class="w-full flex flex-col justify-start items-start gap-3">
                <div class="text-[#b8b8b8] text-sm md:text-base font-normal font-['Inter'] leading-normal">
                  BATTLEGROUNDS MOBILE INDIA Pro Series 2024, the biggest esports event in India is back. The tournament will feature 128 invited teams, who will battle it out between 20th August to 29th September for the coveted championship title of BMPS 2024. With a total prize pool of 2 Crore INR at stake, who will emerge victorious?
                </div>
              </div>
              <div class="w-full flex flex-col md:flex-row justify-start items-start gap-3">
                <div class="w-full md:w-auto flex flex-wrap gap-6 md:gap-10">
                  <div class="flex flex-col justify-start items-start gap-1">
                    <div class="text-[#b8b8b8] text-xs md:text-base font-medium font-['Inter'] leading-normal">Start Date</div>
                    <div class="text-white text-xs md:text-base font-medium font-['Inter'] leading-normal">20th August 2024</div>
                  </div>
                  <div class="flex flex-col justify-start items-start gap-1">
                    <div class="text-[#b8b8b8] text-xs md:text-base font-medium font-['Inter'] leading-normal">End Date</div>
                    <div class="text-white text-xs md:text-base font-medium font-['Inter'] leading-normal">29th September 2024</div>
                  </div>
                  <div class="flex flex-col justify-start items-start gap-1">
                    <div class="text-[#b8b8b8] text-xs md:text-base font-medium font-['Inter'] leading-normal">Total Teams</div>
                    <div class="text-white text-xs md:text-base font-medium font-['Inter'] leading-normal">128</div>
                  </div>
                  <div class="flex flex-col justify-start items-start gap-1">
                    <div class="text-[#b8b8b8] text-xs md:text-base font-medium font-['Inter'] leading-normal">Registration</div>
                    <div class="text-white text-xs md:text-base font-medium font-['Inter'] leading-normal">Invite only</div>
                  </div>
                  <div class="flex flex-col justify-start items-start gap-1">
                    <div class="text-[#b8b8b8] text-xs md:text-base font-medium font-['Inter'] leading-normal">Location</div>
                    <div class="text-white text-xs md:text-base font-medium font-['Inter'] leading-normal">Hitec City, Hyderabad, Telangana</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

<PrizePool/>

<Section>
    <HighlightsSlider/>
</Section>

<Section >
    <VideoSlider/>
</Section>





