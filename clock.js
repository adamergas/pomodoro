var workMin = 25,
    breakMin = 2,
    min = workMin,
    sec = 0,
    isBreak = false,
    go = false,
    timer;

$(document).ready(function() {

  $("#wtd").on("click", function(){ workDown() });
  $("#wtu").on("click", function(){ workUp() });
  $("#btd").on("click", function(){ breakDown() });
  $("#btu").on("click", function(){ breakUp() });
  $("#res").on("click", function(){ reset() });
  $("#go").on("click", function(){ if(!go){ start() }});
});

function workDown(){
  if(!go && workMin > 1){
    workMin--;
    min = workMin;
    $("#wt").html(workMin);
    $("#min").html(workMin);

  }
}
function workUp(){
  if(!go){
    workMin++;
    min = workMin;
    $("#wt").html(workMin);
    $("#min").html(workMin);
  }
}
function breakDown(){
  if(!go && breakMin > 1){
    breakMin--;
    $("#bt").html(breakMin);
  }
}
function breakUp(){
  if(!go){
    breakMin++;
    $("#bt").html(breakMin);
  }
}

function reset(){
  clearInterval(timer);
  go = false;
  min = workMin;
  sec = 0;
  $("#msg").html("");
  $("#min").html(min);
  $("#sec").html(("00" + sec).slice(-2));
}

function start(){
  $("#msg").html("GET TO WORK!");
  go = true;
  timer = setInterval(function(){
    if(sec===0){
      if(min===0){
        sec = 0;
        switchTime();
      }
      else{
        sec = 59;
        min--;
      }
    }
    else{
      sec--;
    }
    $("#min").html(min);
    $("#sec").html(("00" + sec).slice(-2));
  }, 1000);
}

function switchTime(){
  if(isBreak){
    isBreak = false;
    min = workMin;
    $("#msg").html("GET TO WORK!");
    $("#bkgd").addClass("bkgd1");
    $("#bkgd").removeClass("bkgd2");
  }
  else{
    isBreak = true;
    min = breakMin;
    $("#bkgd").removeClass("bkgd1");
    $("#bkgd").addClass("bkgd2");
    $("#msg").html("BREAK TIME!");
  }
}
