
// var cart = []




// cart.push(electronics)




for (var i = 0; i < 1; i++) {

    tdElectronics.innerHTML += `${electronics[i].img} <br> ${electronics[i].Name}`
    tdElectronicsPrice.innerHTML = `${electronics[i].price}&#8362`

}



for (var i = 12; i < 13; i++) {

    tdElectronics2.innerHTML += `<br>${electronics[i].img} <br>${electronics[i].Name}`
    tdElectronicsPrice2.innerHTML += `${electronics[i].price}&#8362`

}


for (var i = 24; i < 25; i++) {

    tdElectronics3.innerHTML += `<br>${electronics[i].img} <br>${electronics[i].Name}`
    tdElectronicsPrice3.innerHTML = `${electronics[i].price}&#8362`

}

// for (var i = 36; i < 37; i++) {

//     tdElectronics4.innerHTML += `<br> ${electronics[i].img} <br>${electronics[i].Name}`

// }


function sumAll() {

    let total = 0



    total = electronics[24].price + electronics[0].price + electronics[12].price



    return total

}

let total = sumAll()
totalBtn.innerHTML = total



let removeButtoon = document.getElementsByClassName("remove")
buttonRemove.onclick = () => {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i] == electronics[0]) {
            cart.splice(i, 1)

            console.log(cart);

            total = total - electronics[0].price


            totalBtn.innerHTML = total


            removeButtoon.style = "display:none;"


        }
    }


}


buttonRemove2.onclick = () => {

    for (let i = 0; i < cart.length; i++) {
        if (cart[i] == electronics[12]) {

            cart.splice(i, 1)

            console.log(cart);
            total = total - electronics[12].price
            totalBtn.innerHTML = total

            removeButtoon.style = "display:none;"

        }

    }

}
buttonRemove3.onclick = () => {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i] == electronics[24]) {
            cart.splice(i, 1)

            console.log(cart);

            total = total - electronics[24].price
            totalBtn.innerHTML = total

            removeButtoon.style = "display:none;"
        }

    }


}







