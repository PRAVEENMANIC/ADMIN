function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username == "praveen@gmail.com" && password == "praveen")
    {
        window.location.href = 'primaryreg.html';
    }
    else 
    {
        alert("login failed");
    }
}  