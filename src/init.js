import {rBooksArr, aBooksArr, hBooksArr, pBooksArr, fBooksArr} from "./static-vars.js";

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

export function generate_book_dbase(){
    let rBooks = [], aBooks = [], hBooks = [], pBooks = [], fBooks = [];

    // r books:
    let gArr = [
        rBooks, aBooks, hBooks, pBooks, fBooks
    ]
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
            gArr[i][j] = book
        }
    
    }
    return gArr;
}

generate_book_dbase();