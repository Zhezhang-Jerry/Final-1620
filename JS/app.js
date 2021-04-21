const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];

function displaypicture() {
    for (let i = 1; i < 5; i++) {
        let x = "Images/Album" + i +".png";
        let y = "Album " + i;
        document.getElementById(y).src = x;
    }
}

document.getElementById(y).addEventListener('click', function addtocart(x) {
    let cartname = albums[x - 1].name
    let picturepath = "Images/Album" + x +".png"
    let pprice = albums[x - 1].price
    document.getElementById("carti").src = picturepath
    document.getElementById("cartn").innerHTML = cartname
    document.getElementById("cartp").innerHTML = pprice
})


// function addtocart(x) {
//     let cartname = albums[x - 1].name
//     let picturepath = "Images/Album" + x +".png"
//     let pprice = albums[x - 1].price
//     document.getElementById("carti").src = picturepath
//     document.getElementById("cartn").innerHTML = cartname
//     document.getElementById("cartp").innerHTML = pprice
// }
