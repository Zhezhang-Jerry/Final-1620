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
