$(".begin").click(function() {
    $(".start").fadeOut();
    $(".question1").fadeIn();
});
        
$(".pig").click(function() {
    $(".question1").fadeOut();
    $(".question2").fadeIn();
});

$(".okyuh").click(function() {
    $(".question2").fadeOut();
    $(".question3").fadeIn();
});

$(".yuhok").click(function() {
    $(".question3").fadeOut();
});

$(".yuhok").click(function() {
    
    var likes = $(".scale").val();
    var lead = $(".leader").val();
    var temper = $(".temper").val();
    
    var lead = lead.toLowerCase();
    var temper = temper.toLowerCase();
    
    if(likes < "5" && lead === "yes" && temper === "yes") {
        $(".answer1").show();
    }else if(likes < "5" && lead === "no" && temper ==="yes"){
        $(".answer2").show();
    }else if(likes < "5" && lead === "no" && temper === "no"){
        $(".answer3").show();
    }else if(likes < "5" && lead === "yes" && temper === "no"){
        $(".answer4").show();
    }else if(likes > "5" && lead === "yes" && temper === "yes"){
        $(".answer5").show();
    }else if(likes > "5" && lead === "yes" && temper === "no"){
        $(".answer6").show();
    }else if (likes > "5" && lead === "no" && temper === "yes"){
            $(".answer7").show();
    }else if (likes > "5" && lead === "no" && temper === "no"){
            $(".answer8").show();
    }else {
        $(".YOOO").show();
    }
    
});



