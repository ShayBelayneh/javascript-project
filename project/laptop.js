// for (let i = 0; i < 4; i++) {

//     `<br>`
//     para.innerHTML += `<div style="position:relative;top:80px">${electronics[i].img}</div>  `
//     paraTwo.innerHTML += `<div style="position:relative; top:60px"> <span style="position:relative;left:50px;font-size:small;top:10px"> ${electronics[i].Name}  </span> <span style="position:relative; top:30px;font-size:small"><br> ${electronics[i].description}</span> <br> <span style="position:relative;top:40px;left:120px;font-size:small"><b> ${electronics[i].price}</b> </span> </div> `
//     // paraThree.innerHTML +=`  <br> ${electronics[i].img}  `


// }


// for (let i = 4; i < 8; i++) {

//     paraThree.innerHTML += `<div style="position:relative;top:100px">${electronics[i].img}</div>  `
//     paraFour.innerHTML += `<div style="position:relative; top:60px"> <span style="position:relative;left:50px;font-size:small;top:10px"> ${electronics[i].Name}  </span> <span style="position:relative; top:30px;font-size:small"><br> ${electronics[i].description}</span> <br> <span style="position:relative;top:40px;left:120px;font-size:small"><b> ${electronics[i].price}</b> </span> </div> `
// }


// for (let i = 8; i < 12; i++) {

//     paraFive.innerHTML += `<div style="position:relative;top:100px">${electronics[i].img}</div>  `
//     paraSix.innerHTML += `<div style="position:relative;top:100px"> <span style="position:relative;font-size:small">${electronics[i].Name} </span> <br> <div style="position:relative; top:0px;font-size:small"><br> ${electronics[i].description}</div> <br> <div style="position:relative;top:50px;right:100px;font-size:small"><span style="position:relative;bottom:60px;left:170px"><b> ${electronics[i].price} </b> </span> </div>`
//     paraSeven.innerHTML += `<button class="red"> sdad </button>`
// }



// let btn = document.getElementsByClassName("red")
// for (let i = 0; i < btn.length; i++) {

// let button = btn[i]
// button.onclick = () => {





// }

// }


for (let i = 0; i < 3; i++) {
    sectionOne.innerHTML +=

        `<article class = "laptop04">
<div>${electronics[i].img}</div>
<p style="position:relative;left:30px">${electronics[i].Name}</p>
<p>${electronics[i].description}</p>
<p style="position:relative;left:70px"> ${electronics[i].price} </p>
<button style="position:relative;left:50px" class = "btn"> הוספה לעגלה </button>
</article><br><br> `


}
let btn = document.getElementsByClassName("btn")
for (let i = 0; i < btn.length; i++) {
    let button = btn[i]
    button.onclick = () => {
        cart.push(electronics[i])
        console.log(cart);

    }



}


for (let i = 3; i < 6; i++) {
    sectionTwo.innerHTML +=

        `<article class = "laptop04">
<div><br>${electronics[i].img}</div>
<p style="position:relative;left:30px">${electronics[i].Name}</p>
<p>${electronics[i].description}</p>
<p style="position:relative;left:70px"> ${electronics[i].price} </p>
<button style="position:relative;left:50px" class = "btnTwo"> הוספה לעגלה </button>
</article><br><br> `

}



let btnTwo = document.getElementsByClassName("btnTwo")
for (let i = 0; i < btnTwo.length; i++) {
    let buttonTwo = btnTwo[i]
    buttonTwo.onclick = () => {
        cart.push(electronics[i + 3])
        console.log(cart);

    }



}

for (let i = 6; i < 9; i++) {
    sectionThree.innerHTML +=

        `<article class = "laptop04">
<div><br>${electronics[i].img}</div>
<p style="position:relative;left:30px">${electronics[i].Name}</p>
<p>${electronics[i].description}</p>
<p style="position:relative;left:70px"> ${electronics[i].price} </p>
<button style="position:relative;left:50px" class = "btnThree"> הוספה לעגלה </button>
</article><br><br><br> `

}



let btnThree = document.getElementsByClassName("btnThree")
for (let i = 0; i < btn.length; i++) {
    let buttonThree = btnThree[i]
    buttonThree.onclick = () => {
        cart.push(electronics[i + 6])
        console.log(cart);

    }



}

for (let i = 9; i < 12; i++) {
    sectionFour.innerHTML +=

        `<article class = "laptop04">
<div><br>${electronics[i].img}</div>
<p style="position:relative;left:30px">${electronics[i].Name}</p>
<p>${electronics[i].description}</p>
<p style="position:relative;left:70px"> ${electronics[i].price} </p>
<button style="position:relative;left:50px" class = "btnFour"> הוספה לעגלה </button>
</article><br><br><br> `

}



let btnFour = document.getElementsByClassName("btnFour")
for (let i = 0; i < btn.length; i++) {
    let buttonFour = btnFour[i]
    buttonFour.onclick = () => {
        cart.push(electronics[i + 9])
        console.log(cart);

    }



}

