const journalBtn = document.querySelector(".journal__btn");
const journalItemNone = document.querySelectorAll(".journal__item_none");

journalBtn.addEventListener("click", () => {
    journalItemNone.forEach((item) => {
        item.style.display = "block";
    })
    journalBtn.style.display = "none";
})