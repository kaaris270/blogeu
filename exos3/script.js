let attempt = 3; 
let fals = 'false';
function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if ( username == "zak" && password == "mdp123"){
        window.location = "profil.html"; 
    }

    else{
        attempt --;
        alert("You have left "+attempt+" attempt;");
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        fals = 'true';
        }
    }
}