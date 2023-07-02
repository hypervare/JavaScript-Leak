let lB = document.getElementById("loginBtn")
lB.addEventListener("click", function(){
    let un = document.getElementById("uname")
if(un.value == "admin"){
    const p = document.getElementById("pwsd")
    const r = window.btoa(p.value)
    if(r == 'SFZjdGZ7SjR2NCRjciFwVF9hdVRoX2I0czMtNjR9'){
        alert("Access Granted\nSubmit your taken flag.")
        window.location = "https://hypervare.github.io/JavaScript-Leak/"
    }else{
        alert("Access Denied")
    }
}else{
    alert("Access Denied")
}
})