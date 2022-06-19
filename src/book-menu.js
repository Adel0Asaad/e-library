import { generate_book_dbase, deleteBook } from "./init.js";
let gArr = generate_book_dbase();
console.log(gArr)
let gSel = 0;

function bookRBtnClk(){
    sessionStorage.setItem("bookLibKey", null);
    document.location.reload();
}

function bookDltClk(inputA){
    let bId = parseInt(inputA.charAt(inputA.length-1))
    let gId = inputA.charAt(0).toLowerCase()
    switch(gId){
        case "r":
            gId = 0;
            break;
        case "a": 
            gId = 1;
            break;
        case "h":
            gId = 2;
            break;
        case "p":
            gId = 3;
            break;
        case "f":
            gId = 4;
            break;
        default:
            console.error("Unexpected input", gId);
            return false;
    }
    console.log("gId: ", gId, "\nbId: ", bId)
    // go to deletebook(), don't make it reload
    // instead here do document.remove("a" element that corresponds to gId and bId)
    deleteBook(gId, bId)
}

/**
 * we have gArr = books from each genre.
 * it is structured like this: [genre][indexofbook]
 * we need to traverse each genre (we know genres are always 5)
 * then check for the amount of books (length of genre array)
 * and then for that amount we fetch the books and post them on the page.
 * (you cannot add books, but you can remove if you're an admin)
 * to regain the lost books from removal simply open a new tab.
 */
function printBooks(perm){
    
    for(let i = 0; i < gArr.length; i++){
        for(let j = 0; j < gArr[i].length; j++){
            let bookElement = document.createElement("a");
            bookElement.id = gArr[i][j].genre.toLowerCase().charAt(0) + j
            let bookClassName = gArr[i][j].genre.toLowerCase() + "Class"
            bookElement.classList.add(bookClassName)
            let bookElementImg = document.createElement("img")
            bookElementImg.style = "z-index: 0; position: relative; min-width: 232px; min-height: 350px; z-index: 1"
            bookElementImg.classList.add("bookImage")
            bookElementImg.src = "files/" + gArr[i][j].genre.toLowerCase() + "_book_" + parseInt(gArr[i][j].index+1) + ".jpg"
            bookElement.appendChild(bookElementImg)
            //create delete button
            if(perm){
                let bookElementDlt = document.createElement("img")
                bookElementDlt.src = "files/deleteBook.png"
                bookElementDlt.style = "height: 35px; position: relative; right: 17%; vertical-align: 310px; z-index: 2;"
                bookElement.appendChild(bookElementDlt)
                bookElementDlt.addEventListener("click", function(){
                    bookDltClk(bookElementDlt.parentNode.id)
                }, false)
            }
            //end of delete button
            document.getElementById(gArr[i][j].genre.toLowerCase() + "Div").appendChild(bookElement)
        }
    }
    if(perm){
        const bookRBtn = document.createElement("img")
        bookRBtn.src = "files/reset.png"
        bookRBtn.style = "position: absolute; right: 1%; top: 2%; height: 76px;"
        bookRBtn.addEventListener("click", function(e){
            bookRBtnClk()
        }, false)
        document.body.appendChild(bookRBtn)
    }
    // console.log(document.querySelectorAll("img"))
}
let permission = sessionStorage.getItem("loggedKey")
if(permission == 500){
    printBooks(true)
}else{
    printBooks(false)
}

let btnArr = Array.from(document.querySelectorAll("a"))
function btnClick(selQ, e){
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
    //console.log(jsonBookObj)
}

btnArr.forEach(function(x){
    
    if(x.className != ""){
        x.addEventListener("click", function(e){
            btnClick(x.id, e)
        }, false)
    }   
})