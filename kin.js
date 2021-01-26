function add_user(){
    player1=document.getElementById("player1username").value;
    player2=document.getElementById("player2username").value;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location="kj.html";
    }