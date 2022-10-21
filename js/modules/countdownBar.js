export function countdownBar() {
    var countDownDate = new Date("Nov 28, 2022 09:00:00").getTime();
    let startDate = new Date("Sep 17, 2022, 08:00:00").getTime();
// Update the count down every 1 second
// Get todays date and time
    let now = new Date().getTime();

// Find the distance between now and the count down date
    let distanceWhole = countDownDate - startDate;
    let distanceLeft = countDownDate - now;

// Time calculations for minutes and percentage progressed
    let minutesLeft = Math.floor(distanceLeft / (1000 * 60));
    let minutesTotal = Math.floor(distanceWhole / (1000 * 60));
    let progress = Math.floor(((minutesTotal - minutesLeft) / minutesTotal) * 100);
    
    const currentProgress = (progress > 100) ? 100 : progress
    document.getElementById("progressbar").setAttribute("aria-valuenow", currentProgress);
    document.getElementById("progressbar").style.width = currentProgress + "%";
    document.getElementById("textprogressbar").innerText = currentProgress + "%";
};

