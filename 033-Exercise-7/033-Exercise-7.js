//Q1
let ele1 = document.querySelector(".nav-link");
console.log(ele1)
ele1.style.color = "#f47216"

//Q2
let ele2 = document.querySelectorAll(".card");
console.log(ele2);
ele2[0].style.background = "#f47216"
ele2[1].style.background = "white"
ele2[ele2.length - 1].style.background = "green"

ele2.forEach(ele2 => {
    ele2.style.color = "white"
});
ele2[1].style.color = "black"
