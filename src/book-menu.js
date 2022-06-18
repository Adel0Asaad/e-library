import { generate_book_dbase } from "./init.js";
let gArr = generate_book_dbase();
let gSel = 0;
let btnArr = Array.from(document.querySelectorAll("a"))
function btnClick(selQ){
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
    //console.log(jsonBookObj)
}

btnArr.forEach(function(x){
    
    if(x.className != ""){
        x.addEventListener("click", function(e){
            btnClick(x.id)
        }, false)
    }   
})