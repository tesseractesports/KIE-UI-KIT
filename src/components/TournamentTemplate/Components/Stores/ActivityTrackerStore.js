// activityTracker.js
import { writable } from 'svelte/store';




function updateActivityTime() {
  lastActivityTime.update(() => Date.now());    
  //console.log('Activity detected');
}

window.addEventListener('click', updateActivityTime);
window.addEventListener('mousemove', updateActivityTime);
window.addEventListener('keydown', updateActivityTime);

export const lastActivityTime = writable(Date.now());