<script>
  import Breadcrumb from "../../Components/Breadcrumb.svelte";
  import { router, Route } from "tinro";
  import NavTab from "../../Components/NavTabs/NavTab.svelte";
  import TabLink from "../../Components/NavTabs/TabLink.svelte";
  import Section from "../../Components/Section.svelte";
  import OverView from "../ActiveTournaments/OverView.svelte";
  import LeaderBoard from "../ActiveTournaments/LeaderBorad.svelte";
  import Videos from "../ActiveTournaments/Videos.svelte";
  import Support from "../ActiveTournaments/Support.svelte";

  let meta = router.meta();
  $: currentRoute = $meta.url;

  let breadcrumbs = [
    { text: 'GlobalHomepage', href: '/' },
    { text: 'Tournaments', href: '/tournaments' },
    { text: 'BGIS 2024', href: '/bgis2024' },
  ];
</script>

<Breadcrumb items={breadcrumbs} />

<div>
  <img src="/images/Frame 2937.png" alt="">
</div>

<Section>
  <NavTab>
    <TabLink link="/ActiveTournaments/Overview" active={currentRoute === "/ActiveTournaments/Overview"}>OVERVIEW</TabLink>
    <!-- <TabLink link="/ActiveTournaments/format" active={currentRoute === "/ActiveTournaments/format"}>FORMAT</TabLink> -->
    <!-- <TabLink link="/ActiveTournaments/schedule" active={currentRoute === "/ActiveTournaments/schedule"}>SCHEDULE</TabLink> -->
    <!-- <TabLink link="/ActiveTournaments/teams" active={currentRoute === "/ActiveTournaments/teams"}>TEAMS</TabLink> -->
    <TabLink link="/ActiveTournaments/Leaderboard" active={currentRoute === "/ActiveTournaments/Leaderboard"}>LEADERBOARD</TabLink>
    <TabLink link="/ActiveTournaments/Videos" active={currentRoute === "/ActiveTournaments/Videos"}>VIDEOS</TabLink>
    <TabLink link="/ActiveTournaments/Support" active={currentRoute === "/ActiveTournaments/Support"}>SUPPORT</TabLink>
  </NavTab>
</Section>

<!-- Redirect to overview if no specific tab is in the URL -->
<Route path="" redirect="/ActiveTournaments/Overview" />

<!-- Define routes for each tab component under /ActiveTournaments -->
<Route path="/Overview">
  <OverView />
</Route>

<div class="bg-Charcoal/800">
  <Route path="/Leaderboard">
    <LeaderBoard />
  </Route>
</div>

<Route path="/Videos">
  <Videos />
</Route>

<Route path="/Support/*">
  <Support />
</Route>
