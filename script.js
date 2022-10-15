var imgArray = [
    'images/LOGO.jpg',
    'images/b1.jpg',
    'images/b2.jpg',
    'images/b3.jpg',
    'images/b4.jpg'
];
var i = 0;
var imgDuration = 4000;

function slideShow() {
    document.getElementById('image1').src = imgArray[i];
    i++;
    if (i == imgArray.length) {
        i = 0;
    }
    setTimeout("slideShow()", imgDuration);
}
slideShow();


function myFunction() {
    alert("Buy Now Latest Smartphones At Best Price")

}

function function1()
{
    window.alert("ITEM ADDED TO CART");
}