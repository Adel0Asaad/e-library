let nVal, pVal, eVal;
let tempItemString = sessionStorage.getItem("arrObjKey");
let arr = JSON.parse(tempItemString);
if(arr == null){
    sessionStorage.setItem("preEmptionKey", 2)
    window.open("members.html", '_self')
}
// console.log(arr);
let rFlag = 0;
document.getElementById("regForm").onsubmit = function (){
    tempItemString = sessionStorage.getItem("arrObjKey");
    
    arr = JSON.parse(tempItemString);
    console.log(arr)
    nVal = document.getElementById("name").value
    pVal = document.getElementById("pass").value;
    eVal = document.getElementById("email").value;

    for (let i = 0; i < arr.length; i++){
        if (eVal == arr[i].email){
            alert("This user is already registered");
            rFlag = 1;
            break;
        }
            
    }
    if(rFlag == 0){
        var oldMem = {
            name:  nVal,
            pass:  pVal,
            email: eVal,
        };

        arr.push(oldMem);
        console.log(arr);
        let jsonArrObj = (JSON.stringify(arr))
        sessionStorage.setItem("arrObjKey", jsonArrObj);
        sessionStorage.setItem("loggedKey", arr.length-1)
        window.open("index.html", '_self');
    }
    rFlag = 0;

    return false;
}
console.log(arr)


