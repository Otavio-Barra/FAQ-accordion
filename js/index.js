let answers = document.querySelectorAll(".acordeon");
answers.forEach((event) => {
    event.addEventListener('click', () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        }
        else {
            answers.forEach(event => event.classList.remove("active"))
            event.classList.add("active");
        }
    })
})