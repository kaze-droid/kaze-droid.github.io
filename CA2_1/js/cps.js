var counter=0;
// 10 seconds is default if no button is clicked
var time = 10;

// This function is called everytime the image map is clicked
function CPS_Start(e) {
    // e.preventDefault prevents default browser behaviour (it ensures the browser does not refresh when the image map is clicked)
    e.preventDefault();
    // If the game has not started yet (stopwatch count is 0), start the stopwatch and disable all radio buttons
    if (document.querySelector('#StopWatch').innerHTML == '0.00') {
        disable_all();
        startStopWatch();
    }
    counter++;
    document.querySelector('#score').innerHTML = counter;
}

function startStopWatch() {
    let StopWatch = 0;
    const Timer = setInterval(function () {
        /* Stopwatch will continue increasing and exceed time by 0.01 even 
        though it should have clearInterval. This is why there is a need to -0.01
        to prevent it from exceeding time */
        // Game ends
        if (StopWatch >= time-0.01) {
            clearInterval(Timer);
            // click the button to trigger a modal since I like the aesthetics of a modal more than a typical alert box
            document.querySelector(".EndTheGame").click();
            calculate_CPS();
            document.querySelector('#StopWatch').innerHTML = "0.00";
            counter=0;
            renable_all();
        // Continue adding time to the stopwatch every 0.01 seconds (or 10 ms)
        } else {
            StopWatch += 0.01;
            document.querySelector('#StopWatch').innerHTML = StopWatch.toFixed('2');
        }
    },10);
}

// Calculate your CPS and return it in a modal
function calculate_CPS() {
    let score = document.querySelector('#score').innerHTML;
    let time_obtained = parseFloat(time);
    document.querySelector('#time').innerHTML = time_obtained.toFixed('2');
    document.querySelector('#clicks').innerHTML = score;
    document.querySelector('#CPS_calculated').innerHTML = (score/time_obtained).toFixed('2');
}

/* Checks which radio button is selected and uses the selected value to set the stopwatch. Inside index.html, the radio buttons all have an onclick function that passes 
the value "this" into the parameter element so that the value of the stopwatch can be obtained*/
function check_button (element) {
    time = element.value;
    return;
}

// Disable all radio buttons in the middle of the game so they can't change their time
function disable_all () {
    /* querySelectorAll returns a node list (very similar to an array) but setAttribute
        only allows you to set the attribute for one element at a time. Hence, forEach has 
        to be used to iterate through each element in the node list*/

    let elements = document.querySelectorAll('input[name="options"]');
    elements.forEach(function (element) { 
        element.setAttribute('disabled','');
    });
}

// Renable all radio buttons by removing disabled attribute after the game
function renable_all () {
    let elements = document.querySelectorAll('input[name="options"]');
    elements.forEach(function (element) { 
        element.removeAttribute('disabled','');
    });
}