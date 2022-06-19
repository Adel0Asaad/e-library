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
        console.log("hi")
    }
}
else{
    
    if ( sameABooks.length > 1 ){
    const txt = document.createElement("p");
    var text1 = document.createTextNode("Our library currently has " + sameABooks.length + " books from " + sameABooks[0].author);
    txt.style.fontSize = "25px";
    txt.style.textAlign = "center";
    txt.style.lineHeight = "1.5";
    txt.style.color = "white";
    txt.appendChild(text1);
    document.getElementById("dv").appendChild(txt);

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
    }
    else if ( sameABooks.length == 1 ){
        const dv = document.createElement("div");
        dv.id = "dv";

        const txt = document.createElement("p");
        var text1 = document.createTextNode("Sadly, we don`t currently have more books from " + sameABooks[0].author);
        txt.style.fontSize = "25px";
        txt.style.textAlign = "center";
        txt.style.lineHeight = "1.5";
        txt.style.color = "white";
        txt.appendChild(text1);
        document.getElementById("dv").appendChild(txt);

        imgPath = "files/" + "404.png"

        const bookCover = document.createElement("img")
        bookCover.setAttribute("src", imgPath)
        bookCover.setAttribute("height", "200px")
        bookCover.setAttribute("margin", "auto")
    
        document.getElementById("div3").appendChild(dv);
        document.getElementById("dv").appendChild(bookCover);

        const err2 = document.createElement("p");
        var text2 = document.createTextNode("Please check later for updates :)");
        err2.style.fontSize = "25px";
        err2.style.textAlign = "center";
        err2.style.lineHeight = "1.5";
        err2.style.color = "white";
        err2.appendChild(text2);
        document.getElementById("dv").appendChild(err2);
    }

    console.log(document.getElementById("div3"))
}

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