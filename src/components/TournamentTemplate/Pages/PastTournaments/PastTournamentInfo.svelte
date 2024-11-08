<script>
    import Breadcrumb from "../../Components/Breadcrumb.svelte";
    import { Route, router } from "tinro";
    import NavTab from "../../components/NavTabs/NavTab.svelte";
    import TabLink from "../../components/NavTabs/TabLink.svelte";
    import Section from "../../components/Section.svelte";
    import OverView from "../PastTournaments/OverView.svelte";
    import LeaderBoard from "../PastTournaments/LeaderBoard.svelte";
    import Videos from "../PastTournaments/Videos.svelte";
    import BannerSection from "../../Components/Sliders/BannerSection.svelte";
  
    let meta = router.meta();
    $: currentRoute = $meta.url;
  
    let breadcrumbs = [
      { text: 'Homepage', href: '/' },
      { text: 'Past Tournaments', href: '/tournaments' },
      { text: 'BMPS 2024', href: '/bmps2024' },
    ];
  </script>
  
  <Breadcrumb items={breadcrumbs} />
  
  <Section>
    <BannerSection />
  </Section>
  <div class="bg-Charcoal/900">
    <Section>
      <NavTab>
        <TabLink link="/PastTournaments/overview" active={currentRoute === "/PastTournaments/overview"}>Overview</TabLink>
        <TabLink link="/PastTournaments/leaderboard" active={currentRoute === "/PastTournaments/leaderboard"}>LeaderBoard</TabLink>
        <TabLink link="/PastTournaments/videos" active={currentRoute === "/PastTournaments/videos"}>Videos</TabLink>
      </NavTab>
    </Section>
  </div>

  
    <Route path="/" redirect="/PastTournaments/overview" />
    <Route path="/overview">
       <OverView/>
    </Route>
    <div class="bg-Charcoal/800">
      <Route path="/leaderboard">
        <LeaderBoard />
       </Route>
    </div>
  
    <Route path="/videos">
     <Videos />
    </Route>
  
  
    
    
 
  