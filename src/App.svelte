<script>
  import {Route, router} from 'tinro'
  import ActiveTournamentInfo from "./components/TournamentTemplate/Pages/ActiveTournaments/ActiveTournamentInfo.svelte";
  import PastTournamentInfo from './components/TournamentTemplate/Pages/PastTournaments/PastTournamentInfo.svelte';
  import UpcomingTournaments from './components/TournamentTemplate/Pages/UpcomingTournaments/UpcomingTournaments.svelte';
  import MainLayout from './components/Layout/MainLayout.svelte';
</script>

<Route path="/PastTournaments/*">
  <MainLayout>
    <PastTournamentInfo />
  </MainLayout>
</Route>

<Route path="/ActiveTournaments/*">
  <MainLayout>
    <ActiveTournamentInfo /> 
  </MainLayout>
</Route>

<Route path="/UpcomingTournaments">
  <MainLayout>
    <UpcomingTournaments/>
  </MainLayout>
</Route>