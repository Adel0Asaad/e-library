import { generate_book_dbase } from "./init.js";
let gArr = generate_book_dbase();

document.getElementById("searchForm").onsubmit = function (){
    let sVal;
    sVal = document.getElementById("searchTxt").value;

    for (let i = 0; i < gArr.length; i++){
        for (let j = 0; j < gArr[i].length; j++){
            if (sVal.toLowerCase().trim() == gArr[i][j].name.toLowerCase()){
                console.log ("found");
                let jsonBookObj = (JSON.stringify(gArr[i][j]));
                sessionStorage.setItem("bookObjKey", jsonBookObj);
                window.open("book-details.html", '_self');
            }
        }
    }
    document.getElementById("searchTxt").value = "";
    console.log(sVal)
    return sVal, false;
}
