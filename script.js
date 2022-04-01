document.querySelector(".fa-times").style.display = "none";

const menuBtn = document.querySelector(".btn-menu");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function() {
    if (sidebar.style.right == "-250px") {
        sidebar.style.right = "0";
        document.querySelector(".fa-times").style.display = "";
        document.querySelector(".fa-bars").style.display = "none";
    } else {
        sidebar.style.right = "-250px";
        document.querySelector(".fa-times").style.display = "none";
        document.querySelector(".fa-bars").style.display = "";
    }
});