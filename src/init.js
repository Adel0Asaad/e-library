import {rBooksArr, aBooksArr, hBooksArr, pBooksArr, fBooksArr} from "./static-vars.js";

class Library{
    static rBooks = [];
    static aBooks = [];
    static hBooks = [];
    static pBooks = [];
    static fBooks = [];
    static gArr = [this.rBooks, this.aBooks, this.hBooks, this.pBooks, this.fBooks];
}


class Book{
    constructor(name, desc, genre, author, index, date){
        this.name = name;
        this.desc = desc;
        this.author = author;
        this.date = date;
        this.genre = genre;
        this.index = index;
    }
}
class Author{
    constructor(name, books){
        this.name = name;
        this.books = books;
    }
}

export function deleteBook(bGenre, bIndex){
    let tempGArr = JSON.parse(sessionStorage.getItem("bookLibKey"))
    for (let i = bIndex; i < tempGArr[bGenre].length-1; i++){
        tempGArr[bGenre][i] = tempGArr[bGenre][i+1]
    }
    console.log("bGenre: ", bGenre)
    console.log(tempGArr[bGenre])
    tempGArr[bGenre].pop()
    console.log(tempGArr[bGenre])
    console.log(tempGArr)
    sessionStorage.setItem("bookLibKey", JSON.stringify(tempGArr))
    // document.location.reload()
}

export function generate_book_dbase(){
    if(JSON.parse(sessionStorage.getItem("bookLibKey")) != null){
        // console.log(sessionStorage.getItem("bookLibKey"))
        return JSON.parse(sessionStorage.getItem("bookLibKey"))
    }
    
    for(let i = 0; i <5; i++){
        let importArr
        switch(i){
            case 0: 
                importArr = rBooksArr
                break;
            case 1: 
                importArr = aBooksArr
                break;
            case 2: 
                importArr = hBooksArr
                break;
            case 3: 
                importArr = pBooksArr
                break;
            case 4: 
                importArr = fBooksArr
                break;
            default:
                break;
        }
        
        for(let j = 0; j<5; j++){
            let book = new Book(importArr[j].Name, importArr[j].Desc, importArr[j].Genre, importArr[j].Author, importArr[j].Index, importArr[j].Date)
            Library.gArr[i][j] = book
        }
    
    }
    sessionStorage.setItem("bookLibKey", JSON.stringify(Library.gArr))
    return JSON.parse(sessionStorage.getItem("bookLibKey"));
}

generate_book_dbase();