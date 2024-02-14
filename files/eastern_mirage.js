var tags = document.querySelectorAll(".tag h1 a");
var image = document.getElementById("bg_img");

Array.from(tags).forEach((tag) => {
    tag.addEventListener("mousemove", (e) => {
        // alert(e.target.getAttribute('data-picc'))
        image.src = e.target.getAttribute('data-picc');
        image.style.opacity = 0.94;
    });
    tag.addEventListener("mouseout", () => {

        image.src = "";
        image.style.opacity = 0;

    });
});