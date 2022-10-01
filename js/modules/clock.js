import { enableFireworks } from "./enableFireworks.js";

export function clock() {
  // Get dates
  const today = new Date();
  const target_date = new Date('11/28/2022');
  // Calc difference
  const difference = target_date.getTime() - today.getTime();
  let totalDays = Math.max(0, Math.ceil(difference / (1000 * 3600 * 24)));

  // Default messages
  const msgList = { 0: "My love is coming home!", 1: "Tomorrow is the day!", 1000: (totalDays > 1 ? "Days" : "Day").concat(" to be back home!") }
  const finalText = (msgList[totalDays] === undefined) ? msgList[1000] : msgList[totalDays]
  // Set Values on UI
  document.getElementById("numdays").innerText = totalDays;
  document.getElementById("msg").innerText = finalText;
  // Calling fireworks if totalDays === 0
  enableFireworks(totalDays)
}