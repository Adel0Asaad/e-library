let eVal, pVal;
class logClass {
    static logged = -1;
}


if (sessionStorage.getItem("loggedKey") != null){
    console.log("setting to true")
    logClass.logged = JSON.parse(sessionStorage.getItem("loggedKey"));
    if (logClass.logged == true){
        console.log("???")
        window.open("profile.html", '_self')
    }
    else{
        logClass.logged = -1;
    }
}
else{
    logClass.logged = -1;
    sessionStorage.setItem("loggedKey", -1);
    console.log("setting to false")
}

let tempItemString = sessionStorage.getItem("arrObjKey");
let arr = JSON.parse(tempItemString);
console.log(arr)
if(arr == null){
    window.open("members.html", '_self')
}
//console.log(arr);

document.getElementById("loginForm").onsubmit = function (e){
    e.preventDefault();
    eVal = document.getElementById("email").value;
    pVal = document.getElementById("pass").value;
    console.log(logClass.logged)
    if(eVal == "admin" && pVal == "admin"){
        logClass.logged = 500;
        sessionStorage.setItem("loggedKey", 500);
        window.open("management.html", '_self');
        return false;
    }
    for (let i = 0; i < arr.length; i++){
        if (eVal == arr[i].email){
            if (pVal == arr[i].pass){
                logClass.logged = i;
                sessionStorage.setItem("loggedKey", i);
                window.open("index.html", '_self');
            }
            else{
                window.alert("Invalid Email or Password");
            }
        }
    }

    document.getElementById("pass").value = "";
    return false;
}    

document.getElementById("reg").addEventListener("click", function(){
    window.open("register.html", '_self');
});
