

$(function(){
    // header fade-in & fade-out
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 100){
            $("#header").removeClass("header_deactive").addClass("header_active");
        }else{
            $("#header").removeClass("header_active").addClass("header_deactive");
        }
    });

    // burger menu icon 클릭하면 full page menu 나오기
    $(function() {
        $('.hamburger-button').on('click', function(event){
            event.preventDefault();
            
            $(this).toggleClass('active');
            $('.overlay').toggleClass('visible');
    
        });
    });

    // full page menu에서 항목 클릭하면 메뉴 접기
    $(function(){
        $('li').on('click', function(){
            $('.hamburger-button').toggleClass('active');
            $('.overlay').removeClass('visible');
        });
    });

    
});
// h1 타이핑 효과
const content = "Hi. I'm Somi, \n front-end developer.";
const text = document.querySelector(".hi");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)

// function typing(){
//     if (i < content.length) {
//     let txt = content.charAt(i);
//     text.innerHTML += txt=== "\n" ? "<br/>": txt;
//     i++;
//     }
// }
// setInterval(typing, 200)

    // function typing () {
    //     text.textContent += content[index++];
    //     if(index > content.length){
    //         text.textContent = "";
    //         index = 0;
    //     }
    // };
    // setInterval(typing, 200)

const trigger = new ScrollTrigger.default({
    viewport: {
        x: 0,
        y: 0.5
    }
});
trigger.add('[data-trigger]');

// jqeury circle progress
function Circle(a){
    $(a).circleProgress({startAngle: -1.55, animation: { duration: 7000, easing: "circleProgressEasing" }, fill:{color: '#c79288'}}).on('circle-animation-progress', function(event, progress, stepValue){
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
    });
};

Circle('.round');