function member(n, i, e){
    var member = {
        name: n,
        pass: i,
        email: e,
        getName: function(){
            return this.name;
        },
        getPass: function(){
            return this.pass;
        },
        getEmail: function(){
            return this.email;
        }
    }
    return member;
}

function memRBtnClk(){
    sessionStorage.setItem("arrObjKey", null);
    generateArr();
    document.location.reload();
}

let memArr = [];
function generateArr(){
    let tempItemString = sessionStorage.getItem("arrObjKey");
    let tempItem = JSON.parse(tempItemString);
    //console.log(tempItem)
    if(tempItem != null){
        console.log("no?")
        return false;
    }
    //console.log("yes.")
    var oldMem = [
        {
        name: 'Dr.Hesham Mahmoud',
        pass: '036084',
        email:'hesham_farag@eng.asu.edu.eg',
        },
    
        {
        name: 'Eng.Eslam Sayed',
        pass: 'e14041',
        email:'e14041@eng.asu.edu.eg',
        },
        
        {
        name: 'Mohamed Adel',
        pass: '18P1724',
        email:'18P1724@eng.asu.edu.eg',
        },
    
        {
        name: 'Adel Asaad',
        pass: '18P2949',
        email:'18P2949@eng.asu.edu.eg',
        },
    
        {
        name: 'Abdelrahman Tarek',
        pass: '18P7159',
        email: '18P7159@eng.asu.edu.eg',
        },
    
        {
        name: 'Michelle George',
        pass: '18P2223',
        email:'18P2223@eng.asu.edu.eg',
        },
    
        {
        name: 'Mohamed Hazem',
        pass: '18P1234',
        email:'18P1234@eng.asu.edu.eg',
        },
    
        {
        name: 'Amr Balegh',
        pass: '18P1554',
        email:'18P1554@eng.asu.edu.eg',
        },
        
        {
        name: 'Hesham Ellabban',
        pass: '18P1582',
        email:'18P1582@eng.asu.edu.eg',
        },
        
        {
        name: 'Sheirf Mourad',
        pass: '18P9928',
        email:'18P9928@eng.asu.edu.eg',
        },
        
    ]
    
    for (let i = 0; i < 10; i++){
        let mem = oldMem[i];
        memArr[i] = mem;
    }
    let jsonArrObj = (JSON.stringify(memArr))
    sessionStorage.setItem("arrObjKey", jsonArrObj);
    return memArr;
}


function deleteMember(memIndex){
    memIndex = parseInt(memIndex.charAt(2));
    let tempItemString = sessionStorage.getItem("arrObjKey");
    let tempArr = JSON.parse(tempItemString);
    for (let i = memIndex; i < tempArr.length-1; i++){
        tempArr[i] = tempArr[i+1]
        
    }
    tempArr.pop();
    sessionStorage.setItem("arrObjKey", JSON.stringify(tempArr))
    document.location.reload()
}


function printMembers(perm){
    let tempItemString = sessionStorage.getItem("arrObjKey");
    let tempItem = JSON.parse(tempItemString);
    console.log(tempItem)
    let txt = ""
    var count = 0;
    for (let i = 0; i < tempItem.length; i++){
        let m = member(tempItem[i].name, tempItem[i].pass, tempItem[i].email);
        //console.log(m);
        let dv = document.createElement("div");
        dv.id = "dv" + (count);
        txt = "Name: " + m.getName() + " - " + "Email: " + m.getEmail();        
        document.getElementById("div2").appendChild(dv);
        let myP = document.createElement("p")
        myP.innerText = txt;
        document.getElementById("dv" + (count)).appendChild(myP);
        document.getElementById("dv" + (count++)).setAttribute("margin", "auto");

        if(perm){
            let dltBtn = document.createElement("img")
            dltBtn.setAttribute("src", "files/delete.png")
            dltBtn.classList.add("userDeleteButton")
            dltBtn.id = "dp" + i
            myP.appendChild(dltBtn)
            // console.log(bookCover)
            // console.log(document.querySelector("img"))
            // console.log(document.getElementById("dv" + (count)))
            // console.log("hello")
        }
    }
    if(perm){
        const memRBtn = document.createElement("img")
        memRBtn.src = "files/reset.png"
        memRBtn.setAttribute("class", "resetBtn");
        console.log(memRBtn.className)
        memRBtn.style = "position: absolute; right: 1%; top: 2%; height: 76px;"
        memRBtn.addEventListener("click", function(e){
            memRBtnClk()
        }, false)
        document.body.appendChild(memRBtn)
    }
    console.log(document.querySelectorAll("img[id]"))
}

let preEmption = sessionStorage.getItem("preEmptionKey")
let permission = sessionStorage.getItem("loggedKey")
if (permission == null || permission != 500){
    console.log("Hello")
    if(preEmption == null){

        generateArr();
        printMembers(false);
        
    }else if(preEmption == 2){
        generateArr();
        preEmption = 1
        sessionStorage.setItem("preEmptionKey", preEmption)
        window.open("register.html", '_self')
    }else if(preEmption == 3){
        
        generateArr();
        preEmption = 1
        sessionStorage.setItem("preEmptionKey", preEmption)
        window.open("login.html", '_self')
    }else if(preEmption == 1){
        printMembers(false);
    }
}else{
    printMembers(true);
    let dltBtnArr = Array.from(document.querySelectorAll("img[id]"))
    dltBtnArr.forEach(function(x){
    
        
        x.addEventListener("click", function(e){
            console.log(x.id)
            deleteMember(x.id)
        }, false)
          
    })
}