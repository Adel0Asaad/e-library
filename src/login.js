let eVal, pVal;
class logClass {
    static logged = -1;
}

logClass.logged = JSON.parse(sessionStorage.getItem("loggedKey"));
console.log(logClass.logged)
if (logClass.logged != null){
    console.log("Already been in login")
    
    if (logClass.logged != -1){
        let logOutConfirm = window.confirm("Do you want to logout?")
        if(logOutConfirm){
            sessionStorage.setItem("loggedKey", -1)
            logClass.logged = -1;
            window.open("profile.html", '_self')
        }else{
            window.open("profile.html", '_self')
        }
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
    sessionStorage.setItem("preEmptionKey", 3)
    window.open("members.html", '_self')
}else{
            if(arr.length == 0){
                console.log("hello")
                window.alert("There are currently no registered members, please register!")
                window.open("register.html", '_self')
            }
        
}
//console.log(arr);

document.getElementById("loginForm").onsubmit = function (e){
    console.log(arr.length)
    
    e.preventDefault();
    eVal = document.getElementById("email").value;
    pVal = document.getElementById("pass").value;
    console.log(logClass.logged)
    if(eVal == "admin" && pVal == "admin"){
        logClass.logged = 500;
        sessionStorage.setItem("loggedKey", 500);
        window.open("index.html", '_self');
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
