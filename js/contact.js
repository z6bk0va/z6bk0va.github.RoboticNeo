// ------------------------------ГРАФИК РАБОТЫ------------------------------
function getStatus() {
    const now = new Date();
    const day = now.getDay();
    const minutes = now.getHours() * 60 + now.getMinutes();

    let open = 9 * 60;
    let close = (day === 5) ? 17 * 60 : 18 * 60;

    let isWeekend = (day === 0 || day === 6);

    let statusText = "";
    let statusSub = "";

    if (isWeekend) {
        statusText = "Сейчас закрыто";

        let nextOpen = new Date();
        nextOpen.setDate(now.getDate() + (day === 6 ? 2 : 1));
        nextOpen.setHours(9,0,0,0);

        let diff = Math.floor((nextOpen - now) / 60000);

        if (diff <= 60) {
            statusSub = "До открытия " + diff + " мин";
        }
    } else {
        if (minutes >= open && minutes < close) {
            statusText = "Сейчас открыто";

            let diff = close - minutes;

            if (diff <= 60) {
                statusSub = "До закрытия " + diff + " мин";
            }
        } else {
            statusText = "Сейчас закрыто";

            let diff = (minutes < open)
                ? open - minutes
                : (24*60 - minutes + open);

            if (diff <= 60) {
                statusSub = "До открытия " + diff + " мин";
            }
        }
    }

    document.getElementById("statusText").innerText = statusText;
    document.getElementById("statusSub").innerText = statusSub;
}

getStatus();
