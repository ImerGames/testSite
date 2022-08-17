$(document).ready(function(){
    let mouseOffset = { x : "110" , y : "110" }
    let targetOffset = { x : "0" , y : "0" } 
    $("#btn_open_close_more_modules").click(function(){
        let isOpen = $(this).attr("data-open");
        
        if(isOpen == "true"){
            //open
            $(".secondOrderModules").show(300);
            $(this).attr("data-open" , "false");
            $(this).text("Менше модулів");
            i=0;
            let animOpen = setInterval( function(){
                $(".containerModules>div>div.secondOrderModules").eq(i).css({"opacity":"1"});
                if(i == $(".secondOrderModules").length){
                    clearInterval(animOpen);
                }
                i++;
            }, 400);
        }else{
            //close
            i=$(".secondOrderModules").length -1;
            let animClose = setInterval( function(){
                $(".containerModules>div>div.secondOrderModules").eq(i).css({"opacity":"0"});
                if(i == 0){
                    clearInterval(animClose);
                }
                i--;
            }, 400);
            let time = 400 * ($(".secondOrderModules").length +1);
            setTimeout(function(){
                $(".secondOrderModules").hide(300);
            },time);
            $(this).attr("data-open" , "true");
            $(this).text("Більше модулів");
        }
    });
    $("#answer_sect > li > .open").click(function(){
        let parent = $(this).parent();
        let block = $(parent).children(".block");
        if(block.is(":hidden")){
            block.show(500);
            $(this).children(".left").css({
                "transform":"translate(-50% , -50%) rotate(450deg)"
            });
            $(this).children(".right").css({
                "transform":"translate(-50% , -50%) rotate(360deg)"
            });
        }else{
            block.hide(500);
            $(this).children(".left").css({
                "transform":"translate(-50% , -50%) rotate(0deg)"
            });
            $(this).children(".right").css({
                "transform":"translate(-50% , -50%) rotate(0deg)"
            });
        }
    });
});