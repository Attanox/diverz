// $(document).ready(function(){
//     // $('.product--center__showroom').slick();
//     // $('.product--center__showroom').on('swipe', function(event, slick, direction){
//     //     console.log(direction);
//     //     let temp = $('.product--center__showroom').get(0);
//     //     let all_imgs = temp.children[1].children[0].children;
//     //     console.log(all_imgs.namedItem(".slick-active"));
//     //   });

//   $('.product--center__showroom').slick({
//     dots: true,
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 1,
//   });
//   let temp = $('.product--center__showroom').get(0);
//   let all_imgs = temp.children[1].children[0].children;
//   for( let i = 0; i < all_imgs.length; i++ ) {
//     all_imgs.item(i).style.transition = "all 0.4s ease";
//   }
//   $('.slick-center').css("transform", "scale(1.2)");
//     // On swipe event
//   $('.product--center__showroom').on('swipe', function(event, slick, direction){
//     let temp = $('.product--center__showroom').get(0);
//     let all_imgs = temp.children[1].children[0].children;
//     for( let i = 0; i < all_imgs.length; i++ ) {
//       all_imgs.item(i).style.transform = "scale(1)";
//     }
//     $('.slick-center').css("transform", "scale(1.2)");
//   });



//     // $('.slick-center').css("transform", "scale(1.5)");
//     // $('.product--center__showroom .main').on("live", function(){
//     //     $('.product--center__showroom .main').forEach(el => {
//     //         el.css("transform", "scale(1)");
//     //     });
//     //     $('.slick-center').css("transform", "scale(1.5)");
//     //     $('.slick-current').css("transform", "scale(1.5)");
//     //     console.log("ok");
//     // });
// });
const my_list = document.querySelectorAll('.navigation__list > *');
const c_box = document.querySelector('.navigation--checkbox');
my_list.forEach(el => {
    el.addEventListener('click', function(){
        setTimeout( function(){c_box.checked = false;}, 600);
    });
});
let clickedPrev = false;
let clickedNext = false;
let flag = 0;
document.querySelector('#next').addEventListener("click", function(){
    if (!clickedNext && flag == 2){
      flag--;
    }
    clickedPrev = false;
    clickedNext = true;
    if (flag === 0) {
        document.querySelector('.n1').style.transform = "scale(1.2) translateX(80%)";
        document.querySelector('.n1').style.zIndex =  "999";
        document.querySelector('.n2').style.transform = "scale(0.9) translateX(100%)";
        document.querySelector('.n2').style.zIndex =  "9";
        document.querySelector('.n3').style.transform = "scale(0.9) translateX(-200%)";
        document.querySelector('.n3').style.zIndex =  "9";
        flag=1;
    } else if (flag === 1) {
        document.querySelector('.n1').style.transform = "scale(0.9) translateX(200%)";
        document.querySelector('.n1').style.zIndex =  "9";
        document.querySelector('.n2').style.transform = "scale(0.9) translateX(-100%)";
        document.querySelector('.n2').style.zIndex =  "9";
        document.querySelector('.n3').style.transform = "scale(1.2) translateX(-80%)";
        document.querySelector('.n3').style.zIndex =  "999";
        flag=2;
    } else if (flag === 2) {
        document.querySelector('.n1').style.transform = "scale(0.9) translateX(0)";
        document.querySelector('.n1').style.zIndex =  "9";
        document.querySelector('.n2').style.transform = "scale(1.2) translateX(0)";
        document.querySelector('.n2').style.zIndex =  "999";
        document.querySelector('.n3').style.transform = "scale(0.9) translateX(0)";
        document.querySelector('.n3').style.zIndex =  "9";
        flag=0;
    }
    console.log(flag);
});
document.querySelector('#prev').addEventListener("click", function(){
    if (!clickedPrev && flag == 2){
      flag--;
    }
    clickedPrev = true;
    clickedNext = false;
    if (flag === 0) {
        document.querySelector('.n1').style.transform = "scale(0.9) translateX(200%)";
        document.querySelector('.n1').style.zIndex =  "9";
        document.querySelector('.n2').style.transform = "scale(0.9) translateX(-100%)";
        document.querySelector('.n2').style.zIndex =  "9";
        document.querySelector('.n3').style.transform = "scale(1.2) translateX(-80%)";
        document.querySelector('.n3').style.zIndex =  "999";
        flag=1;
    } else if (flag === 1) {
        document.querySelector('.n1').style.transform = "scale(1.2) translateX(80%)";
        document.querySelector('.n1').style.zIndex =  "999";
        document.querySelector('.n2').style.transform = "scale(0.9) translateX(100%)";
        document.querySelector('.n2').style.zIndex =  "9";
        document.querySelector('.n3').style.transform = "scale(0.9) translateX(-200%)";
        document.querySelector('.n3').style.zIndex =  "9";
        flag=2;
    } else if (flag === 2) {
        document.querySelector('.n1').style.transform = "scale(0.9) translateX(0)";
        document.querySelector('.n1').style.zIndex =  "9";
        document.querySelector('.n2').style.transform = "scale(1.2) translateX(0)";
        document.querySelector('.n2').style.zIndex =  "999";
        document.querySelector('.n3').style.transform = "scale(0.9) translateX(0)";
        document.querySelector('.n3').style.zIndex =  "9";
        flag=0;
    }
    console.log(flag);
});
