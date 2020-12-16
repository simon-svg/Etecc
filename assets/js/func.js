const journalBtn = document.querySelector(".journal__btn");
const journalItemNone = document.querySelectorAll(".journal__item");

if (document.title === "Journal") {
    journalBtn.addEventListener("click", () => {
        journalItemNone.forEach((item) => {
            item.style.display = "block";
        })
        journalBtn.style.display = "none";
    })
}







const formChackbox = document.querySelectorAll(".form__chackbox");
const formChackboxIndikator = document.querySelectorAll(".form__chackbox_indikator");
const formChackboxIcon = document.querySelectorAll(".form__chackbox_icon");
const formChackboxArr = [true, true, true, true];

if (document.title === "Contact") {
    formChackbox.forEach((item, i) => {
        item.addEventListener("click", () => {
            if (formChackboxArr[i]) {
                formChackboxIndikator[i].classList.add("form__chackbox_indikator_active");
                formChackboxIcon[i].style.display = "block";
            }
            else{
                formChackboxIndikator[i].classList.remove("form__chackbox_indikator_active");
                formChackboxIcon[i].style.display = "none";
            }
            formChackboxArr[i] = !formChackboxArr[i];
        })
    })
}