//add date & time to header
// create, amend, append
//create variables for where we will put the time
var $dateTimeHeader = $("#currentTime");
var $dateTimeElement = $("<p>");
//create the text/content that will go in that element
var $dateTime = moment().format('LLL');
//check i'm getting the correct date
console.log($dateTime);//yes I am
//append date element, to date header using date text
$dateTimeHeader.append($dateTimeElement.text($dateTime));
//---------------------------------------------------------//
//Dynamic class styling needed
//If in future apply class .future
//If in present apply class .current
//If in past is n/a thats the default styling (everything will start as a future class which will be gradullay removed)
//if an appoint apply class .appointment

//Non dry method
    //In HTML give each time an ID for that time
    //Assign a variable to each ID
    //To each variable apply an if statement
        //if set moment time is in past apply one class
        //if else it is the current time apply one class
        //else apply no classes
//variable for current time (in hours)
var currentTime = moment().hours();
console.log(currentTime);
//create a variable for each time, row ID
var $9am = $("#9am");
    if(currentTime === moment().hour(09)){
        $9am.addClass("current");
    } else if(currentTime>moment().hour(09)){
        $9am.removeClass("current");
        $9am.addClass("future");
    } else{
        $9am.removeClass("current");
        $9am.removeClass("future");
        $9am.addClass("past");
    }
var $10am = $("#10am");
    if(currentTime === moment().hour(10)){
        $10am.addClass("current");
    } else if(currentTime>moment().hour(10)){
        $10am.removeClass("current");
        $10am.addClass("future");
    } else{
        $10am.removeClass("current");
        $10am.removeClass("future");
        $10am.addClass("past");
    }
var $11am = $("#11am");
    if(currentTime === moment().hour(11)){
        $11am.addClass("current");
    } else if(currentTime>moment().hour(11)){
        $11am.removeClass("current");
        $11am.addClass("future");
    } else{
        $11am.removeClass("current");
        $11am.removeClass("future");
        $11am.addClass("past");
    }
var $12am = $("#12am");
    if(currentTime === moment().hour(12)){
        $12am.addClass("current");
    } else if(currentTime>moment().hour(12)){
        $12am.removeClass("current");
        $12am.addClass("future");
    } else{
        $12am.removeClass("current");
        $12am.removeClass("future");
        $12am.addClass("past");
    }
var $1pm = $("#1pm");
    if(currentTime === moment().hour(13)){
        $1pm.addClass("current");
    } else if(currentTime>moment().hour(13)){
        $1pm.removeClass("current");
        $1pm.addClass("future");
    } else{
        $1pm.removeClass("current");
        $1pm.removeClass("future");
        $1pm.addClass("past");
    }
var $2pm = $("#2pm");
    if(currentTime === moment().hour(14)){
        $2pm.addClass("current");
    } else if(currentTime>moment().hour(14)){
        $2pm.removeClass("current");
        $2pm.addClass("future");
    } else{
        $2pm.removeClass("current");
        $2pm.removeClass("future");
        $2pm.addClass("past");
    }
var $3pm = $("#3pm");
    if(currentTime === moment().hour(15)){
        $3pm.addClass("current");
    } else if(currentTime>moment().hour(15)){
        $3pm.removeClass("current");
        $3pm.addClass("future");
    } else{
        $3pm.removeClass("current");
        $3pm.removeClass("future");
        $3pm.addClass("past");
    }
var $4pm = $("#4pm");
    if(currentTime === moment().hour(16)){
        $4pm.addClass("current");
    } else if(currentTime>moment().hour(16)){
        $4pm.removeClass("current");
        $4pm.addClass("future");
    } else{
        $4pm.removeClass("current");
        $4pm.removeClass("future");
        $4pm.addClass("past");
    }
var $5pm = $("#5pm");
    if(currentTime === moment().hour(17)){
        $5pm.addClass("current");
    } else if(currentTime>moment().hour(17)){
        $5pm.removeClass("current");
        $5pm.addClass("future");
    } else{
        $5pm.removeClass("current");
        $5pm.removeClass("future");
        $5pm.addClass("past");
    }

