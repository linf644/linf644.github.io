// define each section
let sectionOne = document.querySelector(".section-1");
let sectionTwo = document.querySelector(".section-2");
let sectionThree = document.querySelector(".section-3");
let sectionFour = document.querySelector(".section-4");
let sectionFive = document.querySelector(".section-5");
let sectionSix = document.querySelector(".section-6");

// define descriptions
let sectionOneText = document.querySelector(".section-1-text");
let sectionTwoText = document.querySelector(".section-2-text");
let sectionThreeText = document.querySelector(".section-3-text");
let sectionFourText = document.querySelector(".section-4-text");
let sectionFiveText = document.querySelector(".section-5-text");
let sectionSixText = document.querySelector(".section-6-text");



// when mouse hover over the section text
// description appear on the right
// mouse out, description disappear
// section one
sectionOne.addEventListener("mouseover", function () {
    sectionOneText.style.display = "block";
    sectionOne.style.background = "radial-gradient(50% 50% at 50% 50%, rgba(182, 204, 217, 0.74) 0%, rgba(182, 204, 217, 0) 100%)";
});
sectionOne.addEventListener("mouseout", function () {
    sectionOneText.style.display = "none";
    sectionOne.style.background = "0";

});
// section two
sectionTwo.addEventListener("mouseover", function () {
    sectionTwoText.style.display = "block";
    sectionTwo.style.background = "radial-gradient(50% 50% at 50% 50%, rgba(182, 204, 217, 0.74) 0%, rgba(182, 204, 217, 0) 100%)";

});
sectionTwo.addEventListener("mouseout", function () {
    sectionTwoText.style.display = "none";
    sectionTwo.style.background = "0";
});
// section three
sectionThree.addEventListener("mouseover", function(){
    sectionThreeText.style.display = "block";
    sectionThree.style.background = "radial-gradient(50% 50% at 50% 50%, rgba(182, 204, 217, 0.74) 0%, rgba(182, 204, 217, 0) 100%)";

})
sectionThree.addEventListener("mouseout", function(){
    sectionThreeText.style.display = "none";
    sectionThree.style.background = "0";
})
// section four
sectionFour.addEventListener("mouseover", function(){
    sectionFourText.style.display = "block";
    sectionFour.style.background = "radial-gradient(50% 50% at 50% 50%, rgba(182, 204, 217, 0.74) 0%, rgba(182, 204, 217, 0) 100%)";
})
sectionFour.addEventListener("mouseout", function(){
    sectionFourText.style.display = "none";
    sectionFour.style.background = "0";
})
// section five
sectionFive.addEventListener("mouseover", function(){
    sectionFiveText.style.display = "block";
    sectionFive.style.background = "radial-gradient(50% 50% at 50% 50%, rgba(182, 204, 217, 0.74) 0%, rgba(182, 204, 217, 0) 100%)";
})
sectionFive.addEventListener("mouseout", function(){
    sectionFiveText.style.display = "none";
    sectionFive.style.background = "0";
})
// section six
sectionSix.addEventListener("mouseover", function(){
    sectionSixText.style.display = "block";
    sectionSix.style.background = "radial-gradient(50% 50% at 50% 50%, rgba(182, 204, 217, 0.74) 0%, rgba(182, 204, 217, 0) 100%)";
})
sectionSix.addEventListener("mouseout", function(){
    sectionSixText.style.display = "none";
    sectionSix.style.background = "0";
})