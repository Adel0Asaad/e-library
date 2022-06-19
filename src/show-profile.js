
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
    newP.innerHTML = "Name: &nbsp&nbsp" + memArr[profileID].name + "<br><br>E-mail: " + memArr[profileID].email + "<br><br>ID: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + memArr[profileID].pass
    div2.appendChild(newP)
}
