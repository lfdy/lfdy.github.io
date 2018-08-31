// arrow__left.addEventListener("click", slider_left())
// // var clicked = document.getElementsByClassName('tasty__slider-arrow-left');
// // clicked.addEventListener("click", slider_left);
// //
// // var clicked = document.getElementsByClassName('tasty__slider-arrow-right');
// // clicked.addEventListener("click", slider_right);
//
// function slider_left() {
// var slide = document.getElementsByClassName('tasty__current-cake');
// alert('ffafafafa');
// }
var tasty_current = document.getElementById('tasty__current');
var tasty_item_1 = document.getElementById('tasty__slider-item-1');
var tasty_item_2 = document.getElementById('tasty__slider-item-2');
var tasty_item_3 = document.getElementById('tasty__slider-item-3');
var count = 5;

var listImg = [
    "url('file:///C:/Project/Bakery_test/img/1.jpeg')",
    "url('file:///C:/Project/Bakery_test/img/2.jpeg')",
    "url('file:///C:/Project/Bakery_test/img/3.jpeg')",
    "url('file:///C:/Project/Bakery_test/img/4.jpeg')",
    "url('file:///C:/Project/Bakery_test/img/5.jpeg')",
    "url('file:///C:/Project/Bakery_test/img/6.jpeg')",
    "url('file:///C:/Project/Bakery_test/img/7.jpeg')",
    "url('file:///C:/Project/Bakery_test/img/8.jpeg')",
    "url('file:///C:/Project/Bakery_test/img/9.jpeg')",
    "url('file:///C:/Project/Bakery_test/img/10.jpeg')"
];
var listImgLength = listImg.length;
var i = 0;

var clickLeft = function () {
    if (i - (listImgLength - 4) < 0) {
        tasty_current.style.backgroundImage = listImg[i +1];
        tasty_item_1.style.backgroundImage = listImg[i + 2];
        tasty_item_2.style.backgroundImage = listImg[i + 3];
        tasty_item_3.style.backgroundImage = listImg[i + 4];
        i++;
    }

}

var clickRight = function () {
    if ((i - 1) >= 0) {
        tasty_current.style.backgroundImage = listImg[i - 1];
        tasty_item_1.style.backgroundImage = listImg[i];
        tasty_item_2.style.backgroundImage = listImg[i + 1];
        tasty_item_3.style.backgroundImage = listImg[i + 2];
        i--;
    }

}


arrow__left.addEventListener("click", clickLeft);
arrow__right.addEventListener("click", clickRight);
