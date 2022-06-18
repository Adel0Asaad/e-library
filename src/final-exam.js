console.log(document.querySelectorAll("li[id]"))

function sbmtBtnPressed(e){
    e.preventDefault();
    let nVal, inField;
    inField = document.querySelector("input[type=number]")
    nVal = inField.value;
    if(nVal < 2 || nVal > 9){
        alert("Please enter a valid number between (and including) 2 and 9")
        inField.value = ""
    }else{
        let tTable = document.createElement("table")
    }
}

const sbmtBtn = document.getElementById("sbmtBtn")
sbmtBtn.addEventListener("click", function(e                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ){
    sbmtBtnPressed(e);
}, false)