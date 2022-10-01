
export function enableFireworks(totalDays) {

    if (totalDays === 0) {
        let target = 3
        const heading = document.getElementById("heading");

        for (var i = 0; i < target; i++) {
            var div = document.createElement("div");
            div.className = 'firework'
            heading.insertAdjacentElement("afterend", div);
        }
    }
}