// Display date
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// get current time
var currentTime = moment().format('ha');;
var times = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"];
var future = false;

// set class of time blocks based on  current time
for (var i = 0; i < times.length; i++){
    var currentId = "#" + times[i];
    // check if its before 8AM
    if (currentTime[1] === "a" && currentTime[0] < 8){
            $(currentId).addClass("future");
    }
    // check if times[i] is right now
    else if (times[i] == currentTime[0]){
        $(currentId).addClass("present");
        // further iterations should set future class
        future = true;
    }
    else if (future) {
        $(currentId).addClass("future");
    }
    else {
        $(currentId).addClass("past");
    }
}

// look for save clicks
var saveBtns = $(".saveBtn");
saveBtns.on("click", function(){
    $(this).attr("data-save-time");
});