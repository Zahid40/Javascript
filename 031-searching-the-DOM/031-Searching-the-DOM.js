//change title color

//selection elements by classname
let ctitle = document.getElementsByClassName("card-title")[0];
ctitle.style.color = "#f47216"

//selection of All elements of same classname with querySelectorAll >> selects all same class or id elements.
let ctitle2 =document.querySelectorAll(".card-title");
ctitle2[0].style.color = "#f47216"
ctitle2[1].style.color = "black"
ctitle2[2].style.color = "blue"
console.log(ctitle2)

//selection of an element of by classname with querySelector >> selects first element.
let cbutton = document.querySelector(".this");
cbutton.style.background = "red"
console.log(cbutton)

//selection of elements by name
console.log(document.getElementsByName("name"));

