
let profileID = JSON.parse(sessionStorage.getItem("loggedKey"));
let memArr = JSON.parse(sessionStorage.getItem("arrObjKey"));

const div2 = document.getElementById("div2");
console.log(profileID)
if(profileID == -1 || profileID == null){
    window.open("index.html", '_self')
    alert("You're not logged in")
}else if(profileID == 500){
    let newP = document.createElement("p")
    console.log(memArr)
    newP.innerHTML = "You're logged in as an admin.<br>You currently have full administrative control over members and books registered in the system."
    div2.appendChild(newP)
}else{
    let newP = document.createElement("p")
    console.log(memArr)
    newP.innerHTML = "Name: " + memArr[profileID].name + "<br>e-mail: " + memArr[profileID].email + "<br>ID: " + memArr[profileID].pass
    div2.appendChild(newP)
}
