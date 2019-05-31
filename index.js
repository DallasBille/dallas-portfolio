let navList = document.getElementById("js-nav")
let navBarToggle = document.getElementById("js-navbar-toggle")

navBarToggle.addEventListener("click", (event) => {
    navList.classList.toggle("active")
})
