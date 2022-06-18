//get token from other html
//
// check token for book credentials
// grab book credentials from seudo database (textfile)
// import { generate_book_dbase } from "./init";
// let gArr = generate_book_dbase();

let imgPath;
let tempItemString = sessionStorage.getItem("bookObjKey");
let tempItem = JSON.parse(tempItemString);

console.log(tempItem)

imgPath = "files/" + tempItem.genre + "_book_" + parseInt(tempItem.index+1) + ".jpg"

if (tempItem.author == "Emily Henry"){
    //load book image
    for (let i = 0; i < 3; i++){
        imgPath = "files/" + tempItem.genre + "_book_" + parseInt(tempItem.index+1) + ".jpg"
        const dv = document.createElement("div");
        dv.id = "dv";
        const bookCover = document.createElement("img")
        bookCover.setAttribute("src", imgPath)
        bookCover.setAttribute("height", "500px")
        bookCover.setAttribute("margin", "auto")

        document.getElementById("div3").appendChild(dv);
        document.getElementById("dv").appendChild(bookCover);
        tempItem.index = tempItem.index + 1;
    }
}
else if (tempItem.author == "Stephen King"){
    //load book image
    for (let i = 0; i < 3; i++){
        imgPath = "files/" + tempItem.genre + "_book_" + parseInt(tempItem.index+1) + ".jpg"
        const dv = document.createElement("div");
        dv.id = "dv";
        const bookCover = document.createElement("img")
        bookCover.setAttribute("src", imgPath)
        bookCover.setAttribute("height", "500px")
        bookCover.setAttribute("margin", "auto")

        document.getElementById("div3").appendChild(dv);
        document.getElementById("dv").appendChild(bookCover);
        tempItem.index = tempItem.index + 1;
    }
}
else{

    //load image
    imgPath = "files/" + "404.png"
    const dv = document.createElement("div");
    dv.id = "dv";
    const bookCover = document.createElement("img")
    bookCover.setAttribute("src", imgPath)
    bookCover.setAttribute("height", "500px")
    bookCover.setAttribute("margin", "auto")

    document.getElementById("div3").appendChild(dv);
    document.getElementById("dv").appendChild(bookCover);

    //Load 404 err
    const bookName = document.createElement("p");
    var text = document.createTextNode("404 Not Found!");
    bookName.style.fontSize = "45px";
    bookName.style.fontWeight = "bold";
    bookName.style.color = "white";
    bookName.appendChild(text);
    
    document.getElementById("dv").appendChild(bookName);

    //Load text
    const err1 = document.createElement("p");
    var text1 = document.createTextNode("Sadly, we don`t currently have more books from: " + tempItem.author);
    err1.style.fontSize = "25px";
    err1.style.textAlign = "center";
    err1.style.lineHeight = "1.5";
    err1.style.color = "white";
    err1.appendChild(text1);

    document.getElementById("dv").appendChild(err1);

    //Load text
    const err2 = document.createElement("p");
    var text2 = document.createTextNode("Please back later for updates :)");
    err2.style.fontSize = "25px";
    err2.style.textAlign = "center";
    err2.style.lineHeight = "1.5";
    err2.style.color = "white";
    err2.appendChild(text2);
    document.getElementById("dv").appendChild(err2);
}

let btnArr = Array.from(document.querySelectorAll("a"))
btnArr.forEach(function(x){
    
    if(x.className != ""){
        x.addEventListener("click", function(e){
            btnClick(x.id)
        }, false)
    }   
})

function btnClick(selQ){
    if (selQ == "back")
    window.open("book-details.html", '_self');
}