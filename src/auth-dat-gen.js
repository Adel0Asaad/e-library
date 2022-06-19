//get token from other html
//
// check token for book credentials
// grab book credentials from seudo database (textfile)
// import { generate_book_dbase } from "./init";
// let gArr = generate_book_dbase();
import { generate_book_dbase } from "./init.js";
let foundBooksFlag = 0;
let gArr = generate_book_dbase();
let sameABooks = []
let imgPath;
let tempItemString = sessionStorage.getItem("bookObjKey");
let tempItem = JSON.parse(tempItemString);
let currAuthor = tempItem.author
console.log(tempItem)

imgPath = "files/" + tempItem.genre + "_book_" + parseInt(tempItem.index+1) + ".jpg"

for(let i = 0; i < gArr.length; i++){
    for(let j = 0; j < gArr[i].length; j++){
        if(gArr[i][j].author == currAuthor){
            gArr[i][j].currIndex = j;
            sameABooks.push(gArr[i][j])
            foundBooksFlag = 1;
            
            console.log("I'm here with: ", gArr[i][j].author)
        }
    }
}
if(foundBooksFlag == 0){
    {
        console.log("Didn't find any books")
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
}else{
    
    for(let i = 0; i < sameABooks.length; i++){
        console.log("Again, I am here with: ", sameABooks[i].author)
        let bookElement = document.createElement("a");
        bookElement.id = sameABooks[i].genre.toLowerCase().charAt(0) + sameABooks[i].currIndex
        let bookClassName = sameABooks[i].genre.toLowerCase() + "Class"
        bookElement.classList.add(bookClassName)
        let bookElementImg = document.createElement("img")
        bookElementImg.style = "z-index: 0; position: relative; width: 232px; height: 350px; z-index: 1"
        bookElementImg.classList.add("bookImage")
        bookElementImg.src = "files/" + sameABooks[i].genre.toLowerCase() + "_book_" + parseInt(sameABooks[i].index+1) + ".jpg"
        bookElement.appendChild(bookElementImg)
        document.getElementById("div3").appendChild(bookElement)
        
    }
    console.log(document.getElementById("div3"))
}

// if (tempItem.author == "Emily Henry"){
//     //load book image
//     for (let i = 0; i < 3; i++){
//         imgPath = "files/" + tempItem.genre + "_book_" + parseInt(tempItem.index+1) + ".jpg"
//         const dv = document.createElement("div");
//         dv.id = "dv";
//         const bookCover = document.createElement("img")
//         bookCover.setAttribute("src", imgPath)
//         bookCover.setAttribute("height", "500px")
//         bookCover.setAttribute("margin", "auto")

//         document.getElementById("div3").appendChild(dv);
//         document.getElementById("dv").appendChild(bookCover);
//         tempItem.index = tempItem.index + 1;
//     }
// }
// else if (tempItem.author == "Stephen King"){
//     //load book image
//     for (let i = 0; i < 3; i++){
//         imgPath = "files/" + tempItem.genre + "_book_" + parseInt(tempItem.index+1) + ".jpg"
//         const dv = document.createElement("div");
//         dv.id = "dv";
//         const bookCover = document.createElement("img")
//         bookCover.setAttribute("src", imgPath)
//         bookCover.setAttribute("height", "500px")
//         bookCover.setAttribute("margin", "auto")

//         document.getElementById("div3").appendChild(dv);
//         document.getElementById("dv").appendChild(bookCover);
//         tempItem.index = tempItem.index + 1;
//     }
// }
// else{

//     //load image
//     imgPath = "files/" + "404.png"
//     const dv = document.createElement("div");
//     dv.id = "dv";
//     const bookCover = document.createElement("img")
//     bookCover.setAttribute("src", imgPath)
//     bookCover.setAttribute("height", "500px")
//     bookCover.setAttribute("margin", "auto")

//     document.getElementById("div3").appendChild(dv);
//     document.getElementById("dv").appendChild(bookCover);

//     //Load 404 err
//     const bookName = document.createElement("p");
//     var text = document.createTextNode("404 Not Found!");
//     bookName.style.fontSize = "45px";
//     bookName.style.fontWeight = "bold";
//     bookName.style.color = "white";
//     bookName.appendChild(text);
    
//     document.getElementById("dv").appendChild(bookName);

//     //Load text
//     const err1 = document.createElement("p");
//     var text1 = document.createTextNode("Sadly, we don`t currently have more books from: " + tempItem.author);
//     err1.style.fontSize = "25px";
//     err1.style.textAlign = "center";
//     err1.style.lineHeight = "1.5";
//     err1.style.color = "white";
//     err1.appendChild(text1);

//     document.getElementById("dv").appendChild(err1);

//     //Load text
//     const err2 = document.createElement("p");
//     var text2 = document.createTextNode("Please back later for updates :)");
//     err2.style.fontSize = "25px";
//     err2.style.textAlign = "center";
//     err2.style.lineHeight = "1.5";
//     err2.style.color = "white";
//     err2.appendChild(text2);
//     document.getElementById("dv").appendChild(err2);
// }

let btnArr = Array.from(document.querySelectorAll("a[id]"))
btnArr.forEach(function(x){
    
    if(x.className != ""){
        x.addEventListener("click", function(e){
            btnClick(x.id, e)
        }, false)
    }   
})

function btnClick(selQ, e){
    let gSel;
    if (selQ == "back"){
        window.open("book-details.html", '_self');
    }else{
        console.log(e.target, selQ)
        if ((Array.from(e.target.classList).indexOf("bookImage")) == -1){
            return false;
        }
        let genre = selQ.charAt(0)
        let bIndx = selQ.charAt(1)
        
        switch(genre){
            case "r":
                gSel = 0;
                break;
            case "a":
                gSel = 1;
                break;
            case "h":
                gSel = 2;
                break;
            case "p":
                gSel = 3;
                break;
            case "f":
                gSel = 4;
                break;
        }
        console.log(gArr[gSel][bIndx])
        let jsonBookObj = (JSON.stringify(gArr[gSel][bIndx]))
        sessionStorage.setItem("bookObjKey", jsonBookObj);
        window.open("book-details.html", '_self');
    }
}