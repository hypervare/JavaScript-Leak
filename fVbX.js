let fS = document.getElementById("flagSubmit")
fS.addEventListener("click", function(){
    let f = document.getElementById("flag")
    if(f.value=="HVctf{J4v4$cr!pT_auTh_b4s3-64}"){
        alert("Hacked!\n Access Granted to next level.")
        let chg = document.getElementById("chgBtn")
        chg.setAttribute("href", "#2")
        chg.innerHTML = "Access Granted!"
    }else{
        alert("Wrong Flag")
    }
})
