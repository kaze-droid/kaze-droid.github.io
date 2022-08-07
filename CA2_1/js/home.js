// blink for the first few seconds before name is typed out
// Use visibility instead of display: none so justify-content won't keep adjusting the text left and right

/* Note that usually, having a semicolon after a function declaration is not needed but if the function is written as an expression (e.g. var a = function test(o)) {};) 
then a semicolon is needed (see line 23 and line 40). For more info: https://stackoverflow.com/questions/11978698/do-we-need-a-semicolon-after-function-declaration/11978749 */
window.onload = function blinker_1() {
    // Incase the user restarts, the scroll will be disabled so bring them back to the top before disabling the scroll
    let start = document.querySelector('#start'); 
    start.scrollIntoView();
    let count = 0;
    var blink_1 = setInterval (function () {
                    if (document.querySelector('.custom-blinker').style.visibility == 'hidden') {
                        document.querySelector('.custom-blinker').style.visibility = 'visible';
                    } else {
                        document.querySelector('.custom-blinker').style.visibility = 'hidden';
                    }
                    count++;
                    if (count===4) {
                        clearInterval(blink_1);
                        display_name();
                    }
                },500);
};

function blinker_2() {
    let count = 0;
    var blink_2 = setInterval (function () {
                    if (document.querySelector('.custom-blinker').style.visibility == 'hidden') {
                        document.querySelector('.custom-blinker').style.visibility = 'visible';
                    } else {
                        document.querySelector('.custom-blinker').style.visibility = 'hidden';
                    }
                    count++;
                },500);
    window.onscroll = function () {
        // check if count is odd
        if (count%2) {
            clearInterval(blink_2);
        }
    };
}

function display_name() {
    let ary = ['R','Y','A','N','_','Y','E','O','(',')'];
    let count = 0;
    var i = setInterval (function () {
                    document.querySelector('.custom-name').innerHTML += "<b>" + ary[count] + "</b>";
                    count++;
                    if (count == ary.length) {
                        clearInterval(i);
                        blinker_2();
                        display_explore();
                        
                    }
                } , 400);
}

function display_explore() {
    document.querySelector('.custom-circle').classList.remove("custom-invisible");
}

// create a function that scrolls the second page in view (used in home.html for a button with onclick() )
function exploreMore() {
    let more = document.querySelector('#more'); 
    more.scrollIntoView(true);
    document.querySelector('html').style.overflowY = 'scroll';
}