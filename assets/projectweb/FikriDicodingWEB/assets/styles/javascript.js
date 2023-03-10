function Login(){ 
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user=="admin" && pass=="123"){
        alert("Selamat anda berhasil login");
    }else{
        alert("Username dan password anda salah!");
    }
}