const navBar = document.querySelector("ul");

const btn = document.querySelector("a");

btn.addEventListener('click',() => {
    navBar.classList.toggle('showNav');
})