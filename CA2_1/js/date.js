var end = new Date("22 August 2022 18:00:00");

window.onload = function() {
    setInterval(function () {
                    write_countdown();
                } ,1000);
};

function write_countdown() {
    var today = new Date();
    if (today > end) {
        document.querySelector('#date_to_EST').innerHTML = '<div class="display-4 h3 days_countdown">EST has ended!</div>';
        return;
    } else {
        var countdown = end.getTime() - today.getTime();
        let days = Math.floor(countdown / (1000 * 3600 * 24));
        countdown %= (1000 * 3600 * 24);
        let hours = Math.floor(countdown / (1000 * 3600));
        countdown %= (1000 * 3600);
        let minutes = Math.floor(countdown / (1000 * 60));
        countdown %= (1000 * 60);
        let seconds = Math.floor(countdown / (1000));
    
        document.querySelector('#days').innerHTML = days;
        document.querySelector('#hours').innerHTML = hours;
        document.querySelector('#minutes').innerHTML = minutes;
        document.querySelector('#seconds').innerHTML = seconds;
        return;
    }
}