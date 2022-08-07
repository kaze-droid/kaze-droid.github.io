var dayEvent = [];

dayEvent[1] = "<br>FOP Assignment Due Date<br>CPR Presentation";
dayEvent[2] = "";
dayEvent[3] = "<br>FOP Interview";
dayEvent[4] = "<br>CAT Presentation";
dayEvent[5] = "";
dayEvent[6] = "<br>WEEKEND";
dayEvent[7] = "<br>WEEKEND";


dayEvent[8] = "<br>SFL Assessment<br>FED Assignment Due Date";
dayEvent[9] = "<br>National Day";
dayEvent[10] = "<br>FED Interview";
dayEvent[11] = "";
dayEvent[12] = "<br>FOC Assignment Due Date";
dayEvent[13] = "<br>WEEKEND";
dayEvent[14] = "<br>WEEKEND";

dayEvent[15] = "<br>Start of EST Revision Week";
dayEvent[16] = "";
dayEvent[17] = "";
dayEvent[18] = "";
dayEvent[19] = "<br>End of EST Revision Week";
dayEvent[20] = "<br>WEEKEND";
dayEvent[21] = "<br>WEEKEND";

dayEvent[22] = "<br>Math Written Exam";
dayEvent[23] = "<br>Start of Term Break";
dayEvent[24] = "";
dayEvent[25] = "";
dayEvent[26] = "";
dayEvent[27] = "<br>WEEKEND";
dayEvent[28] = "<br>WEEKEND";

dayEvent[29] = "";
dayEvent[30] = "";
dayEvent[31] = "";

/* Set the date displayed in the calendar */
var thisDay = new Date("1 August 2022");
var today = new Date();

/* Write the calender to the element with the id "calendar"*/
document.querySelector("#calendar").innerHTML = createCalendar(thisDay);

/*Function to generate the calendar table*/
function createCalendar(calDate) {
    var calendarHTML = "<table id='calendar_table' class='table table-bordered table-hover text-center'>";
    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(calDate);
    calendarHTML += "</table>";
    calendarHTML+= "<figcaption for='calendar_table' class='text-white ms-2'>My EST Timetable</figcaption>";
    return calendarHTML;
}


// Function to write a table row if weekday abbreviations
function calWeekdayRow() {
    //Array of weekday abbreviations
    var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var rowHTML = "<tr>";
    
    //Loop Through the dayName array
    for (let i = 0; i < dayName.length; i++) {
        rowHTML += "<th class='calendar_weekdays'>" + dayName[i] +"</th>";
    }

    return rowHTML += "</tr>";
}

//Function to write table rows for each day of the month
function calDays(calDate) {
    //Determine the starting day of the month
    var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    var weekDay = day.getDay(); 
    //Write blank cells preceding the staring day
    var htmlCode = "<tr>";
    for (var i = 0; i < weekDay; i++) {
        htmlCode += "<td></td>";
    }
    //Write cells for each day of the month
    // Constant since there are always 31 days in August
    const totalDays = 31;
    var highlighDay = today.getDate();
    for (let i = 1; i <= totalDays; i++) {
        day.setDate(i);
        weekDay = day.getDay();

        if (weekDay === 0) htmlCode += "<tr>";
        if (i === highlighDay) {
            htmlCode += "<td class='calendar_dates col-1 h-50' id='calendar_today'>" + i + dayEvent[i] +  "</td>";
        } else {
            htmlCode += "<td class='calendar_dates col-1 h-50'>" + i + dayEvent[i] + "</td>";
        }
        if (weekDay === 6) htmlCode += "</tr>";
    }
    //Return table rows and table data to make a calendar
    return htmlCode;
}