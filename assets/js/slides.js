// preloader function
const header = document.querySelector(".header");
const preloader = document.querySelector(".preloader")
document.body.onload = () => {
    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none";
        document.querySelector(".preloader__cont").style.animation = "none";
    }, 500);
}   







// expertise margin mottom
const expertise = document.querySelector(".expertise");
const footer = document.querySelector(".footer");
expertise.style["margin-bottom"] = footer.clientHeight + "px";





// home
const home = document.querySelector(".home");
let homeOpac = 1;

window.addEventListener("scroll", (e) => {
    headerMenuPuls.style.top = scrollY + 50 + "px";
    if (scrollY > 570) {
        if (document.title === "Etecc") {
            header.style["background-color"] = "var(--white)";
            header.style["box-shadow"] = "0 3px 12px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.08)";
        }
    }
    else {
        if (document.title === "Etecc") {
            header.style["background-color"] = "transparent";
            header.style["box-shadow"] = "none";
        }
    }
    if (document.title === "Etecc") {
        home.style.opacity = (home.getBoundingClientRect().height - window.scrollY) / 600;
    }
    expertise.style["margin-bottom"] = footer.clientHeight + "px";
})






// burger menu events
const body = document.querySelector("body");
const logoIcon = document.querySelector(".header__logo_icon");
const BurgerMenu = document.querySelector(".header__burger-menu");
const burgerMenuPuls = document.querySelector(".header__burger-menu_puls");
const burgerMenuName = document.querySelector(".header__burger-menu_name");

BurgerMenu.addEventListener("mouseenter", () => {
    burgerMenuPuls.style.animation = "burgerMenuEnter ease .5s forwards";
    burgerMenuName.style.opacity = "1";
    burgerMenuName.style.transform = "translateX(-120%)";
})
BurgerMenu.addEventListener("mouseleave", () => {
    burgerMenuPuls.style.animation = "burgerMenuLeave ease .5s forwards";
    burgerMenuName.style.opacity = "0";
    burgerMenuName.style.transform = "translateX(0%)";
})

logoIcon.addEventListener("mouseenter", () => {
    logoIcon.style.animation = "logoAnimEnter ease .5s forwards";
})
logoIcon.addEventListener("mouseleave", () => {
    logoIcon.style.animation = "logoAnimLeave ease .5s forwards";
})






// hello btn
const Btn = document.querySelectorAll(".btn");
function create(what, where, className) {
    const item = document.createElement(what);
    item.setAttribute("class", className);
    where.append(item);
    return item;
}

Btn.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
        const Dot = create("span", item, "btn__dot");
        Dot.style.top = e.offsetY + "px";
        Dot.style.left = e.offsetX + "px";
        item.addEventListener("mouseleave", (e) => {
            Dot.style.animation = "btnDotAnimNone linear .3s forwards";
            setTimeout(() => {
                item.querySelectorAll(".btn__dot").forEach((item2) => {
                    item2.remove();
                })
            }, 300)
        })
    })
})






// header menu
const headerMenuPuls = document.querySelector(".header__menu_puls");
const headerMenu = document.querySelector(".header__menu");
const headerBurgerMenuName = document.querySelector(".header__burger-menu_name");
let headerMenuBool = true;
const burgerMenuLines = document.querySelector(".header__burger-menu_lines");
const burgerMenuLinesAll = document.querySelectorAll(".header__burger-menu_line");
const burgerMenuLine1 = document.querySelectorAll(".header__burger-menu_line")[0];
const burgerMenuLine2 = document.querySelectorAll(".header__burger-menu_line")[1];
const burgerMenuLine3 = document.querySelectorAll(".header__burger-menu_line")[2];

BurgerMenu.addEventListener("click", () => {
    if (headerMenuBool) {
        burgerMenuLinesAll.forEach((item) => {
            item.style.width = "0";
        })
        setTimeout(() => {
            burgerMenuLines.style["justify-content"] = "center";
            burgerMenuLine1.style.transform = "rotate(45deg)";
            burgerMenuLine1.style.width = "100%";
            burgerMenuLine2.style.transform = "rotate(-45deg)";
            burgerMenuLine2.style.width = "100%";
        }, 500)

        body.style["overflow-y"] = "hidden";
        headerBurgerMenuName.innerHTML = "close";
        burgerMenuPuls.style.animation = "headerBurgerMenuPulsOpen ease .3s forwards";
        headerMenuPuls.style.animation = "headerMenuAnim ease .5s forwards";
        if (scrollY < 570) {
            header.style["background-color"] = "transparent";
        }
        else {
            header.style["background-color"] = "transparent";
        }
        setTimeout(() => {
            headerMenu.style.opacity = "1";
            headerMenu.style.visibility = "visible";
        }, 500)
    }
    else {
        burgerMenuLinesAll.forEach((item) => {
            item.style.width = "0";
        })
        setTimeout(() => {
            burgerMenuLines.style["justify-content"] = "space-between";
            burgerMenuLine1.style.transform = "rotate(0deg)";
            burgerMenuLine1.style.width = "100%";
            burgerMenuLine2.style.transform = "rotate(0deg)";
            burgerMenuLine3.style.width = "100%";
            burgerMenuLine2.style.width = "100%";
        }, 500)

        body.style["overflow-y"] = "scroll";
        headerBurgerMenuName.innerHTML = "menu";
        headerMenu.style.opacity = "0";
        headerMenu.style.visibility = "hidden";
        burgerMenuPuls.style.animation = "headerBurgerMenuPulsClose ease .3s forwards";
        headerMenuPuls.style.animation = "headerMenuAnimClose ease .5s forwards";
        if (scrollY < 570) {
            header.style["background-color"] = "transparent";
        }
        else {
            header.style["background-color"] = "var(--white)";
        }
        if(document.title !== "Etecc"){
            header.style["background-color"] = "var(--white)";
        }
    }
    headerMenuBool = !headerMenuBool;
})