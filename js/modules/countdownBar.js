export function countdownBar() {
    var countDownDate = new Date("Nov 28, 2022 09:00:00").getTime();
    var startDate = new Date("Sep 17, 2022, 08:00:00").getTime();
// Update the count down every 1 second
// Get todays date and time
    var now = new Date().getTime();

// Find the distance between now and the count down date
    var distanceWhole = countDownDate - startDate;
    var distanceLeft = countDownDate - now;

// Time calculations for minutes and percentage progressed
    var minutesLeft = Math.floor(distanceLeft / (1000 * 60));
    var minutesTotal = Math.floor(distanceWhole / (1000 * 60));
    var progress = Math.floor(((minutesTotal - minutesLeft) / minutesTotal) * 100);
    console.table(progress)
    document.getElementById("progressbar").setAttribute("aria-valuenow", progress);
    document.getElementById("progressbar").style.width = progress + "%";
    document.getElementById("textprogressbar").innerText = progress + "%";
};

