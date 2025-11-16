document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".navigation ul li");
    const indicator = document.querySelector(".indicator");

    function moveIndicator(element) {
        const index = Array.from(items).indexOf(element);
        const positions = [0, 80, 160, 240, 320];

        indicator.style.left = (positions[index] + 10) + "px";

        items.forEach(li => li.classList.remove("active"));
        element.classList.add("active");
    }

    items.forEach(li =>
        li.addEventListener("click", () => moveIndicator(li))
    );

});
