<script>
	import Format from '../../Components/Format.svelte';
    import General from "../../Components/General.svelte";
    import {Route, router} from 'tinro'
    import Section from '../../Components/Section.svelte';
    import NavTab from '../../Components/NavTabs/NavTab.svelte';
    import TabLink from '../../Components/NavTabs/TabLink.svelte';
    import Devider from '../../Components/Devider.svelte';

    let meta = router.meta();
    $: currentRoute = $meta.url;
</script>


  <Section>
    <NavTab>
        <TabLink link="/ActiveTournaments/Support/general" active={currentRoute === "/ActiveTournaments/Support/general"}>Support</TabLink>
        <TabLink link="/ActiveTournaments/Support/format" active={currentRoute === "/ActiveTournaments/Support/format"}>Format</TabLink>
    </NavTab>
  </Section>

  <Section>
    <Devider />
</Section>


  <!-- Redirect to overview if no specific tab is in the URL -->
<Route path="" redirect="/ActiveTournaments/Support/general" />

<!-- Define routes for each tab component under /ActiveTournaments -->
<Route path="/general">
  <General />
</Route>

<Route path="/format">
    <Format />
</Route>



  