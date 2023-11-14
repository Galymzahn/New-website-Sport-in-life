document.addEventListener('DOMContentLoaded', function() {
    let horizontScroll = document.querySelector('.photo-container');
    let leftBtn = document.getElementById('leftBtn');
    let rightBtn = document.getElementById('rightBtn');

    rightBtn.addEventListener('click', () => {
        horizontScroll.scrollBy({
            left: 900,
            behavior: 'smooth'
        });
    });

    leftBtn.addEventListener('click', () => {
        horizontScroll.scrollBy({
            left: -900,
            behavior: 'smooth'
        });
    });
});


function showGrades() {
    var gradesContainer = document.createElement("div");
    gradesContainer.className = "grades-container";

    for (let i = 1; i <= 5; i++) {
        var gradeButton = document.createElement("button");
        gradeButton.className = "grade-button";
        gradeButton.textContent = i;
        gradeButton.addEventListener("click", function () {
            alert("Selected grade: " + i);
            gradesContainer.remove();
        });

        gradesContainer.appendChild(gradeButton);
    }

    document.body.appendChild(gradesContainer);
}
function redirectToPrac() {
    window.location.href = "prac.html";}