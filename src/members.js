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

let memArr = [];
function generateArr(){
    let tempItemString = sessionStorage.getItem("arrObjKey");
    let tempItem = JSON.parse(tempItemString);
    console.log(tempItem)
    if(tempItem != null){
        console.log("no?")
        return false;
    }
    console.log("yes.")
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





function printMembers(){
    let tempItemString = sessionStorage.getItem("arrObjKey");
    let tempItem = JSON.parse(tempItemString);
    console.log(tempItem)
    let txt = ""
    var count = 0;
    for (let i = 0; i < tempItem.length; i++){
        let m = member(tempItem[i].name, tempItem[i].pass, tempItem[i].email);
        //console.log(m);
        const dv = document.createElement("div");
        dv.id = "dv" + (count);
        txt = "Name: " + m.getName() + " - " + "Email: " + m.getEmail();
        document.getElementById("div2").appendChild(dv);
        document.getElementById("dv" + (count)).innerHTML = txt;
        document.getElementById("dv" + (count++)).setAttribute("margin", "auto");
    }
}

generateArr();
printMembers();


// const u1  = member("Dr. Hesham Mahmoud", "036084", "hesham_farag@eng.asu.edu.eg");
// const u2  = member("Eng.Eslam Sayed", "e14041", "e14041@eng.asu.edu.eg");
// const u3  = member("Mohamed Adel", "18P1724", "18P1724@eng.asu.edu.eg");
// const u4  = member("Adel Asaad", "18P2949", "18P2949@eng.asu.edu.eg");
// const u5  = member("Abdelrahman Tarek", "18P7159", "18P7159@eng.asu.edu.eg");
// const u6  = member("Michelle George", "18P2223", "18P2223@eng.asu.edu.eg");
// const u7  = member("Mohamed Hazem", "18P1234", "18P1234@eng.asu.edu.eg");
// const u8  = member("Amr Balegh", "18P1554", "18P1554@eng.asu.edu.eg");
// const u9  = member("Hesham El Labban", "18P1582", "18P1582@eng.asu.edu.eg");
// const u10 = member("Sherif Mourad", "18P9928", "18P9928@eng.asu.edu.eg");