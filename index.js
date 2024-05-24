let lists = document.querySelectorAll("li");
for(let li of lists) {
    li.addEventListener("click", function() {
        let target = this;
        for (li of lists) {
            li.classList.remove("active")
        }
        target.classList.add("active");
    })
}