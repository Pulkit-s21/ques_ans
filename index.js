
// * Using selectors inside the element
const questions = document.querySelectorAll(".question"); // Accessing all the articles and into the variable "questions" to add the class "show-text" into it

questions.forEach(function (article) { // Here we are looping thru all the articles 1 by 1
    const btn = article.querySelector(".question-btn"); // Accessing the button with class "question-btn" in that specifc article and not the whole DOM
    btn.addEventListener("click", function () {
        questions.forEach(function (item) { // Here we are again going thru all the articles and checking which button we are clicking
            if (item !== article) { // if the box we are clicking the btn in isnt same as the box which has the text shown then the "show-text" class is removed from it
                item.classList.remove("show-text");
            }
        });
        article.classList.toggle("show-text"); // Adding the class "show-text" to the box on which we click
    });
});


// * Traversing thru DOM
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });