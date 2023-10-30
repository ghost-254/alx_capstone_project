// JavaScript to make the header sticky on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const headerHeight = header.clientHeight;

    if (window.scrollY > headerHeight) {
	header.classList.add("sticky");
	main.style.paddingTop = headerHeight + "px";
    } else {
	header.classList.remove("sticky");
	main.style.paddingTop = "0";
    }
});
