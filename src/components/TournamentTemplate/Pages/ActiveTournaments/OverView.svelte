<script>
	import Section from '../../Components/Section.svelte';
    import PrizePool from "../../Components/PrizePool.svelte";    
    import HighlightsSlider from "../../Components/Sliders/HighlightsSlider.svelte";
    import RegisterNowSection from "../../Components/RegisterNowSection.svelte";
    import ComingsoonBanner from '../../Components/ComingsoonBanner.svelte';
</script>

  <div class="bg-Charcoal/900 py-10">
    <Section>
      <ComingsoonBanner/>
    </Section>
  </div>
    <PrizePool />

    <Section>
        <HighlightsSlider />
    </Section>

    <RegisterNowSection />