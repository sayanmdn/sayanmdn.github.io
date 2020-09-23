validateForm = () => {
    var x = document.forms["myForm"]["name"].value;
    if (x == "abc" || x == "asd") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["number"].value;

    var phoneno = /^\d{10}$/;
    if (y.match(phoneno)) {
        return true;
    }
    else {
        alert("Phone number not valid. 10 digits must be there in a number");
        return false;
    }

}
// get the element to animate
// var element = document.getElementById('get-in-touch');
// var elemetTop = document.getElementsByClassName('right-about')
// var elementHeight = element.clientHeight;
// var elementTopHeight = elemetTop.clientHeight;

// // listen for scroll event and call animate function
// document.addEventListener('scroll', animate);
// document.addEventListener('scroll', animateTop);
// // check if element is in view
// function inView() {
//     // get window height
//     var windowHeight = window.innerHeight;
//     // get number of pixels that the document is scrolled
//     var scrollY = window.scrollY || window.pageYOffset;

//     // get current scroll position (distance from the top of the page to the bottom of the current viewport)
//     var scrollPosition = scrollY + windowHeight;
//     // get element position (distance from the top of the page to the bottom of the element)
//     var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

//     // is scroll position greater than element position? (is element in view?)
//     if (scrollPosition > elementPosition) {
//         return true;
//     }

//     return false;
// }

// // animate element when it is in view
// function animate() {
//     // is element in view?
//     if (inView()) {
//         // element is in view, add class to element
//         element.classList.add('animate');
//         // elemetTop.classList.add('animateTop');
//     }
// }
// // var count =1;
// function isIntoView(elem)
// {
//     var documentViewTop = $(window).scrollTop();
//     // var documentViewBottom = documentViewTop + $(window).height();

//     var elementTop = $(elem).offset().top;
//     // var elementBottom = elementTop + $(elem).height();

//     return ((elementTop >= documentViewTop));
// }
//   $(window).scroll(function(){
//    if (isIntoView($('#get-in-touch'))){
//        alert("Div in view port");
//     //    count = 0;
//     }
// })