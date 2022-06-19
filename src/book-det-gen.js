//get token from other html
//
// check token for book credentials
// grab book credentials from seudo database (textfile)

// let gArr = generate_book_dbase();

let imgPath;
let tempItemString = sessionStorage.getItem("bookObjKey");
let tempItem = JSON.parse(tempItemString);

console.log(tempItem)

imgPath = "files/" + tempItem.genre.toLowerCase() + "_book_" + parseInt(tempItem.index+1) + ".jpg"

//load book image
const dv = document.createElement("div");
dv.id = "dv";
const bookCover = document.createElement("img")
bookCover.setAttribute("src", imgPath)
bookCover.setAttribute("height", "500px")
bookCover.setAttribute("margin", "auto")

document.getElementById("div3").appendChild(dv);
document.getElementById("dv").appendChild(bookCover);
//document.body.appendChild(bookCover)

//load Name
const bookName = document.createElement("p");
var text = document.createTextNode(tempItem.name);
bookName.style.fontSize = "35px";
bookName.style.color = "white";
bookName.appendChild(text);

document.getElementById("dv").appendChild(bookName);

//Genre:
const genr = document.createElement("p");
var textg = document.createTextNode("Genre:");
genr.style.fontSize = "35px";
genr.style.textAlign = "left";
genr.style.color = "white";
genr.appendChild(textg);

document.getElementById("dv").appendChild(genr);

//load Genre
const bookGenre = document.createElement("p");
var textbg = document.createTextNode(tempItem.genre);
bookGenre.style.fontSize = "35px";
bookGenre.style.color = "white";
bookGenre.appendChild(textbg);

document.getElementById("dv").appendChild(bookGenre);

//Desc:
const desc = document.createElement("p");
var textd = document.createTextNode("Description:");
desc.style.fontSize = "35px";
desc.style.textAlign = "left";
desc.style.color = "white";
desc.appendChild(textd);

document.getElementById("dv").appendChild(desc);

//Load Description
const bookDesc = document.createElement("p");
var textbd = document.createTextNode(tempItem.desc);
bookDesc.style.fontSize = "20px";
bookDesc.style.textAlign = "left";
bookDesc.style.lineHeight = "1.5";
bookDesc.style.color = "white";
bookDesc.appendChild(textbd);

document.getElementById("dv").appendChild(bookDesc);

//Author:
const auth = document.createElement("p");
var texta = document.createTextNode("Author:");
auth.style.fontSize = "35px";
auth.style.textAlign = "left";
auth.style.color = "white";
auth.appendChild(texta);

document.getElementById("dv").appendChild(auth);

//Load Author
const bookAuthor = document.createElement("p");
var textba = document.createTextNode(tempItem.author);
bookAuthor.style.fontSize = "35px";
bookAuthor.style.color = "white";
bookAuthor.appendChild(textba);

document.getElementById("dv").appendChild(bookAuthor);

//Date:
const dat = document.createElement("p");
var textDate = document.createTextNode("First Published:");
dat.style.fontSize = "35px";
dat.style.textAlign = "left";
dat.style.color = "white";
dat.appendChild(textDate);

document.getElementById("dv").appendChild(dat);

//Load Date
const bookDate = document.createElement("p");
var textbDate = document.createTextNode(tempItem.date.toString());
bookDate.style.fontSize = "35px";
bookDate.style.color = "white";
bookDate.appendChild(textbDate);

document.getElementById("dv").appendChild(bookDate);

