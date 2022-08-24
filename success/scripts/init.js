$(document).ready(function(){
    console.log(screen.width);
    if(screen.width <= 900){
        $('.containerModuless').slick({
            infinite: false,
            slidesToShow: 1,
            adaptiveHeight:true,
            slidesToScroll: 1,
            arrows:false,
            dots:false
        });
    }else{
        setTimeout(function(){
            $('.containerModuless').masonry({
                itemSelector: '.module',
                fitWidth: true,
                horizontalOrder: true,
                gutter: 10
            });
        },500);
    }

    $("body>.section-comments>.container>.wrapper>.list").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:$('.sliderCommentsButtonPrev'),
        nextArrow:$('.sliderCommentsButtonNext'),
        dots:false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    prevArrow:false,
                    nextArrow:false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  arrows:false,
                  centerMode:false  
                }
            }
          ]
    });
    $("#input_phone_callback").inputmask({"mask": "+38 (999) 999-99-99"});
    //init limit program
    let limit = 4;
    $(".containerModuless .module").each(function(){
        if( $(this).find(".containerBlock").length > limit){
            let wrk = limit + 1;
            for(let q = 1; q <= $(this).find(".containerBlock").length ; q++){
                if(q > 3){
                    $(this).find(".containerBlock").eq(q).css("display","none");
                    $(this).find(".containerBlock").eq(q).addClass("hidden_block");
                }
            }
            $(this).find(".containerBlock").parent().append("<div class='button_show'> <span class='show_in_module'>Більше уроків</span> <span class='dec'></span> </div>");
        }
    });

    $(document).on('click','.show_in_module' , function(){
        if($(this).parent().parent().children('.hidden_block').is(":hidden")){
            if($(window).width() >900){
                $(this).parent().parent().children('.hidden_block').show(300);
                setTimeout(function(){
                    $('.containerModuless').masonry({
                        itemSelector: '.module',
                        fitWidth: true,
                        horizontalOrder: true,
                        gutter: 10
                    });
                },500);
            }else{
                $('.containerModuless').css("opacity","0");
                let block = $(this).parent().parent().children('.hidden_block');
                block.show(200);
                setTimeout(function(){
                    $('.containerModuless').slick('resize');
                    $('.containerModuless').css("opacity","1");
                },200);
            }
            $(this).text("Менше модулів");
            $(this).parent().children('.dec').addClass("reverse");
        }else{
            $(this).parent().parent().children('.hidden_block').hide(300);
            if($(window).width() >900){
                setTimeout(function(){
                    $('.containerModuless').masonry({
                        itemSelector: '.module',
                        fitWidth: true,
                        horizontalOrder: true,
                        gutter: 10
                    });
                },500);
            }else{
                $('.containerModuless').css("opacity","0");
                let block = $(this).parent().parent().children('.hidden_block');
                block.hide(200);
                setTimeout(function(){
                    $('.containerModuless').slick('resize');
                    $('.containerModuless').css("opacity","1");
                    console.log('start');
                },200);
            }
            $(this).text("Більше модулів");
            $(this).parent().children('.dec').removeClass("reverse");
        }
    });
    
    // $(window).resize(function(e){
    //     let ScreenWidth = screen.width;     
    //     if(ScreenHeight <= 1000){
    //         $('.containerModules').masonryGrid({'columns': 2});
    //     } 
    // });
});