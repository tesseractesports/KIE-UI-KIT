<script>
    import Section from "../../components/Section.svelte";

    let players = [
        { id: 1, inGameName: "Player1", fullName: "Full Name 1", totalPoints: 20000, avgFinish: 95 },
        { id: 2, inGameName: "Player2", fullName: "Full Name 2", totalPoints: 19000, avgFinish: 90 },
        { id: 2, inGameName: "Player2", fullName: "Full Name 2", totalPoints: 19000, avgFinish: 90 },
        { id: 2, inGameName: "Player2", fullName: "Full Name 2", totalPoints: 19000, avgFinish: 90 },
        { id: 2, inGameName: "Player2", fullName: "Full Name 2", totalPoints: 19000, avgFinish: 90 },
        { id: 2, inGameName: "Player2", fullName: "Full Name 2", totalPoints: 19000, avgFinish: 90 },
        { id: 2, inGameName: "Player2", fullName: "Full Name 2", totalPoints: 19000, avgFinish: 90 },
        { id: 2, inGameName: "Player2", fullName: "Full Name 2", totalPoints: 19000, avgFinish: 90 },
        { id: 2, inGameName: "Player2", fullName: "Full Name 2", totalPoints: 19000, avgFinish: 90 },
        { id: 2, inGameName: "Player2", fullName: "Full Name 2", totalPoints: 19000, avgFinish: 90 },
    ];
</script>

  <Section>
    <div class="w-full  py-6 bg-[#151515] flex-col justify-start items-start gap-7 inline-flex">
      <div class="w-full sm:py-8 md:py-10 flex-col justify-start items-start gap-4 sm:gap-5 md:gap-6 lg:gap-7 inline-flex overflow-hidden ">
          <div class="w-full justify-start items-center gap-2 sm:gap-3 inline-flex">
              {#each ["Round", "Day", "Group"] as filter}
              <div
                  class=" justify-center items-center gap-2 flex relative w-full sm:w-auto">
                  <select
                      class="appearance-none pl-4 rounded-md shadow border border-Charcoal/300 py-2 bg-Charcoal/400 text-Charcoal/100 text-xs sm:text-sm font-medium leading-tight border-none focus:ring-0 focus:outline-none  pr-8 w-full sm:w-auto">
                      <option value="">{filter}</option>
                  </select>
                  <div class="pointer-events-none absolute right-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-Charcoal/100" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                  </div>
              </div>
              {/each}
          </div>
          <div class="w-full flex-col justify-start items-start gap-4 md:gap-5 flex overflow-x-auto whitespace-nowrap rounded-md">
              <table class="w-full border-collapse px-6">
                  <thead>
                      <tr>
                          {#each ["RANK", "TEAM NAME", "GROUP", "DAMAGE", "FIN.PTS", "POS.PTS", "TOT.PTS "] as header}
                          <th
                              class="px-6 py-3 bg-Charcoal/900 text-yellow-400 text-xs font-medium uppercase leading-none tracking-wide text-left">
                              {header}</th>
                          {/each}
                      </tr>
                  </thead>
                  <tbody>
                      {#each players as row, index}
                      <tr class={`transition duration-300 ${index % 2===0 ? " bg-Charcoal/600" : " bg-Charcoal/500" }`}>
                          <td class="px-6 py-5 text-Charcoal/50 text-sm font-medium leading-tight">{row.id}</td>
                          <td class="px-6 py-5 text-Charcoal/50 text-sm font-medium leading-tight">
                              <img class="rounded-xl inline-block mr-2" src="/images/Avatar.png" alt="" />
                              <span>{row.inGameName}</span>
                          </td>
                          <td class="px-6 py-5 text-Charcoal/100 text-sm font-normal">{row.Group}</td>
                          <td class="px-6 py-5 text-Charcoal/100 text-sm font-normal">{row.Damage}</td>
                          <td class="px-6 py-5 text-Charcoal/100 text-sm font-normal">{row.time}</td>
                          <td class="px-6 py-5 text-Charcoal/100 text-sm font-normal">{row.position}</td>
                          <td class="px-6 py-5 text-Charcoal/100 text-sm font-normal">{row.overall}</td>
                      </tr>
                      {/each}
                  </tbody>
              </table>
          </div>
      </div>
      </div>
  </Section>




