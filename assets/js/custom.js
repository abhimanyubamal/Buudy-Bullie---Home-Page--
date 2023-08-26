let button = document.querySelector("label");
let menu = document.querySelector("#menu");

let isShow = 1;

button.addEventListener("click", () => {
    if (isShow === 1) {
        menu.classList.add("show");
        button.classList.add("label-new-img");
        menu.classList.add("justify-content-around")
        menu.classList.remove("justify-content-end");
        isShow = 0;
    }
    else {
        menu.classList.remove("show");
        button.classList.remove("label-new-img");
        menu.classList.remove("justify-content-around")
        menu.classList.add("justify-content-end");
        isShow = 1;
    }
    console.log(isShow);
});