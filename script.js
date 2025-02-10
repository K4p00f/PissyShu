function updateTimeTogether() {
    let startDate = new Date("2024-09-13T21:26:00+09:00").getTime();
    let now = new Date().getTime();
    let difference = now - startDate;

let seconds = Math.floor((difference / 1000) % 60);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let hours = Math.floor((difference / 1000 / 60 / 60) % 24);
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    document.getElementById("time-together").innerHTML =
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(updateTimeTogether, 1000);
updateTimeTogether();
